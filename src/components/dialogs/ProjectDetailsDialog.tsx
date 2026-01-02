import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { ProjectItem } from "@/interfaces/jsonTypes";
import { getTopicsCoveredText } from "@/utils/projectUtil";
import { BsDot } from "react-icons/bs";

const ProjectDetailsDialog = ({
  open,
  onOpenChange,
  project,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: ProjectItem;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-4xl">
        <DialogHeader>
          <DialogTitle className="text-primary font-display">
            Project Details
          </DialogTitle>
          <DialogDescription className="text-base font-body mt-2">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="font-display text-base">Project Purpose</div>
                <div>{project.purpose}</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-display text-base">Project Outcome</div>
                <div>{project.outcome}</div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col gap-2 w-1/2 ">
                  <div className="font-display text-base">
                    Execution Guidelines
                  </div>
                  <ul>
                    {project.executionGuidelines.map((guideline) => (
                      <li className="flex gap-2">
                        <BsDot className="text-primary" />
                        {guideline}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-display text-base">Success Criteria</div>
                  <ul>
                    {project.successCriteria.map((criteria) => (
                      <li className="flex gap-2">
                        <BsDot className="text-primary" />
                        {criteria}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col gap-2 w-1/2">
                  <div className="font-display text-base">
                    Architecture Principles
                  </div>
                  <ul>
                    {project.architecturePrinciples.map((principle) => (
                      <li className="flex gap-2">
                        <BsDot className="text-primary" />
                        {principle}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <div className="font-display text-base">Topics Covered</div>
                  <div>{getTopicsCoveredText(project.topicsCovered)}</div>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;
