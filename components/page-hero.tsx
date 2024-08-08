import Image from "next/image";
import SanityImage from "./SanityImage";

interface HeroProps {
  title: string;
  subtitle: string;
  image?: any;
}

export default function Hero({
  title,
  subtitle,
  image = "/farol-discover.jpg",
}: HeroProps) {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {image && image._type === "image" ? (
          <SanityImage
            width={1920}
            height={1440}
            source={image}
            alt="Farol Discover"
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            width={1920}
            height={1440}
            src={image}
            alt="Farol Discover"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
      {/* Content */}

      <div className="relative z-10 grid max-w-screen-xl px-4 pt-24  mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-white">
            {title}
          </h1>
          <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-300">
            {subtitle}
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex"></div>
      </div>
    </section>
  );
}
