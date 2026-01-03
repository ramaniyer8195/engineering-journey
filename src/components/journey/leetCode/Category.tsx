import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { CategoryItem } from "@/interfaces/jsonTypes";
import { getCategoryText, getProblemsText } from "@/utils/leetCodeUtil";
import CategoryContent from "./CategoryContent";

const Category = ({ category }: { category: CategoryItem }) => {
  return (
    <AccordionItem value={category.categoryId}>
      <AccordionTrigger className="data-[state=open]:text-primary">
        <div className="flex items-center justify-between font-display text-lg w-full">
          <div className="flex items-center gap-2 ">
            <span>{getCategoryText(category.categoryId)}</span>
            <span>-</span>
            <span>{category.name}</span>
          </div>
          <div className="flex items-center gap-4">
            {category.problems.length === 0 ? (
              <></>
            ) : (
              <span className="font-body text-sm">
                {getProblemsText(category.problems)}
              </span>
            )}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <CategoryContent category={category} />
      </AccordionContent>
    </AccordionItem>
  );
};

export default Category;
