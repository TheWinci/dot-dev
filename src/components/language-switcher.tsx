"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { i18n, Locale } from "../../i18n-config";

export function LanguageSwitcher() {
  const pathName = usePathname();
  const currentLocale = pathName.split("/")[1] as Locale || i18n.defaultLocale;

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link 
              href={redirectedPathName(locale)}
              className={locale === currentLocale ? "font-bold" : ""}
            >
              {locale === "en" ? "English" : locale === "nl" ? "Nederlands" : locale}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}