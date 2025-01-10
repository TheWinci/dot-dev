"use client";
import React from "react";
import { getQueryClient } from "@/providers/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Navigation } from "../../components/editor-ui/navigation";
import { Sidebar } from "../../components/editor-ui/sidebar";
import { Editor } from "../../components/editor-ui/editor";

const Page = () => {
  const queryClient = getQueryClient();

  return (
    <div className="flex h-full w-full flex-col">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Navigation />
        <Sidebar />
        <Editor />
      </HydrationBoundary>
    </div>
  );
};

export default Page;
