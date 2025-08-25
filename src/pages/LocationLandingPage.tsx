import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { TestCardsGrid } from "@/components/TestCardsGrid";
import { TutoringPackages } from "@/components/TutoringPackages";
import { LeadDialog } from "@/components/LeadDialog";
import { PageShell } from "@/components/layout/PageShell";
import { SocialProofStats } from "@/components/sections/SocialProofStats";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LOCATIONS } from "@/data/site";
import { createLocationSEO } from "@/lib/seo";
import { TutoringHero } from "@/components/sections/TutoringHero";

type LocationLandingPageProps = {
  cityName?: string; // optional prop from parent
};

export default function LocationLandingPage(props: LocationLandingPageProps) {
  const [leadDialogOpen, setLeadDialogOpen] = useState(false);

  // 1) prefer prop from parent
  // 2) then <Link state={{ cityName }} />
  // 3) then ?city= query param
  // 4) finally derive from known slug in LOCATIONS
  const routerLoc = useLocation() as { state?: { cityName?: string } };
  const [searchParams] = useSearchParams();

  // const pathname = routerLoc.pathname; // e.g. "/mcat-lsat-sat-prep-tutoring-delhi"
  // const slug = pathname.startsWith("/") ? pathname.slice(1) : pathname;

  // const slugMatch = LOCATIONS.find((l) => l.slug === slug);
  const resolvedCityName =
    props.cityName ??
    routerLoc.state?.cityName ??
    searchParams.get("city") ??
    // slugMatch?.city ??
    null;

  if (!resolvedCityName) {
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

  const seo = createLocationSEO(resolvedCityName);

  if (import.meta.env.DEV) {
    console.groupCollapsed("[LocationLandingPage] resolved city");
    console.log("prop cityName:", props.cityName);
    console.log("state cityName:", routerLoc.state?.cityName);
    console.log("query city:", searchParams.get("city"));
    // console.log("slug match:", slugMatch);
    console.log("final:", resolvedCityName);
    console.groupEnd();
  }

  return (
    <PageShell
      title={seo.title}
      description={seo.description}
      // canonical from the current URL so you don't need location.slug here
      canonical={`https://3xprep.com/`}
    >
      {/* Hero */}
      <TutoringHero />

      <TestCardsGrid cityName={resolvedCityName} />

      <TutoringPackages
        onBookingClick={() => setLeadDialogOpen(true)}
        city={resolvedCityName}
      />

      <SocialProofStats cityName={resolvedCityName} />

      <FinalCTA
        cityName={resolvedCityName}
        onButtonClick={() => setLeadDialogOpen(true)}
      />

      <LeadDialog
        open={leadDialogOpen}
        onOpenChange={setLeadDialogOpen}
        mode="consultation"
        defaultCity={resolvedCityName}
      />
    </PageShell>
  );
}
