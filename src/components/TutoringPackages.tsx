import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Clock } from "lucide-react";
import { useState } from "react";
import { TestType } from "@/data/site";

interface TutoringPackagesProps {
  onBookingClick?: () => void;
  test?: TestType;
  city?: string;
}

const packages = [
  {
    hours: 5,
    price: 999,
    features: ["Free 30-min Assessment"],
    popular: false
  },
  {
    hours: 10,
    price: 1899,
    payments: "or 3 payments of $633",
    features: ["Free 30-min Assessment"],
    popular: true
  },
  {
    hours: 20,
    price: 3699,
    payments: "or 6 payments of $617",
    features: ["Free 30-min Assessment"],
    popular: false
  },
  {
    hours: null,
    title: "Custom Plan",
    subtitle: "30+ hours · $184/hr",
    price: 5499,
    payments: "or 8 payments of $688",
    features: ["Free 30-min Assessment", "Custom hourly rate"],
    popular: false
  }
];

export const TutoringPackages = ({ onBookingClick, test, city }: TutoringPackagesProps) => {
  const handlePurchase = () => {
    if (onBookingClick) {
      onBookingClick();
    }
  };

  return (
    <section className="py-20">
      <div className="container max-w-screen-lg">
        <div className="text-center mb-16">
          <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
            Choose Your <span className="highlight-gold">Tutoring Package</span>
          </h2>
          <p className="text-xl text-neutral-600 font-body max-w-3xl mx-auto">
            Flexible options designed to fit your schedule and budget. Every package includes our elite tutors and personalized approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <Card key={index} className={`card-elegant p-6 text-center relative ${pkg.popular ? 'ring-2 ring-accent ring-opacity-50 scale-105' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary mb-2 font-headline">
                  {pkg.title || `${pkg.hours} Hours`}
                </h3>
                {pkg.subtitle && (
                  <p className="text-sm text-neutral-600 font-body">{pkg.subtitle}</p>
                )}
              </div>
              
              <div className="text-3xl font-bold text-primary mb-2 font-display">
                ${pkg.price.toLocaleString()}
              </div>
              {pkg.payments && (
                <p className="text-xs text-neutral-500 mb-6">{pkg.payments}</p>
              )}
              
              <div className="space-y-2 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <p key={featureIndex} className="text-sm text-neutral-600 font-body">
                    ✓ {feature}
                  </p>
                ))}
              </div>
              
              <Button 
                variant={pkg.popular ? "default" : "outline"} 
                className="w-full"
                onClick={handlePurchase}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center bg-neutral-100/50 rounded-2xl p-8">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="h-6 w-6 text-accent mr-2" />
            <span className="font-semibold text-primary font-headline">Not sure how many hours you need?</span>
          </div>
          <p className="text-neutral-600 font-body mb-4">
            Use our Study Plan Calculator based on your test date and schedule.
          </p>
          <div className="flex items-center justify-center text-sm text-neutral-500">
            <Clock className="h-4 w-4 mr-2" />
            <span>Most students see significant improvement in 10-20 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};