"use client";
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEditorDevice } from "@/hooks/use-editor-device";
import { usePreview } from "@/hooks/use-preview";
import {
  Laptop,
  Maximize,
  Minimize,
  Redo2,
  Smartphone,
  Tablet,
  Undo2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isPreviewMode, enterPreviewMode, exitPreviewMode] = usePreview();
  const [device, setDevice] = useEditorDevice();

  const handlePreviewClicked = () => enterPreviewMode();
  const handleExitPreviewClicked = () => exitPreviewMode();
  const handleDeviceChanged = (device: string) => setDevice(device);

  const handleUndoClicked = () => {
    console.log("Undo...");
  };

  const handleRedoClicked = () => {
    console.log("Redo...");
  };

  const handleSaveClicked = async () => {
    console.log("Saving...");
  };

  return (
    <TooltipProvider>
      <header
        className={cn(
          "sticky top-0 flex h-16 shrink-0 items-center justify-between gap-2 border-b bg-background px-4 transition-all",
          { "!h-0 !overflow-hidden !p-0": isPreviewMode },
        )}
      >
        <aside className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Visual Builder</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </aside>
        <aside>
          <Tabs
            defaultValue="Desktop"
            className="w-fit "
            value={device}
            onValueChange={handleDeviceChanged}
          >
            <TabsList className="grid h-fit w-full grid-cols-3 bg-transparent">
              <Tooltip>
                <TooltipTrigger>
                  <TabsTrigger
                    value="Desktop"
                    className="h-10 w-10 p-0 data-[state=active]:bg-muted"
                  >
                    <Laptop />
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Desktop</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <TabsTrigger
                    value="Tablet"
                    className="h-10 w-10 p-0 data-[state=active]:bg-muted"
                  >
                    <Tablet />
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tablet</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <TabsTrigger
                    value="Smartphone"
                    className="h-10 w-10 p-0 data-[state=active]:bg-muted"
                  >
                    <Smartphone />
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Mobile</p>
                </TooltipContent>
              </Tooltip>
            </TabsList>
          </Tabs>
        </aside>
        <aside className="flex items-center gap-2">
          <Button
            onClick={handleUndoClicked}
            variant={"ghost"}
            size={"icon"}
            className="hover:bg-slate-800"
          >
            <Undo2 />
          </Button>
          <Button
            onClick={handleRedoClicked}
            variant={"ghost"}
            size={"icon"}
            className="mr-4 hover:bg-slate-800"
          >
            <Redo2 />
          </Button>
          <Button onClick={handleSaveClicked}>Save</Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="hover:bg-slate-800"
            onClick={handlePreviewClicked}
          >
            <Maximize />
          </Button>
        </aside>
      </header>
      <div
        className={cn(
          { hidden: !isPreviewMode },
          { "absolute right-0 top-0 p-4": isPreviewMode },
        )}
      >
        <Button
          variant={"ghost"}
          size={"icon"}
          className="hover:bg-slate-800"
          onClick={handleExitPreviewClicked}
        >
          <Minimize />
        </Button>
      </div>
    </TooltipProvider>
  );
};
