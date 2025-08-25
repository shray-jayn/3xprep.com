import { Section } from "@/components/ui/section";
import { useConsoleTrace } from "@/hooks/useConsoleTrace";
import successCelebration from "@/assets/success-celebration.jpg";

interface ExamTestimonialProps {
  examName: string;
  cityName: string;
}

export const ExamTestimonial = ({ examName, cityName }: ExamTestimonialProps) => {
  useConsoleTrace("ExamTestimonial", { examName, cityName });

  const testimonials = [
    {
      quote: "My score improved by 15 points in just 8 weeks. The personalized approach made all the difference.",
      author: "Priya S.",
      details: `${examName} Student, ${cityName}`,
      score: "175"
    },
    {
      quote: "The tutors understood exactly how to motivate me and target my specific challenges. Incredible results!",
      author: "Rahul M.",
      details: `${examName} Student, ${cityName}`,
      score: "520"
    },
    {
      quote: "I never thought I could achieve such a high score. The structured plan and support were amazing.",
      author: "Sarah L.",
      details: `${examName} Student, ${cityName}`,
      score: "1580"
    }
  ];

  // Select testimonial based on exam type
  const getTestimonialByExam = (examName: string) => {
    if (examName === "LSAT") return testimonials[0];
    if (examName === "MCAT") return testimonials[1];
    return testimonials[2]; // SAT
  };

  const testimonial = getTestimonialByExam(examName);

  return (
    <Section className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-grid opacity-50"></div>
      
      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="max-w-2xl">
            <div className="mb-8">
              <div className="text-6xl text-secondary mb-4">"</div>
              <blockquote className="text-2xl lg:text-3xl text-primary font-body leading-relaxed mb-8 italic">
                {testimonial.quote}
              </blockquote>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <cite className="text-xl font-semibold text-primary font-headline not-italic">
                  — {testimonial.author}
                </cite>
                <p className="text-muted-foreground font-body mt-1">
                  {testimonial.details}
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary font-display mb-1">
                  {testimonial.score}
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  Final Score
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-accent/5 rounded-2xl border border-accent/20">
              <p className="text-muted-foreground font-body text-sm italic">
                "The comprehensive approach and personalized attention at 3X Prep transformed my understanding of the {examName}. 
                Every session was tailored to my specific needs, and the results speak for themselves."
              </p>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative">
          <div className="relative group">
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="absolute top-4 left-4 w-24 h-24 bg-secondary/20 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-32 h-32 bg-accent/20 rounded-full"></div>
            
            <img
              src={successCelebration}
              alt={`Successful ${examName} students celebrating their achievements in ${cityName}`}
              className="relative rounded-3xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            
            {/* Floating achievement badge */}
            <div className="absolute -bottom-6 -left-6 glass-strong rounded-2xl p-4 shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🏆</div>
                <div>
                  <div className="text-lg font-bold text-primary font-display">95%</div>
                  <div className="text-xs text-muted-foreground font-body">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};