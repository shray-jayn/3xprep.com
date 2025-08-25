import { TestType } from "./site";

export const HERO_COPY = {
  default: {
    headline: "Elite Test Prep Tutoring",
    subheadline: "Personalized instruction from 99th percentile tutors. Proven results.",
    cta: "Book Free Consultation"
  },
  location: (city: string) => ({
    headline: `One-on-One Tutoring in ${city}. Elite Instructors. Proven Results.`,
    subheadline: `Top-rated SAT, LSAT, and MCAT tutoring personalized for students in ${city}. Custom study plans. Real score gains.`,
    cta: "📞 Book a Free Consultation Today"
  }),
  exam: (exam: TestType, city?: string) => {
    const locationText = city ? ` in ${city}` : "";
    return {
      headline: `Master the ${exam}${locationText}`,
      subheadline: `Expert ${exam} tutoring with personalized strategies and proven techniques. Average improvement: ${getExamImprovement(exam)}.`,
      cta: `Start ${exam} Prep Today`
    };
  }
};

export const SOCIAL_PROOF = {
  stats: [
    { value: "1000+", label: "Students Tutored" },
    { value: "15+", label: "Average Point Improvement" },
    { value: "99%", label: "Student Satisfaction" }
  ],
  testimonials: [
    {
      text: "The personalized approach helped me identify my weak spots and turn them into strengths.",
      author: "Sarah M.",
      exam: "SAT",
      score: "1520"
    },
    {
      text: "My tutor's expertise in logical reasoning was exactly what I needed to break through my plateau.",
      author: "Michael R.",
      exam: "LSAT",
      score: "172"
    },
    {
      text: "The comprehensive content review and practice tests prepared me perfectly for test day.",
      author: "Jessica L.",
      exam: "MCAT",
      score: "521"
    }
  ]
};

export const EXAM_DETAILS: Record<TestType, {
  description: string;
  features: string[];
  averageImprovement: string;
  icon: string;
}> = {
  SAT: {
    description: "Master the Law School Admission Test with personalized strategies and expert guidance.",
    features: ["Logical Reasoning Mastery", "Reading Comprehension", "Logic Games", "Analytical Writing"],
    averageImprovement: "11+ points",
    icon: "⚖️"
  },
  LSAT: {
    description: "Excel on the Medical College Admission Test with comprehensive content review and adaptive practice.",
    features: ["Science Knowledge", "Critical Thinking", "Problem Solving", "Research Analysis"],
    averageImprovement: "12+ points", 
    icon: "🏥"
  },
  MCAT: {
    description: "Achieve your target SAT score with proven techniques and personalized study plans.",
    features: ["Math Problem Solving", "Evidence-Based Reading", "Writing & Language", "Essay (Optional)"],
    averageImprovement: "150+ points",
    icon: "🎓"
  }
};

const getExamImprovement = (exam: TestType): string => {
  return EXAM_DETAILS[exam].averageImprovement;
};