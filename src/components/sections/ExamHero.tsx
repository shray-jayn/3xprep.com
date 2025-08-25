import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { useConsoleTrace } from "@/hooks/useConsoleTrace";
import premiumStudyHero from "@/assets/premium-study-hero.jpg";
import examPrepWorkspace from "@/assets/exam-prep-workspace.jpg";
import { useState } from "react";
import heroStudents from "@/assets/hero-students.jpg";

interface ExamHeroProps {
  examName: string;
  examIcon: string;
  cityName: string;
  improvement: string;
  targetScore: string;
  onBookingClick: () => void;
}

export const ExamHero = ({
  examName,
  examIcon,
  cityName,
  improvement,
  targetScore,
  onBookingClick
}: ExamHeroProps) => {
  useConsoleTrace("ExamHero", { examName, cityName });
  const [leadDialogOpen, setLeadDialogOpen] = useState(false);
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-background via-neutral-100/50 to-background overflow-hidden bg-pattern-grid ">
      <div className="container max-w-screen-xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="text-6xl mb-4">{examIcon}</div>

            <h1 className="text-display text-fluid-display font-bold text-primary leading-tight">
              Elite <span className="highlight-gold">{examName} Prep</span> in{" "}
              {cityName} – Book Your Free Assessment
            </h1>

            <p className="text-xl text-neutral-600 font-body leading-relaxed">
              Trusted by students across {cityName}, 3X Prep offers tailored{" "}
              {examName} tutoring to triple your results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => setLeadDialogOpen(true)}
                className="font-semibold px-8 py-3 text-lg"
              >
                📞 Book Free Assessment
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary font-display">
                  {examName}
                </div>
                <div className="text-sm text-neutral-600">Avg. Improvement</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary font-display">
                  {targetScore}
                </div>
                <div className="text-sm text-neutral-600">Target Scores</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary font-display">
                  99th
                </div>
                <div className="text-sm text-neutral-600">
                  Percentile Tutors
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-6"></div>
            <img
              src={heroStudents}
              alt={`Students preparing for ${examName} in ${cityName}`}
              className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};