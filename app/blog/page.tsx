import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="bg-red-400" style={{ height: "2000px" }}>
      BLOG CONTENT
      <Link href={"/auth"}>auth</Link>
      <Link href={"/dashboard"}>blog</Link>
    </div>
  );
}

export default Page;
