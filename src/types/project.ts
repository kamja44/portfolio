export interface Project {
  id: number;
  title: string;
  description: string;
  stack: "Front-End" | "Full-Stack" | "Back-End" | "Open Source";
  image: string;
  techStack: string[];
  role?: string;
  impact: string;
  problem: string;
  decision: string;
  result: string;
  progressRate: string;
  duration: string;
  link: string;
  github?: string;
  features: string[];
  team?: string[];
  projectType: "Company" | "Side";
}

export type ProjectFilter =
  | "All"
  | "Front-End"
  | "Full-Stack"
  | "Back-End"
  | "Open Source";
