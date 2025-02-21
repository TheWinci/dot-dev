"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePreview } from "@/hooks/use-preview";
import { Plus, SquareStackIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { ComponentsList } from "./components-list";
import { LayerView } from "./layer-view";

export const Sidebar = () => {
  const [isPreviewMode] = usePreview();

  return (
    <Sheet open={true} modal={false}>
      <Tabs className="w-full" defaultValue="Components">
        <SheetContent
          hideX
          side="right"
          className={cn(
            "z-[80] mt-16 w-16 overflow-hidden p-0 shadow-none transition-all focus:border-none",
            { hidden: isPreviewMode },
          )}
        >
          <TabsList className="flex h-fit w-full flex-col items-center justify-evenly gap-4 bg-transparent p-4">
            <TabsTrigger
              value="Components"
              className="h-10 w-10 p-0 data-[state=active]:bg-muted"
            >
              <Plus />
            </TabsTrigger>
            <TabsTrigger
              value="Layers"
              className="h-10 w-10 p-0 data-[state=active]:bg-muted"
            >
              <SquareStackIcon />
            </TabsTrigger>
          </TabsList>
        </SheetContent>
        <SheetContent
          hideX
          side="right"
          className={cn(
            "z-[40] mr-16 mt-16 h-full w-80 overflow-hidden bg-background p-0 shadow-none transition-all",
            { hidden: isPreviewMode },
          )}
        >
          <div className="grid h-full gap-4 overflow-scroll p-4 pb-36">
            <TabsContent value="Components">
              <SheetHeader className="text-left">
                <SheetTitle>Components</SheetTitle>
                <SheetDescription>
                  You can drag and drop components on the canvas
                </SheetDescription>
              </SheetHeader>
              <ComponentsList />
            </TabsContent>
            <TabsContent value="Layers">
              <SheetHeader className="text-left">
                <SheetTitle>Layers</SheetTitle>
                <SheetDescription>
                  You can see and select layers on the canvas
                </SheetDescription>
              </SheetHeader>
              <LayerView />
            </TabsContent>
          </div>
        </SheetContent>
      </Tabs>
    </Sheet>
  );
};
