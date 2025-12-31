import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ReferenceDialog = ({
  open,
  onOpenChange,
  references,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  references: string[];
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-lg">
        <DialogHeader>
          <DialogTitle className="text-primary font-display">
            References
          </DialogTitle>
          <DialogDescription className="text-base font-body mt-2">
            <ul className="list-disc pl-4 marker:text-primary">
              {references.map((reference) => (
                <li key={reference} className="mt-1.5">
                  {reference}
                </li>
              ))}
            </ul>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ReferenceDialog;
