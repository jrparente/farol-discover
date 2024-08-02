import Cta from "@/components/cta";
import Testimonials from "@/components/section-testimonials";
import LandingHero from "./components/landing-hero";
import { getHomepage, getTestimonials } from "@/sanity/sanity-utils";
import FeaturedPrograms from "./components/featured-programs";
import CompanyFeatures from "./components/company-features";
import CompanyStatistics from "./components/company-statistics";
import { Testimonial } from "@/sanity/types/types";

export default async function Home() {
  const homepage = await getHomepage();

  if (!homepage) {
    return <div>No homepage data available</div>;
  }

  const {
    pageHeading,
    pageTagline,
    pageHeadingImage,
    pageHeadingMainButtonText,
    pageHeadingMainButtonLink,
    pageHeadingSecondaryButtonText,
    pageHeadingSecondaryButtonLink,
    statsTitle,
    statsSubtitle,
    statsDescription,
    stats,
    featuresTitle,
    featuresSubtitle,
    testimonials: testimonialRefs,
    ctaTitle,
    ctaDescription,
    ctaButtonText,
    ctaButtonLink,
  } = homepage[0];

  // Fetch all testimonials
  const allTestimonials = await getTestimonials();

  // Check if testimonialRefs is defined and has length
  const selectedTestimonials: Testimonial[] =
    testimonialRefs && testimonialRefs.length > 0
      ? testimonialRefs
          .map((testimonialRef) =>
            allTestimonials.find((t) => t._id === testimonialRef._ref)
          )
          .filter((testimonial): testimonial is Testimonial => !!testimonial) // Type guard to remove undefined values
      : [];

  return (
    <div className="h-full">
      <LandingHero
        pageHeading={pageHeading}
        pageTagline={pageTagline}
        pageHeadingImage={pageHeadingImage}
        pageHeadingMainButtonText={pageHeadingMainButtonText}
        pageHeadingMainButtonLink={pageHeadingMainButtonLink}
        pageHeadingSecondaryButtonText={pageHeadingSecondaryButtonText}
        pageHeadingSecondaryButtonLink={pageHeadingSecondaryButtonLink}
      />
      <CompanyStatistics
        statsTitle={statsTitle}
        statsSubtitle={statsSubtitle}
        statsDescription={statsDescription}
        stats={stats}
      />
      <FeaturedPrograms />
      <CompanyFeatures
        featuresTitle={featuresTitle}
        featuresSubtitle={featuresSubtitle}
      />
      {selectedTestimonials.length > 0 && (
        <Testimonials testimonials={selectedTestimonials} />
      )}
      <Cta
        ctaTitle={ctaTitle}
        ctaDescription={ctaDescription}
        ctaButtonText={ctaButtonText}
        ctaButtonLink={ctaButtonLink}
      />
    </div>
  );
}
