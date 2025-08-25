import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { TutoringPackages } from "@/components/TutoringPackages";
import { FAQGenerator } from "@/components/FAQGenerator";
import { LeadDialog } from "@/components/LeadDialog";
import { LOCATIONS, TestType, TESTS } from "@/data/site";
import { useState } from "react";
import { CheckCircle, Users, Target, Clock, ArrowRight } from "lucide-react";
import heroStudents from "@/assets/hero-students.jpg";

export default function ExamLocationPage() {
  const { exam, city } = useParams<{ exam: string; city: string }>();
  const [leadDialogOpen, setLeadDialogOpen] = useState(false);
  
  // Parse exam and location
  const examUpper = exam?.replace('-prep-tutoring', '').toUpperCase() as TestType;
  const location = LOCATIONS.find(loc => 
    loc.slug === `mcat-lsat-sat-prep-tutoring-${city}`
  );
  
  if (!location || !TESTS.includes(examUpper)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Page Not Found</h1>
          <p className="text-neutral-600">The requested exam or location is not available.</p>
        </div>
      </div>
    );
  }

  const cityName = location.city;
  const examData = {
    LSAT: {
      name: "LSAT",
      fullName: "Law School Admission Test",
      description: "Master the LSAT with proven strategies and personalized coaching",
      improvement: "11+ points",
      targetScore: "170+",
      icon: "⚖️"
    },
    MCAT: {
      name: "MCAT", 
      fullName: "Medical College Admission Test",
      description: "Excel on the MCAT with comprehensive content review and adaptive practice",
      improvement: "12+ points",
      targetScore: "515+",
      icon: "🏥"
    },
    SAT: {
      name: "SAT",
      fullName: "Scholastic Assessment Test", 
      description: "Achieve your target SAT score with proven techniques and personalized study plans",
      improvement: "150+ points",
      targetScore: "1500+",
      icon: "🎓"
    }
  };

  const currentExam = examData[examUpper];

  const steps = [
    {
      number: 1,
      title: "Book your free assessment online or by phone",
      description: "Schedule a 30-minute diagnostic session with one of our expert tutors to evaluate your current skill level."
    },
    {
      number: 2,
      title: "Take your diagnostic with one of our expert tutors",
      description: "Complete a comprehensive assessment that identifies your strengths, weaknesses, and biggest opportunities for improvement."
    },
    {
      number: 3,
      title: "Start your 1-on-1 trial session",
      description: "Experience our personalized teaching approach with a full tutoring session tailored to your learning style."
    },
    {
      number: 4,
      title: "Choose your package and prep with a custom study plan",
      description: "Select the perfect tutoring package and begin following your personalized roadmap to success."
    }
  ];

  const benefits = [
    "Personalized tutoring plans built for each student's learning style",
    "Weekly progress reports and direct parent/tutor communication", 
    `Elite tutors with proven score improvements in the ${currentExam.name}`,
    `Sessions available online or in-person across ${cityName}`,
    "Flexible scheduling and fully mobile-compatible learning platform"
  ];

  return (
    <>
      <Helmet>
        <title>Elite {currentExam.name} Prep in {cityName} - 3X Prep | Book Your Free Assessment</title>
        <meta name="description" content={`Trusted by students across ${cityName}, 3X Prep offers tailored ${currentExam.name} tutoring to triple your results. Average improvement: ${currentExam.improvement}. Book your free assessment today.`} />
        <meta property="og:title" content={`Elite ${currentExam.name} Prep in ${cityName} - 3X Prep`} />
        <meta property="og:description" content={`Trusted by students across ${cityName}, 3X Prep offers tailored ${currentExam.name} tutoring to triple your results.`} />
        <link rel="canonical" href={`https://3xprep.com/${exam}-prep-tutoring-${city}`} />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 bg-gradient-to-br from-background via-neutral-100/50 to-background overflow-hidden">
          <div className="container max-w-screen-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="text-6xl mb-4">{currentExam.icon}</div>
                
                <h1 className="text-display text-fluid-display font-bold text-primary leading-tight">
                  Elite <span className="highlight-gold">{currentExam.name} Prep</span> in {cityName} – 
                  Book Your Free Assessment
                </h1>
                
                <p className="text-xl text-neutral-600 font-body leading-relaxed">
                  Trusted by students across {cityName}, 3X Prep offers tailored {currentExam.name} tutoring to triple your results.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="default" 
                    size="lg"
                    onClick={() => setLeadDialogOpen(true)}
                    className="font-semibold px-8 py-3 text-lg"
                  >
                    📞 Book Free Assessment
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary font-display">{currentExam.improvement}</div>
                    <div className="text-sm text-neutral-600">Avg. Improvement</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary font-display">{currentExam.targetScore}</div>
                    <div className="text-sm text-neutral-600">Target Scores</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary font-display">99th</div>
                    <div className="text-sm text-neutral-600">Percentile Tutors</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-6"></div>
                <img 
                  src={heroStudents}
                  alt={`Students preparing for ${currentExam.name} in ${cityName}`}
                  className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container max-w-screen-xl">
            <div className="text-center mb-16">
              <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
                How It <span className="highlight-gold">Works</span>
              </h2>
              <p className="text-xl text-neutral-600 font-body max-w-3xl mx-auto">
                Our proven 4-step process gets you from where you are to where you want to be.
              </p>
            </div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-navy-deep rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg font-display">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-3 font-headline">{step.title}</h3>
                    <p className="text-neutral-600 font-body leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setLeadDialogOpen(true)}
              >
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Why 3X Prep */}
        <section className="py-20 bg-neutral-100/30">
          <div className="container max-w-screen-xl">
            <div className="text-center mb-16">
              <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
                Why Choose <span className="highlight-gold">3X Prep?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-neutral-700 font-body leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                variant="default" 
                size="lg"
                onClick={() => setLeadDialogOpen(true)}
              >
                Meet Your Tutors
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20">
          <div className="container max-w-screen-xl">
            <div className="max-w-4xl mx-auto text-center">
              <div className="card-elegant p-8 lg:p-12">
                <blockquote className="text-2xl text-neutral-700 font-body leading-relaxed mb-8">
                  "We saw a dramatic improvement in just a few sessions. The tutors understood exactly how to motivate my child and target their specific challenges."
                </blockquote>
                <cite className="text-lg font-semibold text-primary font-headline">
                  — Parent in {cityName}
                </cite>
              </div>
            </div>
          </div>
        </section>

        {/* Tutoring Packages */}
        <TutoringPackages 
          onBookingClick={() => setLeadDialogOpen(true)} 
          test={examUpper}
          city={cityName} 
        />

        {/* FAQs */}
        <FAQGenerator exam={examUpper} location={cityName} />

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary via-navy-deep to-primary">
          <div className="container max-w-screen-xl text-center">
            <h2 className="text-display text-fluid-display font-bold text-white mb-6">
              Ready to Master the <span className="highlight-gold">{currentExam.name}</span> in {cityName}?
            </h2>
            <p className="text-xl text-white/90 font-body max-w-3xl mx-auto mb-8">
              Book your free assessment today and start your journey to your dream {currentExam.name} score.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => setLeadDialogOpen(true)}
              className="font-semibold px-8 py-3 text-lg"
            >
              Book Free Assessment Today
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