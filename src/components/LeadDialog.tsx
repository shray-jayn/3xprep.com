import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button-enhanced";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { LOCATIONS, TESTS, SITE_CONFIG } from "@/data/site";
import { Phone, CheckCircle, AlertCircle } from "lucide-react";

// ───────────────────────────────────────────────────────────────────────────────
// Schema & Types
// ───────────────────────────────────────────────────────────────────────────────
const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  city: z.string().min(1, "City is required"),
  test: z.enum(TESTS),
  preferredTime: z.string().optional(),
  notes: z.string().optional(),
  // default("") => optional on input, present on output
  company: z.string().default(""),
});

type LeadFormData = z.input<typeof leadSchema>; // RHF input type
type LeadParsed = z.output<typeof leadSchema>; // parsed/output type

interface LeadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "consultation" | "diagnostic";
  defaultCity?: string;
}

// Build API base from env; fallback to same-origin
const API_BASE =
  (import.meta.env.VITE_API_BASE as string | undefined)?.replace(/\/+$/, "") ||
  "";

// ───────────────────────────────────────────────────────────────────────────────
// Utils
// ───────────────────────────────────────────────────────────────────────────────
function normalizePhone(input: string) {
  // very light E.164-ish cleanup (keeps + and digits)
  const cleaned = input.replace(/[^\d+]/g, "");
  return cleaned.startsWith("+") ? cleaned : cleaned.replace(/^0+/, "");
}

export function LeadDialog({
  open,
  onOpenChange,
  mode,
  defaultCity,
}: LeadDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      city: defaultCity || "",
      test: "SAT",
      company: "", // honeypot must be empty
    },
  });

  const city = watch("city");
  const test = watch("test");

  const onSubmit: SubmitHandler<LeadFormData> = async (raw) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      // fill defaults & enforce types
      const data: LeadParsed = leadSchema.parse(raw);

      const payload = {
        ...data,
        phone: normalizePhone(data.phone),
        mode, // "consultation" | "diagnostic"
      };

      const endpoint = `${API_BASE}/api/leads`; // API_BASE may be "", which means same-origin
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await response.json().catch(() => ({}));
      if (!response.ok || json?.ok === false) {
        throw new Error(
          json?.error
            ? JSON.stringify(json.error)
            : `Submission failed (HTTP ${response.status})`
        );
      }

      setSubmitStatus("success");
    } catch (error) {
      console.error("[LeadDialog] submit error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    // small delay to allow closing animation before resetting
    setTimeout(() => {
      setSubmitStatus("idle");
      reset({ city: defaultCity || "", test: "SAT", company: "" });
    }, 300);
  };

  const isConsultation = mode === "consultation";
  const title = isConsultation
    ? "Book Your Consultation"
    : "Get Your Free Diagnostic Test";
  const description = isConsultation
    ? "Connect with our top tutors for a personalized assessment and study plan."
    : "Take our free diagnostic test to identify your strengths and areas for improvement.";

  // ───────────────────────────────────────────────────────────────────────────
  // Success state
  // ───────────────────────────────────────────────────────────────────────────
  if (submitStatus === "success") {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-lg">
          <div className="flex flex-col items-center text-center space-y-6 py-8">
            <CheckCircle className="h-16 w-16 text-accent" />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">
                {isConsultation
                  ? "Consultation Booked!"
                  : "Diagnostic Access Granted!"}
              </h3>
              <p className="text-muted-foreground">
                {isConsultation
                  ? "We'll contact you within 24 hours to schedule your session."
                  : "You now have access to our diagnostic tests. Check your email for details."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <Button variant="primary" size="lg" className="flex-1" asChild>
                <a href={`tel:${SITE_CONFIG.supportPhone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>

              {!isConsultation && (
                <Button
                  variant="accent"
                  size="lg"
                  className="flex-1"
                  onClick={() => {
                    window.open(
                      "https://app.3xprep.com/diagnostic",
                      "_blank",
                      "noopener,noreferrer"
                    );
                    handleClose();
                  }}
                >
                  Take Diagnostic
                </Button>
              )}
            </div>

            <Button variant="ghost" onClick={handleClose}>
              Return to Site
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Form
  // ───────────────────────────────────────────────────────────────────────────
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-playfair">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
          {/* honeypot (hidden) */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            {...register("company")}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                {...register("name")}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                {...register("phone")}
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && (
                <p className="text-sm text-destructive">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Select
                onValueChange={(value) =>
                  setValue("city", value, {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
                defaultValue={defaultCity || city || ""}
              >
                <SelectTrigger
                  className={errors.city ? "border-destructive" : ""}
                >
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  {LOCATIONS.map((location) => (
                    <SelectItem key={location.id} value={location.city}>
                      {location.city}
                    </SelectItem>
                  ))}
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.city && (
                <p className="text-sm text-destructive">
                  {errors.city.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="test">Test *</Label>
              <Select
                onValueChange={(value) =>
                  setValue("test", value as (typeof TESTS)[number], {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
                defaultValue={test || "SAT"}
              >
                <SelectTrigger
                  className={errors.test ? "border-destructive" : ""}
                >
                  <SelectValue placeholder="Select test" />
                </SelectTrigger>
                <SelectContent>
                  {TESTS.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {isConsultation && (
              <div className="space-y-2">
                <Label htmlFor="preferredTime">Preferred Time</Label>
                <Input
                  id="preferredTime"
                  placeholder="e.g., Weekday evenings"
                  {...register("preferredTime")}
                />
              </div>
            )}
          </div>

          {isConsultation && (
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                placeholder="Tell us about your goals, timeline, or any questions..."
                rows={3}
                {...register("notes")}
              />
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center space-x-2 text-destructive">
              <AlertCircle className="h-4 w-4" />
              <p className="text-sm">
                Submission failed. Please try again or call us directly.
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Submitting..."
                : isConsultation
                ? "Book Consultation"
                : "Get Diagnostic"}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to our privacy policy and consent to be
            contacted.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
