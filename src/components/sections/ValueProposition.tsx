import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button-enhanced"
import { BookOpen, Brain, Stethoscope, ArrowRight } from "lucide-react"

const pillars = [
  {
    icon: BookOpen,
    title: "SAT Mastery",
    description: "Maximize college admissions chances with proven strategies and expert tutoring that consistently delivers 200+ point improvements.",
    link: "/sat-tutoring",
    color: "text-secondary"
  },
  {
    icon: Brain,
    title: "LSAT Excellence", 
    description: "Crack law school admissions with top percentile tutors who average 175+ scores and know exactly how to get you there.",
    link: "/lsat-tutoring",
    color: "text-primary"
  },
  {
    icon: Stethoscope,
    title: "MCAT Precision",
    description: "Conquer the hardest exam in medicine with precision prep from tutors who scored 520+ and understand every pathway to success.",
    link: "/mcat-tutoring", 
    color: "text-accent"
  }
]

export const ValueProposition = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
            Why <span className="highlight-gold">3X Prep</span>?
          </h2>
          <p className="text-xl text-neutral-600 font-body max-w-3xl mx-auto leading-relaxed">
            Three pathways to academic excellence. One platform that delivers
            results beyond your expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="card-elegant p-8 text-center group cursor-pointer"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 mb-6 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon className={`h-8 w-8 ${pillar.color}`} />
                </div>

                <h3 className="text-xl font-semibold text-primary mb-4 font-headline">
                  {pillar.title}
                </h3>

                <p className="text-neutral-600 font-body leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <Button
                  variant="ghost"
                  className="group-hover:text-accent transition-colors"
                  asChild
                >
                  <Link to={pillar.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="accent" size="lg" asChild>
            <Link to="/tutoring-locations">
              Find Your Exam Track
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}