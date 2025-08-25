import React from "react";
import { Button } from "@/components/ui/button-enhanced";
import { Calculator } from "lucide-react";

type PackageCard = {
  title: string;
  features: string[];
  price: string;
  payments: string | null;
  popular: boolean;
};

const DEFAULT_PACKAGES: PackageCard[] = [
  {
    title: "5 Hours",
    features: ["Free 30-min Assessment"],
    price: "$999",
    payments: null,
    popular: false,
  },
  {
    title: "10 Hours",
    features: ["Free 30-min Assessment"],
    price: "$1,899",
    payments: "or 3 payments of $633",
    popular: true,
  },
  {
    title: "20 Hours",
    features: ["Free 30-min Assessment"],
    price: "$3,699",
    payments: "or 6 payments of $617",
    popular: false,
  },
  {
    title: "Custom Plan",
    features: ["30+ hours · $184/hr"],
    price: "$5,499",
    payments: "or 8 payments of $688",
    popular: false,
  },
];

export function TutoringPackagesSection({
  packages = DEFAULT_PACKAGES,
}: {
  packages?: PackageCard[];
}) {
  if (import.meta.env.DEV){
    // console.log("[TutoringPackagesSection] render", packages.length);
}
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
            Choose Your <span className="highlight-gold">Tutoring Package</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative card-elegant p-6 text-center ${
                pkg.popular
                  ? "ring-2 ring-accent ring-opacity-50 scale-105"
                  : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <h3 className="text-xl font-bold text-primary mb-4 font-headline">
                {pkg.title}
              </h3>

              <div className="space-y-2 mb-6">
                {pkg.features.map((feature, i) => (
                  <p key={i} className="text-sm text-neutral-600 font-body">
                    {feature}
                  </p>
                ))}
              </div>

              <div className="text-3xl font-bold text-primary mb-2 font-display">
                {pkg.price}
              </div>
              {pkg.payments && (
                <p className="text-xs text-neutral-500 mb-6">{pkg.payments}</p>
              )}

              <Button
                variant={pkg.popular ? "primary" : "outline"}
                className="w-full"
                asChild
              >
                <a href="/consultation">Purchase</a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center bg-neutral-100/50 rounded-2xl p-8">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="h-6 w-6 text-accent mr-2" />
            <span className="font-semibold text-primary font-headline">
              Not sure how many hours you need?
            </span>
          </div>
          <p className="text-neutral-600 font-body">
            Calculate your recommended study plan based on your test date &
            schedule.
          </p>
        </div>
      </div>
    </section>
  );
}
