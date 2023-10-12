import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

type ContentProps = {
  content: PortableTextBlock[];
};

export default function Content({ content }: ContentProps) {
  return (
    <section className="bg-secondary py-8">
      <div className="px-4 py-10 mx-auto max-w-screen-xl text-left flex flex-col gap-6">
        <PortableText
          value={content}
          components={{
            block: {
              normal: ({ children }) => (
                <p className="text-base leading-6 text-gray-700">{children}</p>
              ),
              h1: ({ children }) => (
                <h1 className="text-2xl font-bold leading-8 text-gray-900">
                  {children}
                </h1>
              ),
            },
          }}
        />
      </div>
    </section>
  );
}
