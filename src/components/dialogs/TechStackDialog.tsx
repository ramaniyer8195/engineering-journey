import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { TechStack } from "@/interfaces/jsonTypes";

const TechStackDialog = ({
  open,
  onOpenChange,
  techStack,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  techStack: TechStack;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-xl">
        <DialogHeader>
          <DialogTitle className="text-primary font-display">
            Tech Stack
          </DialogTitle>
          <DialogDescription className="text-base font-body mt-2">
            <div className="flex flex-col gap-2">
              {Object.keys(techStack).map((key) => {
                const techArray = techStack[key as keyof typeof techStack];

                if (!techArray) {
                  return null;
                }
                return (
                  <div className="flex items-center gap-2">
                    <span className="capitalize min-w-32 font-display">
                      {key}
                    </span>
                    <span>:</span>
                    <span>{techArray.join(", ")}</span>
                  </div>
                );
              })}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TechStackDialog;
