"use client";
import { useEditorElements } from "@/hooks/use-editor-elements";
import { usePreview } from "@/hooks/use-preview";
import { cn } from "@/lib/utils";
import React, { FC, useCallback } from "react";
import { Section } from "./section";

export interface TRootContainerProps {}

function RootContainer() {
  const [isPreviewMode] = usePreview();
  const { editor, setRootOrder } = useEditorElements();

  const handleOnDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const component = event.dataTransfer.getData("component");

    console.log("dropped: ", component);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className={cn("h-full w-full", {
        "rounded border border-dashed border-orange-600 p-2": !isPreviewMode,
        "rounded border-2 border-dashed border-blue-600 p-2":
          !isPreviewMode && editor.selectedSection === editor.root.id,
      })}
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
    >
      {editor.root.content.map((sectionId, index) => {
        return (
          <Section
            key={`section-${sectionId}-${index}`}
            sectionId={sectionId}
          />
        );
      })}
    </div>
  );
}

RootContainer.slots = ["content"];
RootContainer.displayName = "RootContainer";

export { RootContainer };
