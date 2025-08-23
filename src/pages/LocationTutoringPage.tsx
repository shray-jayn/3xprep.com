import { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Suspense } from "react";
import { Button } from "@/components/ui/button-enhanced";
import { TestSelector } from "@/components/TestSelector";
import { Packages } from "@/components/Packages";
import { LeadDialog } from "@/components/LeadDialog";
import { LOCATIONS, SITE_CONFIG, type TestType } from "@/data/site";
import { Phone, CheckCircle, Star, Users, Clock, Award, Target } from "lucide-react";
import { HeroSkeleton, PackagesSkeleton, TestimonialsSkeleton } from "@/components/skeletons";

export default function LocationTutoringPage() {
  const { city } = useParams<{ city: string }>();
  const [selectedTest, setSelectedTest] = useState<TestType>("SAT");
  const [leadDialogOpen, setLeadDialogOpen] = useState(false);
  const [leadDialogMode, setLeadDialogMode] = useState<"consultation" | "diagnostic">("consultation");

  const location = LOCATIONS.find(loc => loc.slug === city);

  if (!location) {
    return <div>Location not found</div>;
  }

  const handleBookingClick = () => {
    setLeadDialogMode("consultation");
    setLeadDialogOpen(true);
  };

  const handleDiagnosticClick = () => {
    setLeadDialogMode("diagnostic");
    setLeadDialogOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>{location.seo.title}</title>
        <meta name="description" content={location.seo.description} />
        <meta name="keywords" content={`3X Prep, ${location.city}, SAT tutoring, LSAT tutoring, MCAT tutoring, test prep`} />
        <link rel="canonical" href={`${SITE_CONFIG.url}/${location.slug}`} />
        <meta property="og:title" content={location.seo.title} />
        <meta property="og:description" content={location.seo.description} />
        <meta property="og:url" content={`${SITE_CONFIG.url}/${location.slug}`} />
      </Helmet>

      <div className="min-h-screen bg-background bg-pattern-grid">
        {/* Hero Section */}
        <Suspense fallback={<HeroSkeleton />}>
          <section className="py-24 bg-gradient-to-br from-background to-muted/20 bg-premium-radial">
            <div className="container max-w-screen-xl">
              <div className="text-center space-y-6 max-w-4xl mx-auto">
                <h1 className="text-[clamp(32px,4vw,48px)] font-playfair font-bold text-navy-deep leading-tight">
                  <span className="highlight-gold">3X Prep</span> of {location.city}
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  The nation's top tutors for LSAT, MCAT, and SAT in {location.city}. 
                  Personalized study plans designed to triple your prep—and your results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="xl" onClick={handleBookingClick}>
                    👉 Book a Free Consultation Today
                  </Button>
                  <Button variant="accent" size="xl" asChild>
                    <a href={`tel:${location.phone}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      Call {location.city}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </Suspense>

        {/* Packages Section */}
        <Suspense fallback={<PackagesSkeleton />}>
          <TestSelector value={selectedTest} onValueChange={setSelectedTest} />
          <Packages test={selectedTest} city={location.city} onBookingClick={handleBookingClick} />
        </Suspense>

        {/* Final CTA */}
        <section className="py-20 bg-navy-deep text-white">
          <div className="container max-w-screen-lg text-center space-y-8">
            <h2 className="text-3xl font-playfair font-bold">
              🎓 Ready to triple your prep in {location.city}?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Book your free consultation today and start your journey to your dream score.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="xl" onClick={handleBookingClick}>
                Book Free Consultation
              </Button>
              <Button variant="accent" size="xl" onClick={handleDiagnosticClick}>
                Get Free Diagnostic Test
              </Button>
            </div>
          </div>
        </section>
      </div>

      <LeadDialog
        open={leadDialogOpen}
        onOpenChange={setLeadDialogOpen}
        mode={leadDialogMode}
        defaultCity={location.city}
      />
    </>
  );
}