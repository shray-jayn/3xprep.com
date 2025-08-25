import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { TestCardsGrid } from "@/components/TestCardsGrid";
import { TutoringPackages } from "@/components/TutoringPackages";
import { LeadDialog } from "@/components/LeadDialog";
import { LOCATIONS } from "@/data/site";
import { useState } from "react";
import heroStudents from "@/assets/hero-students.jpg";

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

  return (
    <>
      <Helmet>
        <title>{location.seo.title}</title>
        <meta name="description" content={location.seo.description} />
        <meta property="og:title" content={location.seo.title} />
        <meta property="og:description" content={location.seo.description} />
        <link rel="canonical" href={`https://3xprep.com/${location.slug}`} />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 bg-gradient-to-br from-background via-neutral-100/50 to-background overflow-hidden">
          <div className="container max-w-screen-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-display text-fluid-display font-bold text-primary leading-tight">
                  One-on-One Tutoring in <span className="highlight-gold">{cityName}</span>. 
                  Elite Instructors. Proven Results.
                </h1>
                
                <p className="text-xl text-neutral-600 font-body leading-relaxed">
                  Top-rated SAT, LSAT, and MCAT tutoring personalized for students in {cityName}. 
                  Custom study plans. Real score gains.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="default" 
                    size="lg"
                    onClick={() => setLeadDialogOpen(true)}
                    className="font-semibold px-8 py-3 text-lg"
                  >
                    📞 Book a Free Consultation Today
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
          </div>
        </section>

        {/* Test Cards Grid */}
        <TestCardsGrid location={cityName} />

        {/* Tutoring Packages */}
        <TutoringPackages onBookingClick={() => setLeadDialogOpen(true)} city={cityName} />

        {/* Social Proof */}
        <section className="py-20 bg-neutral-100/30">
          <div className="container max-w-screen-xl">
            <div className="text-center mb-16">
              <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
                Trusted by Students Across <span className="highlight-gold">{cityName}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2 font-display">1000+</div>
                <p className="text-neutral-600 font-body">Students Tutored</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2 font-display">15+</div>
                <p className="text-neutral-600 font-body">Average Point Improvement</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2 font-display">99%</div>
                <p className="text-neutral-600 font-body">Student Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary via-navy-deep to-primary">
          <div className="container max-w-screen-xl text-center">
            <h2 className="text-display text-fluid-display font-bold text-white mb-6">
              Ready to Start Your Success Story in <span className="highlight-gold">{cityName}</span>?
            </h2>
            <p className="text-xl text-white/90 font-body max-w-3xl mx-auto mb-8">
              Join hundreds of students in {cityName} who have achieved their dream scores with 3X Prep.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => setLeadDialogOpen(true)}
              className="font-semibold px-8 py-3 text-lg"
            >
              Get Started Today - It's Free!
            </Button>
          </div>
        </section>
      </main>

      <LeadDialog 
        open={leadDialogOpen}
        onOpenChange={setLeadDialogOpen}
        mode="consultation"
        defaultCity={cityName}
      />
    </>
  );
}