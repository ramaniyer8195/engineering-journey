import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BsDot } from "react-icons/bs";
import type { UserFlow } from "@/interfaces/jsonTypes";

const UserFlowDetailsDialog = ({
  open,
  onOpenChange,
  userFlow,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userFlow: UserFlow;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-lg">
        <DialogHeader>
          <DialogTitle className="text-primary font-display">
            {userFlow.name}
          </DialogTitle>
          <DialogDescription className="text-base font-body mt-2">
            <div className="flex flex-col gap-2">
              <span className="font-display text-base">Steps</span>
              <div className="flex flex-col gap-2">
                <ul>
                  {userFlow.steps.map((step) => (
                    <li className="flex gap-2">
                      <BsDot className="text-primary" />
                      {step}
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

export default UserFlowDetailsDialog;
