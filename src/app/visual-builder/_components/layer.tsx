import { cn } from "@/lib/utils";
import React, { FC, PropsWithChildren } from "react";

export type TLayerProps = {
  name: string;
} & PropsWithChildren;

export const Layer: FC<TLayerProps> = ({ children, name }) => {
  return (
    <div className="bg-green-500 p-4">
      {name}
      <div className="border-l border-dashed border-red-500 bg-yellow-500 pl-4">
        {children}
      </div>
    </div>
  );
};
