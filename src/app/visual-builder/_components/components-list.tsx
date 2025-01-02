import React, { useMemo, useState, ComponentProps } from "react";
import * as UI from "@/components/editor-ui";
import { Search } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar";
import { Label } from "@/components/ui/label";

export const ComponentsList = () => {
  const [searchPhrase, setSearchPhrase] = useState<string | null>(null);

  const keys = useMemo(
    () =>
      (Object.keys(UI) as Array<keyof typeof UI>)
        .filter((componentName) =>
          searchPhrase
            ? componentName.toLowerCase().includes(searchPhrase.toLowerCase())
            : true,
        )
        .filter((component) => {
          // console.log(
          //   'isValidElement',
          //   typeof UI[component],
          //   component,
          //   React.isValidElement(UI[component]),
          // );
          return !React.isValidElement(UI[component]);
        }),
    [searchPhrase],
  );

  const handleSearchChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setSearchPhrase(null);
      return;
    }
    setSearchPhrase(e.target.value);
  };

  const getComponentSlots = (componentName: keyof typeof UI) => {
    const component = UI[componentName];
    type TComponentProps = ComponentProps<typeof component>;
    let componentProps: TComponentProps = {};
    if ('slots' in componentProps) {
      console.log('has slots')
    }

    // console.log('componentProps', componentName, componentProps);

    return null;
  }

  return (
    <div className="pt-2">
      <div className="py-4">
        <form>
          <SidebarGroup className="py-0">
            <SidebarGroupContent className="relative">
              <Label htmlFor="search" className="sr-only">
                Search
              </Label>
              <SidebarInput
                id="search"
                placeholder="Search the components..."
                className="pl-8"
                onChange={handleSearchChanged}
              />
              <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
            </SidebarGroupContent>
          </SidebarGroup>
        </form>
      </div>
      {keys.map((key) => {
        return (
          <div
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("component", key);
            }}
            key={key}
            className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-800"
          >
            <span>{key}</span>
            <span>{getComponentSlots(key)}</span>
          </div>
        );
      })}
    </div>
  );
};
