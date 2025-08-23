import { Link } from "react-router-dom"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button-enhanced"
import { Calculator, Users, Target, Shield, Star, ArrowRight, CheckCircle, Calendar } from "lucide-react"

const packages = [
  {
    title: "5 Hours",
    features: ["Free 30-min Assessment"],
    price: "$999",
    payments: null,
    popular: false
  },
  {
    title: "10 Hours", 
    features: ["Free 30-min Assessment"],
    price: "$1,899",
    payments: "or 3 payments of $633",
    popular: true
  },
  {
    title: "20 Hours",
    features: ["Free 30-min Assessment"], 
    price: "$3,699",
    payments: "or 6 payments of $617",
    popular: false
  },
  {
    title: "Custom Plan",
    features: ["30+ hours · $184/hr"],
    price: "$5,499",
    payments: "or 8 payments of $688", 
    popular: false
  }
]

const process = [
  {
    number: "01",
    title: "Elite Tutor Matching",
    description: "We match you with a top tutor — each scored 99th percentile (LSAT 175+, MCAT 520+, SAT 1550+), carefully vetted and trained to teach at the highest level."
  },
  {
    number: "02", 
    title: "Free Assessment & Strategy",
    description: "Free intro session and comprehensive assessment to discover your strengths, weaknesses, and biggest opportunities for score improvement."
  },
  {
    number: "03",
    title: "Personalized Study Plan",
    description: "Day-by-day roadmap tailored to your test date, score goals, and learning style. Never wonder what to study next."
  },
  {
    number: "04",
    title: "One-on-One Sessions",
    description: "Adaptive tutoring sessions that evolve based on your performance, focusing on your specific needs and maximizing every minute."
  },
  {
    number: "05",
    title: "Dramatic Score Gains",
    description: "Triple your prep efficiency and achieve remarkable improvements: 10+ LSAT points, 12+ MCAT points, 150+ SAT points."
  }
]

const differentiators = [
  {
    icon: Users,
    title: "Elite Tutors, Elite Results",
    description: "We only hire proven top scorers—then train them to teach at the highest level. Our tutors don't just know the content, they know how to teach it."
  },
  {
    icon: Target,
    title: "Custom Tailored Study Plans", 
    description: "You'll never wonder what to do next—we map out every drill, test, and session based on your unique needs and timeline."
  },
  {
    icon: Shield,
    title: "Perfect Fit Guarantee",
    description: "Not satisfied after your first session? We'll rematch you with a different tutor or provide a full refund. Your success is our priority."
  },
  {
    icon: Calendar,
    title: "Ultimate Flexibility",
    description: "Sessions scheduled around your life. Evenings, weekends, and last-minute changes—we adapt to your schedule."
  }
]

const testimonials = [
  {
    name: "Sarah L.",
    score: "LSAT 173",
    improvement: "11 point increase",
    text: "My LSAT jumped 11 points in just 8 weeks. The personalized approach helped me understand exactly where I was struggling and how to fix it."
  },
  {
    name: "James K.",
    score: "MCAT 521", 
    improvement: "13 point increase",
    text: "I improved 13 points on my MCAT thanks to 3X Prep's targeted approach. The tutor knew exactly how to address my weak spots."
  },
  {
    name: "Maya P.",
    score: "SAT 1520",
    improvement: "280 point increase", 
    text: "From 1310 to 1520 on my SAT—I couldn't believe it! The strategies and practice made all the difference for my dream schools."
  }
]

const tutors = [
  {
    name: "Emily R.",
    score: "LSAT 179",
    education: "Yale Law",
    image: "ER"
  },
  {
    name: "Daniel K.",
    score: "MCAT 523", 
    education: "Harvard Med",
    image: "DK"
  },
  {
    name: "Sophia M.",
    score: "SAT 1580",
    education: "Stanford Admit",
    image: "SM"
  },
  {
    name: "Marcus J.", 
    score: "LSAT 176",
    education: "Columbia Law",
    image: "MJ"
  },
  {
    name: "Priya C.",
    score: "MCAT 519",
    education: "Johns Hopkins",
    image: "PC"
  },
  {
    name: "Alex T.",
    score: "SAT 1570", 
    education: "MIT Admit",
    image: "AT"
  }
]

