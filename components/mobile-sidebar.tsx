"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { FileText, Menu } from "lucide-react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { routes } from "@/constants";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Page } from "@/sanity/types/types";
import { getPages } from "@/sanity/sanity-utils";

const font = Montserrat({
  weight: "900",
  subsets: ["latin"],
});

export default function MobileSidebar() {
  const [pages, setPages] = useState<Page[]>([]);
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPages();
      setPages(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className={cn(
            "lg:hidden z-10",
            scrolled ? "text-current" : "text-white"
          )}
          variant="ghost"
          size="icon"
        >
          <Menu style={{ stroke: scrolled ? "currentColor" : "white" }} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 border-0">
        <div className="space-y-4 py-4 flex flex-col h-full ">
          <div className="px-3 py-2 flex-1">
            <SheetClose asChild>
              <Link href="/" className="flex items-center pl-3 mb-14">
                <h1 className={cn("text-xl font-bold", font.className)}>
                  Farol Discover
                </h1>
              </Link>
            </SheetClose>
            <div className="space-y-1">
              {routes.map((route, index) => (
                <SheetClose asChild key={index}>
                  <Link
                    href={route.href}
                    className={cn(
                      "text-sm flex p-3 w-full justify-start font-medium cursor-pointer hover:text-muted-foreground hover:bg-muted rounded-lg transition",
                      pathname === route.href
                        ? "text-muted-foreground bg-muted"
                        : "text-zinc-400"
                    )}
                  >
                    <div className="flex items-center flex-1">
                      <route.icon className={cn("h-5 w-5 mr-3")} />
                      {route.label}
                    </div>
                  </Link>
                </SheetClose>
              ))}
              {pages && pages.length > 0
                ? pages.map((page, index) => (
                    <SheetClose asChild key={index}>
                      <Link
                        href={`/${page.slug}`}
                        className={cn(
                          "text-sm flex p-3 w-full justify-start font-medium cursor-pointer hover:text-muted-foreground hover:bg-muted rounded-lg transition",
                          pathname === `/${page.slug}`
                            ? "text-muted-foreground bg-muted"
                            : "text-zinc-400"
                        )}
                      >
                        <div className="flex items-center flex-1">
                          <FileText className={cn("h-5 w-5 mr-3")} />
                          {page.pageHeading}
                        </div>
                      </Link>
                    </SheetClose>
                  ))
                : null}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
