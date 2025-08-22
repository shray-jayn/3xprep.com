import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button-enhanced"
import { Check, Star, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Core",
    description: "Self-guided prep with comprehensive resources",
    price: "$49",
    period: "/month",
    features: [
      "Complete video library",
      "Written explanations", 
      "Practice questions",
      "Progress tracking",
      "Basic analytics"
    ],
    cta: "Start Core",
    popular: false
  },
  {
    name: "Live",
    description: "Core + live classes and expert instruction",
    price: "$149", 
    period: "/month",
    features: [
      "Everything in Core",
      "Live interactive classes",
      "Recorded session library",
      "Advanced analytics",
      "Study plan recommendations",
      "Expert Q&A sessions"
    ],
    cta: "Start Live",
    popular: true
  },
  {
    name: "Coach",
    description: "Live + premium 1-on-1 tutoring",
    price: "$299",
    period: "/month", 
    features: [
      "Everything in Live",
      "1-on-1 tutoring sessions",
      "Personalized study plans",
      "Accountability coaching",
      "Priority expert support",
      "Score guarantee"
    ],
    cta: "Start Coach",
    popular: false
  }
]

export const PricingPreview = () => {
  return (
    <section className="py-16 lg:py-24 bg-neutral-100/30">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
            Choose Your <span className="highlight-gold">Path</span>
          </h2>
          <p className="text-xl text-neutral-600 font-body max-w-3xl mx-auto leading-relaxed">
            From self-guided study to premium coaching, find the perfect level of support for your goals and timeline.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <span className="text-sm text-neutral-600">Monthly</span>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-neutral-300 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
            </button>
            <span className="text-sm font-medium text-primary">Annual <span className="text-accent">(Save 20%)</span></span>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative card-elegant p-6 lg:p-8 ${plan.popular ? 'ring-2 ring-accent ring-opacity-50 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-current" />
                    <span>Recommended</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-primary mb-2 font-headline">{plan.name}</h3>
                <p className="text-neutral-600 text-sm mb-4 font-body">{plan.description}</p>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold text-primary font-display">{plan.price}</span>
                  <span className="text-neutral-500 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700 font-body">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "primary" : "outline"} 
                size="lg" 
                className="w-full"
                asChild
              >
                <Link to="/pricing">
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-4 font-body">
            Not sure which plan is right for you?
          </p>
          <Button variant="ghost" asChild>
            <Link to="/pricing">
              Compare All Plans & Features
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}