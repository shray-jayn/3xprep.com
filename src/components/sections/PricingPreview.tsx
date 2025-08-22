import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button-enhanced";
import { Check, Star, ArrowRight } from "lucide-react";

type Plan = {
  name: string;
  description: string;
  monthly: number; // base monthly price
  features: string[];
  cta: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Core",
    description: "Self-guided prep with comprehensive resources",
    monthly: 49,
    features: [
      "Complete video library",
      "Written explanations",
      "Practice questions",
      "Progress tracking",
      "Basic analytics",
    ],
    cta: "Start Core",
  },
  {
    name: "Live",
    description: "Core + live classes and expert instruction",
    monthly: 149,
    features: [
      "Everything in Core",
      "Live interactive classes",
      "Recorded session library",
      "Advanced analytics",
      "Study plan recommendations",
      "Expert Q&A sessions",
    ],
    cta: "Start Live",
    popular: true,
  },
  {
    name: "Coach",
    description: "Live + premium 1-on-1 tutoring",
    monthly: 299,
    features: [
      "Everything in Live",
      "1-on-1 tutoring sessions",
      "Personalized study plans",
      "Accountability coaching",
      "Priority expert support",
      "Score guarantee",
    ],
    cta: "Start Coach",
  },
];

const money = (n: number) => `$${Math.round(n).toLocaleString()}`;

export const PricingPreview = () => {
  // false = Monthly, true = Annual (20% off)
  const [isAnnual, setIsAnnual] = useState(false);

  const priceFor = (monthly: number) => (isAnnual ? monthly * 0.8 : monthly);

  return (
    <section className="py-16 lg:py-24 bg-neutral-100/30">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
            Choose Your <span className="highlight-gold">Path</span>
          </h2>
          <p className="text-xl text-neutral-600 font-body max-w-3xl mx-auto leading-relaxed">
            From self-guided study to premium coaching, find the perfect level
            of support for your goals and timeline.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <span
              className={`text-sm ${
                !isAnnual ? "text-primary font-medium" : "text-neutral-600"
              }`}
            >
              Monthly
            </span>

            <button
              type="button"
              role="switch"
              aria-checked={isAnnual}
              onClick={() => setIsAnnual((v) => !v)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                isAnnual ? "bg-accent" : "bg-neutral-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>

            <span
              className={`text-sm font-medium ${
                isAnnual ? "text-primary" : "text-neutral-600"
              }`}
            >
              Annual <span className="text-accent">(Save 20%)</span>
            </span>
          </div>
          {isAnnual && (
            <p className="mt-2 text-xs text-neutral-600">
              Prices shown are per month, billed annually.
            </p>
          )}
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const price = priceFor(plan.monthly);
            return (
              <div
                key={plan.name}
                className={`relative card-elegant overflow-visible p-6 lg:p-8 ${
                  plan.popular ? "ring-2 ring-accent/50 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold shadow flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      <span>Recommended</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-primary mb-2 font-headline">
                    {plan.name}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4 font-body">
                    {plan.description}
                  </p>

                  <div className="flex flex-col items-center mb-4">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-primary font-display">
                        {money(price)}
                      </span>
                      <span className="text-neutral-500 ml-1">/month</span>
                    </div>
                    {isAnnual && (
                      <span className="mt-1 text-xs text-accent font-medium">
                        Billed annually
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700 font-body">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link to="/pricing">
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-4 font-body">
            Not sure which plan is right for you?
          </p>
          <Button variant="ghost" asChild>
            <Link to="/pricing">
              Compare All Plans & Features
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
