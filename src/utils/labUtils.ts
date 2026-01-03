import type { Status } from "@/interfaces/jsonTypes";

export const getLabText = (labId: string): string => {
  const labNumber = parseInt(labId.replace("MP", ""));
  return `Lab ${labNumber}`;
};

export const getLabStatusText = (status: Status): {
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

export const getFeatureText = (featureId: string): string => {
  const featureNumber = parseInt(featureId.split("-")[1].replace("F", ""));
  return `Feature ${featureNumber}`;
};