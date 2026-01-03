import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Problem } from "@/interfaces/jsonTypes";

const ProblemDetailsDialog = ({
  open,
  onOpenChange,
  problem,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  problem: Problem;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-lg">
        <DialogHeader>
          <DialogTitle className="text-primary font-display">
            Problem Details
          </DialogTitle>
          <DialogDescription className="text-base font-body mt-2">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="font-display text-base">Why It Matters</div>
                <div>{problem.whyItMatters}</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-display text-base">When To Use</div>
                <div>{problem.whenToUse}</div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProblemDetailsDialog;
