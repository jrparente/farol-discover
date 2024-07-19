"use client";

import { urlForImage } from "@/sanity/sanity-utils";
import { SanityImageAssetDocument } from "next-sanity";
import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "src" | "alt"> & {
  source?: SanityImageAssetDocument;
  className?: string;
  alt?: string;
};

export default function SanityImage({ source, className }: Props) {
  if (!source) {
    return null;
  }
  const imageUrl = urlForImage(source).url();
  const blurUrl = urlForImage(source).width(20).quality(20).url();

  return (
    <Image
      src={imageUrl}
      alt={source.alt ? source.alt : "Image"}
      width={2000}
      height={2000}
      placeholder="blur"
      blurDataURL={blurUrl}
      className={className}
    />
  );
}
