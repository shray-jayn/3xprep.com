import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { Header } from "@/components/layout/Header"
import { LeadDialog } from "@/components/LeadDialog"
import { SITE_CONFIG } from "@/data/site"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { ValueProposition } from "@/components/sections/ValueProposition"
import { Explainer } from "@/components/sections/Explainer"
import { LiveClasses } from "@/components/sections/LiveClasses"
import { Analytics } from "@/components/sections/Analytics"
import { SocialProof } from "@/components/sections/SocialProof"
import { ComparisonTable } from "@/components/sections/ComparisonTable"
import { PricingPreview } from "@/components/sections/PricingPreview"
import { FooterCTA } from "@/components/sections/FooterCTA"

const Index = () => {
  const [leadDialogOpen, setLeadDialogOpen] = useState(false);
  const [leadDialogMode, setLeadDialogMode] = useState<"consultation" | "diagnostic">("consultation");

  return (
    <>
      <Helmet>
        <title>{SITE_CONFIG.name} — {SITE_CONFIG.tagline}</title>
        <meta name="description" content={SITE_CONFIG.description} />
        <link rel="canonical" href={SITE_CONFIG.url} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Explainer />
        <LiveClasses />
        <Analytics />
        <SocialProof />
        <ComparisonTable />
        <PricingPreview />
        <FooterCTA />
      </main>
      <Footer />
      </div>
      
      <LeadDialog
        open={leadDialogOpen}
        onOpenChange={setLeadDialogOpen}
        mode={leadDialogMode}
      />
    </>
  );
};

export default Index;
