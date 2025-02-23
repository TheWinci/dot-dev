"use client";
import React, { useEffect, useState } from "react";
import { ClientMDX } from "../markdown/client-mdx";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type TEditableMDXProps = { source?: string };
export type TSerializedSource = MDXRemoteSerializeResult<
  Record<string, unknown>,
  Record<string, unknown>
>;

export const EditableMDX = ({ source = "" }: TEditableMDXProps) => {
  const [serializedSource, setSerializedSource] = useState<TSerializedSource>();

  useEffect(() => {
    console.log("source changed", source);
    serialize(source).then((result) => {
      setSerializedSource(result);
    });
  }, [source]);

  if (!serializedSource) {
    return null;
  }

  return <ClientMDX source={serializedSource} />;
};

EditableMDX.slots = [] as string[];
EditableMDX.props = ["source"];
