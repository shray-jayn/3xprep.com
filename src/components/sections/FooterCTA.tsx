import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button-enhanced"
import { ArrowRight, Sparkles } from "lucide-react"

export const FooterCTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-navy-deep to-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--secondary)/0.2),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.2),transparent_50%)] pointer-events-none" />
      
      <div className="container max-w-screen-xl mx-auto px-4 relative">
        <div className="text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-2xl mb-8">
            <Sparkles className="h-8 w-8 text-secondary" />
          </div>
          
          {/* Headline */}
          <div className="space-y-6">
            <h2 className="text-display text-fluid-display font-bold text-white leading-tight">
              Ready to <span className="highlight-gold">3X Your Future</span>?
            </h2>
            <p className="text-xl text-white/90 font-body max-w-3xl mx-auto leading-relaxed">
              Join the program trusted by students across SAT, LSAT, and MCAT. Transform your scores, unlock elite opportunities, and build the future you deserve.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button variant="hero" size="xl" asChild>
              <Link to="/get-started">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/free-trial">
                Try Free for 7 Days
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-12 text-white/70 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>No hidden fees or commitments</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}