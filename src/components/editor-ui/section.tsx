import { useEditorElements } from "@/hooks/use-editor-elements";
import { usePreview } from "@/hooks/use-preview";
import { useSection } from "@/hooks/use-section";
import { cn } from "@/lib/utils";
import React, { forwardRef, Fragment, useCallback } from "react";
import * as UI from "@/components/sections";
import { Grip, Trash } from "lucide-react";

type TSectionProps = {
  sectionId: string;
};

export const Section = ({ sectionId }: TSectionProps) => {
  const [isPreviewMode] = usePreview();
  const { editor } = useEditorElements();
  const [section, setSlotOrder] = useSection(sectionId);

  if (!section) {
    return null;
  }

  const Component = UI[section.name as keyof typeof UI];
  const slots = Component.slots.reduce(
    (acc, slot) => {
      const handleDragEnd = useCallback(
        (event: any) => {
          const { active, over } = event;

          if (active.id !== over.id) {
            const newOrder = editor.root.content.slice();
            const activeIndex = newOrder.indexOf(active.id);
            const overIndex = newOrder.indexOf(over.id);

            newOrder.splice(activeIndex, 1);
            newOrder.splice(overIndex, 0, active.id);

            setSlotOrder(slot, newOrder);
          }
        },
        [section.id, section.slots, section.slots?.[slot]],
      );
      acc[slot] = [
        <div className="flex flex-col border-2 border-solid border-red-600 p-1">
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
            {section.slots?.[slot]?.map((childSectionId, index) => {
              return <Section sectionId={childSectionId} />;
            }) || []}
          </div>
        </div>,
      ];

      return acc;
    },
    {} as Record<string, React.ReactNode[]>,
  );

  return (
    <div className="border-2 border-solid border-yellow-600 p-1">
      <div
        className={cn(
          "right-0 z-40 flex w-fit items-center bg-slate-600 p-[2px] text-sm leading-none opacity-50 hover:opacity-100",
          {
            hidden: isPreviewMode,
          },
        )}
      >
        <div className="cursor-grab p-1">
          <Grip size={14} />
        </div>
        <span className="ml-2">{section.name}</span>
        <div className="ml-2 cursor-pointer">
          <Trash size={14} />
        </div>
      </div>
      <section
        key={`section-${sectionId}`}
        className={cn("relative", {
          "rounded border border-dashed border-slate-600 p-4": !isPreviewMode,
          "rounded border border-dashed border-green-600 p-4":
            !isPreviewMode && sectionId === editor.selectedElement,
        })}
      >
        <Component
          {...{ ...section?.props, slots: slots || undefined }}
        ></Component>
      </section>
    </div>
  );
};

Section.displayName = "Section";
Section.slots = null;
