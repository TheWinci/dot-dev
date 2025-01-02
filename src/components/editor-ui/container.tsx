"use client";
import { usePreview } from "@/hooks/use-preview";
import { cn } from "@/lib/utils";
import React, { FC } from "react";

export interface TContainerProps {
  isRoot?: boolean;
  slots?: {
    content: React.ReactNode[];
  };
};

export const Container = ({ slots, isRoot = false }: TContainerProps) => {
  const [isPreviewMode] = usePreview();

  const handleOnDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const component = event.dataTransfer.getData("component");

    console.log("dropped: ", component);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent) => {
    if (isRoot) return;
    e.dataTransfer.setData("component", "container");
  };

  return (
    <div
      className={cn("bg-pink-500",{
        "h-full w-full": isRoot,
        "rounded border border-dashed border-pink-500 p-2": !isPreviewMode,
      })}
      draggable={!isRoot}
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
      onDragStart={handleDragStart}
    >
      {slots?.content || null}
    </div>
  );
};
