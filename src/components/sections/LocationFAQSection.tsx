import React from "react";
import { FAQGenerator } from "@/components/FAQGenerator";

type FAQ = { question: string; answer: string };

const DEFAULT_FAQS: FAQ[] = [
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

export function LocationFAQSection({ faqs = DEFAULT_FAQS }: { faqs?: FAQ[] }) {
  if (import.meta.env.DEV) {
    // console.log("[LocationFAQSection] render", faqs.length);
  }

  // Normalize props for FAQGenerator: support multiple common prop names.
  // This avoids TS mismatch with unknown FAQGeneratorProps while remaining runtime-safe.
  const normalizedProps = {
    items: faqs,
    faqs,
    data: faqs,
    questions: faqs,
  } as unknown as React.ComponentProps<typeof FAQGenerator>;

  return (
    <section className="py-16 lg:py-24 bg-neutral-100/30">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
            Frequently <span className="highlight-gold">Asked Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <FAQGenerator {...normalizedProps} />
        </div>
      </div>
    </section>
  );
}
