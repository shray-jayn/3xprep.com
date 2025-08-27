import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button-enhanced";
import { ArrowRight, Sparkles } from "lucide-react";
import { LeadDialog } from "../LeadDialog";
import { useState } from "react";
import { LOCATIONS } from "@/data/site";

export const FooterCTA = () => {

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
    <section className="py-20 lg:py-32 bg-gradient-to-br from-navy-deep via-primary/95 to-accent/20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary/20 to-transparent rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-accent/20 to-transparent rounded-full transform translate-x-1/2 translate-y-1/2"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/20 to-primary/40"></div>
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-10">
          {/* Enhanced Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary/30 to-accent/30 backdrop-blur-sm border border-white/20 rounded-3xl mb-8">
            <Sparkles className="h-10 w-10 text-white" />
          </div>

          {/* Enhanced Headline */}
          <div className="space-y-6">
            <h2 className="text-display text-fluid-display font-bold text-black leading-tight">
              Ready to{" "}
              <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                3X Your Future
              </span>
              ?
            </h2>
            <p className="text-xl text-black/70 font-body max-w-4xl mx-auto leading-relaxed">
              Join the elite program trusted by students across SAT, LSAT, and
              MCAT. Transform your scores, unlock premium opportunities, and
              build the extraordinary future you deserve.
            </p>
          </div>

          {/* Enhanced CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              onClick={() => openLeadDialog("consultation")}
              size="xl"
              className="group bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-primary font-semibold px-10 py-5 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              asChild
            >
              <Link to="/get-started">
                🚀 Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>

            <Button
              onClick={() => openLeadDialog("consultation")}
              variant="outline"
              size="xl"
              className="bg-white/10 backdrop-blur-sm border-2 border-black/30 text-black hover:bg-black/10 hover:border-white/50 font-semibold px-10 py-5 text-lg"
              asChild
            >
              <Link to="/free-trial">
                <span className="mr-2">⭐</span>
                Try Free for 7 Days
              </Link>
            </Button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            {[
              { icon: "🛡️", text: "30-day money-back guarantee" },
              { icon: "💎", text: "No hidden fees or commitments" },
              { icon: "🔄", text: "Cancel anytime, keep materials" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 p-4  bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-black/70 text-sm font-body">
                  {item.text}
                </span>
              </div>
            ))}
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
