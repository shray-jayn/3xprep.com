import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button-enhanced"
import { CheckCircle, PlayCircle, BarChart3, BookOpen } from "lucide-react"

const features = [
  {
    icon: PlayCircle,
    title: "Crystal-Clear Video Explanations",
    description: "Every question explained by expert tutors with step-by-step breakdowns"
  },
  {
    icon: BookOpen,
    title: "Comprehensive Written Solutions", 
    description: "Detailed written explanations you can reference anytime, anywhere"
  },
  {
    icon: BarChart3,
    title: "Adaptive Practice Drills",
    description: "AI-powered drills that adjust to your performance and target weak spots"
  },
  {
    icon: CheckCircle,
    title: "Performance Analytics",
    description: "Deep insights into your progress with actionable improvement recommendations"
  }
]

export const Explainer = () => {
  return (
    <section className="py-16 lg:py-24 bg-neutral-100/30">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual/Mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Interface Mockup */}
              <div className="bg-white rounded-2xl shadow-elegant p-6 lg:p-8">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-primary font-headline">Question Analysis</div>
                    <div className="text-sm text-neutral-500">LSAT Logic Games</div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full w-3/4"></div>
                  </div>
                  
                  {/* Question Preview */}
                  <div className="space-y-4">
                    <div className="bg-neutral-100 rounded-lg p-4">
                      <p className="text-sm text-neutral-700 font-body">
                        "Seven singers—F, G, H, I, J, K, and L—will perform in a concert..."
                      </p>
                    </div>
                    
                    {/* Video Player Mockup */}
                    <div className="relative bg-gradient-to-br from-primary to-navy-deep rounded-lg aspect-video flex items-center justify-center">
                      <div className="text-center text-white">
                        <PlayCircle className="h-12 w-12 mx-auto mb-2 opacity-90" />
                        <p className="text-sm opacity-80">Expert Explanation</p>
                      </div>
                    </div>
                    
                    {/* Answer Choices */}
                    <div className="space-y-2">
                      {['A', 'B', 'C', 'D', 'E'].map((choice, i) => (
                        <div key={choice} className={`p-3 rounded-lg border-2 transition-colors ${
                          i === 2 ? 'border-accent bg-accent/10' : 'border-neutral-200 hover:border-neutral-300'
                        }`}>
                          <span className="text-sm font-medium">{choice}. Answer choice {i + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Analytics Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-card p-4 hover-lift">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <BarChart3 className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">92%</div>
                    <div className="text-xs text-neutral-600">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-display text-fluid-headline font-bold text-primary">
                Every Question. Every Answer. <span className="highlight-gold">Explained.</span>
              </h2>
              <p className="text-lg text-neutral-600 font-body leading-relaxed">
                3X Prep covers all exams with crystal-clear videos, comprehensive written explanations, adaptive practice drills, and detailed performance analytics. Never wonder "why" again.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1 font-headline">{feature.title}</h3>
                      <p className="text-neutral-600 font-body">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Button variant="accent" size="lg" asChild>
              <Link to="/courses">
                Discover Your Path to Higher Scores
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}