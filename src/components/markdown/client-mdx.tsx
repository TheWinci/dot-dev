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

const Test = ({ startWith = "" }: { startWith?: string }) => (
  <span className="text-2xl font-black text-green-500">
    [{startWith}] serialized React component from TSX
  </span>
);

const CustomDiv = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    setKey((prev) => prev + 1);
    return () => setKey(0);
  }, [className]);

  return (
    <div
      key={`custom-div-${key}`}
      className={className}
      onClick={() => console.log("clicked")}
    >
      {children}
    </div>
  );
};

function CustomH1({ children }: { children: React.ReactNode }) {
  return <h1 style={{ color: "blue", fontSize: "100px" }}>{children}</h1>;
}

const overrideComponents = {
  Test,
  Editable,
  CustomDiv,
  h1: CustomH1,
};
export const ClientMDX = ({ source }: TClientMDXProps) => {
  return (
    <div className="prose prose-gray w-full max-w-none">
      <MDXRemote {...source} components={overrideComponents} />
    </div>
  );
};
