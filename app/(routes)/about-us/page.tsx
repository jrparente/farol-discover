import Hero from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AboutFaq from "./components/about-faq";

export default function AboutUs() {
  return (
    <div className="h-full">
      <Hero
        title="Discover the Team Behind the Trails"
        subtitle="Meet the passionate locals bringing you Portugal's hidden
            treasures"
      />

      <section className="my-2 py-2">
        <div className="gap-16 items-center px-4 py-10 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16">
          <div className="font-light sm:text-lg lg:col-span-2">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Meet Paulo
            </h1>

            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-muted-foreground">
              The Soul of Farol Discover
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Paulo Palhota is the founder and driving force behind Farol
              Discover. With a lifelong passion for connecting with people and
              cultures, Paulo finds joy in sharing the hidden gems of Portugal
              and beyond. Paulo&apos;s expertise in geography and languages make
              him not just a guide but a storyteller, enriching each journey
              with local insights.
            </p>
          </div>
          <div className="relative aspect-square mt-8">
            <Image fill className="mb-4" src="/paulo.jpg" alt="Paulo Palhota" />
          </div>
        </div>
      </section>
      <AboutFaq />
      <section className="my-2 py-12">
        <div className="max-w-screen-xl px-4 py-10 mx-auto flex flex-col items-start lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 space-y-8">
          <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Let&apos;s Connect!
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Whether you&apos;re looking for a unique experience in Portugal or
            just want to chat, we&apos;d love to hear from you.
          </p>
          <Button variant="default">Contact Us</Button>
        </div>
      </section>
    </div>
  );
}
