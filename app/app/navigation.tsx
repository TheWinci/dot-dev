"use client";
import Show from "@/components/show";
import { logout } from "@/libs/auth";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { HTMLProps, PropsWithChildren, useState } from "react";

function Navigation() {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(true);
  const pathname = usePathname();

  const isSelected = (path: string) => {
    return pathname === path
      ? "border-r-2 border-sky-700 bg-gradient-to-l from-sky-700/15 to-neutral-700/15"
      : "";
  };

  const handleExpandClicked = () => setIsExpanded(true);
  const handleCollapsClicked = () => setIsExpanded(false);

  const handleLogout = async () => {
    await logout();
    router.push("/auth");
  };

  return (
    <div
      className={`${
        isExpanded ? "w-48" : "w-12"
      } left-0 top-0 h-full flex-shrink-0 overflow-hidden bg-neutral-950 text-lg transition-all duration-300 ease-linear`}
    >
      <nav
        className={`${
          isExpanded
            ? "[&>*]:[writing-mode:horizontal-tb]"
            : "flex-wrap content-start [&>*]:[writing-mode:vertical-rl]"
        } flex flex-col overflow-auto pt-2`}
      >
        <Link href={"/app"} className={isSelected("/app")}>
          <Hover>HOME</Hover>
        </Link>
        <Link
          href={"/app/cookbook"}
          className={`${isSelected("/app/cookbook")}`}
        >
          <Hover>COOKBOOK</Hover>
        </Link>
      </nav>
      <div
        className={`${
          isExpanded
            ? "w-48 [&>div]:[writing-mode:horizontal-tb]"
            : "w-12 flex-wrap content-start [&>div]:[writing-mode:vertical-rl]"
        } absolute bottom-0 left-0 flex flex-col pb-2 transition-all duration-300 ease-linear`}
      >
        <Hover
          onClick={handleLogout}
          className={`border-t border-neutral-400 pt-4`}
        >
          LOGOUT
        </Hover>
        <div>
          <Show if={isExpanded}>
            <Hover onClick={handleCollapsClicked}>{"<<"}</Hover>
          </Show>
          <Show if={!isExpanded}>
            <Hover
              onClick={handleExpandClicked}
              className="[writing-mode:horizontal-tb]"
            >
              {">>"}
            </Hover>
          </Show>
        </div>
      </div>
    </div>
  );
}

export default Navigation;

function Hover({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLProps<HTMLDivElement>>) {
  return (
    <div
      className={cn(
        "cursor-pointer p-2 hover:bg-neutral-800 hover:text-neutral-400",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
