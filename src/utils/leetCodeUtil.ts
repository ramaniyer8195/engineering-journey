import type { Problem } from "@/interfaces/jsonTypes";

export const getCategoryText = (categoryId: string): string => {
  const categoryNumber = parseInt(categoryId.replace("LC-C", ""));
  return `Category ${categoryNumber}`;
};

export const getProblemsText = (problems: Problem[]): string => {
  const easyCount = problems.filter((p) => p.difficulty === "easy").length;
  const mediumCount = problems.filter((p) => p.difficulty === "medium").length;
  const hardCount = problems.filter((p) => p.difficulty === "hard").length;

  return `Solved ${problems.length} problems (${easyCount !== 0 ? `${easyCount} Easy, ` : ""}${mediumCount !== 0 ? `${mediumCount} Medium, ` : ""}${hardCount !== 0 ? `${hardCount} Hard` : ""})`;
};