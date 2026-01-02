import { useState } from "react";
import { Badge } from "../../ui/badge";
import {
  getStatusText,
  getSubTaskDetailsText,
  getSubTaskText,
} from "@/utils/topicUtils";
import { RiMoreFill } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import type { SubTask } from "@/interfaces/jsonTypes";
import SubTaskDetailsDialog from "../../dialogs/SubTaskDetailsDialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";

const SubTaskBody = ({ subTask }: { subTask: SubTask }) => {
  const { status, variant } = getStatusText(subTask.status);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        key={subTask.id}
        className="my-1 bg-zinc-900 p-2 rounded flex items-center justify-between"
      >
        <div className="flex items-center gap-2 ">
          <BsDot className="text-primary" />
          <span>{getSubTaskText(subTask.id)}</span>
          <span>-</span>
          <span>{subTask.title}</span>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-body text-xs">{getSubTaskDetailsText(subTask)}</p>
          <Badge variant={variant} className="font-display">
            {status}
          </Badge>
          <Tooltip>
            <TooltipTrigger>
              <span
                className="font-display text-primary underline cursor-pointer w-fit"
                onClick={() => setOpen(true)}
              >
                <RiMoreFill className="w-5 h-5 bg-primary text-white rounded-full p-1" />
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>View Details</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <SubTaskDetailsDialog
        open={open}
        onOpenChange={setOpen}
        subTask={subTask}
      />
    </>
  );
};

export default SubTaskBody;
