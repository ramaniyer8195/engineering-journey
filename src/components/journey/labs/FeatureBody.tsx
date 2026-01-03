import { getFeatureText } from "@/utils/labUtils";
import { BsDot } from "react-icons/bs";
import type { Feature } from "@/interfaces/jsonTypes";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RiMoreFill } from "react-icons/ri";
import { useState } from "react";
import FeatureDetailsDialog from "@/components/dialogs/FeatureDetailsDialog";

const FeatureBody = ({ feature }: { feature: Feature }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        key={feature.featureId}
        className="my-1 bg-zinc-900 p-2 rounded flex items-center justify-between"
      >
        <div className="flex items-center gap-2 ">
          <BsDot className="text-primary" />
          <span>{getFeatureText(feature.featureId)}</span>
          <span>-</span>1<span>{feature.name}</span>
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
      <FeatureDetailsDialog
        open={open}
        onOpenChange={setOpen}
        feature={feature}
      />
    </>
  );
};

export default FeatureBody;
