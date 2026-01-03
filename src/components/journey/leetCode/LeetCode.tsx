import { Accordion } from "@/components/ui/accordion";
import { leetCodeChecklist } from "@/data/jsonData";
import Category from "./Category";

const LeetCode = () => {
  return (
    <div className="w-full">
      <div className="flex items-start gap-4 p-6 bg-primary/5 border border-primary/20 mb-8">
        <span className="text-primary font-display font-bold text-xl">
          THE GOAL
        </span>
        <p className="font-display text-lg leading-relaxed text-muted-foreground">
          Build algorithmic intuition that transfers directly to system design,
          scalability, and production engineering.
        </p>
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
