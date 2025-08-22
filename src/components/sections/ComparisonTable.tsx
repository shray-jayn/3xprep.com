import { Check, X, Star } from "lucide-react"
import { Button } from "@/components/ui/button-enhanced"
import { Link } from "react-router-dom"

const features = [
  {
    category: "Content & Practice",
    items: [
      { name: "Video Explanations", core: true, live: true, coach: true },
      { name: "Written Solutions", core: true, live: true, coach: true },
      { name: "Practice Questions", core: true, live: true, coach: true },
      { name: "Full-Length Practice Tests", core: true, live: true, coach: true },
      { name: "Advanced Drills", core: false, live: true, coach: true }
    ]
  },
  {
    category: "Live Instruction",
    items: [
      { name: "Live Classes", core: false, live: true, coach: true },
      { name: "Recorded Sessions Library", core: false, live: true, coach: true },
      { name: "Expert Q&A Sessions", core: false, live: true, coach: true },
      { name: "1-on-1 Tutoring", core: false, live: false, coach: true },
      { name: "Personalized Study Plans", core: false, live: false, coach: true }
    ]
  },
  {
    category: "Analytics & Support", 
    items: [
      { name: "Progress Tracking", core: true, live: true, coach: true },
      { name: "Performance Analytics", core: "basic", live: true, coach: true },
      { name: "Study Recommendations", core: false, live: true, coach: true },
      { name: "Accountability Coaching", core: false, live: false, coach: true },
      { name: "Priority Support", core: false, live: false, coach: true }
    ]
  }
]

const plans = [
  {
    name: "Core",
    price: "$49",
    period: "/month",
    description: "Self-guided prep",
    popular: false,
    key: "core"
  },
  {
    name: "Live", 
    price: "$149",
    period: "/month",
    description: "Core + live classes",
    popular: true,
    key: "live"
  },
  {
    name: "Coach",
    price: "$299", 
    period: "/month",
    description: "Live + 1-on-1 tutoring",
    popular: false,
    key: "coach"
  }
]

const FeatureCell = ({ value }: { value: boolean | string }) => {
  if (value === true) {
    return <Check className="h-5 w-5 text-accent mx-auto" />
  } else if (value === false) {
    return <X className="h-5 w-5 text-neutral-300 mx-auto" />
  } else if (typeof value === 'string') {
    return <span className="text-sm text-neutral-600 capitalize">{value}</span>
  }
  return null
}

export const ComparisonTable = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
            What's Inside <span className="highlight-gold">3X Prep</span>?
          </h2>
          <p className="text-xl text-neutral-600 font-body max-w-3xl mx-auto leading-relaxed">
            Compare our plans to find the perfect level of support for your test prep journey.
          </p>
        </div>

        {/* Mobile-friendly Cards (visible on small screens) */}
        <div className="block lg:hidden space-y-6">
          {plans.map((plan) => (
            <div key={plan.key} className={`card-elegant p-6 ${plan.popular ? 'ring-2 ring-accent ring-opacity-50' : ''}`}>
              {plan.popular && (
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-current" />
                    <span>Recommended</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-primary mb-2 font-headline">{plan.name}</h3>
                <p className="text-neutral-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-3xl font-bold text-primary font-display">{plan.price}</span>
                  <span className="text-neutral-500 ml-1">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4">
                {features.map((category) => (
                  <div key={category.category}>
                    <h4 className="font-semibold text-primary mb-2 text-sm font-headline">{category.category}</h4>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li key={item.name} className="flex items-center justify-between text-sm">
                          <span className="text-neutral-700">{item.name}</span>
                          <FeatureCell value={item[plan.key as keyof typeof item]} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Button variant={plan.popular ? "primary" : "outline"} className="w-full mt-6" asChild>
                <Link to="/pricing">Choose {plan.name}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Desktop Table (hidden on small screens) */}
        <div className="hidden lg:block overflow-x-auto">
          <div className="bg-white rounded-2xl shadow-elegant overflow-hidden min-w-[800px]">
            {/* Header Row */}
            <div className="grid grid-cols-4 border-b border-neutral-200">
              <div className="p-6">
                <h3 className="font-semibold text-primary font-headline">Features</h3>
              </div>
              {plans.map((plan) => (
                <div key={plan.key} className={`p-6 text-center relative ${plan.popular ? 'bg-accent/5' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span>Recommended</span>
                      </div>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-primary mb-2 font-headline">{plan.name}</h3>
                  <p className="text-neutral-600 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-2xl font-bold text-primary font-display">{plan.price}</span>
                    <span className="text-neutral-500 ml-1 text-sm">{plan.period}</span>
                  </div>
                  <Button variant={plan.popular ? "primary" : "outline"} size="sm" asChild>
                    <Link to="/pricing">Choose Plan</Link>
                  </Button>
                </div>
              ))}
            </div>

            {/* Feature Rows */}
            {features.map((category, categoryIndex) => (
              <div key={category.category}>
                {/* Category Header */}
                <div className="grid grid-cols-4 bg-neutral-50 border-b border-neutral-200">
                  <div className="p-4">
                    <h4 className="font-semibold text-primary text-sm font-headline">{category.category}</h4>
                  </div>
                  <div className="col-span-3"></div>
                </div>
                
                {/* Category Features */}
                {category.items.map((item, itemIndex) => (
                  <div key={item.name} className="grid grid-cols-4 border-b border-neutral-100 hover:bg-neutral-50/50 transition-colors">
                    <div className="p-4">
                      <span className="text-neutral-700 text-sm font-body">{item.name}</span>
                    </div>
                    <div className="p-4 text-center">
                      <FeatureCell value={item.core} />
                    </div>
                    <div className="p-4 text-center bg-accent/5">
                      <FeatureCell value={item.live} />
                    </div>
                    <div className="p-4 text-center">
                      <FeatureCell value={item.coach} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button variant="accent" size="lg" asChild>
            <Link to="/pricing">
              View Full Pricing & Start Your Journey
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}