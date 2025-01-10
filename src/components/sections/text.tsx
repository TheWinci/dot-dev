import React from "react";
import { TSectionProps } from "./types";

export interface TTextProps extends TSectionProps {
  text?: string;
};

export const Text = ({ text }: TTextProps) => {
  return <span>{text}</span>;
};

Text.slots = [] as string[];
