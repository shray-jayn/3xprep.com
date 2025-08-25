import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { DiagnosticTestCard } from "@/components/sections/DiagnosticTestCard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LeadDialog } from "@/components/LeadDialog";
import { SITE_CONFIG } from "@/data/site";
import { createPageSEO } from "@/lib/seo";
import { BookOpen } from "lucide-react";

const diagnosticTests = [
  {
    name: "SAT",
    title: "SAT Diagnostic",
    description: "Full-length practice test with detailed explanations",
    duration: "3 hours 15 minutes",
    features: "Full scoring breakdown",
    subjects: ["Reading & Writing", "Math"]
  },
  {
    name: "LSAT",
    title: "LSAT Diagnostic", 
    description: "Complete practice test with comprehensive analysis",
    duration: "3 hours 30 minutes",
    features: "Section-by-section breakdown",
    subjects: ["Logical Reasoning", "Reading Comprehension", "Logic Games"]
  },
  {
    name: "MCAT",
    title: "MCAT Diagnostic",
    description: "Shortened diagnostic to assess your readiness", 
    duration: "2 hours",
    features: "Subject area analysis",
    subjects: ["Chemical & Physical", "Biological & Biochemical", "Psychology & Sociology"]
  }
];

export default function PracticeTests() {
  const [searchParams] = useSearchParams();
  const [leadDialogOpen, setLeadDialogOpen] = useState(false);
  const isFromDiagnostic = searchParams.get("source") === "diagnostic";

  const openDiagnosticFlow = () => setLeadDialogOpen(true);

  const seo = createPageSEO({
    title: "Practice Tests — 3X Prep",
    description: "Access free diagnostic tests for SAT, LSAT, and MCAT. Get started with practice tests to identify your strengths and areas for improvement.",
    canonical: `${SITE_CONFIG.url}/practice-tests`
  });

  return (
    <PageShell 
      title={seo.title}
      description={seo.description}
      canonical={seo.canonical}
      className="bg-pattern-grid"
    >
      {/* Hero Section */}
      <Section variant="gradient" className="py-24">
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
      </Section>

      {/* Practice Tests Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
          {diagnosticTests.map((test) => (
            <DiagnosticTestCard 
              key={test.name}
              test={test}
              onTakeTest={openDiagnosticFlow}
            />
          ))}
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
      </Section>

      {/* CTA Section */}
      <FinalCTA 
        title="Ready for Personalized Tutoring?"
        description="After taking your diagnostic, book a consultation to discuss your results and create a personalized study plan with our expert tutors."
        buttonText="Book Free Consultation"
        onButtonClick={() => setLeadDialogOpen(true)}
      />

      {/* Lead Dialog */}
      <LeadDialog
        open={leadDialogOpen}
        onOpenChange={setLeadDialogOpen}
        mode="diagnostic"
      />
    </PageShell>
  );
}