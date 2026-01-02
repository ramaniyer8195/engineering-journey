import type { LearningItem } from "@/interfaces/jsonTypes";
import { useState } from "react";
import ReferenceDialog from "../../dialogs/ReferenceDialog";
import SubTaskBody from "./SubTaskBody";

const TopicContent = ({ item }: { item: LearningItem }) => {
  const [open, setOpen] = useState(false);

  const onOpenChange = (open: boolean) => {
    setOpen(open);
  };

  return (
    <>
      <div className="w-full px-6 flex flex-col gap-3">
        <p className="text-base">{item.details}</p>
        <div>
          {item.subTasks.map((subTask) => (
            <SubTaskBody subTask={subTask} />
          ))}
        </div>
        <div
          className="font-display text-primary underline cursor-pointer w-fit"
          onClick={() => setOpen(true)}
        >
          References
        </div>
      </div>
      <ReferenceDialog
        open={open}
        onOpenChange={onOpenChange}
        references={item.references}
      />
    </>
  );
};

export default TopicContent;
