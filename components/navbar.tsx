"use client";

import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import MobileSidebar from "./mobile-sidebar";
import { useCallback, useEffect, useState } from "react";
import { fetchDocumentSlug, getNavigation } from "@/sanity/sanity-utils";
import { Loader } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import React from "react";
import LanguageToggle from "./language-toggle";

const font = Montserrat({
  weight: "900",
  subsets: ["latin"],
});

export default function Navbar({
  language,
  locale,
  defaultLanguage,
}: {
  language: string;
  locale: string;
  defaultLanguage: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [headerNav, setHeaderNav] = useState<any>(null);
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
      let queryParams = { language };
      let navItemsRef = await getNavigation(queryParams);

      if (!navItemsRef || navItemsRef.length === 0) {
        queryParams = { language: defaultLanguage };

        navItemsRef = await getNavigation(queryParams);

        if (!navItemsRef || navItemsRef.length === 0) {
          setError("No navigation items found");
        }
      }

      const fetchUrls = async (navItems: any[]) => {
        return Promise.all(
          navItems.map(async (navItem: any) => {
            const linkURL =
              navItem.link._type === "reference"
                ? await fetchDocumentSlug(navItem.link)
                : navItem.link.href;

            const subNavItems =
              navItem.subNavItems && navItem.subNavItems.length > 0
                ? await Promise.all(
                    navItem.subNavItems.map(async (subNavItem: any) => {
                      const subLinkURL =
                        subNavItem.link._type === "reference"
                          ? await fetchDocumentSlug(subNavItem.link)
                          : subNavItem.link.href;
                      return {
                        title: subNavItem.title,
                        description: subNavItem.subtitle,
                        href: subLinkURL,
                      };
                    })
                  )
                : [];

            return {
              ...navItem,
              link: linkURL,
              subNavItems,
            };
          })
        );
      };

      const updatedHeaderNav = await fetchUrls(
        navItemsRef[0].headerNav.navItems
      );

      setHeaderNav(updatedHeaderNav);
    } catch (err) {
      setError("Failed to load navigation");
    } finally {
      setLoading(false);
    }
  }, [language, defaultLanguage]);

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
          <MobileSidebar headerNav={headerNav} />
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

          {/* Display header nav if there are any */}
          {headerNav && headerNav.length > 0 ? (
            <NavigationMenu>
              <NavigationMenuList>
                {headerNav.map((item: any, index: number) => (
                  <NavigationMenuItem key={index}>
                    {item.subNavItems && item.subNavItems.length > 0 ? (
                      <>
                        <Link href={item.link} passHref>
                          <NavigationMenuTrigger
                            className={cn(
                              "text-lg",
                              navigationMenuTriggerStyle()
                            )}
                          >
                            {item.title}
                          </NavigationMenuTrigger>
                        </Link>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            {item.subNavItems.map(
                              (subNavItem: any, index: number) => (
                                <React.Fragment key={subNavItem._key}>
                                  {index === 0 && (
                                    <li className="row-span-3">
                                      <NavigationMenuLink asChild>
                                        <a
                                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md cursor-pointer"
                                          href={subNavItem.href}
                                        >
                                          <div className="mb-2 mt-4 text-lg font-medium">
                                            {subNavItem.title}
                                          </div>
                                          <p className="text-sm leading-tight text-muted-foreground">
                                            {subNavItem.description}
                                          </p>
                                        </a>
                                      </NavigationMenuLink>
                                    </li>
                                  )}
                                  {index !== 0 && (
                                    <ListItem
                                      title={subNavItem.title}
                                      href={subNavItem.href}
                                    >
                                      {subNavItem.description}
                                    </ListItem>
                                  )}
                                </React.Fragment>
                              )
                            )}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuItem key={index}>
                        <Link href={`${item.link}`} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={cn(
                              "text-lg",
                              navigationMenuTriggerStyle()
                            )}
                          >
                            {item.title}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          ) : null}
        </div>

        <div className="flex items-center gap-x-2">
          <LanguageToggle language={language} />
          <ModeToggle scrolled={scrolled} />
          <Link href="/contact-us">
            <Button
              variant="default"
              className="rounded-md text-sm font-medium"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
