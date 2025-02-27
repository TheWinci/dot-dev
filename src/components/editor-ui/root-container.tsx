"use client";
import { useEditorElements } from "@/hooks/use-editor-elements";
import { usePreview } from "@/hooks/use-preview";
import { cn } from "@/lib/utils";
import React, { useCallback } from "react";
import {
  useSensor,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  useSensors,
  DragOverEvent,
  DndContext,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { Slot } from "./slot";

function RootContainer() {
  const [isPreviewMode] = usePreview();
  const { editor, setSectionData, setSectionsData } =
    useEditorElements();

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  const handleDragOver = useCallback(
    (event: DragOverEvent) => {
      const { active, over } = event;

      if (!editor.sections) {
        console.log("editor.sections not found");
        return;
      }
      const activeSection =
        editor.sections[active.data.current?.parentSectionId];
      const activeSlot =
        editor.sections[active.data.current?.parentSectionId]?.slots?.[
          active.data.current?.parentSlotName
        ];
      const overSection = editor.sections[over?.data.current?.parentSectionId];
      const overSlot =
        editor.sections[over?.data.current?.parentSectionId]?.slots?.[
          over?.data.current?.parentSlotName
        ];

      if (!activeSection || !overSection || !activeSlot || !overSlot) {
        console.log("activeSection or overSection not found");
        return;
      }

      const activeIndex = activeSlot.indexOf(event.active.id as string);
      const overIndex = overSlot.indexOf(event.over?.id as string);

      if (
        activeIndex === overIndex &&
        active.data.current?.parentSlotName ===
          over?.data.current?.parentSlotName &&
        active.data.current?.parentSectionId ===
          over?.data.current?.parentSectionId
      ) {
        console.log("activeIndex === overIndex");
        return;
      }

      if (
        active.data.current?.parentSectionId ===
          over?.data.current?.parentSectionId &&
        active.data.current?.parentSlotName ===
          over?.data.current?.parentSlotName
      ) {
        const newOrder = arrayMove(activeSlot, activeIndex, overIndex);
        setSectionData.mutate({
          ...activeSection,
          slots: {
            ...activeSection.slots,
            [active.data.current?.parentSlotName]: newOrder,
          },
        });
        return;
      }

      const newActiveOrder = activeSlot.filter((id) => id !== event.active.id);

      const isBelowLastItem = over && overIndex === overSlot.length - 1;
      const modifier = isBelowLastItem ? 1 : 0;
      const newIndex = overIndex >= 0 ? overIndex + modifier : overSlot.length + 1;

      const newOverOrder = [
        ...overSlot.slice(0, newIndex),
        event.active.id as string,
        ...overSlot.slice(newIndex),
      ];

      if (
        active.data.current?.parentSectionId ===
        over?.data.current?.parentSectionId
      ) {
        setSectionData.mutate({
          ...activeSection,
          slots: {
            ...activeSection.slots,
            [active.data.current?.parentSlotName]: newActiveOrder,
            [over?.data.current?.parentSlotName]: newOverOrder,
          },
        });
        return
      }

      setSectionsData.mutate({
        ...editor.sections,
        [active.data.current?.parentSectionId]: {
          ...activeSection,
          slots: {
            ...activeSection.slots,
            [active.data.current?.parentSlotName]: [...newActiveOrder],
          },
        },
        [over?.data.current?.parentSectionId]: {
          ...overSection,
          slots: {
            ...overSection.slots,
            [over?.data.current?.parentSlotName]: newOverOrder,
          },
        },
      });
    },
    [editor.sections, setSectionsData, setSectionData],
  );

  return (
    <DndContext
      sensors={sensors}
      onDragOver={handleDragOver}
    >
      <div
        className={cn("h-full w-full overflow-auto flex-1", {
          "rounded border border-dashed border-orange-600 p-2": !isPreviewMode,
          "rounded border-2 border-dashed border-blue-600 p-2":
            !isPreviewMode && editor.selectedSection === editor.root.id,
        })}
      >
        <Slot sectionId={editor.root.id} slot="content" />
      </div>
    </DndContext>
  );
}

RootContainer.slots = ["content"];
RootContainer.displayName = "RootContainer";

export { RootContainer };
