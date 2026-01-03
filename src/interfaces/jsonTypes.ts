// Learning Tabs Types

export interface LearningItem {
  id: string;
  title: string;
  parentTopic: string | null;
  status: string;
  priority: string;
  difficulty: string;
  details: string;
  projectsCoveredIn: string[];
  references: string[];
  subTasks: SubTask[];
  tracking: Tracking;
}

export interface SubTask {
  id: string;
  title: string;
  status: string;
  details: string;
  masteryCriteria: Criteria[];
  practiceTasks: PracticeTask[];
  artifacts: Artifact[];
  blog: Blog;
  references: string[];
  estimatedHours: number;
}

export interface Artifact {
  type: string;
  label: string;
  url: string;
  status: string;
}

export interface Criteria {
  criteria: string;
  mastered: boolean;
}

export interface PracticeTask {
  task: string;
  completed: boolean;
}

export interface Blog {
  title: string;
  gist: string;
  published: boolean;
  url: string;
}

export interface Tracking {
  confidence: number,
  lastReviewed: Date | null,
  notes: string
}

// Projects Tab Types

export interface ProjectItem {
  projectId: string;
  name: string;
  type: string;
  purpose: string;
  details: string;
  outcome: string;
  topicsCovered: string[];
  techStack: TechStack;
  architecturePrinciples: string[];
  features: Feature[];
  userFlows: UserFlow[];
  pages: Page[];
  blogs: Blog[];
  executionGuidelines: string[];
  successCriteria: string[];
  status: Status;
}

export interface Feature {
  featureId: string;
  name: string;
  description: string;
  topicsCovered: string[];
  implementationNotes: string[];
  pitfallsToAvoid: string[];
}

export interface UserFlow {
  flowId: string;
  name: string;
  steps: string[];
}

export interface Page {
  pageId: string;
  name: string;
  route: string;
  features: string[];
  topicsDemonstrated: string[];
}

export interface TechStack {
  frontend?: string[];
  backend?: string[];
  state?: string[];
  build?: string[];
  styling?: string[];
  database?: string[];
  api?: string[];
  auth?: string[];
  realtime?: string[];
  clientSdk?: string[];
  resilience?: string[];
  testing?: string[];
  tooling?: string[];
  ci_cd?: string[];
  infra?: string[];
  release?: string[];
  observability?: string[];
  storage?: string[];
  payments?: string[];
  backgroundJobs?: string[];
  cache?: string[];
  cloud?: string[];
  optional?: string[];
}

export interface Status {
  started: boolean;
  completed: boolean;
  lastUpdated: Date | null;
}

// Lab Tab Types
export interface LabItem {
  miniProjectId: string;
  name: string;
  type: string;
  purpose: string;
  details: string;
  outcome: string;
  topicsCovered: string[];
  techStack: TechStack;
  features: Feature[];
  blog: Blog;
  executionGuidelines: string[];
  successCriteria: string[];
  status: Status;
}

// LeetCode Tab Types
export interface CategoryItem {
  categoryId: string;
  details: string;
  name: string;
  targetCount: number;
  patterns: string[];
  systemDesignSkills: string[];
  problems: Problem[];
}

export interface Problem {
  id: string;
  title: string;
  difficulty: string;
  whyItMatters: string;
  whenToUse: string;
  link: string;
}

