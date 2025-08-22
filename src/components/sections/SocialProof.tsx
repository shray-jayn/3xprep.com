import { Star, Users, MessageSquare, Award } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    score: "LSAT 173",
    improvement: "1350 → 1540",
    text: "3X Prep's personalized approach helped me understand exactly where I was struggling. The analytics showed me my weak spots and the tutors knew exactly how to fix them.",
    avatar: "SC"
  },
  {
    name: "Marcus Johnson", 
    score: "MCAT 521",
    improvement: "507 → 521",
    text: "The depth of explanations is incredible. Every single question is broken down step-by-step. I finally understood the logic behind the answers, not just memorized them.",
    avatar: "MJ"
  },
  {
    name: "Priya Patel",
    score: "SAT 1560",
    improvement: "1280 → 1560", 
    text: "Going from average to elite felt impossible until 3X Prep. The live classes and 1-on-1 tutoring gave me the confidence and skills I needed for my dream schools.",
    avatar: "PP"
  }
]

const stats = [
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Rating",
    source: "from 2,500+ reviews"
  },
  {
    icon: Users,
    value: "50,000+",
    label: "Students Served",
    source: "across all programs"
  },
  {
    icon: MessageSquare,
    value: "98%",
    label: "Satisfaction Rate", 
    source: "would recommend to friends"
  },
  {
    icon: Award,
    value: "200+",
    label: "Avg Point Gain",
    source: "SAT score improvement"
  }
]

export const SocialProof = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
            Thousands of Students. One <span className="highlight-gold">3X Future.</span>
          </h2>
          <p className="text-xl text-neutral-600 font-body max-w-3xl mx-auto leading-relaxed">
            Join the community of ambitious students who've transformed their test scores and unlocked their dream futures.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-1 font-display">{stat.value}</div>
                <div className="text-sm font-semibold text-primary mb-1 font-headline">{stat.label}</div>
                <div className="text-xs text-neutral-500">{stat.source}</div>
              </div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-elegant p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-navy-deep rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-primary font-headline">{testimonial.name}</div>
                  <div className="text-sm text-accent font-medium">{testimonial.score}</div>
                </div>
              </div>
              
              <blockquote className="text-neutral-700 font-body leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <div className="text-sm font-medium text-secondary">
                  {testimonial.improvement}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-12 border-t border-neutral-200">
          <div className="text-center">
            <div className="text-sm font-medium text-neutral-600 mb-2">Featured on</div>
            <div className="flex items-center space-x-6 text-neutral-400">
              <div className="text-lg font-semibold">Reddit</div>
              <div className="text-lg font-semibold">Trustpilot</div>
              <div className="text-lg font-semibold">App Store</div>
              <div className="text-lg font-semibold">Google Play</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}