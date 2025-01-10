import { useQuery, useQueryClient } from "@tanstack/react-query";
import { text } from "stream/consumers";
import { v4 as uuid } from "uuid";

export const editorElementsQuery = "editor-elements" as const;

export type EditorElement = {
  id: string;
  name: string;
  props?: {
    [key: string]: any; // Prop name, Prop value
  };
  slots?: {
    [key: string]: string[]; // Slot name, Element ID array
  };
};

export type Editor = {
  root: {
    id: string;
    content: string[];
  };
  elements: EditorElement[];
  selectedElement?: string;
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

const initialData: Editor = {
  root: {
    id: rootUuid,
    content: [textOneUuid, columnsTwoUuid],
  },
  elements: [
    {
      id: textOneUuid,
      name: "Text",
      props: {
        text: "Hello, World!",
      },
      slots: {},
    },
    {
      id: textTwoUuid,
      name: "Text",
      props: {
        text: "Middle, World!",
      },
      slots: {},
    },
    {
      id: textThreeUuid,
      name: "Text",
      props: {
        text: "Goodbye, World!",
      },
      slots: {},
    },
    {
      id: textOrder1,
      name: "Text",
      props: {
        text: "text 1",
      },
      slots: {},
    },
    {
      id: textOrder2,
      name: "Text",
      props: {
        text: "text 2",
      },
      slots: {},
    },
    {
      id: textOrder3,
      name: "Text",
      props: {
        text: "text 3",
      },
      slots: {},
    },
    {
      id: textOrder4,
      name: "Text",
      props: {
        text: "text 4",
      },
      slots: {},
    },
    {
      id: columnsTwoUuid,
      name: "Columns",
      props: {
        numberOfColumns: 2,
      },
      slots: {
        0: [textTwoUuid, textOrder1, textOrder2, textOrder3, textOrder4],
        1: [textThreeUuid],
      },
    },
  ],
  selectedElement: rootUuid,
};

type TUseEditorElementsQuery = {
  editor: Editor,
  addToRoot: (elementToAdd: EditorElement) => void,
  setRootOrder: (newOrder: string[]) => void
};

export function useEditorElements(): TUseEditorElementsQuery {
  const queryClient = useQueryClient();

  const { data } = useQuery(
    {
      queryKey: [editorElementsQuery],
      queryFn: async () => {
        return initialData;
      },
      initialData: initialData,
    },
    queryClient,
  );

  const addToRoot = (elementToAdd: EditorElement) => {
    queryClient.setQueryData([editorElementsQuery], {
      root: {
        content: [...data.root.content, elementToAdd.id],
      },
      elements: [...data.elements, elementToAdd],
    });
  };

  const setRootOrder = (newOrder: string[]) => {
    queryClient.setQueryData([editorElementsQuery], {
      root: {
        content: newOrder,
      },
      elements: data.elements,
    });
  };

  return {
    editor: data,
    addToRoot,
    setRootOrder
  };
}
