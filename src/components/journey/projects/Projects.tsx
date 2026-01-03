import { Accordion } from "@/components/ui/accordion";
import { projectsChecklist } from "@/data/jsonData";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full" defaultValue="">
        {projectsChecklist.map((project) => (
          <Project project={project} key={project.projectId} />
        ))}
      </Accordion>
    </div>
  );
};

export default Projects;
