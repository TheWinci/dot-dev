import React, { Fragment } from "react";
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
    <Fragment>
      <div>ComponentProps</div>
      {props}
      <textarea
        className="h-100 w-full border-2 border-solid border-neutral-600 whitespace-pre-wrap"
        onChange={handleOnChange}
        defaultValue={selectedSection.props?.source}
      ></textarea>
    </Fragment>
  );
};
