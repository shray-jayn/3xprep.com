import { useParams } from "react-router-dom";
import { TestCardsGrid } from "@/components/TestCardsGrid";
import { TutoringPackages } from "@/components/TutoringPackages";
import { LeadDialog } from "@/components/LeadDialog";
import { PageShell } from "@/components/layout/PageShell";
import { LocationHero } from "@/components/sections/LocationHero";
import { SocialProofStats } from "@/components/sections/SocialProofStats";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LOCATIONS } from "@/data/site";
import { createLocationSEO } from "@/lib/seo";
import { useState } from "react";

export default function LocationLandingPage() {
  const { "*": wildcard } = useParams<{ "*": string }>();
  const [leadDialogOpen, setLeadDialogOpen] = useState(false);
  
  // Extract the full path and find matching location
  const fullPath = `/mcat-lsat-sat-prep-tutoring-${wildcard}`;
  const location = LOCATIONS.find(loc => 
    fullPath === `/${loc.slug}`
  );
  
  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Location Not Found</h1>
          <p className="text-neutral-600">The requested location is not available.</p>
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

      <TestCardsGrid location={cityName} />

      <TutoringPackages 
        onBookingClick={() => setLeadDialogOpen(true)} 
        city={cityName} 
      />

      <SocialProofStats cityName={cityName} />

      <FinalCTA 
        cityName={cityName}
        onButtonClick={() => setLeadDialogOpen(true)}
      />

      <LeadDialog 
        open={leadDialogOpen}
        onOpenChange={setLeadDialogOpen}
        mode="consultation"
        defaultCity={cityName}
      />
    </PageShell>
  );
}