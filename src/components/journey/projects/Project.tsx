import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ProjectItem } from "@/interfaces/jsonTypes";
import { getProjectStatusText, getProjectText } from "@/utils/projectUtil";
import { Badge } from "@/components/ui/badge";
import ProjectContent from "./ProjectContent";

const Project = ({ project }: { project: ProjectItem }) => {
  const { status, variant } = getProjectStatusText(project.status);
  const publishedBlogCount = project.blogs.filter(
    (blog) => blog.published === true
  ).length;

  return (
    <AccordionItem value={project.projectId}>
      <AccordionTrigger className="data-[state=open]:text-primary">
        <div className="flex items-center justify-between font-display text-lg w-full">
          <div className="flex items-center gap-2 ">
            <span>{getProjectText(project.projectId)}</span>
            <span>-</span>
            <span>{project.name}</span>
          </div>
          <div className="flex items-center gap-4">
            {status === "Not Started" ||
            status === "Completed" ||
            publishedBlogCount === 0 ? (
              <></>
            ) : (
              <span className="font-body text-sm">
                {publishedBlogCount} Blog Published
              </span>
            )}
            <Badge variant={variant}>{status}</Badge>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <ProjectContent project={project} />
      </AccordionContent>
    </AccordionItem>
  );
};

export default Project;
