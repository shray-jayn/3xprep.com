import { Star, Users, MessageSquare, Award } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    score: "LSAT 173",
    improvement: "1350 → 1540",
    text: "3X Prep's personalized approach helped me understand exactly where I was struggling. The analytics showed me my weak spots and the tutors knew exactly how to fix them.",
    avatar: "SC",
  },
  {
    name: "Marcus Johnson",
    score: "MCAT 521",
    improvement: "507 → 521",
    text: "The depth of explanations is incredible. Every single question is broken down step-by-step. I finally understood the logic behind the answers, not just memorized them.",
    avatar: "MJ",
  },
  {
    name: "Priya Patel",
    score: "SAT 1560",
    improvement: "1280 → 1560",
    text: "Going from average to elite felt impossible until 3X Prep. The live classes and 1-on-1 tutoring gave me the confidence and skills I needed for my dream schools.",
    avatar: "PP",
  },
];

const stats = [
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Rating",
    source: "from 2,500+ reviews",
  },
  {
    icon: Users,
    value: "50,000+",
    label: "Students Served",
    source: "across all programs",
  },
  {
    icon: MessageSquare,
    value: "98%",
    label: "Satisfaction Rate",
    source: "would recommend to friends",
  },
  {
    icon: Award,
    value: "200+",
    label: "Avg Point Gain",
    source: "SAT score improvement",
  },
];

export const SocialProof = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
            Thousands of Students. One{" "}
            <span className="highlight-gold">3X Future.</span>
          </h2>
          <p className="text-xl text-neutral-600 font-body max-w-3xl mx-auto leading-relaxed">
            Join the community of ambitious students who've transformed their
            test scores and unlocked their dream futures.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-1 font-display">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-primary mb-1 font-headline">
                  {stat.label}
                </div>
                <div className="text-xs text-neutral-500">{stat.source}</div>
              </div>
            );
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
                  <div className="font-semibold text-primary font-headline">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-accent font-medium">
                    {testimonial.score}
                  </div>
                </div>
              </div>

              <blockquote className="text-neutral-700 font-body leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-secondary text-secondary"
                    />
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
        {/* <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-12 border-t border-neutral-200">
          <div className="text-center">
            <div className="text-sm font-medium text-neutral-600 mb-4">
              Featured on
            </div>
            <div className="flex items-center justify-center flex-wrap gap-8 text-neutral-400">
              <svg
                className="h-8 w-auto opacity-60 hover:opacity-80 transition-opacity"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .968-.786 1.754-1.754 1.754a1.754 1.754 0 0 1-1.754-1.754l-.004-.107c-.934.61-2.217.969-3.634.969-1.797 0-3.432-.498-4.432-1.352-.309.309-.73.491-1.207.491-.968 0-1.754-.786-1.754-1.754 0-.968.786-1.754 1.754-1.754.968 0 1.754.786 1.754 1.754l.004.107c.934-.61 2.217-.969 3.634-.969.417 0 .822.05 1.207.142l.914-4.279-.013-.011a1.25 1.25 0 0 1-1.207-1.249c0-.688.561-1.249 1.25-1.249z" />
              </svg>
              <svg
                className="h-8 w-auto opacity-60 hover:opacity-80 transition-opacity"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.002 0C5.373 0 0 5.373 0 12.002s5.373 12.002 12.002 12.002 12.002-5.373 12.002-12.002S18.631 0 12.002 0zm-1.99 17.77l-4.005-1.03.429-1.665 4.005 1.03-.429 1.665zm6.412-6.082c-.735.735-1.711 1.174-2.756 1.174s-2.021-.439-2.756-1.174c-.735-.735-1.174-1.711-1.174-2.756s.439-2.021 1.174-2.756c.735-.735 1.711-1.174 2.756-1.174s2.021.439 2.756 1.174c.735.735 1.174 1.711 1.174 2.756s-.439 2.021-1.174 2.756z" />
              </svg>
              <svg
                className="h-8 w-auto opacity-60 hover:opacity-80 transition-opacity"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <svg
                className="h-8 w-auto opacity-60 hover:opacity-80 transition-opacity"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
