import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TutoringPackages } from "@/components/TutoringPackages";
import { FAQGenerator } from "@/components/FAQGenerator";
import { LeadDialog } from "@/components/LeadDialog";
import { CheckCircle, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { SITE_CONFIG } from "@/data/site";
import { createPageSEO } from "@/lib/seo";
import { ExamHero } from "@/components/sections/ExamHero";
import { ExamFeatures } from "@/components/sections/ExamFeatures";
import { ExamTestimonial } from "@/components/sections/ExamTestimonial";
import { Section } from "@/components/ui/section";
import { useConsoleTrace } from "@/hooks/useConsoleTrace";

type ExamType = "SAT" | "LSAT" | "MCAT";

type ExamLocationProps = {
  exam?: ExamType;
  examSlug?: string; // used in canonical URL
  cityName?: string;
  locationLabel?: string; // if you show location text elsewhere
};

const EXAM_DATA = {
  LSAT: {
    name: "LSAT",
    fullName: "Law School Admission Test",
    description:
      "Master the LSAT with proven strategies and personalized coaching",
    improvement: "11+ points",
    targetScore: "170+",
    icon: "⚖️",
  },
  MCAT: {
    name: "MCAT",
    fullName: "Medical College Admission Test",
    description:
      "Excel on the MCAT with comprehensive content review and adaptive practice",
    improvement: "12+ points",
    targetScore: "515+",
    icon: "🏥",
  },
  SAT: {
    name: "SAT",
    fullName: "Scholastic Assessment Test",
    description:
      "Achieve your target SAT score with proven techniques and personalized study plans",
    improvement: "150+ points",
    targetScore: "1500+",
    icon: "🎓",
  },
} as const;

export default function ExamLocationPage(props: ExamLocationProps) {
  const [leadDialogOpen, setLeadDialogOpen] = useState(false);

  // Allow values from: 1) props, 2) Link state, 3) query params, 4) sane defaults
  const location = useLocation() as { state?: Partial<ExamLocationProps> };
  const [searchParams] = useSearchParams();

  useConsoleTrace("ExamLocationPage", {
    props,
    searchParams: Object.fromEntries(searchParams.entries()),
  });

  const EXAM: ExamType =
    props.exam ??
    (location.state?.exam as ExamType | undefined) ??
    (searchParams.get("exam") as ExamType | null) ??
    "SAT";

  const EXAM_SLUG: string =
    props.examSlug ??
    location.state?.examSlug ??
    searchParams.get("slug") ??
    EXAM.toLowerCase();

  const CITY_NAME: string =
    props.cityName ??
    location.state?.cityName ??
    searchParams.get("city") ??
    "D";

  const LOCATION_LABEL: string =
    props.locationLabel ??
    location.state?.locationLabel ??
    searchParams.get("location") ??
    "India";

  const currentExam = EXAM_DATA[EXAM];

  const steps = [
    {
      number: 1,
      title: "Book your free assessment online or by phone",
      description:
        "Schedule a 30-minute diagnostic session with one of our expert tutors to evaluate your current skill level.",
    },
    {
      number: 2,
      title: "Take your diagnostic with one of our expert tutors",
      description:
        "Complete a comprehensive assessment that identifies your strengths, weaknesses, and biggest opportunities for improvement.",
    },
    {
      number: 3,
      title: "Start your 1-on-1 trial session",
      description:
        "Experience our personalized teaching approach with a full tutoring session tailored to your learning style.",
    },
    {
      number: 4,
      title: "Choose your package and prep with a custom study plan",
      description:
        "Select the perfect tutoring package and begin following your personalized roadmap to success.",
    },
  ];

  const benefits = [
    "Personalized tutoring plans built for each student's learning style",
    "Weekly progress reports and direct parent/tutor communication",
    `Elite tutors with proven score improvements in the ${currentExam.name}`,
    `Sessions available online or in-person across ${CITY_NAME}`,
    "Flexible scheduling and fully mobile-compatible learning platform",
  ];

  const seo = createPageSEO({
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    canonical: SITE_CONFIG.url,
  });

  if (import.meta.env.DEV) {
    const queryObj = Object.fromEntries(searchParams.entries());
    // Collapsed group keeps console tidy
    console.groupCollapsed("[ExamLocationPage] props/state/query");
    console.log("props ➜", props);
    console.log("location.state ➜", location.state);
    console.log("query params ➜", queryObj);
    console.table({ EXAM, EXAM_SLUG, CITY_NAME, LOCATION_LABEL });
    console.groupEnd();
  }

  return (
    <PageShell
      title={seo.title}
      description={seo.description}
      canonical={seo.canonical}
      className="bg-pattern-dots"
    >
      <Helmet>
        <title>
          Elite {currentExam.name} Prep in {CITY_NAME} - 3X Prep | Book Your
          Free Assessment
        </title>
        <meta
          name="description"
          content={`Trusted by students across ${CITY_NAME}, 3X Prep offers tailored ${currentExam.name} tutoring to triple your results. Average improvement: ${currentExam.improvement}. Book your free assessment today.`}
        />
        <meta
          property="og:title"
          content={`Elite ${currentExam.name} Prep in ${CITY_NAME} - 3X Prep`}
        />
        <meta
          property="og:description"
          content={`Trusted by students across ${CITY_NAME}, 3X Prep offers tailored ${currentExam.name} tutoring to triple your results.`}
        />
        <link
          rel="canonical"
          href={`https://3xprep.com/${EXAM_SLUG}-prep-tutoring-${CITY_NAME.toLowerCase()}`}
        />
      </Helmet>

      {/* Hero Section */}
      <ExamHero
        examName={currentExam.name}
        examIcon={currentExam.icon}
        cityName={CITY_NAME}
        improvement={currentExam.improvement}
        targetScore={currentExam.targetScore}
        onBookingClick={() => setLeadDialogOpen(true)}
      />

      {/* Features Section */}
      <ExamFeatures examName={currentExam.name} cityName={CITY_NAME} />

      {/* How It Works */}
      <Section className="bg-premium-subtle">
        <div className="text-center mb-16">
          <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
            How It <span className="highlight-gold">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Our proven 4-step process gets you from where you are to where you
            want to be.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group flex flex-col md:flex-row items-start gap-8 p-6 rounded-2xl hover:bg-card/50 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-lg font-display">
                  {step.number}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-primary mb-3 font-headline group-hover:text-accent transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setLeadDialogOpen(true)}
            className="group border-2 border-accent/30 hover:border-accent hover:bg-accent/5"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </Section>

      {/* Testimonial */}
      <ExamTestimonial examName={currentExam.name} cityName={CITY_NAME} />

      {/* Tutoring Packages */}
      <TutoringPackages
        onBookingClick={() => setLeadDialogOpen(true)}
        test={EXAM}
        city={CITY_NAME}
      />

      {/* FAQs */}
      <FAQGenerator exam={EXAM} location={CITY_NAME} />

      {/* Final CTA */}
      <Section variant="dark" className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="relative z-10">
          <h2 className="text-display text-fluid-display font-bold text-black mb-6">
            Ready to Master the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              {currentExam.name}
            </span>{" "}
            in {CITY_NAME}?
          </h2>
          <p className="text-xl text-black/70 font-body max-w-3xl mx-auto mb-8">
            Join hundreds of successful students who've achieved their dream{" "}
            {currentExam.name} scores. Your transformation starts with a free
            assessment.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setLeadDialogOpen(true)}
            className="group font-semibold px-8 py-4 text-lg bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <span className="mr-2">🚀</span>
            Book Free Assessment Today
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Button>
        </div>
      </Section>

      <LeadDialog
        open={leadDialogOpen}
        onOpenChange={setLeadDialogOpen}
        mode="consultation"
        defaultCity={CITY_NAME}
      />
    </PageShell>
  );
}
