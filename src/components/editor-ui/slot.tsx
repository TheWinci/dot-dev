import { usePreview } from "@/hooks/use-preview";
import { useSlot } from "@/hooks/use-slot";
import { cn } from "@/lib/utils";
import React from "react";
import { Section } from "./section";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

export type TSlotProps = {
  sectionId: string;
  slot: string;
};

export const Slot = ({ sectionId, slot }: TSlotProps) => {
  const [isPreviewMode] = usePreview();
  const { sections, moveUp, moveDown } = useSlot(sectionId, slot);

  const { setNodeRef } = useDroppable({
    id: `${sectionId}-${slot}`,
    data: {
      parentSlotName: slot,
      parentSectionId: sectionId,
    },
  });

  const handleMoveUp = (sectionId: string) => () => {
    moveUp(sectionId);
  };

  const handleMoveDown = (sectionId: string) => () => {
    moveDown(sectionId);
  };

  return (
    <SortableContext items={sections || []}>
      <div className="flex flex-col">
        <div
          key={`section-${sectionId}-slot-${slot}-label`}
          className={cn(
            "bg-stripped-test right-0 z-40 mx-1 mt-0.5 flex items-center from-slate-700 from-[length:0px_10px] to-slate-600 to-[length:10px_20px] p-1.5 text-sm leading-none opacity-50 hover:opacity-100",
            {
              hidden: isPreviewMode,
            },
          )}
        >
          <span className="mx-1">Slot: {slot}</span>
        </div>
        <div
          ref={setNodeRef}
          key={`section-${sectionId}-slot-${slot}-content`}
          className={cn("flex flex-col", {
            "mr-1 rounded border-2 border-solid border-slate-600 p-1 hover:border-slate-400":
              !isPreviewMode,
          })}
        >
          {sections?.map((childSectionId) => {
            return (
              <Section
                key={`section-${sectionId}-slot-${slot}-child-${childSectionId}`}
                sectionId={childSectionId}
                moveUp={handleMoveUp(childSectionId)}
                moveDown={handleMoveDown(childSectionId)}
              />
            );
          }) || []}
          {!isPreviewMode && sections?.length === 0 ? (
            <div className="h-12 p-2 text-sm text-gray-500">Empty slot</div>
          ) : null}
        </div>
      </div>
    </SortableContext>
  );
};
