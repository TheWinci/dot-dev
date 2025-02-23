import React from "react";
import { TSectionProps } from "./types";

export type TColumnsProps = {
  numberOfColumns?: number;
} & TSectionProps;

export const Columns = ({ numberOfColumns = 1, slots = {} }: TColumnsProps) => {

  return (
    <div className="flex">
      {Array.from({ length: numberOfColumns }).map((_, index) => (
        <div key={`column-${index}`} className="flex-1">
          {slots[index]}
        </div>
      ))}
    </div>
  );
};

Columns.slots = Array.from({ length: 10 }).map((_, index) => index.toString());
Columns.props = [] as string[];
