import { Accordion } from "@/components/ui/accordion";
import { labsChecklist } from "@/data/jsonData";
import Lab from "./Lab";

const Labs = () => {
  return (
    <div className="h-[86vh] overflow-y-auto overflow-x-hidden pr-3">
      <Accordion type="single" collapsible className="w-full" defaultValue="">
        {labsChecklist.map((lab) => (
          <Lab lab={lab} key={lab.miniProjectId} />
        ))}
      </Accordion>
    </div>
  );
};

export default Labs;
