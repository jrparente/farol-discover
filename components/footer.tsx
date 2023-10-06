import Link from "next/link";

import { Facebook, Instagram } from "lucide-react";
import { Separator } from "./ui/separator";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Montserrat({
  weight: "900",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="p-4 sm:p-6">
      <Separator className="my-6 lg:my-8" />
      <div className="max-w-screen-xl mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <Link href="/">
              <h1
                className={cn(
                  "md:block text-2xl font-extrabold tracking-tight leading-none",
                  font.className
                )}
              >
                Farol Discover
              </h1>
            </Link>
            <span className="text-sm text-muted-foreground">
              License Number: RNAVT: 10982
            </span>
            <span className="text-sm text-muted-foreground sm:text-center">
              © {new Date().getFullYear()}{" "}
              <Link href="/" className="hover:underline">
                Farol Discover™
              </Link>
              . All Rights Reserved.
            </span>
          </div>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <Link
              href="#"
              className="text-muted-foreground hover:text-gray-900 dark:hover:text-white"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-gray-900 dark:hover:text-white"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
