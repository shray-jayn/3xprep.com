import { CheckCircle, Target, Users, BookOpen, TrendingUp, Award } from "lucide-react";
import { Section } from "@/components/ui/section";
import { useConsoleTrace } from "@/hooks/useConsoleTrace";

interface ExamFeaturesProps {
  examName: string;
  cityName: string;
}

export const ExamFeatures = ({ examName, cityName }: ExamFeaturesProps) => {
  useConsoleTrace("ExamFeatures", { examName, cityName });

  const features = [
    {
      icon: Target,
      title: "Personalized Study Plans",
      description: `Custom-tailored ${examName} preparation strategies built specifically for your learning style and target score goals.`,
      gradient: "from-secondary to-secondary/80"
    },
    {
      icon: Users,
      title: "Expert Tutors",
      description: `Elite tutors with proven track records of helping students achieve exceptional ${examName} scores in ${cityName}.`,
      gradient: "from-accent to-accent/80"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Materials",
      description: `Access to premium study materials, practice tests, and resources specifically designed for ${examName} success.`,
      gradient: "from-primary to-primary/80"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Real-time performance analytics and weekly progress reports to keep you on track for your target score.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: `Our students consistently achieve top percentile scores, with average improvements that exceed national standards.`,
      gradient: "from-accent to-primary"
    },
    {
      icon: CheckCircle,
      title: "Flexible Scheduling",
      description: `Online and in-person sessions available across ${cityName}, with scheduling that fits your busy lifestyle.`,
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <Section variant="subtle" className="bg-premium-subtle">
      <div className="text-center mb-16">
        <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
          Why Choose <span className="highlight-gold">3X Prep</span> for {examName}?
        </h2>
        <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
          Our comprehensive approach combines personalized tutoring, proven methodologies, and cutting-edge resources to maximize your {examName} performance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div 
              key={index} 
              className="group card-elegant p-6 hover:shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-3 font-headline group-hover:text-accent transition-colors duration-200">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground font-body leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};