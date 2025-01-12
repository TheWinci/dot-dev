import { useQuery, useQueryClient } from "@tanstack/react-query";
import { EditorSection, useEditorElements } from "./use-editor-elements";

export const sectionQuery = "section-query" as const;
type TUseSectionQuery = {
  data: EditorSection | null;
};

export function useSection(sectionId: string): TUseSectionQuery {
  const queryClient = useQueryClient();
  const { editor } = useEditorElements();

  const section = editor.sections.get(sectionId);

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

  return { data };
}
