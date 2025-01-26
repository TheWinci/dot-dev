import { useQuery, useQueryClient } from "@tanstack/react-query";
import { EditorSection, useEditorElements } from "./use-editor-elements";

export const sectionQuery = "section-query" as const;
type TUseSectionQuery = {
  data: EditorSection | null;
  parentSectionId: string | undefined;
  parentSlotName: string | undefined;
};
export type TParent = {
  key: string;
  parentSlot: string;
};

export function useSection(sectionId: string): TUseSectionQuery {
  const queryClient = useQueryClient();
  const { editor } = useEditorElements();

  const section = editor.sections?.[sectionId];
  let parent: TParent | undefined;
  Object.keys(editor.sections || {}).find((key) => {
    const slots = editor.sections?.[key].slots;
    if (!slots) {
      return;
    }
    const parentSlot = Object.keys(slots).find((slot) =>
      slots[slot].includes(sectionId),
    );

    if (parentSlot) {
      parent = { key, parentSlot };
    }

    return;
  });

  const { data } = useQuery(
    {
      queryKey: [sectionQuery, sectionId],
      queryFn: async () => {
        return section || null;
      },
      initialData: section || null,
    },
    queryClient,
  );

  return { data, parentSectionId: parent?.key, parentSlotName: parent?.parentSlot };
}
