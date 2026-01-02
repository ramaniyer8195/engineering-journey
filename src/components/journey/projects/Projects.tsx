import { Accordion } from "@/components/ui/accordion";
import { projectsChecklist } from "@/data/jsonData";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="h-[86vh] overflow-y-auto overflow-x-hidden pr-3">
      <Accordion type="single" collapsible className="w-full" defaultValue="">
        {projectsChecklist.map((project) => (
          <Project project={project} key={project.projectId} />
        ))}
      </Accordion>
    </div>
  );
};

export default Projects;
