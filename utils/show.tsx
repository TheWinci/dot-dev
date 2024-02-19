"use client";
import React, { Fragment, PropsWithChildren } from "react";

function Show({ if: show, children }: PropsWithChildren<{ if: boolean }>) {
  return (
    <div
      // className={`${show ? "scale-y-100" : "max-h-0 scale-y-0"} bg-slate-500`}
      // className={`${show ? "scale-y-100" : "max-h-0 scale-y-0"} transform origin-top transition-all duration-500 ease-linear`}
      style={{
        transition: "all",
        transitionDuration: "1500",
        transitionTimingFunction: 'linear',
        ...(show
          ? { display: "contents", scale: "1" }
          : { scale: "0", maxHeight: 0 }),
      }}
    >
      {children}
    </div>
  );
}

export default Show;
