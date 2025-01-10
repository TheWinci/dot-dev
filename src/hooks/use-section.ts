import { useQuery, useQueryClient } from "@tanstack/react-query";
import { EditorElement, useEditorElements } from "./use-editor-elements";

export const sectionQuery = "section-query" as const;
type TUseSectionQuery = [
  EditorElement | null,
  (slot: string, order: string[]) => void,
];

export function useSection(sectionId: string): TUseSectionQuery {
  const queryClient = useQueryClient();
  const { editor } = useEditorElements();

  const section = editor.elements.find((element) => element.id === sectionId);

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

  const setSectionSlotOrder = (slot: string, order: string[]) => {
    if (!section) return;

    console.log("setSectionSlotOrder", slot, order);
    queryClient.setQueryData([sectionQuery], {
      ...section,
      slots: {
        ...section.slots,
        [slot]: order,
      },
    });
  };

  return [data, setSectionSlotOrder];
}
