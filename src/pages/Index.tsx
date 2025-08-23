import { Helmet } from "react-helmet-async";
import { Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Explainer } from "@/components/sections/Explainer";
import { LiveClasses } from "@/components/sections/LiveClasses";
import { Analytics } from "@/components/sections/Analytics";
import { SocialProof } from "@/components/sections/SocialProof";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/data/site";
import { HeroSkeleton, CardGridSkeleton } from "@/components/skeletons";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{SITE_CONFIG.name} — {SITE_CONFIG.tagline}</title>
        <meta name="description" content={SITE_CONFIG.description} />
        <meta name="keywords" content="SAT tutoring, LSAT prep, MCAT preparation, test prep, tutoring, elite education" />
        <link rel="canonical" href={SITE_CONFIG.url} />
      </Helmet>

      <div className="min-h-screen bg-background bg-pattern-dots">
        <Suspense fallback={<HeroSkeleton />}>
          <Hero />
        </Suspense>
        
        <Suspense fallback={<CardGridSkeleton cards={3} />}>
          <ValueProposition />
        </Suspense>
        
        <div className="bg-premium-radial">
          <Suspense fallback={<CardGridSkeleton cards={1} />}>
            <Explainer />
          </Suspense>
        </div>
        
        <Suspense fallback={<CardGridSkeleton cards={2} />}>
          <LiveClasses />
        </Suspense>
        
        <div className="bg-premium-subtle">
          <Suspense fallback={<CardGridSkeleton cards={1} />}>
            <Analytics />
          </Suspense>
        </div>
        
        <Suspense fallback={<CardGridSkeleton cards={1} />}>
          <SocialProof />
        </Suspense>
        
        <Suspense fallback={<CardGridSkeleton cards={1} />}>
          <ComparisonTable />
        </Suspense>
        
        <Suspense fallback={<CardGridSkeleton cards={3} />}>
          <PricingPreview />
        </Suspense>
        
        <Suspense fallback={<CardGridSkeleton cards={1} />}>
          <FooterCTA />
        </Suspense>
        
   
      </div>
    </>
  );
};

export default Index;
