import { SITE_CONFIG } from "@/data/site";

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  noIndex?: boolean;
}

export const createPageSEO = (props: SEOProps) => {
  const fullTitle = props.title.includes(SITE_CONFIG.name) 
    ? props.title 
    : `${props.title} | ${SITE_CONFIG.name}`;

  return {
    title: fullTitle,
    description: props.description,
    canonical: props.canonical || `${SITE_CONFIG.url}${window.location.pathname}`,
    noIndex: props.noIndex || false
  };
};

export const createLocationSEO = (cityName: string) => {
  return createPageSEO({
    title: `${SITE_CONFIG.name} of ${cityName} — SAT · LSAT · MCAT Tutoring`,
    description: `Elite 1:1 tutoring in ${cityName}. Book a free consultation or take a free diagnostic test. 99th percentile tutors, personalized study plans.`
  });
};

export const createExamSEO = (examType: string, cityName?: string) => {
  const locationText = cityName ? ` in ${cityName}` : "";
  return createPageSEO({
    title: `${examType} Prep Tutoring${locationText} — ${SITE_CONFIG.name}`,
    description: `Elite ${examType} tutoring${locationText}. Expert instructors, personalized study plans, proven results. Book your free consultation today.`
  });
};