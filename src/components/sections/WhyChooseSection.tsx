import React from "react";
import { Users, Target, Shield, Calendar } from "lucide-react";

type Differentiator = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const DEFAULT_ITEMS: Differentiator[] = [
  {
    icon: Users,
    title: "Elite Tutors, Elite Results",
    description:
      "We only hire proven top scorers—then train them to teach at the highest level. Our tutors don't just know the content, they know how to teach it.",
  },
  {
    icon: Target,
    title: "Custom Tailored Study Plans",
    description:
      "You'll never wonder what to do next—we map out every drill, test, and session based on your unique needs and timeline.",
  },
  {
    icon: Shield,
    title: "Perfect Fit Guarantee",
    description:
      "Not satisfied after your first session? We'll rematch you with a different tutor or provide a full refund. Your success is our priority.",
  },
  {
    icon: Calendar,
    title: "Ultimate Flexibility",
    description:
      "Sessions scheduled around your life. Evenings, weekends, and last-minute changes—we adapt to your schedule.",
  },
];

export function WhyChooseSection({
  items = DEFAULT_ITEMS,
}: {
  items?: Differentiator[];
}) {
  if (import.meta.env.DEV) {
    // console.log("[WhyChooseSection] render", items.length);
  }
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
            Why Choose <span className="highlight-gold">3X Prep?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-4 font-headline">
                  {item.title}
                </h3>
                <p className="text-neutral-600 font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
