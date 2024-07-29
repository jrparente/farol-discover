import { client, fetchDocumentSlug } from "@/sanity/sanity-utils";
import Link from "next/link";
import React from "react";

interface CustomLinkSchema {
  href: any;
  children: any;
  className?: string;
  passHref?: any;
}

async function SanityLink({
  href,
  children,
  className,
  ...props
}: CustomLinkSchema) {
  let slug = "";
  if (href.internal) {
    slug = await fetchDocumentSlug(href.internal);
  }

  return (
    <>
      {href?.internal ? (
        <Link href={slug} className={className} {...props}>
          {children}
        </Link>
      ) : href?.external ? (
        <a
          href={href.external}
          className={className}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      ) : null}
    </>
  );
}

export default SanityLink;
