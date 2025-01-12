import { usePreview } from "@/hooks/use-preview";
import { useSlot } from "@/hooks/use-slot";
import { cn } from "@/lib/utils";
import React from "react";
import { Section } from "./section";

export type TSlotProps = {
  sectionId: string;
  slot: string;
};

export const Slot = ({ sectionId, slot }: TSlotProps) => {
  const [isPreviewMode] = usePreview();
  const { sections, moveUp, moveDown } = useSlot(sectionId, slot);

  const handleMoveUp = (sectionId: string) => () => {
    moveUp(sectionId);
  };

  const handleMoveDown = (sectionId: string) => () => {
    moveDown(sectionId);
  };

  return (
    <div className="flex flex-col">
      <div
        key={`section-${sectionId}-slot-${slot}-label`}
        className={cn(
          "right-0 z-40 flex w-fit items-center bg-slate-600 p-[2px] text-sm leading-none opacity-50 hover:opacity-100",
          {
            hidden: isPreviewMode,
          },
        )}
      >
        <span className="m-1">slot: {slot}</span>
      </div>
      <div
        key={`section-${sectionId}-slot-${slot}-content`}
        className={cn("flex flex-col", {
          "mr-1 rounded border-2 border-solid border-slate-600 p-1":
            !isPreviewMode,
        })}
      >
        {sections?.map((childSectionId) => {
          return (
            <Section
              sectionId={childSectionId}
              moveUp={handleMoveUp(childSectionId)}
              moveDown={handleMoveDown(childSectionId)}
            />
          );
        }) || []}
        {/* SLOT: {slot} */}
      </div>
    </div>
  );
};
