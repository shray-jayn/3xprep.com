import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button-enhanced";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LOCATIONS, SITE_CONFIG } from "@/data/site";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import {  useLocation } from "react-router-dom";
import { LeadDialog } from "@/components/LeadDialog";

import BenFelgoise from "@/assets/BenFelgoise.png";
import DeirdreWillgohs from "@/assets/DeirdreWillgohs.png";
import ElizaAlushi from "@/assets/ElizaAlushi.png";
import EvanGustafson from "@/assets/EvanGustafson.png";
import JeffreyVancil from "@/assets/JeffreyVancil.png";
import JessNash from "@/assets/JessNash.png";
import MichaelFlesse from "@/assets/MichaelFlesse.png";
import MikeReyes from "@/assets/MikeReyes.png";
import NathalieMarx from "@/assets/NathalieMarx.png";


import {
  Calculator,
  Users,
  Target,
  Shield,
  Star,
  CheckCircle,
  Calendar,
} from "lucide-react";

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

const process = [
  {
    number: "01",
    title: "Elite Tutor Matching",
    description:
      "We match you with a top tutor — each scored 99th percentile (LSAT 175+, MCAT 520+, SAT 1550+), carefully vetted and trained to teach at the highest level.",
  },
  {
    number: "02",
    title: "Free Assessment & Strategy",
    description:
      "Free intro session and comprehensive assessment to discover your strengths, weaknesses, and biggest opportunities for score improvement.",
  },
  {
    number: "03",
    title: "Personalized Study Plan",
    description:
      "Day-by-day roadmap tailored to your test date, score goals, and learning style. Never wonder what to study next.",
  },
  {
    number: "04",
    title: "One-on-One Sessions",
    description:
      "Adaptive tutoring sessions that evolve based on your performance, focusing on your specific needs and maximizing every minute.",
  },
  {
    number: "05",
    title: "Dramatic Score Gains",
    description:
      "Triple your prep efficiency and achieve remarkable improvements: 10+ LSAT points, 12+ MCAT points, 150+ SAT points.",
  },
];

const differentiators = [
  {
    icon: Users,
    title: "Elite Tutors, Elite Results",
    description:
      "We only hire proven top scorers—then train them to teach at the highest level. Our tutors don't just know the content, they know how to teach it.",
  },
  {
    icon: Target,
    title: "Custom Tailored Study Plans",
    description:
      "You'll never wonder what to do next—we map out every drill, test, and session based on your unique needs and timeline.",
  },
  {
    icon: Shield,
    title: "Perfect Fit Guarantee",
    description:
      "Not satisfied after your first session? We'll rematch you with a different tutor or provide a full refund. Your success is our priority.",
  },
  {
    icon: Calendar,
    title: "Ultimate Flexibility",
    description:
      "Sessions scheduled around your life. Evenings, weekends, and last-minute changes—we adapt to your schedule.",
  },
];

const testimonials = [
  {
    name: "Sarah L.",
    score: "LSAT 173",
    improvement: "11 point increase",
    text: "My LSAT jumped 11 points in just 8 weeks. The personalized approach helped me understand exactly where I was struggling and how to fix it.",
  },
  {
    name: "James K.",
    score: "MCAT 521",
    improvement: "13 point increase",
    text: "I improved 13 points on my MCAT thanks to 3X Prep's targeted approach. The tutor knew exactly how to address my weak spots.",
  },
  {
    name: "Maya P.",
    score: "SAT 1520",
    improvement: "280 point increase",
    text: "From 1310 to 1520 on my SAT—I couldn't believe it! The strategies and practice made all the difference for my dream schools.",
  },
];
const tutors = [
  {
    name: "Ben Felgoise",
    score: "LSAT 179",
    education: "Yale Law",
    image: BenFelgoise,
  },
  {
    name: "Deirdre Willgohs",
    score: "MCAT 523",
    education: "Harvard Med",
    image: DeirdreWillgohs,
  },
  {
    name: "Eli Alderstein",
    score: "SAT 1580",
    education: "Stanford Admit",
    image: NathalieMarx,
  },
  {
    name: "Eliza Alushi",
    score: "LSAT 176",
    education: "Columbia Law",
    image: ElizaAlushi,
  },
  {
    name: "Evan Gustafson",
    score: "MCAT 519",
    education: "Johns Hopkins",
    image: EvanGustafson,
  },
  {
    name: "Jeffrey Vancil",
    score: "SAT 1570",
    education: "MIT Admit",
    image: JeffreyVancil,
  },
];




