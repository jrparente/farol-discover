"use client";

import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import MobileSidebar from "./mobile-sidebar";
import { routes } from "@/constants";
import { useEffect, useState } from "react";

const font = Montserrat({
  weight: "900",
  subsets: ["latin"],
});

export default function Navbar() {
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
    <div
      className={cn(
        "fixed w-full z-40 py-2 h-16 transition-all ease-in-out duration-300",
        scrolled ? "bg-background/80 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-screen-xl mx-auto flex md:px-4 items-center justify-between ">
        <div className="flex items-center">
          <MobileSidebar />
          <Link href="/">
            <h1
              className={cn(
                "hidden md:block text-2xl font-extrabold tracking-tight leading-none",
                font.className,
                scrolled ? "" : "text-white"
              )}
            >
              Farol Discover
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-x-2">
          {routes.map((route, index) => (
            <Link href={route.href} key={index}>
              <Button
                variant="link"
                className={cn("text-lg", scrolled ? "" : "text-white")}
              >
                {route.label}
              </Button>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-x-2">
          <ModeToggle scrolled={scrolled} />
          <Link href="#">
            <Button
              variant="default"
              className="rounded-full text-lg"
              size="lg"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
