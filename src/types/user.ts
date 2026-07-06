export interface User {
  name: string;
  email: string;
  location: string;
  github: string;
  jobTitle: string;
  description: string;
  greeting: string;
  stats: Stat[];
  interests: string[];
}

export interface Stat {
  number: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  github: string;
}

export interface SocialLink {
  name: string;
  href: string;
}

export interface BrandOutcome {
  title: string;
  metric: string;
  description: string;
}
