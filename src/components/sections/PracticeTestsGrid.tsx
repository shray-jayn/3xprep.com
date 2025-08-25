import React from "react";
import { Section } from "@/components/ui/section";
import { DiagnosticTestCard } from "@/components/sections/DiagnosticTestCard";

export type DiagnosticTest = {
  name: string;
  title: string;
  description: string;
  duration: string;
  features: string;
  subjects: string[];
};

const DEFAULT_TESTS: DiagnosticTest[] = [
  {
    name: "SAT",
    title: "SAT Diagnostic",
    description: "Full-length practice test with detailed explanations",
    duration: "3 hours 15 minutes",
    features: "Full scoring breakdown",
    subjects: ["Reading & Writing", "Math"],
  },
  {
    name: "LSAT",
    title: "LSAT Diagnostic",
    description: "Complete practice test with comprehensive analysis",
    duration: "3 hours 30 minutes",
    features: "Section-by-section breakdown",
    subjects: ["Logical Reasoning", "Reading Comprehension", "Logic Games"],
  },
  {
    name: "MCAT",
    title: "MCAT Diagnostic",
    description: "Shortened diagnostic to assess your readiness",
    duration: "2 hours",
    features: "Subject area analysis",
    subjects: [
      "Chemical & Physical",
      "Biological & Biochemical",
      "Psychology & Sociology",
    ],
  },
];

export function PracticeTestsGrid({
  tests = DEFAULT_TESTS,
  onTakeTest,
}: {
  tests?: DiagnosticTest[];
  onTakeTest?: () => void;
}) {
  if (import.meta.env.DEV) {
    // console.log("[PracticeTestsGrid] render", tests.length);
  }

  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
        {tests.map((test) => (
          <DiagnosticTestCard
            key={test.name}
            test={test}
            onTakeTest={onTakeTest}
          />
        ))}
      </div>
    </Section>
  );
}
