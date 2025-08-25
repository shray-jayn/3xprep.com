import { Section } from "@/components/ui/section";
import { SOCIAL_PROOF } from "@/data/copy";
import { useConsoleTrace } from "@/hooks/useConsoleTrace";

interface SocialProofStatsProps {
  cityName: string;
  title?: string;
}

export const SocialProofStats = ({ cityName, title }: SocialProofStatsProps) => {
  useConsoleTrace("SocialProofStats", { cityName, title });

  const defaultTitle = `Trusted by Students Across ${cityName}`;

  return (
    <Section variant="subtle">
      <div className="text-center mb-16">
        <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
          {title || defaultTitle}
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SOCIAL_PROOF.stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold text-primary mb-2 font-display">
              {stat.value}
            </div>
            <p className="text-neutral-600 font-body">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};