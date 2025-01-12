import { useEditorDevice } from "@/hooks/use-editor-device";
import { usePreview } from "@/hooks/use-preview";
import { RootContainer } from "@/components/editor-ui/root-container";
import React from "react";
import { cn } from "@/lib/utils";

export const Editor = () => {
  const [isPreviewMode] = usePreview();
  const [device] = useEditorDevice();

  return (
    <div
      className={cn("flex flex-1 flex-col items-center overflow-scroll", {
        "mr-[385px]": !isPreviewMode,
      })}
    >
      <div
        className={cn("h-full w-full overflow-scroll", {
          "w-[850px]": device === "Tablet" && !isPreviewMode,
          "w-[420px]": device === "Smartphone" && !isPreviewMode,
        })}
      >
        <RootContainer />
      </div>
    </div>
  );
};
