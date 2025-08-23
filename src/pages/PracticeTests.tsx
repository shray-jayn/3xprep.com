import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button-enhanced";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG, EXTERNAL_LINKS } from "@/data/site";
import { ExternalLink, BookOpen, Clock, Target } from "lucide-react";

export default function PracticeTests() {
  const [searchParams] = useSearchParams();
  const isFromDiagnostic = searchParams.get("source") === "diagnostic";

  return (
    <>
      <Helmet>
        <title>Practice Tests — {SITE_CONFIG.name}</title>
        <meta
          name="description"
          content="Access free diagnostic tests for SAT, LSAT, and MCAT. Get started with practice tests to identify your strengths and areas for improvement."
        />
        <meta name="keywords" content="practice tests, diagnostic, SAT, LSAT, MCAT, free tests, 3X Prep" />
        <link rel="canonical" href={`${SITE_CONFIG.url}/practice-tests`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background to-muted/20">
          <div className="container max-w-screen-xl">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-[clamp(32px,4vw,48px)] font-playfair font-bold text-navy-deep leading-tight">
                Free <span className="highlight-gold">Practice Tests</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Take our diagnostic tests to identify your strengths and areas for improvement. 
                Get a baseline score and personalized study recommendations.
              </p>
              {isFromDiagnostic && (
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 inline-block">
                  <p className="text-accent font-medium">
                    ✅ Form submitted successfully! You now have access to our diagnostic tests below.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Practice Tests Grid */}
        <section className="py-20">
          <div className="container max-w-screen-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SAT Diagnostic */}
              <Card className="flex flex-col h-full transition-all duration-200 hover:shadow-hover hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-playfair text-navy-deep">
                    SAT Diagnostic
                  </CardTitle>
                  <CardDescription>
                    Full-length practice test with detailed explanations
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>3 hours 15 minutes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="h-4 w-4 text-muted-foreground" />
                      <span>Full scoring breakdown</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">Reading & Writing</Badge>
                    <Badge variant="outline" className="text-xs">Math</Badge>
                  </div>

                  <div className="pt-4 mt-auto">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full"
                      asChild
                    >
                      <a 
                        href={EXTERNAL_LINKS.diagnostics.sat}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Take SAT Diagnostic
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* LSAT Diagnostic */}
              <Card className="flex flex-col h-full transition-all duration-200 hover:shadow-hover hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-playfair text-navy-deep">
                    LSAT Diagnostic
                  </CardTitle>
                  <CardDescription>
                    Complete practice test with comprehensive analysis
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>3 hours 30 minutes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="h-4 w-4 text-muted-foreground" />
                      <span>Section-by-section breakdown</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">Logical Reasoning</Badge>
                    <Badge variant="outline" className="text-xs">Reading Comprehension</Badge>
                    <Badge variant="outline" className="text-xs">Logic Games</Badge>
                  </div>

                  <div className="pt-4 mt-auto">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full"
                      asChild
                    >
                      <a 
                        href={EXTERNAL_LINKS.diagnostics.combined}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Take LSAT Diagnostic
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* MCAT Diagnostic */}
              <Card className="flex flex-col h-full transition-all duration-200 hover:shadow-hover hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-playfair text-navy-deep">
                    MCAT Diagnostic
                  </CardTitle>
                  <CardDescription>
                    Shortened diagnostic to assess your readiness
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>2 hours</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="h-4 w-4 text-muted-foreground" />
                      <span>Subject area analysis</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">Chemical & Physical</Badge>
                    <Badge variant="outline" className="text-xs">Biological & Biochemical</Badge>
                    <Badge variant="outline" className="text-xs">Psychology & Sociology</Badge>
                  </div>

                  <div className="pt-4 mt-auto">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full"
                      asChild
                    >
                      <a 
                        href={EXTERNAL_LINKS.diagnostics.combined}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Take MCAT Diagnostic
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Note about native tests */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 bg-muted/50 px-6 py-4 rounded-xl">
                <BookOpen className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  <strong>Coming Soon:</strong> We'll integrate native diagnostic tests directly into our platform for a seamless experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy-deep text-white">
          <div className="container max-w-screen-lg text-center space-y-8">
            <h2 className="text-3xl font-playfair font-bold">
              Ready for Personalized Tutoring?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              After taking your diagnostic, book a consultation to discuss your results 
              and create a personalized study plan with our expert tutors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="xl">
                Book Free Consultation
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-navy-deep">
                View Tutoring Locations
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}