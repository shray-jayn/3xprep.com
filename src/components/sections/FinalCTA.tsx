import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { useConsoleTrace } from "@/hooks/useConsoleTrace";

interface FinalCTAProps {
  cityName?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick: () => void;
}

export const FinalCTA = ({ 
  cityName, 
  title, 
  description, 
  buttonText = "Get Started Today - It's Free!",
  onButtonClick 
}: FinalCTAProps) => {
  useConsoleTrace("FinalCTA", { cityName, title });

  const defaultTitle = cityName 
    ? `Ready to Start Your Success Story in ${cityName}?`
    : "Ready to Start Your Success Story?";
    
  const defaultDescription = cityName
    ? `Join hundreds of students in ${cityName} who have achieved their dream scores with 3X Prep.`
    : "Join thousands of students who have achieved their dream scores with 3X Prep.";

  return (
    <Section variant="dark">
      <div className="text-center">
        <h2 className="text-display text-fluid-display font-bold text-white mb-6">
          {title || defaultTitle}
        </h2>
        <p className="text-xl text-white/90 font-body max-w-3xl mx-auto mb-8">
          {description || defaultDescription}
        </p>
        <Button 
          variant="secondary" 
          size="lg"
          onClick={onButtonClick}
          className="font-semibold px-8 py-3 text-lg"
        >
          {buttonText}
        </Button>
      </div>
    </Section>
  );
};