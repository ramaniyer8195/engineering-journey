import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { LearningItem } from "@/interfaces/jsonTypes";
import { getTopicText } from "@/utils/topicUtils";
import TopicContent from "./TopicContent";
import { Badge } from "../../ui/badge";
import { getStatusText } from "@/utils/topicUtils";

const Topic = ({ item }: { item: LearningItem }) => {
  const { status, variant } = getStatusText(item.status);

  return (
    <AccordionItem value={item.id}>
      <AccordionTrigger className="data-[state=open]:text-primary">
        <div className="flex items-center justify-between font-display text-lg w-full">
          <div className="flex items-center gap-2 ">
            <span>{getTopicText(item.id)}</span>
            <span>-</span>
            <span>{item.title}</span>
          </div>
          <div className="flex items-center gap-4">
            {item.status === "not-started" || item.status === "completed" ? (
              <></>
            ) : (
              <span className="font-body text-sm">
                Completed{" "}
                {
                  item.subTasks.filter(
                    (subTask) => subTask.status === "completed"
                  ).length
                }
                /{item.subTasks.length} Sub-Tasks
              </span>
            )}
            <Badge variant={variant}>{status}</Badge>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <TopicContent item={item} />
      </AccordionContent>
    </AccordionItem>
  );
};

export default Topic;
