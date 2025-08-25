import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button-enhanced";

export function TutoringHero() {
  if (import.meta.env.DEV){
    // console.log("[TutoringHero] render");
}
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-background via-neutral-100/50 to-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-display text-fluid-display font-bold text-primary mb-6 leading-tight">
            One-on-One Tutoring.{" "}
            <span className="highlight-gold">World-Class Tutors.</span> Rapid
            Results.
          </h1>
          <p className="text-xl text-neutral-600 font-body mb-8 leading-relaxed">
            The nation's top tutors for LSAT, MCAT, and SAT. Personalized study
            plans designed to triple your prep—and your results.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/consultation">👉 Book a Free Consultation Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
