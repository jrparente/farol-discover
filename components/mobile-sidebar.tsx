"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { FileText, Menu } from "lucide-react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import { Separator } from "./ui/separator";

const font = Montserrat({
  weight: "900",
  subsets: ["latin"],
});

export default function MobileSidebar({ headerNav }: { headerNav: any }) {
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
          <div className="px-3 py-6 flex-1 space-y-1">
            <SheetClose asChild>
              <Link href="/" className="flex items-center">
                <h1 className={cn("text-xl font-bold", font.className)}>
                  Farol Discover
                </h1>
              </Link>
            </SheetClose>

            {headerNav &&
              headerNav.length > 0 &&
              headerNav.map((item: any) => (
                <React.Fragment key={item._key}>
                  <SheetClose asChild>
                    <Link
                      href={item.link}
                      className={cn(
                        "text-sm flex p-3 pl-0 w-full justify-start font-medium cursor-pointer hover:text-muted-foreground hover:bg-muted rounded-lg transition",
                        pathname === `/${item.link}`
                          ? "text-muted-foreground bg-muted"
                          : "text-zinc-400"
                      )}
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                  <Separator className="border border-muted-foreground/10" />
                  {item.subNavItems &&
                    item.subNavItems.length > 0 &&
                    item.subNavItems.map((subNavItem: any) => (
                      <React.Fragment key={subNavItem._key}>
                        {subNavItem.href !== item.link && (
                          <>
                            <SheetClose asChild>
                              <Link
                                href={subNavItem.href}
                                className={cn(
                                  "text-sm flex p-3 pl-0 w-full justify-start font-medium cursor-pointer hover:text-muted-foreground hover:bg-muted rounded-lg transition",
                                  pathname === `/${subNavItem.href}`
                                    ? "text-muted-foreground bg-muted"
                                    : "text-zinc-400"
                                )}
                              >
                                {subNavItem.title}
                              </Link>
                            </SheetClose>
                            <Separator className="border border-muted-foreground/10" />
                          </>
                        )}
                      </React.Fragment>
                    ))}
                </React.Fragment>
              ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
