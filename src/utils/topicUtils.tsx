import type { Artifact, SubTask } from "@/interfaces/jsonTypes";
import type { JSX } from "react";
import { RiGitRepositoryFill } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";
import { FaNoteSticky } from "react-icons/fa6";
import { PiCircle, PiCircleFill, PiCircleHalfFill } from "react-icons/pi";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const getTopicText = (topicId: string): string => {
  const topicNumber = parseInt(topicId.replace("T", ""));
  return `Topic ${topicNumber}`;
};

export const getSubTaskText = (subTaskId: string): string => {
  const subTaskNumber = parseInt(subTaskId.split("-")[1].replace("ST", ""));
  return `Sub-Task ${subTaskNumber}`;
};

export const getStatusText = (
  status: string
): {
  status: string;
  variant:
    | "default"
    | "notStarted"
    | "inProgress"
    | "completed"
    | "practised"
    | "mastered";
} => {
  switch (status) {
    case "not-started":
      return { status: "Not Started", variant: "notStarted" };
    case "in-progress":
      return { status: "In Progress", variant: "inProgress" };
    case "completed":
      return { status: "Completed", variant: "completed" };
    case "practised":
      return { status: "Practised", variant: "practised" };
    case "mastered":
      return { status: "Mastered", variant: "mastered" };
    default:
      return { status: "Unknown", variant: "default" };
  }
};

export const getSubTaskDetailsText = (
  subTask: SubTask
): string | JSX.Element => {
  switch (subTask.status) {
    case "in-progress":
      return `${
        subTask.practiceTasks.filter((task) => task.completed).length
      }/${subTask.practiceTasks.length} Practice Tasks Completed`;
    case "practised":
      return `${
        subTask.masteryCriteria.filter((criteria) => criteria.mastered).length
      }/${subTask.masteryCriteria.length} Mastery Criteria Met`;
    case "mastered":
      return "Blog Yet To Be Published";
    case "completed":
      return (
        <a
          href={subTask.blog.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline font-display"
        >
          Read Blog
        </a>
      );
    case "not-started":
    default:
      return "";
  }
};

export const getStatusIcon = (status: string) => {
  switch (status) {
    case "not-started":
      return <PiCircle className="w-5 h-5 text-red-900" />;
    case "in-progress":
      return <PiCircleHalfFill className="w-5 h-5 text-yellow-900" />;
    case "completed":
      return <PiCircleFill className="w-5 h-5 text-green-900" />;
    default:
      return <></>;
  }
};

export const getArtifactsData = (artifact: Artifact) => {
  switch (artifact.type) {
    case "repo":
      return (
        <div className="flex items-center gap-2">
          <RiGitRepositoryFill className="w-5 h-5 text-primary" />
          {artifact.url === "" ? (
            <span className="capitalize">
              {artifact.label.split("-").join(" ")}
            </span>
          ) : (
            <a
              className="capitalize underline underline-offset-2 hover:text-primary"
              href={artifact.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {artifact.label.split("-").join(" ")}
            </a>
          )}
          <Tooltip>
            <TooltipTrigger>{getStatusIcon(artifact.status)}</TooltipTrigger>
            <TooltipContent>
              <p>{getStatusText(artifact.status).status}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      );
    case "doc":
      return (
        <div className="flex items-center gap-2">
          <IoIosDocument className="w-5 h-5 text-primary" />
          {artifact.url === "" ? (
            <span className="capitalize">
              {artifact.label.split("-").join(" ")}
            </span>
          ) : (
            <a
              className="capitalize underline underline-offset-2 hover:text-primary"
              href={artifact.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {artifact.label.split("-").join(" ")}
            </a>
          )}
          <Tooltip>
            <TooltipTrigger>{getStatusIcon(artifact.status)}</TooltipTrigger>
            <TooltipContent>
              <p>{getStatusText(artifact.status).status}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      );
    case "notes":
      return (
        <div className="flex items-center gap-2">
          <FaNoteSticky className="w-5 h-5 text-primary" />
          {artifact.url === "" ? (
            <span className="capitalize">
              {artifact.label.split("-").join(" ")}
            </span>
          ) : (
            <a
              className="capitalize underline underline-offset-2 hover:text-primary"
              href={artifact.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {artifact.label.split("-").join(" ")}
            </a>
          )}
          <Tooltip>
            <TooltipTrigger>{getStatusIcon(artifact.status)}</TooltipTrigger>
            <TooltipContent>
              <p>{getStatusText(artifact.status).status}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      );
    default:
      return <></>;
  }
};
