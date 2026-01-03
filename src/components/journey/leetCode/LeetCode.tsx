import { Accordion } from "@/components/ui/accordion";
import { leetCodeChecklist } from "@/data/jsonData";
import Category from "./Category";

const LeetCode = () => {
  return (
    <div className="h-[86vh] overflow-y-auto overflow-x-hidden pr-3">
      <div className="flex items-center gap-2">
        <span className="text-primary font-display">Goal</span>
        <span className="font-display">:</span>
        <span>
          Build algorithmic intuition that transfers directly to system design,
          scalability, and production engineering
        </span>
      </div>
      <Accordion type="single" collapsible className="w-full" defaultValue="">
        {leetCodeChecklist.map((categoryItem) => (
          <Category key={categoryItem.categoryId} category={categoryItem} />
        ))}
      </Accordion>
    </div>
  );
};

export default LeetCode;
