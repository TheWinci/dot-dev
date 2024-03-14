"use client";
import Show from "@/components/show";
import { logout } from "@/libs/auth";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, {
  HTMLProps,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";

export type NavigationConfig = {
  label: string;
  path: string;
};
export type NavigationProps = {
  header?: React.ReactNode | boolean;
  footer?: React.ReactNode | boolean;
  accent?: string;
  config: NavigationConfig[];
  expanded?: boolean;
};

function Navigation({
  footer,
  header,
  config,
  expanded = false,
  accent = "",
}: NavigationProps) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const pathname = usePathname();

  const FooterToRender = useMemo(() => {
    if (footer) {
      if (typeof footer === "boolean") {
        return <DefaultFooter />;
      }
      return footer;
    }
    return null;
  }, [footer]);

  const HeaderToRender = useMemo(() => {
    if (header) {
      if (typeof header === "boolean") {
        return <DefaultHeader />;
      }
      return header;
    }
    return null;
  }, [header]);

  const isSelected = useCallback(
    (path: string) => {
      return pathname.includes(path)
        ? cn(
            `border-r-2 border-sky-700 bg-gradient-to-l from-sky-700/20 to-neutral-700/10`,
            accent,
          )
        : "";
    },
    [pathname, accent],
  );

  const handleExpandClicked = () => setIsExpanded(true);
  const handleCollapsClicked = () => setIsExpanded(false);

  return (
    <div
      className={`${
        isExpanded ? "w-48" : "w-12"
      } flex h-full flex-col bg-neutral-950 text-lg transition-all duration-300 ease-linear`}
    >
      <div
        className={`${
          isExpanded
            ? "[&>*]:[writing-mode:horizontal-tb]"
            : "[&>*]:[writing-mode:vertical-rl]"
        } flex w-full shrink grow flex-col content-start overflow-auto text-nowrap [&>*:first-child]:pt-1 [&>*:last-child]:pb-1`}
      >
        {HeaderToRender}
        {config.map((item, index) => (
          <Link
            key={`${item.path}-${index}`}
            href={item.path}
            className={isSelected(item.path)}
          >
            <Hover>{item.label}</Hover>
          </Link>
        ))}
      </div>
      <div
        className={`${
          isExpanded
            ? "[&>*]:[writing-mode:horizontal-tb]"
            : "[&>*:last-child]:[writing-mode:horizontal-tb] [&>*]:[writing-mode:vertical-rl]"
        } w-full content-start border-t border-neutral-400 [&>*:first-child]:pt-3 [&>*:last-child]:pb-3`}
      >
        {FooterToRender}
        <Show if={isExpanded}>
          <Hover onClick={handleCollapsClicked}>{"<<"}</Hover>
        </Show>
        <Show if={!isExpanded}>
          <Hover onClick={handleExpandClicked}>{">>"}</Hover>
        </Show>
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

function DefaultFooter() {
  const router = useRouter();
  const handleLogout = async () => {
    await logout();
    router.push("/auth");
  };
  return <Hover onClick={handleLogout}>LOGOUT</Hover>;
}

function DefaultHeader() {
  return (
    <Link key={"/app"} href={"/app"}>
      <Hover>HOME</Hover>
    </Link>
  );
}
