import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { LOCATIONS } from "@/data/site";
import { useConsoleTrace } from "@/hooks/useConsoleTrace";
import { useState } from "react";
import { LeadDialog } from "../LeadDialog";

interface FinalCTAProps {
  cityName?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick: () => void;
}

export const FinalCTA = ({
  cityName,
  title,
  description,
  buttonText = "Get Started Today - It's Free!",
  onButtonClick,
}: FinalCTAProps) => {
  useConsoleTrace("FinalCTA", { cityName, title });

  const [isOpen, setIsOpen] = useState(false);
  const [leadDialogOpen, setLeadDialogOpen] = useState(false);
  const [leadDialogMode, setLeadDialogMode] = useState<
    "consultation" | "diagnostic"
  >("consultation");

  // Get default city from current location page
  const currentCity = (() => {
    if (location.pathname.includes("/mcat-lsat-sat-prep-tutoring-")) {
      const citySlug = location.pathname.split(
        "/mcat-lsat-sat-prep-tutoring-"
      )[1];
      const locationData = LOCATIONS.find((loc) => loc.slug.includes(citySlug));
      return locationData?.city;
    }
    return undefined;
  })();

  const openLeadDialog = (mode: "consultation" | "diagnostic") => {
    setLeadDialogMode(mode);
    setLeadDialogOpen(true);
    setIsOpen(false);
  };

  const defaultTitle = cityName
    ? `Ready to Start Your Success Story in ${cityName}?`
    : "Ready to Start Your Success Story?";

  const defaultDescription = cityName
    ? `Join hundreds of students in ${cityName} who have achieved their dream scores with 3X Prep.`
    : "Join thousands of students who have achieved their dream scores with 3X Prep.";

  return (
    <Section className="relative bg-gradient-to-br from-navy-deep via-primary to-navy-medium overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-secondary/30 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/30 to-transparent rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>

      <div className="relative z-10 text-center space-y-8">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary/20 to-accent/20 backdrop-blur-sm border border-white/20 rounded-3xl mb-6">
          <span className="text-3xl">🚀</span>
        </div>

        <h2 className="text-display text-fluid-display font-bold text-black mb-6 leading-tight">
          {title || defaultTitle}
        </h2>

        <p className="text-xl text-black/70 font-body max-w-3xl mx-auto mb-8 leading-relaxed">
          {description || defaultDescription}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => openLeadDialog("consultation")}
            size="lg"
            className="group bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-primary font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <span className="mr-2">✨</span>
            {buttonText}
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-2 border-black/30 text-black hover:bg-black/10 hover:border-white/50 font-semibold px-8 py-4 text-lg"
          >
            <span className="mr-2">💬</span>
            Chat with Expert
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-black/80 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <span>Free consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>No commitment required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <span>Instant scheduling</span>
          </div>
        </div>
      </div>

      <LeadDialog
        open={leadDialogOpen}
        onOpenChange={setLeadDialogOpen}
        mode={leadDialogMode}
        defaultCity={currentCity}
      />
    </Section>
  );
};
