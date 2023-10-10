import Hero from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AboutFaq from "./components/about-faq";
import { getAboutUs } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function AboutUs() {
  const aboutUs = await getAboutUs();

  return (
    <div className="h-full">
      <Hero title={aboutUs[0].pageHeading} subtitle={aboutUs[0].pageTagline} />
      <section className="bg-secondary py-2">
        <div className="px-4 py-10 mx-auto max-w-screen-xl text-center">
          <p>{aboutUs[0].pageDescription}</p>
        </div>
      </section>

      <section className="my-2 py-2">
        <div className="gap-16 items-center px-4 py-10 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16">
          <div className="font-light sm:text-lg lg:col-span-2">
            {aboutUs[0].title && (
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                {aboutUs[0].title}
              </h1>
            )}

            {aboutUs[0].subtitle && (
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-muted-foreground">
                {aboutUs[0].subtitle}
              </h2>
            )}
            {aboutUs[0].description && (
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                {aboutUs[0].description}
              </p>
            )}
          </div>
          {aboutUs[0].image && (
            <div className="relative aspect-square mt-8">
              <Image
                fill
                className="mb-4"
                src={aboutUs[0].image}
                alt="Paulo Palhota"
              />
            </div>
          )}
        </div>
      </section>

      <AboutFaq />
      <section className="my-2 py-12">
        <div className="max-w-screen-xl px-4 py-10 mx-auto flex flex-col items-start lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 space-y-8">
          <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            {aboutUs[0].ctaTitle}
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {aboutUs[0].ctaDescription}
          </p>
          <Link href={aboutUs[0].ctaButtonLink}>
            <Button variant="default">{aboutUs[0].ctaButtonText}</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
