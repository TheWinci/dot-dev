"use client";
import React from "react";
import { getQueryClient } from "@/providers/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Navigation } from "./_components/navigation";
import { Sidebar } from "./_components/sidebar";
import { Editor } from "./_components/editor";

const Page = () => {
  const queryClient = getQueryClient();

  return (
    <div className="h-full w-full border-16 border-green-500 ">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Navigation />
        <Sidebar />
        <Editor />
      </HydrationBoundary>
    </div>
  );
};

export default Page;
