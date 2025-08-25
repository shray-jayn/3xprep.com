import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { HERO_COPY } from "@/data/copy";
import { useConsoleTrace } from "@/hooks/useConsoleTrace";
import heroStudents from "@/assets/hero-students.jpg";

interface LocationHeroProps {
  cityName: string;
  onBookingClick: () => void;
}

export const LocationHero = ({ cityName, onBookingClick }: LocationHeroProps) => {
  useConsoleTrace("LocationHero", { cityName });
  
  const copy = HERO_COPY.location(cityName);

  return (
    <Section variant="gradient" className="py-24 lg:py-32 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-display text-fluid-display font-bold text-primary leading-tight">
            {copy.headline}
          </h1>
          
          <p className="text-xl text-neutral-600 font-body leading-relaxed">
            {copy.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="default" 
              size="lg"
              onClick={onBookingClick}
              className="font-semibold px-8 py-3 text-lg"
            >
              {copy.cta}
            </Button>
          </div>

          <div className="flex items-center gap-8 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Free 30-min assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Elite 99th percentile tutors</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Personalized study plans</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-6"></div>
          <img 
            src={heroStudents}
            alt={`Students studying for SAT, LSAT, and MCAT in ${cityName}`}
            className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
            loading="eager"
          />
        </div>
      </div>
    </Section>
  );
};