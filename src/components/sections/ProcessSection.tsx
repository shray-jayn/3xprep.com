import React from "react";

const DEFAULT_STEPS = [
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

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export function ProcessSection({
  steps = DEFAULT_STEPS,
}: {
  steps?: ProcessStep[];
}) {
  if (import.meta.env.DEV) {
    // console.log("[ProcessSection] render", steps.length);
  }

  return (
    <section className="py-16 lg:py-24 bg-neutral-100/30 bg-pattern-grid ">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
            The <span className="highlight-gold">3X Prep Process</span>
          </h2>
        </div>

        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
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
  );
}
