"use client";

import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import MobileSidebar from "./mobile-sidebar";
import { routes } from "@/constants";
import { useCallback, useEffect, useState } from "react";
import { getPages } from "@/sanity/sanity-utils";
import { Page } from "@/sanity/types/types";
import { Loader } from "lucide-react";

const font = Montserrat({
  weight: "900",
  subsets: ["latin"],
});

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getPages();
      setPages(result);
    } catch (err) {
      setError("Failed to load pages");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

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
                "hidden lg:block text-2xl font-extrabold tracking-tight leading-none",
                font.className,
                scrolled ? "" : "text-white"
              )}
            >
              Farol Discover
            </h1>
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-x-2">
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
          {/* Display pages if there are any */}
          {loading && <Loader className="w-4 h-4 animate-spin text-white" />}
          {error && <span className="text-red-500">{error}</span>}
          {pages && pages.length > 0
            ? pages.map((page, index) => (
                <Link href={`/${page.slug}`} key={index}>
                  <Button
                    variant="link"
                    className={cn("text-lg", scrolled ? "" : "text-white")}
                  >
                    {page.pageHeading}
                  </Button>
                </Link>
              ))
            : null}
        </div>

        <div className="flex items-center gap-x-2">
          <ModeToggle scrolled={scrolled} />
          <Link href="/contact">
            <Button variant="default" className="rounded-full md:text-lg">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
