import type { LabItem, LearningItem, ProjectItem } from "@/interfaces/jsonTypes";
import learningDataJson from "../assets/learning_data.json";
import projectsChecklistJson from "../assets/project_checklist.json";
import labsChecklistJson from "../assets/labs_checklist.json";

export const learningData: LearningItem[] = learningDataJson;
export const projectsChecklist: ProjectItem[] = projectsChecklistJson;
export const labsChecklist: LabItem[] = labsChecklistJson;