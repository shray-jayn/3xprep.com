import React from "react";
import { Section } from "@/components/ui/section";

export function PracticeTestsHero({
  isFromDiagnostic,
}: {
  isFromDiagnostic?: boolean;
}) {
  if (import.meta.env.DEV) {
    // console.log("[PracticeTestsHero] render", { isFromDiagnostic });
  }
  return (
    <Section variant="gradient" className="py-24">
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-[clamp(32px,4vw,48px)] font-playfair font-bold text-navy-deep leading-tight">
          Free <span className="highlight-gold">Practice Tests</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Take our diagnostic tests to identify your strengths and areas for
          improvement. Get a baseline score and personalized study
          recommendations.
        </p>

        {isFromDiagnostic && (
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 inline-block">
            <p className="text-accent font-medium">
              ✅ Form submitted successfully! You now have access to our
              diagnostic tests below.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
