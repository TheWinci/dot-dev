import React, { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
          {children}
          <SpeedInsights />
          <Analytics />
      </body>
    </html>
  );
}

export default Layout;
