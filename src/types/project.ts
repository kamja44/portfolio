export interface Project {
  id: number;
  title: string;
  description: string;
  stack: 'Front-End' | 'Full-Stack' | 'Back-End';
  image: string;
  techStack: string[];
  progressRate: string;
  duration: string;
  link: string;
  features: string[];
  team?: string[];
}

export type ProjectFilter = 'All' | 'Front-End' | 'Full-Stack' | 'Back-End';
