import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button-enhanced";
import { ArrowRight, Star, Users, BookOpen } from "lucide-react";
import heroStudents from "@/assets/hero-students.jpg";
import { LeadDialog } from "../LeadDialog";
import { LOCATIONS } from "@/data/site";
import { useState } from "react";

export const Hero = () => {
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

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-navy-deep via-primary to-navy-deep overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--secondary)/0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.1),transparent_50%)] pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-display text-fluid-display font-bold text-black leading-tight">
                3X the Prep.{" "}
                <span className="highlight-gold">3X Your Future.</span>
              </h1>
              <p className="text-fluid-title text-black/90 font-body leading-relaxed max-w-2xl">
                World-class tutoring for SAT, LSAT, and MCAT designed for
                ambitious students who want top scores and elite futures.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                <Link
                  to="/get-started"
                  onClick={(e) => {
                    e.preventDefault(); // stop immediate navigation
                    openLeadDialog("consultation");
                  }}
                  className="flex items-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button variant="outline" size="xl" asChild>
                <Link to="/tutoring-locations">Explore Courses</Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-black/80">
                  4.9/5 from 2,500+ students
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-black/80">
                <Users className="h-4 w-4" />
                <span>Trusted by 50,000+ students</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative lg:order-first order-last">
            <div className="relative">
              {/* Hero Image */}
              <div className="aspect-[4/3] rounded-2xl shadow-elegant overflow-hidden">
                <img
                  src={heroStudents}
                  alt="Diverse group of confident students studying for SAT, LSAT, and MCAT with 3X Prep"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Overlay with exam badges */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent flex items-end justify-center p-6">
                  <div className="grid grid-cols-3 gap-4 max-w-xs">
                    {["SAT", "LSAT", "MCAT"].map((exam, i) => (
                      <div
                        key={exam}
                        className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-card hover-lift"
                      >
                        <BookOpen className="h-5 w-5 mx-auto mb-1 text-primary" />
                        <div className="text-xs font-semibold text-primary">
                          {exam}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-card p-4 hover-lift">
                <div className="text-2xl font-bold text-accent">175+</div>
                <div className="text-sm text-neutral-600">Avg LSAT Score</div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-card p-4 hover-lift">
                <div className="text-2xl font-bold text-secondary">520+</div>
                <div className="text-sm text-neutral-600">Avg MCAT Score</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LeadDialog
        open={leadDialogOpen}
        onOpenChange={setLeadDialogOpen}
        mode={leadDialogMode}
        defaultCity={currentCity}
      />
    </section>
  );
};
