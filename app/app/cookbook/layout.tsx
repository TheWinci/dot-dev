import React, { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="">
      Layout
      {children}
    </div>
  );
}

export default Layout;
