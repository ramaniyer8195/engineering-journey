import type { LearningItem, ProjectItem } from "@/interfaces/jsonTypes";
import learningDataJson from "../assets/learning_data.json";
import projectsChecklistJson from "../assets/project_checklist.json";

export const learningData: LearningItem[] = learningDataJson;
export const projectsChecklist: ProjectItem[] = projectsChecklistJson;