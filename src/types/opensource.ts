export interface OpenSourceContribution {
  id: number;
  project: string;
  description: string;
  prs: PullRequest[];
  techStack: string[];
  color: string;
}

export interface PullRequest {
  number: number;
  title: string;
  description: string;
  status: "merged" | "in-progress" | "open";
  link: string;
}
