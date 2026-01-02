import { getUserFlowText } from "@/utils/projectUtil";
import { BsDot } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RiMoreFill } from "react-icons/ri";
import { useState } from "react";
import type { UserFlow } from "@/interfaces/jsonTypes";
import UserFlowDetailsDialog from "@/components/dialogs/UserFlowDetailsDialog";

const UserFlowBody = ({ userFlow }: { userFlow: UserFlow }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        key={userFlow.flowId}
        className="my-1 bg-zinc-900 p-2 rounded flex items-center justify-between"
      >
        <div className="flex items-center gap-2 ">
          <BsDot className="text-primary" />
          <span>{getUserFlowText(userFlow.flowId)}</span>
          <span>-</span>
          <span>{userFlow.name}</span>
        </div>
        <div className="flex items-center gap-2">
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
      <UserFlowDetailsDialog
        open={open}
        onOpenChange={setOpen}
        userFlow={userFlow}
      />
    </>
  );
};

export default UserFlowBody;
