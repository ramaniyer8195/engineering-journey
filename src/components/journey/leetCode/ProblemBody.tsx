import { BsDot } from "react-icons/bs";
import type { Problem } from "@/interfaces/jsonTypes";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RiMoreFill } from "react-icons/ri";
import { useState } from "react";
import ProblemDetailsDialog from "@/components/dialogs/ProblemDetailsDialog";

const ProblemBody = ({ problem }: { problem: Problem }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        key={problem.id}
        className="my-1 bg-zinc-900 p-2 rounded flex items-center justify-between"
      >
        <div className="flex items-center gap-2 ">
          <BsDot className="text-primary" />
          <span>Problem</span>
          <span>-</span>
          <a
            href={problem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {problem.title}
          </a>
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
      <ProblemDetailsDialog
        open={open}
        onOpenChange={setOpen}
        problem={problem}
      />
    </>
  );
};

export default ProblemBody;
