import { client } from "@/sanity/sanity-utils";
import Link from "next/link";
import React from "react";

interface CustomLinkSchema {
  href: any;
  children: any;
  className?: string;
  passHref?: any;
}

async function fetchDocumentSlug(ref: any) {
  const response = await client.getDocument(ref._ref);

  return response && response.pageInfo.slug
    ? `/${response.language}/${response.pageInfo.slug.current}`
    : "/";
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
