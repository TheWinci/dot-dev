import React, { PropsWithChildren } from "react";
import Navigation from "../navigation";

const recipesConfig = [
  { label: "Sernik Wiedeński", path: "/app/cookbook/sernik-wiedenski" },
  { label: "Sernik Wiedeński", path: "/app/cookbook/sernik-wiedenski" },
  { label: "Sernik Wiedeński", path: "/app/cookbook/sernik-wiedenski" },
  { label: "Sernik Wiedeński", path: "/app/cookbook/sernik-wiedenski" },
  { label: "Sernik Wiedeński", path: "/app/cookbook/sernik-wiedenski" },
  { label: "Sernik Wiedeński", path: "/app/cookbook/sernik-wiedenski" },
  { label: "Sernik Wiedeński", path: "/app/cookbook/sernik-wiedenski" },
  { label: "Sernik Wiedeński", path: "/app/cookbook/sernik-wiedenski" },
  { label: "Sernik Wiedeński", path: "/app/cookbook/sernik-wiedenski" },
  { label: "Sernik Wiedeński", path: "/app/cookbook/sernik-wiedenski" },
];

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-full w-full flex-row">
      <Navigation
        config={recipesConfig}
        expanded
        accent="border-orange-700 from-orange-700/20"
        footer={false}
      />
      {children}
    </div>
  );
}

export default Layout;
