import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PageShell } from "@/components/layout/PageShell";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LeadDialog } from "@/components/LeadDialog";
import { SITE_CONFIG } from "@/data/site";
import { createPageSEO } from "@/lib/seo";

// New modular sections
import { PracticeTestsHero } from "@/components/sections/PracticeTestsHero";
import { PracticeTestsGrid } from "@/components/sections/PracticeTestsGrid";
import { ComingSoonBanner } from "@/components/sections/ComingSoonBanner";

export default function PracticeTests() {
  const [searchParams] = useSearchParams();
  const [leadDialogOpen, setLeadDialogOpen] = useState(false);
  const isFromDiagnostic = searchParams.get("source") === "diagnostic";

  const openDiagnosticFlow = () => setLeadDialogOpen(true);

  const seo = createPageSEO({
    title: "Practice Tests — 3X Prep",
    description:
      "Access free diagnostic tests for SAT, LSAT, and MCAT. Get started with practice tests to identify your strengths and areas for improvement.",
    canonical: `${SITE_CONFIG.url}/practice-tests`,
  });

  if (import.meta.env.DEV) {
    // console.log("[PracticeTests] render", { isFromDiagnostic });
  }

  return (
    <PageShell
      title={seo.title}
      description={seo.description}
      canonical={seo.canonical}
      className="bg-pattern-grid"
    >
      {/* Hero */}
      <PracticeTestsHero isFromDiagnostic={isFromDiagnostic} />

      {/* Tests Grid */}
      <PracticeTestsGrid onTakeTest={openDiagnosticFlow} />

      {/* Note / Banner */}
      <ComingSoonBanner />

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
