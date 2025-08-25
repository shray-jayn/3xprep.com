import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageShell } from "@/components/layout/PageShell";
import { LocationsHero } from "@/components/sections/LocationsHero";
import { LocationsGrid } from "@/components/sections/LocationsGrid";
import { TutoringPackagesGrid } from "@/components/sections/TutoringPackagesGrid";
import { LeadDialog } from "@/components/LeadDialog";
import { LOCATIONS, SITE_CONFIG } from "@/data/site";
import { createPageSEO } from "@/lib/seo";

const packages = [
  {
    title: "5 Hours",
    features: ["Free 30-min Assessment"],
    price: "$999",
    payments: null,
    popular: false,
  },
  {
    title: "10 Hours", 
    features: ["Free 30-min Assessment"],
    price: "$1,899",
    payments: "or 3 payments of $633",
    popular: true,
  },
  {
    title: "20 Hours",
    features: ["Free 30-min Assessment"],
    price: "$3,699",
    payments: "or 6 payments of $617",
    popular: false,
  },
  {
    title: "Custom Plan",
    features: ["30+ hours · $184/hr"],
    price: "$5,499",
    payments: "or 8 payments of $688",
    popular: false,
  },
];

export default function LocationsIndex() {
  const [leadDialogOpen, setLeadDialogOpen] = useState(false);
  const [leadDialogMode, setLeadDialogMode] = useState<"consultation" | "diagnostic">("consultation");
  const location = useLocation();

  // Get default city from current location page
  const currentCity = (() => {
    if (location.pathname.includes("/mcat-lsat-sat-prep-tutoring-")) {
      const citySlug = location.pathname.split("/mcat-lsat-sat-prep-tutoring-")[1];
      const locationData = LOCATIONS.find((loc) => loc.slug.includes(citySlug));
      return locationData?.city;
    }
    return undefined;
  })();

  const openLeadDialog = (mode: "consultation" | "diagnostic") => {
    setLeadDialogMode(mode);
    setLeadDialogOpen(true);
  };

  const seo = createPageSEO({
    title: "Tutoring Locations — 3X Prep",
    description: "Find 3X Prep tutoring locations across Southern California. Elite SAT, LSAT, and MCAT tutoring in San Diego, Riverside, Orange County, and Los Angeles.",
    canonical: `${SITE_CONFIG.url}/tutoring-locations`
  });

  return (
    <PageShell 
      title={seo.title}
      description={seo.description}
      canonical={seo.canonical}
      className="bg-pattern-dots"
    >
      <LocationsHero onBookConsultation={() => openLeadDialog("consultation")} />
      
      <LocationsGrid />
      
      <TutoringPackagesGrid 
        packages={packages} 
        onPurchase={(packageTitle) => openLeadDialog("consultation")}
      />

      <LeadDialog
        open={leadDialogOpen}
        onOpenChange={setLeadDialogOpen}
        mode={leadDialogMode}
        defaultCity={currentCity}
      />
    </PageShell>
  );
}