import { PageShell } from "@/components/layout/PageShell";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { useNavigate } from "react-router-dom";

// Modular sections
import { TutoringHero } from "@/components/sections/TutoringHero";
import { TutoringPackagesSection } from "@/components/sections/TutoringPackagesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TutorsGridSection } from "@/components/sections/TutorsGridSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Tutoring() {
  const navigate = useNavigate();
  if (import.meta.env.DEV) {
    // console.log("[Tutoring] render");
  }
  return (
    <PageShell
      title="One-on-One Tutoring — 3X Prep"
      description="World-class 1:1 tutoring for LSAT, MCAT, and SAT. Personalized study plans designed to triple your prep — and your results."
      canonical="https://3xprep.com/tutoring"
    >
      {/* Hero */}
      <TutoringHero />

      {/* Packages & Pricing */}
      <TutoringPackagesSection />

      {/* Our Process */}
      <ProcessSection />

      {/* Why Choose Us */}
      <WhyChooseSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Tutors */}
      <TutorsGridSection />

      {/* FAQs */}
      <FAQSection />

      {/* Final CTA */}
      <FinalCTA
        title="🎓 Ready to Triple Your Prep?"
        description="Book your free consultation today and start your journey to your dream score."
        buttonText="Book Free Consultation"
        onButtonClick={() => navigate("/consultation")}
      />
    </PageShell>
  );
}
