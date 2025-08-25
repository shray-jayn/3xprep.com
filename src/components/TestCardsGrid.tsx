import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TestType } from "@/data/site";

interface TestCardsGridProps {
  location: string;
}

const testData: Record<
  TestType,
  {
    title: string;
    description: string;
    icon: string;
  }
> = {
  LSAT: {
    title: "LSAT Prep",
    description:
      "Master the Law School Admission Test with personalized strategies and expert guidance. Average improvement: 11+ points.",
    icon: "⚖️",
  },
  MCAT: {
    title: "MCAT Prep",
    description:
      "Excel on the Medical College Admission Test with comprehensive content review and adaptive practice. Average improvement: 12+ points.",
    icon: "🏥",
  },
  SAT: {
    title: "SAT Prep",
    description:
      "Achieve your target SAT score with proven techniques and personalized study plans. Average improvement: 150+ points.",
    icon: "🎓",
  },
};

export const TestCardsGrid = ({ location }: TestCardsGridProps) => {
  const formatLocationSlug = (loc: string) => {
    return loc.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <section className="py-20">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
            Elite Test Prep in{" "}
            <span className="highlight-gold">{location}</span>
          </h2>
          <p className="text-xl text-neutral-600 font-body max-w-3xl mx-auto">
            Choose your test and start your journey to exceptional scores with
            our expert tutors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {(
            Object.entries(testData) as [
              TestType,
              (typeof testData)[TestType]
            ][]
          ).map(([test, data]) => (
            <Card
              key={test}
              className="card-elegant p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-6">{data.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-headline">
                Master the {test} in {location}
              </h3>
              <p className="text-neutral-600 font-body mb-8 leading-relaxed">
                {data.description}
              </p>
              <Button
                variant="outline"
                size="lg"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                asChild
              >
                <Link
                  to="/prep-tutoring"
                  state={{
                    exam: "LSAT", // "SAT" | "LSAT" | "MCAT"
                    examSlug: "sat", // "sat" | "lsat" | "mcat"
                    cityName: "China",
                    locationLabel: "India",
                  }}
                >
                  Explore {test} Tutoring
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
