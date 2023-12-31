import Image from "next/image";

type InfoSectionProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
};

export default function InfoSection({
  title = "",
  subtitle,
  description,
  image,
}: InfoSectionProps) {
  return (
    <section className="my-2 py-2">
      <div className="gap-16 items-center px-4 py-10 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16">
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
        </div>
        {image && (
          <div className="relative aspect-square mt-8">
            <Image fill className="mb-4" src={image} alt={title} />
          </div>
        )}
      </div>
    </section>
  );
}
