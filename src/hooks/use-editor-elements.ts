import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { v4 as uuid } from "uuid";

export const editorSectionsQuery = "editor-sections" as const;

export type EditorSection = {
  id: string;
  name: string;
  props?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any; // Prop name, Prop value
  };
  slots?: {
    [key: string | number]: string[]; // Slot name, Element ID array
  };
};

export type Editor = {
  root: {
    id: string;
    content: string[];
  };
  sections: { [key: string]: EditorSection };
  selectedSection: string;
};

const rootUuid = uuid();
const textOneUuid = uuid();
const textTwoUuid = uuid();
const textThreeUuid = uuid();
const columnsTwoUuid = uuid();
const textOrder1 = uuid();
const textOrder2 = uuid();
const textOrder3 = uuid();
const textOrder4 = uuid();
const editableMDXUuid = uuid();

const initialData: Editor = {
  root: {
    id: rootUuid,
    content: [textOneUuid, columnsTwoUuid],
  },
  selectedSection: editableMDXUuid,
  sections: {
    [rootUuid]: {
      id: rootUuid,
      name: "Root",
      slots: {
        content: [textOneUuid, columnsTwoUuid, editableMDXUuid],
      },
    },
    [textOneUuid]: {
      id: textOneUuid,
      name: "Text",
      props: {
        text: "Hello, World!",
      },
      slots: {},
    },
    [textTwoUuid]: {
      id: textTwoUuid,
      name: "Text",
      props: {
        text: "Middle, World!",
      },
      slots: {},
    },
    [textThreeUuid]: {
      id: textThreeUuid,
      name: "Text",
      props: {
        text: "Goodbye, World!",
      },
      slots: {},
    },
    [textOrder1]: {
      id: textOrder1,
      name: "Text",
      props: {
        text: "text 1",
      },
      slots: {},
    },
    [textOrder2]: {
      id: textOrder2,
      name: "Text",
      props: {
        text: "text 2",
      },
      slots: {},
    },
    [textOrder3]: {
      id: textOrder3,
      name: "Text",
      props: {
        text: "text 3",
      },
      slots: {},
    },
    [textOrder4]: {
      id: textOrder4,
      name: "Text",
      props: {
        text: "text 4",
      },
      slots: {},
    },
    [columnsTwoUuid]: {
      id: columnsTwoUuid,
      name: "Columns",
      props: {
        numberOfColumns: 2,
      },
      slots: {
        [0 as number]: [
          textTwoUuid,
          textOrder1,
          textOrder2,
        ],
        [1 as number]: [textThreeUuid],
      },
    },
    [editableMDXUuid]: {
      id: editableMDXUuid,
      name: "EditableMDX",
      slots: {},
      props: {
        source: `
Some **next-mdx-remote** text,

# with a componentD:

<Test />
<Editable />
        `,
      },
    },
  },
};

type TUseEditorElementsQuery = {
  editor: Editor;
  addToRoot: (elementToAdd: EditorSection) => void;
  setRootOrder: (newOrder: string[]) => void;
  setSectionData: UseMutationResult<
    void,
    Error,
    EditorSection,
    unknown
  >;
  setSectionsData: UseMutationResult<
    void,
    Error,
    Editor["sections"],
    unknown
  >;
};

export function useEditorElements(): TUseEditorElementsQuery {
  const queryClient = useQueryClient();

  const { data } = useQuery(
    {
      queryKey: [editorSectionsQuery],
      queryFn: async () => {
        return initialData;
      },
      initialData: initialData,
    },
    queryClient,
  );

  const addToRoot = (sectionToAdd: EditorSection) => {
    queryClient.setQueryData([editorSectionsQuery], {
      ...data,
      root: {
        content: [...data.root.content, sectionToAdd.id],
      },
      sections: { ...data.sections, [sectionToAdd.id]: sectionToAdd },
    });
    queryClient.invalidateQueries({ queryKey: [editorSectionsQuery] });
  };

  const setRootOrder = (newOrder: string[]) => {
    queryClient.setQueryData([editorSectionsQuery], {
      ...data,
      root: {
        content: newOrder,
      },
    });
    queryClient.invalidateQueries({ queryKey: [editorSectionsQuery] });
  };

  const setSectionData = useMutation({
    mutationKey: [editorSectionsQuery],
    mutationFn: async (newSectionData: EditorSection) => {
      const previousData = queryClient.getQueryData<Editor>([
        editorSectionsQuery,
      ]);
      if (!previousData) {
        return;
      }
      queryClient.setQueryData([editorSectionsQuery], {
        ...previousData,
        sections: {
          ...previousData.sections,
          [newSectionData.id]: newSectionData,
        },
      });
    },
  });

  const setSectionsData = useMutation({
    mutationKey: [editorSectionsQuery],
    mutationFn: async (newSectionsData: Editor["sections"]) => {
      const previousData = queryClient.getQueryData<Editor>([
        editorSectionsQuery,
      ]);
      if (!previousData) {
        return;
      }
      queryClient.setQueryData([editorSectionsQuery], {
        ...previousData,
        sections: newSectionsData,
      });
    },
  });

  return {
    editor: data,
    addToRoot,
    setRootOrder,
    setSectionData,
    setSectionsData,
  };
}
