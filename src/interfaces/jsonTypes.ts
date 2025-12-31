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


