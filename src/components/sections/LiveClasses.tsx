import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button-enhanced"
import { Calendar, Clock, Users, Video } from "lucide-react"

const upcomingClasses = [
  {
    title: "LSAT Logic Games Mastery",
    time: "Today, 7:00 PM EST",
    instructor: "Prof. Sarah Chen",
    participants: "24 students enrolled"
  },
  {
    title: "SAT Math: Advanced Strategies",
    time: "Tomorrow, 6:00 PM EST", 
    instructor: "Dr. Michael Torres",
    participants: "31 students enrolled"
  },
  {
    title: "MCAT Biology Deep Dive",
    time: "Wed, 8:00 PM EST",
    instructor: "Dr. Priya Patel",
    participants: "18 students enrolled"
  }
]

const features = [
  {
    icon: Calendar,
    title: "Thousands of Recorded Sessions",
    description: "Access our entire library of expert-led classes anytime"
  },
  {
    icon: Users,
    title: "Expert Tutors on Demand",
    description: "Learn from 99th percentile scorers who know how to teach"
  },
  {
    icon: Video,
    title: "Accountability Coaching",
    description: "Stay on track with personalized guidance and check-ins"
  }
]

export const LiveClasses = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Calendar Widget */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-elegant p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-primary font-headline">Upcoming Live Classes</h3>
                <Calendar className="h-5 w-5 text-accent" />
              </div>
              
              <div className="space-y-4">
                {upcomingClasses.map((class_, index) => (
                  <div key={index} className="border border-neutral-200 rounded-lg p-4 hover:border-accent/50 transition-colors cursor-pointer hover-lift">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-primary text-sm font-headline">{class_.title}</h4>
                      <div className="flex items-center text-xs text-accent">
                        <Clock className="h-3 w-3 mr-1" />
                        Live
                      </div>
                    </div>
                    <p className="text-sm text-neutral-600 mb-1">{class_.time}</p>
                    <p className="text-sm text-neutral-500">{class_.instructor}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-neutral-500">{class_.participants}</span>
                      <Button variant="ghost" size="sm">Join</Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-6">
                View Full Schedule
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-display text-fluid-headline font-bold text-primary">
                Learn Live. <span className="highlight-gold">Learn Smarter.</span>
              </h2>
              <p className="text-lg text-neutral-600 font-body leading-relaxed">
                Join live interactive sessions with expert instructors, access thousands of recorded classes, and get the accountability coaching you need to stay motivated and on track.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1 font-headline">{feature.title}</h3>
                      <p className="text-neutral-600 font-body">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Button variant="primary" size="lg" asChild>
              <Link to="/classes">
                See Class Options
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}