import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button-enhanced"
import { TrendingUp, Target, Brain, Zap } from "lucide-react"

export const Analytics = () => {
  return (
    <section className="py-16 lg:py-24 bg-neutral-100/30">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-display text-fluid-headline font-bold text-primary">
                Smarter Prep.{" "}
                <span className="highlight-gold">Data-Driven Results.</span>
              </h2>
              <p className="text-lg text-neutral-600 font-body leading-relaxed">
                Our advanced analytics track your progress, identify patterns,
                and deliver personalized recommendations that accelerate your
                improvement faster than traditional prep methods.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Performance Tracking",
                  description:
                    "Monitor progress across all question types and topics",
                },
                {
                  icon: Target,
                  title: "Targeted Drills",
                  description:
                    "AI identifies weak spots and creates custom practice",
                },
                {
                  icon: Brain,
                  title: "Learning Patterns",
                  description:
                    "Understand how you learn best for optimal study plans",
                },
                {
                  icon: Zap,
                  title: "Smart Recommendations",
                  description: "Get personalized next steps based on your data",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1 font-headline">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-neutral-600 font-body">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button variant="accent" size="lg" asChild>
              <Link to="/practice-tests">
                Discover Your Path to Higher Scores
              </Link>
            </Button>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-elegant p-6 lg:p-8">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-primary font-headline">
                  Performance Dashboard
                </h3>
                <div className="text-sm text-neutral-500">Last 30 days</div>
              </div>

              {/* Main Chart Area */}
              <div className="relative h-40 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                {/* Simulated Chart */}
                <div className="absolute inset-4">
                  <div className="w-full h-full relative">
                    {/* Chart lines */}
                    <svg className="w-full h-full" viewBox="0 0 300 120">
                      <polyline
                        points="0,100 50,85 100,70 150,60 200,45 250,35 300,25"
                        fill="none"
                        stroke="hsl(var(--accent))"
                        strokeWidth="3"
                        className="drop-shadow-sm"
                      />
                      <polyline
                        points="0,110 50,105 100,95 150,85 200,80 250,70 300,60"
                        fill="none"
                        stroke="hsl(var(--secondary))"
                        strokeWidth="2"
                        opacity="0.7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-2xl font-bold text-accent">+24%</div>
                  <div className="text-sm text-neutral-600">
                    Score Improvement
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-accent/5 rounded-lg">
                  <div className="text-lg font-bold text-accent">92%</div>
                  <div className="text-xs text-neutral-600">Accuracy</div>
                </div>
                <div className="text-center p-3 bg-secondary/5 rounded-lg">
                  <div className="text-lg font-bold text-secondary">156</div>
                  <div className="text-xs text-neutral-600">Questions</div>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg">
                  <div className="text-lg font-bold text-primary">18h</div>
                  <div className="text-xs text-neutral-600">Study Time</div>
                </div>
              </div>
            </div>

            {/* Floating Recommendation Card */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-card p-4 hover-lift max-w-xs">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary">
                    Next Focus Area
                  </h4>
                  <p className="text-xs text-neutral-600">
                    Practice reading comprehension for 20 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}