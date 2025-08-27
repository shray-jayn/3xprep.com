import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TestType } from "@/data/site";

interface FAQGeneratorProps {
  exam?: TestType;
  location?: string;
}

const generateFAQs = (exam?: TestType, location?: string) => {
  const baseLocation = location || "your area";
  const examName = exam || "standardized test";
  
  const baseFAQs = [
    {
      question: `How much does ${examName} tutoring cost in ${location || "your area"}?`,
      answer: `Our ${examName} tutoring packages range from $999 for 5 hours to $5,499 for our custom 30+ hour plan. We offer flexible payment options including monthly installments. Every package includes a free 30-minute assessment and personalized study plan.`
    },
    {
      question: `Do you offer online ${examName} prep in ${location || "your area"}?`,
      answer: `Yes! We offer both online and in-person ${examName} tutoring throughout ${baseLocation}. Our online platform provides the same high-quality, personalized instruction with interactive whiteboards, screen sharing, and real-time collaboration tools.`
    },
    {
      question: `Can I start with a free trial in ${location || "your area"}?`,
      answer: `Absolutely! Every package includes a free 30-minute assessment session where we'll evaluate your current skills, identify areas for improvement, and create a personalized study plan. This helps ensure the perfect tutor match before you commit.`
    },
    {
      question: `What makes your ${examName} tutors different?`,
      answer: `Our tutors are all top scorers (99th percentile) who have been carefully vetted and trained in our proven teaching methodology. They don't just know the content they know how to teach it effectively and adapt to each student's learning style.`
    }
  ];

  if (exam) {
    const examSpecificFAQs = {
      LSAT: [
        {
          question: `How much can I realistically improve my LSAT score in ${baseLocation}?`,
          answer: "Our students typically see 8-15 point improvements, with many achieving 160+ scores. The exact improvement depends on your starting score, study commitment, and time available. During your free assessment, we'll provide a realistic score projection."
        }
      ],
      MCAT: [
        {
          question: `What MCAT score should I target for medical school?`,
          answer: "Most competitive medical schools look for MCAT scores of 510+ (80th percentile), with top-tier schools preferring 515+ (95th percentile). We'll help you set realistic targets based on your target schools and create a study plan to achieve them."
        }
      ],
      SAT: [
        {
          question: `When should I start SAT prep in ${baseLocation}?`,
          answer: "Ideally, start SAT prep 3-6 months before your target test date. This allows time for comprehensive content review, strategy development, and multiple practice tests. We can create accelerated plans for shorter timelines if needed."
        }
      ]
    };

    return [...baseFAQs, ...examSpecificFAQs[exam]];
  }

  return baseFAQs;
};

export const FAQGenerator = ({ exam, location }: FAQGeneratorProps) => {
  const faqs = generateFAQs(exam, location);

  return (
    <section className="py-20">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-display text-fluid-headline font-bold text-primary mb-6">
            Frequently <span className="highlight-gold">Asked Questions</span>
          </h2>
          <p className="text-xl text-neutral-600 font-body max-w-3xl mx-auto">
            Get answers to common questions about our tutoring programs and approach.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="card-elegant p-6">
                <AccordionTrigger className="text-left font-semibold text-primary font-headline hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 font-body leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};