import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function LandingHero() {
  return (
    <section className="relative ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          width={1920}
          height={1440}
          src="/farol-discover.jpg"
          alt="Farol Discover"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
      {/* Content */}
      <div className="relative z-10 grid max-w-screen-xl px-4 py-20 md:py-32 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Discover Hidden Portugal on Foot
          </h1>
          <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-300">
            Join Farol Discover for authentic walking and trekking tours that
            take you off the beaten path.
          </p>
          <div className="flex items-center gap-x-4">
            <Link href="/tours">
              <Button variant="default">
                Explore Tours
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex"></div>
      </div>
    </section>
  );
}
