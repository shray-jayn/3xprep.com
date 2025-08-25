import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { useConsoleTrace } from "@/hooks/useConsoleTrace";
import premiumStudyHero from "@/assets/premium-study-hero.jpg";
import examPrepWorkspace from "@/assets/exam-prep-workspace.jpg";
import { MapPin, Star, Users, TrendingUp } from "lucide-react";

interface LocationHeroPremiumProps {
  cityName: string;
  onBookingClick: () => void;
}

export const LocationHeroPremium = ({ cityName, onBookingClick }: LocationHeroPremiumProps) => {
  useConsoleTrace("LocationHeroPremium", { cityName });

  const stats = [
    { icon: Users, value: "500+", label: "Students Coached" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
    { icon: MapPin, value: "15+", label: "Locations" }
  ];

  return (
    <Section variant="gradient" className="relative overflow-hidden bg-premium-radial min-h-[90vh] flex items-center">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-pattern-dots opacity-40"></div>
      <div className="absolute top-20 left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
              <MapPin className="h-5 w-5 text-secondary" />
              <span className="text-sm font-semibold text-secondary font-body">{cityName}</span>
            </div>
            <div className="h-12 w-1 bg-gradient-to-b from-secondary to-accent rounded-full"></div>
          </div>

          <h1 className="text-display text-fluid-display font-bold text-primary leading-tight">
            Elite{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary to-accent">
              Test Prep
            </span>{" "}
            Tutoring in {cityName}
          </h1>

          <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-lg">
            Transform your MCAT, LSAT, or SAT scores with personalized coaching from India's top-rated test prep specialists. 
            Join thousands of successful students in {cityName}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              size="lg"
              onClick={onBookingClick}
              className="group font-semibold px-8 py-4 text-lg bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="mr-2">📞</span>
              Book Free Consultation
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group font-semibold px-8 py-4 text-lg border-2 border-accent/30 hover:border-accent hover:bg-accent/5"
            >
              <span className="mr-2">🎯</span>
              Take Diagnostic Test
            </Button>
          </div>

          {/* Enhanced stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center group cursor-default p-4 rounded-2xl hover:bg-card/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="h-6 w-6 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
                  <div className="text-2xl font-bold text-primary font-display mb-1 group-hover:text-accent transition-colors duration-200">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-body">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative animate-fade-in [animation-delay:200ms]">
          {/* Enhanced main hero image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-700 [animation-delay:150ms]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl transform rotate-1 group-hover:rotate-4 transition-transform duration-500 [animation-delay:300ms]"></div>
            
            <img
              src={premiumStudyHero}
              alt={`Elite test preparation tutoring in ${cityName} - Students achieving academic excellence`}
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500 border-4 border-white/50"
              loading="eager"
            />
          </div>
          
          {/* Enhanced floating workspace card */}
          <div className="absolute -bottom-8 -left-8 w-52 h-36 rounded-2xl overflow-hidden shadow-xl glass-strong hover:scale-105 hover:rotate-2 transition-all duration-300 cursor-default">
            <img
              src={examPrepWorkspace}
              alt="Premium study materials and workspace setup"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
              <div>
                <span className="text-white text-sm font-semibold font-body block">Premium Materials</span>
                <span className="text-white/80 text-xs font-body">MCAT • LSAT • SAT</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced floating success badge */}
          <div className="absolute -top-4 -right-4 glass-strong rounded-2xl p-4 shadow-lg hover:scale-105 hover:-rotate-2 transition-all duration-300 cursor-default">
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary font-display mb-1">Top 1%</div>
              <div className="text-xs text-muted-foreground font-body">Tutors</div>
            </div>
          </div>
          
          {/* Additional floating element */}
          <div className="absolute top-1/3 -right-8 glass-subtle rounded-xl p-3 shadow-md hover:scale-105 transition-all duration-300 cursor-default">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-primary font-body">Live Sessions</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};