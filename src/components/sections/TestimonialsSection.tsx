import React from "react";
import { Star } from "lucide-react";

export type Testimonial = {
  name: string;
  score: string;
  improvement: string;
  text: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah L.",
    score: "LSAT 173",
    improvement: "11 point increase",
    text: "My LSAT jumped 11 points in just 8 weeks. The personalized approach helped me understand exactly where I was struggling and how to fix it.",
  },
  {
    name: "James K.",
    score: "MCAT 521",
    improvement: "13 point increase",
    text: "I improved 13 points on my MCAT thanks to 3X Prep's targeted approach. The tutor knew exactly how to address my weak spots.",
  },
  {
    name: "Maya P.",
    score: "SAT 1520",
    improvement: "280 point increase",
    text: "From 1310 to 1520 on my SAT—I couldn't believe it! The strategies and practice made all the difference for my dream schools.",
  },
];

export function TestimonialsSection({
  testimonials = DEFAULT_TESTIMONIALS,
}: {
  testimonials?: Testimonial[];
}) {
  if (import.meta.env.DEV) {
    // console.log("[TestimonialsSection] render", testimonials.length);
  }
  return (
    <section className="py-16 lg:py-24 bg-neutral-100/30">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
            Student <span className="highlight-gold">Success Stories</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="card-elegant p-6 lg:p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-secondary text-secondary"
                  />
                ))}
              </div>
              <blockquote className="text-neutral-700 font-body leading-relaxed mb-6">
                “{t.text}”
              </blockquote>
              <div className="space-y-1">
                <div className="font-semibold text-primary font-headline">
                  {t.name}
                </div>
                <div className="text-accent font-medium">{t.score}</div>
                <div className="text-sm text-secondary">{t.improvement}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
