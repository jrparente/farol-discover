import SanityImage from "./SanityImage";
import SanityLink from "./SanityLink";
import SanityPortableTextBlock from "./SanityPortableTextBlock";
import { Button } from "./ui/button";

type InfoSectionProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  content?: any;
  image?: any;
  buttonText?: string;
  buttonLink?: string;
  imagePosition?: string;
};

export default function InfoSection({
  title = "",
  subtitle,
  description,
  image,
  buttonText,
  buttonLink,
  imagePosition,
  content,
}: InfoSectionProps) {
  return (
    <section className="my-2 py-2">
      <div
        className={`gap-16 items-center px-4 py-10 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16 ${imagePosition === "left" ? "lg:grid-flow-dense" : ""}`}
      >
        {image && imagePosition === "left" && (
          <div className="relative aspect-square lg:order-1 lg:col-span-1">
            <SanityImage
              className="w-full h-full object-cover"
              source={image}
            />
          </div>
        )}
        <div
          className={`font-light sm:text-lg ${
            !image ? "lg:col-span-3" : "lg:col-span-2"
          }`}
        >
          {title && (
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              {title}
            </h1>
          )}

          {subtitle && (
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-muted-foreground">
              {subtitle}
            </h2>
          )}
          {description && (
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              {description}
            </p>
          )}
          {content && <SanityPortableTextBlock data={content} />}
          {buttonLink && (
            <SanityLink href={buttonLink}>
              <Button variant="link" className="uppercase">
                {buttonText}
              </Button>
            </SanityLink>
          )}
        </div>
        {image && imagePosition !== "left" && (
          <div className="relative aspect-square lg:col-span-1">
            <SanityImage
              className="w-full h-full object-cover"
              source={image}
            />
          </div>
        )}
      </div>
    </section>
  );
}
