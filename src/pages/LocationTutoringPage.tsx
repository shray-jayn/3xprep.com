import { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button-enhanced";
import { TestSelector } from "@/components/TestSelector";
import { Packages } from "@/components/Packages";
import { LeadDialog } from "@/components/LeadDialog";
import { LOCATIONS, SITE_CONFIG, type TestType } from "@/data/site";
import { Phone, CheckCircle, Star, Users, Clock, Award, Target } from "lucide-react";

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

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background to-muted/20">
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

        {/* Packages Section */}
        <section className="py-20">
          <div className="container max-w-screen-xl">
            <div className="text-center mb-12">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                <h2 className="text-3xl font-playfair font-bold text-navy-deep">
                  Choose Your Tutoring Package
                </h2>
                <TestSelector 
                  value={selectedTest} 
                  onValueChange={setSelectedTest}
                  className="w-full sm:w-auto"
                />
              </div>
            </div>

            <Packages 
              test={selectedTest} 
              city={location.city}
              onBookingClick={handleBookingClick}
            />
          </div>
        </section>

        {/* The 3X Prep Process */}
        <section className="py-20 bg-muted/20">
          <div className="container max-w-screen-lg">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-playfair font-bold text-navy-deep mb-4">
                The 3X Prep Process
              </h2>
              <p className="text-lg text-muted-foreground">
                Our proven 5-step method that delivers dramatic score improvements
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  step: 1,
                  icon: Users,
                  title: "We match you with a top tutor",
                  description: "Each scored 99th percentile (LSAT 175+, MCAT 520+, SAT 1550+), carefully vetted."
                },
                {
                  step: 2,
                  icon: Target,
                  title: "Free intro & assessment",
                  description: "Discover strengths, weaknesses, opportunities."
                },
                {
                  step: 3,
                  icon: Clock,
                  title: "Personalized study plan",
                  description: "Day-by-day roadmap for your date, goals, learning style."
                },
                {
                  step: 4,
                  icon: Star,
                  title: "One-on-one lessons",
                  description: "Adaptive sessions driven by your performance."
                },
                {
                  step: 5,
                  icon: Award,
                  title: "Triple your prep. Triple your future.",
                  description: "Dramatic improvements (e.g., 10+ LSAT points, 12+ MCAT points, 150+ SAT points)."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="h-6 w-6 text-accent" />
                      <h3 className="text-xl font-semibold text-navy-deep">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose 3X Prep */}
        <section className="py-20">
          <div className="container max-w-screen-xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-playfair font-bold text-navy-deep mb-4">
                Why Choose 3X Prep in {location.city}?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Elite Tutors, Elite Results",
                  description: "We only hire proven top scorers—then train them to teach at the highest level."
                },
                {
                  icon: Target,
                  title: "Custom Tailored Study Plans",
                  description: "You'll never wonder what to do next—we map out every drill, test, and session."
                },
                {
                  icon: CheckCircle,
                  title: "Perfect Fit Guarantee",
                  description: "Not satisfied after your first session? We'll rematch you or refund you."
                },
                {
                  icon: Clock,
                  title: "Flexibility",
                  description: "Sessions around your schedule. Evenings/weekends available."
                }
              ].map((feature, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-deep">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

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