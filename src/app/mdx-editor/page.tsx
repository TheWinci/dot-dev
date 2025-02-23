import React, { Fragment } from "react";
import { EditableMDX } from "@/components/sections/editable-mdx";

const source = 'Some **mdx** text, with a component <Test />'

const Page = () => {
  return (
    <Fragment>
      <div>Page</div>
      <EditableMDX source={source} />
    </Fragment>
  );
};

export default Page;
