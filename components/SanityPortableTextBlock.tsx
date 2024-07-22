import type { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
import { cn } from "@/lib/utils";

type PortableTextBlockProps = {
  data: PortableTextBlock[];
  className?: string;
};

function SanityPortableTextBlock({ data, className }: PortableTextBlockProps) {
  return (
    <PortableText
      value={data}
      components={{
        block: {
          normal: ({ children }) => (
            <p
              className={cn(
                "text-base leading-6 [&:not(:first-child)]:mb-4 [&:not(:last-child)]:mb-2",
                className
              )}
            >
              {children}
            </p>
          ),
          h1: ({ children }) => (
            <h1 className={cn("text-2xl font-bold leading-8 mb-4", className)}>
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className={cn("text-xl font-bold leading-8  mb-4", className)}>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className={cn("text-lg font-bold leading-8  mb-4", className)}>
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4
              className={cn("text-base font-bold leading-8  mb-4", className)}
            >
              {children}
            </h4>
          ),
        },
        marks: {
          strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          underline: ({ children }) => <u className="underline">{children}</u>,
          strikeThrough: ({ children }) => (
            <s className="line-through">{children}</s>
          ),
          link: ({ children, value }) => {
            const rel = (value?.href || "").startsWith("http")
              ? "noopener noreferrer"
              : undefined;
            const target = (value?.href || "").startsWith("http")
              ? "_blank"
              : undefined;
            return (
              <a
                href={value.href}
                rel={rel}
                target={target}
                className="text-primary hover:text-brand underline font-medium"
              >
                {children}
              </a>
            );
          },
        },
      }}
    />
  );
}

export default SanityPortableTextBlock;
