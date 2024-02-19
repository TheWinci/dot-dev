import React, { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex h-dvh flex-row overflow-x-hidden overflow-y-hidden bg-black">
            {children}
            <SpeedInsights />
            <Analytics />
          </div>
        </Providers>
      </body>
    </html>
  );
}

export default Layout;
