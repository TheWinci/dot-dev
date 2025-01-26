import { useEditorElements } from "@/hooks/use-editor-elements";
import { usePreview } from "@/hooks/use-preview";
import { useSection } from "@/hooks/use-section";
import { cn } from "@/lib/utils";
import React from "react";
import * as UI from "@/components/sections";
import { ArrowDown, ArrowUp, Trash } from "lucide-react";
import { Slot } from "./slot";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

type TSectionProps = {
  sectionId: string;
  moveUp?: () => void;
  moveDown?: () => void;
};

export const Section = ({ sectionId, moveDown, moveUp }: TSectionProps) => {
  const [isPreviewMode] = usePreview();
  const { editor } = useEditorElements();
  const {
    data: section,
    parentSectionId,
    parentSlotName,
  } = useSection(sectionId);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: sectionId,
      data: {
        parentSectionId,
        parentSlotName,
      },
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

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

  return (
    <div
      className={`flex flex-col`}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div
        className={cn(
          `right-0 z-40 flex w-fit items-center bg-slate-600 p-1 text-sm leading-none opacity-45`,
          {
            hidden: isPreviewMode,
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
        className={cn(`relative`, {
          "rounded border-2 border-dashed p-4": !isPreviewMode,
          "border-slate-600": !isPreviewMode,
          "border-green-600":
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
