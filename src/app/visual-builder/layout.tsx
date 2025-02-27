"use client";
import React, { FC, PropsWithChildren } from "react";
import { getQueryClient } from "@/providers/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Navigation } from "../../components/editor-ui/navigation";
import { Sidebar } from "../../components/editor-ui/sidebar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = getQueryClient();

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Navigation />
        <Sidebar />
        <div className="flex flex-1 overflow-hidden">
          {children}
        </div>
      </HydrationBoundary>
    </div>
  );
};

export default Layout;
