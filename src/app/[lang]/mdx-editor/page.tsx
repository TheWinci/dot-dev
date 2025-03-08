"use client";
import React from "react";
import { EditableMDX } from "@/components/sections";
import CodeMirror from "@uiw/react-codemirror";
import { langs } from '@uiw/codemirror-extensions-langs';
import { githubDark } from "@uiw/codemirror-theme-github";

const initialSource = `
# Hello World
<h1>TRT</h1>
<CustomDiv className="text-white h-10 bg-blue-900 text-4xl">
TEST
</CustomDiv>
<Test startWith="TSX" />
<Editable />
<Script>
  console.log('Script injected successfully!');

  </Script>

<Translation translationKey="products.cart" />

\`\`\`jsx
function Demo() {
  return <div>demo</div>
}
\`\`\`

<style>{\`
h1 {
  color: red
}
\`}</style>

<h1 className="bg-white">
ARK
</h1>

`;

const Page = () => {
  const [source, setSource] = React.useState(initialSource);

  const handleSourceChange = (value: string) => {
    setSource(value);
  };

  return (
    <div className="flex h-full w-full overflow-hidden bg-amber-300">
      <div className="flex flex-1 bg-red-900">
        <EditableMDX source={source} />
      </div>
      <div className="flex flex-1 flex-col bg-blue-900">
        <CodeMirror
          className="flex-1"
          value={source}
          height="100%"
          theme={githubDark}
          extensions={[
            langs.markdown(),
            langs.javascript(),
            langs.html(),
            langs.css(),
            langs.jsx(),
            langs.typescript(),
            langs.tsx(),
          ]}
          onChange={handleSourceChange}
        />
      </div>
      {/* <div className="flex max-w-64 bg-green-900">COMPONENTS</div> */}
    </div>
  );
};

export default Page;
