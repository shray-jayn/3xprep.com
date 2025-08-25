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
    <Section className="relative min-h-[100vh] bg-gradient-to-br from-navy-deep via-primary to-navy-medium overflow-hidden">
      {/* Geometric background patterns */}
      <div className="absolute inset-0">
        {/* Large geometric shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-secondary/20 to-transparent rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/20 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 h-full flex items-center py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
          {/* Left content */}
          <div className="space-y-10">
            {/* Exam badge */}
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
              <div className="text-4xl">{examIcon}</div>
              <div>
                <span className="text-secondary font-semibold text-lg font-headline">{examName} Excellence</span>
                <p className="text-white/80 text-sm font-body">{cityName} Chapter</p>
              </div>
            </div>

            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-white font-display leading-tight">
                <span className="block text-4xl lg:text-5xl xl:text-6xl mb-2">Master the</span>
                <span className="block text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                  {examName}
                </span>
                <span className="block text-3xl lg:text-4xl xl:text-5xl mt-2 text-white/90">
                  with Elite Coaching
                </span>
              </h1>
              
              <p className="text-xl text-white/80 font-body leading-relaxed max-w-xl">
                Join the ranks of top scorers in {cityName}. Our proven methodology has helped thousands achieve scores in the {targetScore} range with an average improvement of {improvement}.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={onBookingClick}
                size="lg"
                className="group bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-primary font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                🎯 Start Free Assessment
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8 py-4 text-lg"
              >
                📈 Success Stories
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-6">
              {[
                { value: improvement, label: "Avg. Improvement", icon: "📊" },
                { value: "1000+", label: "Students Coached", icon: "👥" },
                { value: "99th", label: "Percentile Tutors", icon: "🏆" }
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-3 group cursor-default">
                  <div className="text-2xl">{stat.icon}</div>
                  <div>
                    <div className="text-2xl font-bold text-secondary font-display group-hover:text-accent transition-colors duration-200">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/70 font-body">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative flex justify-center items-center">
            {/* Central hero card */}
            <div className="relative w-80 h-96 group">
              {/* Animated background cards */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-700 backdrop-blur-sm border border-white/20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl -rotate-6 group-hover:-rotate-12 transition-transform duration-700 backdrop-blur-sm border border-white/20"></div>
              
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500 border-2 border-white/30">
                <img
                  src={premiumStudyHero}
                  alt={`Elite ${examName} preparation in ${cityName}`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:scale-105 transition-all duration-300 border border-white/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-display">{targetScore}</div>
                <div className="text-xs text-muted-foreground font-body">Target Score</div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-secondary to-accent rounded-2xl p-4 shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-white font-display">Live</div>
                <div className="text-xs text-white/90 font-body">Tutoring</div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-12 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-md hover:scale-105 transition-all duration-300 border border-white/30">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary font-body">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};