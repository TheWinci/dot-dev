import React from "react";
import * as UI from "@/components/sections";
import { useEditorElements } from "@/hooks/use-editor-elements";

export const ComponentProps = () => {
  const { editor, setSectionData } = useEditorElements();
  const selectedSection = editor.sections[editor.selectedSection];
  const componentName = selectedSection.name;
  const Component = UI[componentName as keyof typeof UI];
  const props = Component.props || [];

  const handleOnChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSectionData.mutate({
      ...selectedSection,
      props: {
        ...selectedSection.props,
        source: e.target.value,
      },
    });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-2">ComponentProps</div>
      {props.length > 0 && <div className="mb-2">{props}</div>}
      <div className="flex-grow relative min-h-0">
        <textarea
          className="absolute inset-0 w-full h-full min-h-[10em] resize-none border-2 border-solid border-neutral-600 whitespace-pre-wrap p-2"
          onChange={handleOnChange}
          defaultValue={selectedSection.props?.source}
        ></textarea>
      </div>
    </div>
  );
};
