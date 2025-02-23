import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Editable from "@/markdown/editable.mdx";

export type TClientMDXProps = {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};
// export type TClientMDXProps = { source: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>> };

const Test = () => <div>TEST from serialized React component</div>;

function CustomH1({ children }: { children: React.ReactNode }) {
  return <h1 style={{ color: "blue", fontSize: "100px" }}>{children}</h1>;
}

const overrideComponents = {
  Test,
  Editable,
  h1: CustomH1,
};
export const ClientMDX = ({ source }: TClientMDXProps) => {
  return <MDXRemote {...source} components={overrideComponents} />;
};
