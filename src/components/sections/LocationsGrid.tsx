import { Section } from "@/components/ui/section";
import { LocationCard } from "./LocationCard";
import { LOCATIONS } from "@/data/site";
import { useConsoleTrace } from "@/hooks/useConsoleTrace";

export const LocationsGrid = () => {
  useConsoleTrace("LocationsGrid", { locationCount: LOCATIONS.length });

  return (
    <Section className="bg-pattern-grid">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-playfair font-bold text-navy-deep mb-4">
          Our Locations
        </h2>
        <p className="text-muted-foreground text-lg">
          Select your city to learn more about local tutoring options
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-lg mx-auto">
        {LOCATIONS.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </Section>
  );
};