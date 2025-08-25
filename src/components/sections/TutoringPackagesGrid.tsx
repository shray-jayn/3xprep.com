import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Calculator } from "lucide-react";
import { useConsoleTrace } from "@/hooks/useConsoleTrace";

interface Package {
  title: string;
  features: string[];
  price: string;
  payments: string | null;
  popular: boolean;
}

interface TutoringPackagesGridProps {
  packages: Package[];
  onPurchase?: (packageTitle: string) => void;
}

export const TutoringPackagesGrid = ({ packages, onPurchase }: TutoringPackagesGridProps) => {
  useConsoleTrace("TutoringPackagesGrid", { packageCount: packages.length });

  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
          Choose Your <span className="highlight-gold">Tutoring Package</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`card-elegant p-6 text-center ${
              pkg.popular ? "ring-2 ring-accent ring-opacity-50 scale-105" : ""
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
              {pkg.features.map((feature, featureIndex) => (
                <p key={featureIndex} className="text-sm text-neutral-600 font-body">
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
              variant={pkg.popular ? "default" : "outline"}
              className="w-full"
              onClick={() => onPurchase?.(pkg.title)}
            >
              Purchase
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
          Calculate your recommended study plan based on your test date & schedule.
        </p>
      </div>
    </Section>
  );
};