const faqs = [
  {
    question: "What happens after I purchase?",
    answer: "You'll receive a welcome email with next steps and intake form. We'll match you with the perfect tutor within 48 hours and schedule your free introductory session."
  },
  {
    question: "What's included in my package?",
    answer: "30-minute diagnostic session, personalized study plan, live 1-on-1 tutoring sessions, progress tracking, and ongoing accountability support."
  },
  {
    question: "Can I switch tutors if needed?",
    answer: "Absolutely! We want you to have the perfect fit. You can request a new tutor anytime during your program."
  },
  {
    question: "What's your refund policy?",
    answer: "Full refund within 14 days if you've used one session or less. We're confident in our tutors and want you to be completely satisfied."
  }
]

const Tutoring = () => {
  return (
    <div className="min-h-screen bg-background">

      <main>
        {/* Hero */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-background via-neutral-100/50 to-background">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-display text-fluid-display font-bold text-primary mb-6 leading-tight">
                One-on-One Tutoring. <span className="highlight-gold">World-Class Tutors.</span> Rapid Results.
              </h1>
              <p className="text-xl text-neutral-600 font-body mb-8 leading-relaxed">
                The nation's top tutors for LSAT, MCAT, and SAT. Personalized study plans designed to triple your prep—and your results.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/consultation">
                  👉 Book a Free Consultation Today
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Packages & Pricing */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
                Choose Your <span className="highlight-gold">Tutoring Package</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
              {packages.map((pkg, index) => (
                <div key={index} className={`card-elegant p-6 text-center ${pkg.popular ? 'ring-2 ring-accent ring-opacity-50 scale-105' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-primary mb-4 font-headline">{pkg.title}</h3>
                  
                  <div className="space-y-2 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <p key={featureIndex} className="text-sm text-neutral-600 font-body">{feature}</p>
                    ))}
                  </div>
                  
                  <div className="text-3xl font-bold text-primary mb-2 font-display">{pkg.price}</div>
                  {pkg.payments && (
                    <p className="text-xs text-neutral-500 mb-6">{pkg.payments}</p>
                  )}
                  
                  <Button variant={pkg.popular ? "primary" : "outline"} className="w-full">
                    Purchase
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center bg-neutral-100/50 rounded-2xl p-8">
              <div className="flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-accent mr-2" />
                <span className="font-semibold text-primary font-headline">Not sure how many hours you need?</span>
              </div>
              <p className="text-neutral-600 font-body">
                Calculate your recommended study plan based on your test date & schedule.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 lg:py-24 bg-neutral-100/30">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
                The <span className="highlight-gold">3X Prep Process</span>
              </h2>
            </div>

            <div className="space-y-12">
              {process.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg font-display">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-3 font-headline">{step.title}</h3>
                    <p className="text-neutral-600 font-body leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose 3X Prep */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
                Why Choose <span className="highlight-gold">3X Prep?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentiators.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-200">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-4 font-headline">{item.title}</h3>
                    <p className="text-neutral-600 font-body leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24 bg-neutral-100/30">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
                Student <span className="highlight-gold">Success Stories</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card-elegant p-6 lg:p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <blockquote className="text-neutral-700 font-body leading-relaxed mb-6">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="space-y-1">
                    <div className="font-semibold text-primary font-headline">{testimonial.name}</div>
                    <div className="text-accent font-medium">{testimonial.score}</div>
                    <div className="text-sm text-secondary">{testimonial.improvement}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Tutors */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
                Meet Our <span className="highlight-gold">Elite Tutors</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {tutors.map((tutor, index) => (
                <div key={index} className="card-elegant p-6 text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-navy-deep rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 font-display">
                    {tutor.image}
                  </div>
                  <h3 className="font-semibold text-primary mb-1 font-headline">{tutor.name}</h3>
                  <div className="text-accent font-medium mb-1">{tutor.score}</div>
                  <div className="text-sm text-neutral-600">{tutor.education}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg">
                Show More Tutors
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-neutral-100/30">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
                Frequently <span className="highlight-gold">Asked Questions</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card-elegant p-6">
                  <h3 className="font-semibold text-primary mb-3 font-headline">{faq.question}</h3>
                  <p className="text-neutral-600 font-body leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-navy-deep to-primary">
          <div className="container max-w-screen-xl mx-auto px-4 text-center">
            <h2 className="text-display text-fluid-display font-bold text-white mb-6 leading-tight">
              🎓 Ready to <span className="highlight-gold">Triple Your Prep</span>?
            </h2>
            <p className="text-xl text-white/90 font-body max-w-3xl mx-auto mb-8 leading-relaxed">
              Book your free consultation today and start your journey to your dream score.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/consultation">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default Tutoring