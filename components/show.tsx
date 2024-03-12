"use client";
import React, { Fragment, PropsWithChildren } from "react";

function Show({ if: show, children }: PropsWithChildren<{ if: boolean }>) {
  if (!show) {
    return null;
  }
  
  return (
    <Fragment>
      {children}
    </Fragment>
  );
}

export default Show;
