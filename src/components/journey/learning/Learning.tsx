import { Accordion } from "@/components/ui/accordion";
import { learningData } from "@/data/jsonData";
import Topic from "./Topic";

const Learning = () => {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full" defaultValue="">
        {learningData.map((item) => (
          <Topic item={item} key={item.id} />
        ))}
      </Accordion>
    </div>
  );
};

export default Learning;
