import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { useConsoleTrace } from "@/hooks/useConsoleTrace";

interface LocationsHeroProps {
  onBookConsultation: () => void;
}

export const LocationsHero = ({ onBookConsultation }: LocationsHeroProps) => {
  useConsoleTrace("LocationsHero");

  return (
    <Section variant="gradient" className="py-24 bg-pattern-grid ">
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-[clamp(32px,4vw,48px)] font-playfair font-bold text-navy-deep leading-tight">
          Find Your Local <span className="highlight-gold">3X Prep</span>{" "}
          Location
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Elite tutoring for SAT, LSAT, and MCAT across Southern California.
          Choose your city to get started with our 99th percentile tutors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" size="lg" onClick={onBookConsultation}>
            Book Free Consultation
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={`tel:${SITE_CONFIG.supportPhone}`}>
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
};