export const LOCATIONS = [
  {
    id: 1,
    city: "San Diego",
    slug: "mcat-lsat-sat-prep-tutoring",
    phone: "+1-619-555-0100",
    seo: {
      title: "3X Prep of San Diego — SAT · LSAT · MCAT Tutoring",
      description: "Elite 1:1 tutoring in San Diego. Book a free consultation or take a free diagnostic test. 99th percentile tutors, personalized study plans."
    }
  },
  {
    id: 2,
    city: "Riverside",
    slug: "mcat-lsat-sat-prep-tutoring",
    phone: "+1-951-555-0100",
    seo: {
      title: "3X Prep of Riverside — SAT · LSAT · MCAT Tutoring",
      description: "Elite 1:1 tutoring in Riverside. Book a free consultation or take a free diagnostic test. 99th percentile tutors, personalized study plans."
    }
  },
  {
    id: 3,
    city: "Orange County",
    slug: "mcat-lsat-sat-prep-tutoring",
    phone: "+1-714-555-0100",
    seo: {
      title: "3X Prep of Orange County — SAT · LSAT · MCAT Tutoring",
      description: "Elite 1:1 tutoring in Orange County. Book a free consultation or take a free diagnostic test. 99th percentile tutors, personalized study plans."
    }
  },
  {
    id: 4,
    city: "Los Angeles",
    slug: "mcat-lsat-sat-prep-tutoring",
    phone: "+1-323-555-0100",
    seo: {
      title: "3X Prep of Los Angeles — SAT · LSAT · MCAT Tutoring",
      description: "Elite 1:1 tutoring in Los Angeles. Book a free consultation or take a free diagnostic test. 99th percentile tutors, personalized study plans."
    }
  }
] as const;

export const TESTS = ["SAT", "LSAT", "MCAT"] as const;
export type TestType = typeof TESTS[number];

export interface Package {
  hours?: number;
  price: number;
  plan?: string;
  custom?: boolean;
  rate?: number;
}

export const PACKAGES: Record<TestType, Package[]> = {
  SAT: [
    { hours: 5, price: 999 },
    { hours: 10, price: 1899, plan: "3 x $633" },
    { hours: 20, price: 3699, plan: "6 x $617" },
    { custom: true, rate: 184, price: 5499, plan: "8 x $688" }
  ],
  LSAT: [
    { hours: 5, price: 1199 },
    { hours: 10, price: 2299, plan: "3 x $767" },
    { hours: 20, price: 4399, plan: "6 x $733" },
    { custom: true, rate: 219, price: 6599, plan: "8 x $825" }
  ],
  MCAT: [
    { hours: 5, price: 1299 },
    { hours: 10, price: 2499, plan: "3 x $833" },
    { hours: 20, price: 4799, plan: "6 x $800" },
    { custom: true, rate: 239, price: 7199, plan: "8 x $900" }
  ]
};

export const SITE_CONFIG = {
  name: "3X Prep",
  tagline: "3X the Prep. 3X Your Future.",
  description: "World-class tutoring for SAT, LSAT, and MCAT — designed for ambitious students who want top scores and elite futures.",
  url: "https://3xprep.com",
  supportEmail: "support@3xprep.com",
  supportPhone: "+1-855-3X-PREP1",
  social: {
    linkedin: "https://linkedin.com/company/3xprep",
    instagram: "https://instagram.com/3xprep",
    reddit: "https://reddit.com/r/3xprep",
    youtube: "https://youtube.com/@3xprep"
  }
};

export const EXTERNAL_LINKS = {
  diagnostics: {
    sat: "https://mysattutor.com/diagnostic",
    combined: "https://tutorone.ca/diagnostic"
  }
};