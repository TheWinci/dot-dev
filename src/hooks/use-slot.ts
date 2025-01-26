import { moveElementDown, moveElementUp } from "@/lib/utils";
import { useEditorElements } from "./use-editor-elements";

type TUseSlot = {
  sections: string[] | null;
  moveUp: (sectionId: string) => void;
  moveDown: (sectionId: string) => void;
  setSectionsOrder: (newOrder: string[]) => void;
};

export function useSlot(sectionId: string, slotName: string): TUseSlot {
  const { editor, setSectionData } = useEditorElements();

  const section = editor.sections?.[sectionId];
  const slot = section?.slots?.[slotName];

  const moveUp = (sectionId: string) => {
    if (!slot || !section || !section.slots) {
      return;
    }
    const index = slot.indexOf(sectionId);
    const newArray = moveElementUp(slot, index);
    section.slots[slotName] = newArray;
    setSectionData.mutate(section);
  };

  const moveDown = (sectionId: string) => {
    if (!slot || !section || !section.slots) {
      return;
    }
    const index = slot.indexOf(sectionId);
    const newArray = moveElementDown(slot, index);
    section.slots[slotName] = newArray;
    setSectionData.mutate(section);
  };

  const setSectionsOrder = (newOrder: string[]) => {
    if (!slot || !section || !section.slots) {
      return;
    }
    section.slots[slotName] = newOrder;
    setSectionData.mutate(section);
  };

  return { sections: slot || null, moveUp, moveDown, setSectionsOrder };
}
