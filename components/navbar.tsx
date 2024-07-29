"use client";

import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import MobileSidebar from "./mobile-sidebar";
import { useCallback, useEffect, useState } from "react";
import {
  fetchDocumentSlug,
  getNavigation,
  getPages,
} from "@/sanity/sanity-utils";
import { Loader } from "lucide-react";

const font = Montserrat({
  weight: "900",
  subsets: ["latin"],
});

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [links, setLinks] = useState<{ title: string; slug: string }[]>([]);
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
      const navItemsRef = await getNavigation();
      if (!navItemsRef || navItemsRef.length === 0) {
        setError("No navigation items found");
      } else {
        const selectedLinks = await Promise.all(
          navItemsRef[0].navItems.map(async (item: any) => {
            const slug = await fetchDocumentSlug(item.link.internal);
            return { title: item.title, slug };
          })
        );
        setLinks(selectedLinks);
      }
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

  console.log("links", links);

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
          {/* Display pages if there are any */}
          {loading && <Loader className="w-4 h-4 animate-spin text-white" />}
          {error && <span className="text-red-500">{error}</span>}
          {links && links.length > 0
            ? links.map((page, index) => (
                <Link href={`${page.slug}`} key={index}>
                  <Button
                    variant="link"
                    className={cn("text-lg", scrolled ? "" : "text-white")}
                  >
                    {page.title}
                  </Button>
                </Link>
              ))
            : null}
        </div>

        <div className="flex items-center gap-x-2">
          <ModeToggle scrolled={scrolled} />
          <Link href="/contact-us">
            <Button variant="default" className="rounded-full md:text-lg">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
