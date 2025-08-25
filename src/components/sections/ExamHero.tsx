import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { useConsoleTrace } from "@/hooks/useConsoleTrace";
import premiumStudyHero from "@/assets/premium-study-hero.jpg";
import examPrepWorkspace from "@/assets/exam-prep-workspace.jpg";

interface ExamHeroProps {
  examName: string;
  examIcon: string;
  cityName: string;
  improvement: string;
  targetScore: string;
  onBookingClick: () => void;
}

export const ExamHero = ({
  examName,
  examIcon,
  cityName,
  improvement,
  targetScore,
  onBookingClick
}: ExamHeroProps) => {
  useConsoleTrace("ExamHero", { examName, cityName });

  return (
    <Section variant="gradient" className="relative overflow-hidden bg-premium-radial min-h-[90vh] flex items-center">
      {/* Floating background elements */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-6xl animate-pulse">{examIcon}</div>
            <div className="h-16 w-1 bg-gradient-to-b from-secondary to-accent rounded-full"></div>
          </div>

          <h1 className="text-display text-fluid-display font-bold text-primary leading-tight">
            Elite{" "}
            <span className="highlight-gold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary to-accent">
              {examName} Prep
            </span>{" "}
            in {cityName}
          </h1>

          <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-lg">
            Transform your {examName} score with our proven methodology. Join thousands of students who've achieved their dream scores with personalized coaching.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              size="lg"
              onClick={onBookingClick}
              className="group font-semibold px-8 py-4 text-lg bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="mr-2">📞</span>
              Book Free Assessment
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group font-semibold px-8 py-4 text-lg border-2 border-accent/30 hover:border-accent hover:bg-accent/5"
            >
              <span className="mr-2">📊</span>
              View Success Stories
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center group cursor-default">
              <div className="text-3xl font-bold text-primary font-display mb-2 group-hover:scale-110 transition-transform duration-200">
                {improvement}
              </div>
              <div className="text-sm text-muted-foreground font-body">
                Avg. Improvement
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl font-bold text-primary font-display mb-2 group-hover:scale-110 transition-transform duration-200">
                {targetScore}
              </div>
              <div className="text-sm text-muted-foreground font-body">
                Target Scores
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl font-bold text-primary font-display mb-2 group-hover:scale-110 transition-transform duration-200">
                99th
              </div>
              <div className="text-sm text-muted-foreground font-body">
                Percentile Tutors
              </div>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in [animation-delay:200ms]">
          {/* Main hero image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 [animation-delay:100ms]"></div>
            <img
              src={premiumStudyHero}
              alt={`Elite ${examName} preparation in ${cityName} - Students achieving success`}
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500 border-4 border-white/50"
              loading="eager"
            />
          </div>
          
          {/* Floating workspace card */}
          <div className="absolute -bottom-8 -left-8 w-48 h-32 rounded-2xl overflow-hidden shadow-xl glass-strong hover:scale-105 transition-all duration-300">
            <img
              src={examPrepWorkspace}
              alt={`${examName} study materials and workspace`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
              <span className="text-white text-sm font-semibold font-body">Study Materials</span>
            </div>
          </div>
          
          {/* Floating stats badge */}
          <div className="absolute -top-4 -right-4 glass-strong rounded-2xl p-4 shadow-lg hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary font-display mb-1">500+</div>
              <div className="text-xs text-muted-foreground font-body">Students Coached</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};