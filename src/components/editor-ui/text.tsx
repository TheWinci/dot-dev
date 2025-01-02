import React, { FC, PropsWithChildren } from "react";

export interface TTextProps {
  text?: string;
};

export const Text = ({ text }: TTextProps) => {
  return <span>{text}</span>;
};
