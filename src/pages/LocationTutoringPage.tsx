import { useParams } from "react-router-dom";
import { useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { LeadDialog } from "@/components/LeadDialog";
import { LocationHero } from "@/components/sections/LocationHero";
import { TutoringPackages } from "@/components/TutoringPackages";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LOCATIONS } from "@/data/site";
import { createLocationSEO } from "@/lib/seo";

// New modular sections
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TutorsGridSection } from "@/components/sections/TutorsGridSection";
import { LocationFAQSection } from "@/components/sections/LocationFAQSection";

export default function LocationTutoringPage() {
  const { city } = useParams<{ city: string }>();
  const [leadDialogOpen, setLeadDialogOpen] = useState(false);

  const location = LOCATIONS.find((loc) => loc.slug === city);
  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">
            Location Not Found
          </h1>
          <p className="text-neutral-600">
            The requested location is not available.
          </p>
        </div>
      </div>
    );
  }

  const cityName = location.city;
  const seo = createLocationSEO(cityName);

  return (
    <PageShell
      title={seo.title}
      description={seo.description}
      canonical={`https://3xprep.com/${location.slug}`}
    >
      <LocationHero
        cityName={cityName}
        onBookingClick={() => setLeadDialogOpen(true)}
      />

      {/* Packages (kept data-driven via component) */}
      <TutoringPackages
        city={cityName}
        onBookingClick={() => setLeadDialogOpen(true)}
      />

      {/* Process */}
      <ProcessSection />

      {/* Differentiators */}
      <WhyChooseSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Tutors */}
      <TutorsGridSection />

      {/* FAQs */}
      <LocationFAQSection />

      {/* Final CTA */}
      <FinalCTA
        cityName={cityName}
        onButtonClick={() => setLeadDialogOpen(true)}
      />

      {/* Lead Dialog */}
      <LeadDialog
        open={leadDialogOpen}
        onOpenChange={setLeadDialogOpen}
        mode="consultation"
        defaultCity={cityName}
      />
    </PageShell>
  );
}
