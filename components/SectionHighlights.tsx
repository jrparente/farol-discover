"use client";

import React from "react";
import SanityImage from "./SanityImage";
import { useTheme } from "next-themes";

type SectionHighlightsProps = {
  title: string;
  subtitle: string;
  highlights: Array<{
    title?: string;
    description?: string;
    image?: any;
    imageWhite?: any;
  }>;
};

function SectionHighlights({
  title,
  subtitle,
  highlights,
}: SectionHighlightsProps) {
  const { theme } = useTheme();

  console.log("Theme: ", theme);
  return (
    <section className="my-8 bg-secondary py-24">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          {title && (
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              {subtitle}
            </p>
          )}
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {highlights.map((highlight, index) => (
            <div key={index}>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                {highlight.image && theme === "light" && (
                  <SanityImage
                    source={highlight.image}
                    alt={highlight.title}
                    className="size-6 lg:size-10"
                  />
                )}
                {highlight.imageWhite && theme === "dark" && (
                  <SanityImage
                    source={highlight.imageWhite}
                    alt={highlight.title}
                    className="size-6 lg:size-10"
                  />
                )}
              </div>
              {highlight.title && (
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  {highlight.title}
                </h3>
              )}
              {highlight.description && (
                <p className="text-gray-500 dark:text-gray-400">
                  {highlight.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionHighlights;
