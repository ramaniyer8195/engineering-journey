import type { Status } from "@/interfaces/jsonTypes";

export const getProjectText = (projectId: string): string => {
  const projectNumber = parseInt(projectId.replace("P", ""));
  return `Project ${projectNumber}`;
};

export const getProjectStatusText = (status: Status): {
  status: string;
  variant: "notStarted" | "inProgress" | "completed";
} => {
  if (status.completed) {
    return { status: "Completed", variant: "completed" };
  }

  if (status.started) {
    return { status: "In Progress", variant: "inProgress" };
  }

  return { status: "Not Started", variant: "notStarted" };
};

export const getTopicsCoveredText = (topics: string[]): string => {
  const topicString = topics.map((topic) => parseInt(topic.replace("T", ""))).join(", ");
  return `Topics ${topicString}. (Check learning tab for details)`;
};

export const getFeatureText = (featureId: string): string => {
  const featureNumber = parseInt(featureId.replace("F", ""));
  return `Feature ${featureNumber}`;
};

export const getUserFlowText = (flowId: string): string => {
  const flowNumber = parseInt(flowId.replace("UF", ""));
  return `User Flow ${flowNumber}`;
};
