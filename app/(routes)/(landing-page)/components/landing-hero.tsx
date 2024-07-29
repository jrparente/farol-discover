import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SanityImage from "@/components/SanityImage";
import SanityLink from "@/components/SanityLink";

type LandingHeroProps = {
  pageHeading: string;
  pageTagline: string;
  pageHeadingImage?: any;
  pageHeadingMainButtonText?: string;
  pageHeadingMainButtonLink?: {
    internal?: {
      _ref: string;
      _type: string;
    };
    external?: string;
    _type: string;
    linkType: string;
  };
  pageHeadingSecondaryButtonText?: string;
  pageHeadingSecondaryButtonLink?: {
    internal?: {
      _ref: string;
      _type: string;
    };
    external?: string;
    _type: string;
    linkType: string;
  };
};

export default function LandingHero({
  pageHeading = "Discover Hidden Portugal on Foot",
  pageTagline = "Join Farol Discover for authentic walking and trekking tours that take you off the beaten path.",
  pageHeadingImage,
  pageHeadingMainButtonText = "Explore Tours",
  pageHeadingMainButtonLink = {
    internal: {
      _ref: "a77c8ad2-9be8-4f14-9b0c-4bc6664acaa4",
      _type: "reference",
    },
    linkType: "internal",
    _type: "link",
  },
  pageHeadingSecondaryButtonText = "Contact Us",
  pageHeadingSecondaryButtonLink = {
    internal: {
      _ref: "d36154ac-3c1d-489e-a899-44c965c5d000",
      _type: "reference",
    },
    linkType: "internal",
    _type: "link",
  },
}: LandingHeroProps) {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {pageHeadingImage?._type === "image" ? (
          <SanityImage
            source={pageHeadingImage}
            alt="Farol Discover"
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            width={1920}
            height={1440}
            src="/farol-discover.jpg"
            alt="Farol Discover"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-1"></div>
      {/* Content */}
      <div className="relative z-10  max-w-screen-xl px-4 py-20 md:py-32 mx-auto">
        <div className="mr-auto place-self-center mt-12 lg:mt-20">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-8xl text-white ">
            {pageHeading}
          </h1>
          <p className="mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-white">
            {pageTagline}
          </p>
          <div className="flex items-center gap-x-4">
            <SanityLink href={pageHeadingMainButtonLink} className="text-white">
              <Button variant="default">
                {pageHeadingMainButtonText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </SanityLink>

            <SanityLink href={pageHeadingSecondaryButtonLink}>
              <Button variant="outline">
                {pageHeadingSecondaryButtonText}
              </Button>
            </SanityLink>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:flex"></div>
      </div>
    </section>
  );
}
