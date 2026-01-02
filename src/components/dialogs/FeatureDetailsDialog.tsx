import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Feature } from "@/interfaces/jsonTypes";
import { BsDot } from "react-icons/bs";

const FeatureDetailsDialog = ({
  open,
  onOpenChange,
  feature,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  feature: Feature;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-lg">
        <DialogHeader>
          <DialogTitle className="text-primary font-display">
            {feature.name}
          </DialogTitle>
          <DialogDescription className="text-base font-body mt-2">
            <div className="flex flex-col gap-2">
              <span>{feature.description}</span>
              <div className="flex flex-col gap-2">
                <div className="font-display text-base">
                  Implementation Notes
                </div>
                <ul>
                  {feature.implementationNotes.map((note) => (
                    <li className="flex gap-2">
                      <BsDot className="text-primary" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-display text-base">Pitfalls To Avoid</div>
                <ul>
                  {feature.pitfallsToAvoid.map((pitfall) => (
                    <li className="flex gap-2">
                      <BsDot className="text-primary" />
                      {pitfall}
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

export default FeatureDetailsDialog;
