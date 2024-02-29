"use client";
import { logout } from "@/libs/auth";
import Link from "next/link";
import { RedirectType, redirect, useRouter } from "next/navigation";
import React, { useState } from "react";

function Navigation() {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(true);
  
  const handleExpandClicked = () => setIsExpanded(true);
  const handleCollapsClicked = () => setIsExpanded(false);

  const handleLogout = async () => {
    await logout();
    router.push("/auth");
  };

  return (
    <div
      className={`${isExpanded ? "w-48" : "w-24"} h-full flex-shrink-0 overflow-auto bg-neutral-950 p-3 transition-all duration-300 ease-linear`}
    >
      <nav className="flex h-full flex-col">
        <Link href={"/auth"}>AUTH</Link>
        <Link href={"/app"}>HOME</Link>
        <Link href={"/app/blog"}>BLOG</Link>
        <Link href={"/app/landing"}>LANDING</Link>
        <div className="mt-auto flex flex-col">
          <span onClick={handleLogout}>LOGOUT</span>
          <span
            onClick={isExpanded ? handleCollapsClicked : handleExpandClicked}
          >
            {isExpanded ? "<<" : ">>"}
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
