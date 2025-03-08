import React, { useEffect } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Editable from "@/markdown/editable.mdx";
import Translation from "../Translation";

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

interface ScriptInjectorProps {
  children: {
    props: {
      children: (string | unknown)[] | string;
    };
  };
}

const Script: React.FC<ScriptInjectorProps> = ({ children }) => {
  useEffect(() => {
    if (!children?.props?.children) return;

    let text = "";
    if (typeof children.props.children === "string") {
      text = children.props.children;
    } else {
      text = children.props.children
        .filter((child) => typeof child === "string")
        .join("");
    }
    const script = document.createElement("script");
    script.type = "text/javascript";

    script.text = text;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [children]);

  return null;
};

const overrideComponents = {
  Test,
  Editable,
  CustomDiv,
  Script,
  Translation,
  h1: CustomH1,
};
export const ClientMDX = ({ source }: TClientMDXProps) => {
  return (
    <div className="prose prose-gray w-full max-w-none">
      <MDXRemote {...source} components={overrideComponents} />
    </div>
  );
};