const faqs = [
  {
    question: "What happens after I purchase?",
    answer:
      "You'll receive a welcome email with next steps and intake form. We'll match you with the perfect tutor within 48 hours and schedule your free introductory session.",
  },
  {
    question: "What's included in my package?",
    answer:
      "30-minute diagnostic session, personalized study plan, live 1-on-1 tutoring sessions, progress tracking, and ongoing accountability support.",
  },
  {
    question: "Can I switch tutors if needed?",
    answer:
      "Absolutely! We want you to have the perfect fit. You can request a new tutor anytime during your program.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "Full refund within 14 days if you've used one session or less. We're confident in our tutors and want you to be completely satisfied.",
  },
];

export default function LocationsIndex() {
  const [isOpen, setIsOpen] = useState(false);
  const [leadDialogOpen, setLeadDialogOpen] = useState(false);
  const [leadDialogMode, setLeadDialogMode] = useState<
    "consultation" | "diagnostic"
  >("consultation");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Get default city from current location page
  const currentCity = (() => {
    if (location.pathname.includes("/mcat-lsat-sat-prep-tutoring-")) {
      const citySlug = location.pathname.split(
        "/mcat-lsat-sat-prep-tutoring-"
      )[1];
      const locationData = LOCATIONS.find((loc) => loc.slug.includes(citySlug));
      return locationData?.city;
    }
    return undefined;
  })();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openLeadDialog = (mode: "consultation" | "diagnostic") => {
    setLeadDialogMode(mode);
    setLeadDialogOpen(true);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Tutoring Locations — {SITE_CONFIG.name}</title>
        <meta
          name="description"
          content="Find 3X Prep tutoring locations across Southern California. Elite SAT, LSAT, and MCAT tutoring in San Diego, Riverside, Orange County, and Los Angeles."
        />
        <meta
          name="keywords"
          content="3X Prep, tutoring locations, SAT, LSAT, MCAT, California, San Diego, Los Angeles, Orange County, Riverside"
        />
        <link rel="canonical" href={`${SITE_CONFIG.url}/tutoring-locations`} />
      </Helmet>

      <main>
        <div className="min-h-screen bg-background bg-pattern-dots">
          {/* Hero Section */}
          <section className="py-24 bg-gradient-to-br from-background to-muted/20 bg-premium-subtle">
            <div className="container max-w-screen-xl">
              <div className="text-center space-y-6 max-w-4xl mx-auto">
                <h1 className="text-[clamp(32px,4vw,48px)] font-playfair font-bold text-navy-deep leading-tight">
                  Find Your Local{" "}
                  <span className="highlight-gold">3X Prep</span> Location
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Elite tutoring for SAT, LSAT, and MCAT across Southern
                  California. Choose your city to get started with our 99th
                  percentile tutors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => openLeadDialog("consultation")}
                  >
                    Book Free Consultation
                  </Button>
                  <Button variant="accent" size="lg" asChild>
                    <a href={`tel:${SITE_CONFIG.supportPhone}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <LeadDialog
            open={leadDialogOpen}
            onOpenChange={setLeadDialogOpen}
            mode={leadDialogMode}
            defaultCity={currentCity}
          />

          {/* Locations Grid */}
          <section className="py-20 bg-pattern-grid">
            <div className="container max-w-screen-lg ">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-playfair font-bold text-navy-deep mb-4">
                  Our Locations
                </h2>
                <p className="text-muted-foreground text-lg">
                  Select your city to learn more about local tutoring options
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {LOCATIONS.map((location) => (
                  <Card
                    key={location.id}
                    className="group relative overflow-hidden transition-all duration-300 hover:shadow-hover hover:-translate-y-2 border-border/50"
                  >
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground font-semibold"
                      >
                        #{location.id}
                      </Badge>
                    </div>

                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <MapPin className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-playfair text-navy-deep">
                            {location.city}
                          </CardTitle>
                          <CardDescription className="text-base">
                            3X Prep of {location.city}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <a
                            href={`tel:${location.phone}`}
                            className="hover:text-accent transition-colors"
                          >
                            {location.phone}
                          </a>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">
                          Available Tests:
                        </p>
                        <div className="flex gap-2">
                          {["SAT", "LSAT", "MCAT"].map((test) => (
                            <Badge
                              key={test}
                              variant="outline"
                              className="text-xs"
                            >
                              {test}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          variant="outline"
                          size="lg"
                          className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-200"
                          asChild
                        >
                          <Link to={`/${location.slug}`}>
                            View {location.city} Details
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Packages & Pricing */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
                Choose Your{" "}
                <span className="highlight-gold">Tutoring Package</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`card-elegant p-6 text-center ${
                    pkg.popular
                      ? "ring-2 ring-accent ring-opacity-50 scale-105"
                      : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-primary mb-4 font-headline">
                    {pkg.title}
                  </h3>

                  <div className="space-y-2 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <p
                        key={featureIndex}
                        className="text-sm text-neutral-600 font-body"
                      >
                        {feature}
                      </p>
                    ))}
                  </div>

                  <div className="text-3xl font-bold text-primary mb-2 font-display">
                    {pkg.price}
                  </div>
                  {pkg.payments && (
                    <p className="text-xs text-neutral-500 mb-6">
                      {pkg.payments}
                    </p>
                  )}

                  <Button
                    variant={pkg.popular ? "primary" : "outline"}
                    className="w-full"
                  >
                    Purchase
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center bg-neutral-100/50 rounded-2xl p-8">
              <div className="flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-accent mr-2" />
                <span className="font-semibold text-primary font-headline">
                  Not sure how many hours you need?
                </span>
              </div>
              <p className="text-neutral-600 font-body">
                Calculate your recommended study plan based on your test date &
                schedule.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 lg:py-24 bg-neutral-100/30 bg-pattern-grid">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
                The <span className="highlight-gold">3X Prep Process</span>
              </h2>
            </div>

            <div className="space-y-12">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg font-display">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-3 font-headline">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 font-body leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose 3X Prep */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
                Why Choose <span className="highlight-gold">3X Prep?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-200">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-4 font-headline">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 font-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24 bg-neutral-100/30 bg-pattern-grid">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
                Student <span className="highlight-gold">Success Stories</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="card-elegant p-6 lg:p-8 text-center"
                >
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <blockquote className="text-neutral-700 font-body leading-relaxed mb-6">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="space-y-1">
                    <div className="font-semibold text-primary font-headline">
                      {testimonial.name}
                    </div>
                    <div className="text-accent font-medium">
                      {testimonial.score}
                    </div>
                    <div className="text-sm text-secondary">
                      {testimonial.improvement}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Tutors */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
                Meet Our <span className="highlight-gold">Elite Tutors</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {tutors.map((tutor, index) => (
                <div key={index} className="card-elegant p-6 text-center group">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      src={tutor.image}
                      alt={tutor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-primary mb-1 font-headline">
                    {tutor.name}
                  </h3>
                  <div className="text-accent font-medium mb-1">
                    {tutor.score}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {tutor.education}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg">
                Show More Tutors
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-neutral-100/30 bg-pattern-grid">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
                Frequently{" "}
                <span className="highlight-gold">Asked Questions</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card-elegant p-6">
                  <h3 className="font-semibold text-primary mb-3 font-headline">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-600 font-body leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}

        <section className="py-20 bg-gradient-to-br from-[#fdf6e3] via-[#fcecc7] to-[#cce4e4] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--accent)/0.2),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--secondary)/0.2),transparent_70%)]" />
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
          <div className="container max-w-screen-xl mx-auto px-4 text-center">
            <h2 className="text-display text-fluid-display font-bold text-white mb-6 leading-tight">
              🎓 Ready to{" "}
              <span className="highlight-gold">Triple Your Prep</span>?
            </h2>
            <p className="text-xl text-white/90 font-body max-w-3xl mx-auto mb-8 leading-relaxed">
              Book your free consultation today and start your journey to your
              dream score.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/consultation">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
