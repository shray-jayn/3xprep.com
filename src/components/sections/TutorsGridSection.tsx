import React from "react";
import { Button } from "@/components/ui/button";

type Tutor = {
  name: string;
  score: string;
  education: string;
  image: string; // initials or asset key
};

const DEFAULT_TUTORS: Tutor[] = [
  { name: "Emily R.", score: "LSAT 179", education: "Yale Law", image: "ER" },
  {
    name: "Daniel K.",
    score: "MCAT 523",
    education: "Harvard Med",
    image: "DK",
  },
  {
    name: "Sophia M.",
    score: "SAT 1580",
    education: "Stanford Admit",
    image: "SM",
  },
  {
    name: "Marcus J.",
    score: "LSAT 176",
    education: "Columbia Law",
    image: "MJ",
  },
  {
    name: "Priya C.",
    score: "MCAT 519",
    education: "Johns Hopkins",
    image: "PC",
  },
  { name: "Alex T.", score: "SAT 1570", education: "MIT Admit", image: "AT" },
];

export function TutorsGridSection({
  tutors = DEFAULT_TUTORS,
  onShowMore,
}: {
  tutors?: Tutor[];
  onShowMore?: () => void;
}) {
  if (import.meta.env.DEV) {
    // console.log("[TutorsGridSection] render", tutors.length);
  }
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
            Meet Our <span className="highlight-gold">Elite Tutors</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tutors.map((t, idx) => (
            <div key={idx} className="card-elegant p-6 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-navy-deep rounded-full flex items-center justify-center text-blue font-bold text-lg mx-auto mb-4 font-display">
                {t.image}
              </div>
              <h3 className="font-semibold text-primary mb-1 font-headline">
                {t.name}
              </h3>
              <div className="text-accent font-medium mb-1">{t.score}</div>
              <div className="text-sm text-neutral-600">{t.education}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" onClick={onShowMore}>
            Show More Tutors
          </Button>
        </div>
      </div>
    </section>
  );
}
