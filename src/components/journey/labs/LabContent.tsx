import { useState } from "react";
import FeatureBody from "./FeatureBody";
import TechStackDialog from "@/components/dialogs/TechStackDialog";
import type { LabItem } from "@/interfaces/jsonTypes";
import LabDetailsDialog from "@/components/dialogs/LabDetailsDialog";

const LabContent = ({ lab }: { lab: LabItem }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [techStackOpen, setTechStackOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 px-6">
      <div>{lab.details}</div>
      <div className="flex gap-4">
        <div
          className="font-display text-primary underline cursor-pointer w-fit"
          onClick={() => setDetailsOpen(true)}
        >
          View Details
        </div>
        <div
          className="font-display text-primary underline cursor-pointer w-fit"
          onClick={() => setTechStackOpen(true)}
        >
          View Tech Stack
        </div>
        {lab.blog.published && (
          <a
            className="font-display text-primary underline cursor-pointer w-fit"
            href={lab.blog.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Blog
          </a>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-display text-base">Features</div>
        <div>
          {lab.features.map((feature) => (
            <FeatureBody feature={feature} />
          ))}
        </div>
      </div>
      <LabDetailsDialog
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
        lab={lab}
      />
      <TechStackDialog
        open={techStackOpen}
        onOpenChange={setTechStackOpen}
        techStack={lab.techStack}
      />
    </div>
  );
};

export default LabContent;
