import { useEditorDevice } from "@/hooks/use-editor-device";
import { usePreview } from "@/hooks/use-preview";
import { Container } from "@/components/editor-ui/container";
import React from "react";
import { cn } from "@/lib/utils";

export const Editor = () => {
  const [isPreviewMode] = usePreview();
  const [device] = useEditorDevice();

  return (
    <div
      className={cn("flex h-full flex-col items-center overflow-scroll", {
        "mr-[385px]": !isPreviewMode,
      })}
    >
      <div
        className={cn("h-full w-full overflow-scroll", {
          "w-[850px]": device === "Tablet",
          "w-[420px]": device === "Smartphone",
          "border border-dashed border-red-600 p-4": !isPreviewMode,
        })}
      >
        <Container
          isRoot
          slots={{
            content: [<div key={1} className="w-full bg-slate-600">CONTENT SLOT</div>],
          }}
        />
      </div>
    </div>
  );
};
