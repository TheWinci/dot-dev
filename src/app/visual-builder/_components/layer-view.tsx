import { cn } from "@/lib/utils";
import React, { FC, PropsWithChildren } from "react";
import { Layer } from "./layer";
import { LayerItem } from "./layer-item";


export const LayerView = () => {
  return (
    <div className="bg-blue-500">
      <Layer name="Layer 1">
        <LayerItem />
        <Layer name="Layer 2">
          <LayerItem />
          <LayerItem />
        </Layer>
      </Layer>
    </div>
  );
};
