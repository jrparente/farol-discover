"use client"; // Error components must be Client Components

import Hero from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <Hero
          title="Oops! This page got lost on the trail."
          subtitle="The page you are looking for might have been moved, renamed, or might never have existed."
        />
        <section className="my-2 py-2">
          <div className="gap-16 items-center justify-center px-4 py-10 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Something went wrong!
            </h1>
            <Button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
            >
              Try again
            </Button>
          </div>
        </section>{" "}
      </body>
    </html>
  );
}
