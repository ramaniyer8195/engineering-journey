import type { ProjectItem } from "@/interfaces/jsonTypes";
import { useState } from "react";
import FeatureBody from "./FeatureBody";
import ProjectDetailsDialog from "@/components/dialogs/ProjectDetailsDialog";
import TechStackDialog from "@/components/dialogs/TechStackDialog";
import UserFlowBody from "./UserFlowBody";
import BlogDialog from "@/components/dialogs/BlogDialog";

const ProjectContent = ({ project }: { project: ProjectItem }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [techStackOpen, setTechStackOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const publishedBlogCount = project.blogs.filter(
    (blog) => blog.published === true
  ).length;

  return (
    <div className="flex flex-col gap-4 px-6">
      <div>{project.details}</div>
      <div className="flex gap-4">
        <div
          className="font-display text-primary underline cursor-pointer w-fit"
          onClick={() => setDetailsOpen(true)}
        >
          View Details
        </div>
        <div
          className="font-display text-primary underline cursor-pointer w-fit"
          onClick={() => setTechStackOpen(true)}
        >
          View Tech Stack
        </div>
        {publishedBlogCount > 0 && (
          <div
            className="font-display text-primary underline cursor-pointer w-fit"
            onClick={() => setBlogOpen(true)}
          >
            View Blogs
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-display text-base">Features</div>
        <div>
          {project.features.map((feature) => (
            <FeatureBody feature={feature} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-display text-base">User Flows</div>
        <div>
          {project.userFlows.map((userFlow) => (
            <UserFlowBody userFlow={userFlow} />
          ))}
        </div>
      </div>
      <ProjectDetailsDialog
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
        project={project}
      />
      <TechStackDialog
        open={techStackOpen}
        onOpenChange={setTechStackOpen}
        project={project}
      />
      <BlogDialog
        open={blogOpen}
        onOpenChange={setBlogOpen}
        project={project}
      />
    </div>
  );
};

export default ProjectContent;
