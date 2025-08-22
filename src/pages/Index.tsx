import { Header } from "@/components/layout/Header"
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
  return (
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
  );
};

export default Index;
