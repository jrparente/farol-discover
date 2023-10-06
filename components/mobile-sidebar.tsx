"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { routes } from "@/constants";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const font = Montserrat({
  weight: "900",
  subsets: ["latin"],
});

export default function MobileSidebar() {
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
            "md:hidden z-10",
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
            <Link href="/dashboard" className="flex items-center pl-3 mb-14">
              <h1 className={cn("text-xl font-bold", font.className)}>
                Farol Discover
              </h1>
            </Link>
            <div className="space-y-1">
              {routes.map((route, index) => (
                <Link
                  href={route.href}
                  key={index}
                  className={cn(
                    "text-sm flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                    pathname === route.href
                      ? "text-white bg-white/10"
                      : "text-zinc-400"
                  )}
                >
                  <div className="flex items-center flex-1">
                    <route.icon className={cn("h-5 w-5 mr-3")} />
                    {route.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
