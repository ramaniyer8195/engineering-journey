import { Accordion } from "@/components/ui/accordion";
import { learningData } from "@/data/jsonData";
import Topic from "./Topic";

const Learning = () => {
  return (
    <div className="h-[86vh] overflow-y-auto overflow-x-hidden pr-3">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue={learningData[0].id}
      >
        {learningData.map((item) => (
          <Topic item={item} key={item.id} />
        ))}
      </Accordion>
    </div>
  );
};

export default Learning;
