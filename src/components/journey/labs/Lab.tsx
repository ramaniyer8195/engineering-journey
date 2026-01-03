import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { LabItem } from "@/interfaces/jsonTypes";
import { Badge } from "@/components/ui/badge";
import LabContent from "./LabContent";
import { getLabText, getLabStatusText } from "@/utils/labUtils";

const Lab = ({ lab }: { lab: LabItem }) => {
  const { status, variant } = getLabStatusText(lab.status);

  return (
    <AccordionItem value={lab.miniProjectId}>
      <AccordionTrigger className="data-[state=open]:text-primary">
        <div className="flex items-center justify-between font-display text-lg w-full">
          <div className="flex items-center gap-2 ">
            <span>{getLabText(lab.miniProjectId)}</span>
            <span>-</span>
            <span>{lab.name}</span>
          </div>
          <Badge variant={variant}>{status}</Badge>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <LabContent lab={lab} />
      </AccordionContent>
    </AccordionItem>
  );
};

export default Lab;
