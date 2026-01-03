import type { CategoryItem } from "@/interfaces/jsonTypes";
import { BsDot } from "react-icons/bs";
import ProblemBody from "./ProblemBody";

const CategoryContent = ({ category }: { category: CategoryItem }) => {
  return (
    <div className="w-full px-6 flex flex-col gap-3">
      <p className="text-base">{category.details}</p>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2 w-1/2">
          <div className="font-display text-base">Patterns</div>
          <ul>
            {category.patterns.map((pattern, index) => (
              <li key={index} className="flex items-center gap-2">
                <BsDot className="text-primary" />
                <span>{pattern}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 w-1/2">
          <div className="font-display text-base">System Design Skills</div>
          <ul>
            {category.systemDesignSkills.map((skill, index) => (
              <li key={index} className="flex items-center gap-2">
                <BsDot className="text-primary" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {category.problems.length > 0 && (
        <div className="flex flex-col gap-2">
          <div className="font-display text-base">Problems</div>
          <div>
            {category.problems.map((problem) => (
              <ProblemBody problem={problem} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryContent;
