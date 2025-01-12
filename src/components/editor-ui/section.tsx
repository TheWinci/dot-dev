import { useEditorElements } from "@/hooks/use-editor-elements";
import { usePreview } from "@/hooks/use-preview";
import { useSection } from "@/hooks/use-section";
import { cn } from "@/lib/utils";
import React, { forwardRef, Fragment, useCallback, useState } from "react";
import * as UI from "@/components/sections";
import { ArrowDown, ArrowUp, Grip, Trash } from "lucide-react";
import { Slot } from "./slot";
import { set } from "date-fns";

type TSectionProps = {
  sectionId: string;
  moveUp?: () => void;
  moveDown?: () => void;
};

export const Section = ({ sectionId, moveDown, moveUp }: TSectionProps) => {
  const [isPreviewMode] = usePreview();
  const { editor } = useEditorElements();
  const { data: section } = useSection(sectionId);
  const [isHovered, setIsHovered] = useState(false);

  if (!section) {
    return null;
  }

  const Component = UI[section.name as keyof typeof UI];
  const slots = Component.slots.reduce(
    (acc, slot) => {
      acc[slot] = [
        <Slot
          key={`section-${sectionId}-slot-${slot}`}
          sectionId={sectionId}
          slot={slot}
        />,
      ];

      return acc;
    },
    {} as Record<string, React.ReactNode[]>,
  );

  const handleMouseOver = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsHovered(true);
  };

  const handleMouseOut = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsHovered(false);
  };

  return (
    <div
      className="flex flex-col"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div
        className={cn(
          "peer right-0 z-40 flex w-fit items-center bg-slate-600 p-1 text-sm leading-none opacity-45",
          {
            hidden: isPreviewMode,
            "opacity-100": isHovered,
          },
        )}
      >
        <span className="ml-2">Section: {section.name}</span>
        <div className="ml-2 cursor-pointer" title="Move up" onClick={moveUp}>
          <ArrowUp size={14} />
        </div>
        <div
          className="ml-2 cursor-pointer"
          title="Move down"
          onClick={moveDown}
        >
          <ArrowDown size={14} />
        </div>
        <div className="ml-2 cursor-pointer" title="Delete">
          <Trash size={14} />
        </div>
      </div>
      <section
        key={`section-${sectionId}`}
        className={cn("peer relative", {
          "rounded border border-dashed border-slate-600 p-4 hover:border-slate-500 peer-hover:border-slate-500":
            !isPreviewMode,
          "rounded border border-dashed border-green-600 p-4 hover:border-green-500 peer-hover:border-green-500":
            !isPreviewMode && sectionId === editor.selectedSection,
        })}
      >
        <Component
          {...{ ...section?.props, slots: slots || undefined }}
        ></Component>
      </section>
    </div>
  );
};
