import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { SubTask } from "@/interfaces/jsonTypes";
import { getArtifactsData, getSubTaskText } from "@/utils/topicUtils";
import { Checkbox } from "@/components/ui/checkbox";

const SubTaskDetailsDialog = ({
  open,
  onOpenChange,
  subTask,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  subTask: SubTask;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-primary font-display flex items-center gap-2">
            <span>{getSubTaskText(subTask.id)}</span>
            <span>-</span>
            <span>{subTask.title}</span>
          </DialogTitle>
          <DialogDescription className="text-base font-body mt-2">
            <div className="flex flex-col gap-6">
              <p>{subTask.details}</p>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <p className="font-display text-primary">Practice Tasks</p>
                  <ul className="mt-2">
                    {subTask.practiceTasks.map((task) => (
                      <li key={task.task} className="flex gap-2">
                        <span>
                          <Checkbox disabled checked={task.completed} />
                        </span>
                        <span>{task.task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-1/2">
                  <p className="font-display text-primary">Mastery Criteria</p>
                  <ul className="mt-2">
                    {subTask.masteryCriteria.map((criteria) => (
                      <li key={criteria.criteria} className="flex gap-2">
                        <span>
                          <Checkbox disabled checked={criteria.mastered} />
                        </span>
                        <span>{criteria.criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <p className="font-display text-primary">Artifacts</p>
                <div className="flex gap-4 mt-2">
                  {subTask.artifacts.map((artifact, index) => (
                    <div key={index}>{getArtifactsData(artifact)}</div>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-display text-primary">References</p>
                <ul className="list-disc pl-4 mt-2 marker:text-primary">
                  {subTask.references.map((reference) => (
                    <li key={reference} className="mt-1.5">
                      {reference}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SubTaskDetailsDialog;
