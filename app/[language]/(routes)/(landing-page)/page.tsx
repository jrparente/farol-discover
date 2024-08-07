import Cta from "@/components/cta";
import Testimonials from "@/components/section-testimonials";
import LandingHero from "./components/landing-hero";
import { getTestimonials } from "@/sanity/sanity-utils";
import FeaturedPrograms from "./components/featured-programs";
import CompanyFeatures from "./components/company-features";
import CompanyStatistics from "./components/company-statistics";
import { Testimonial } from "@/sanity/types/types";
import { getHomepageQuery } from "@/sanity/lib/sanity.queries";
import { i18n } from "@/lib/languages";
import { sanityFetch } from "@/sanity/lib/sanity.fetch";
import { SanityDocument } from "next-sanity";

export async function generateStaticParams() {
  const allLanguages = i18n.languages;
  return allLanguages.map((lang) => ({ language: lang.locale }));
}

export default async function Home({
  params,
}: {
  params: { language: string };
}) {
  const allLanguages = i18n.languages;
  const defaultLocale =
    allLanguages.find((lang) => lang.isDefault)?.locale ?? "en-US";
  const defaultLanguage =
    allLanguages.find((lang) => lang.isDefault)?.id ?? "en";

  // Determine the locale and language ID
  let locale = params.language;
  let language = allLanguages.find((lang) => lang.locale === locale)?.id;

  if (!language) {
    locale = defaultLocale;
    language = defaultLanguage;
  }

  const query = getHomepageQuery;
  let queryParams = { language };

  let pageData = await sanityFetch<SanityDocument>({
    query,
    params: queryParams,
  });

  // Fall back to default language if no pageData  is found for the specified language
  if (!pageData || pageData.length === 0) {
    queryParams = { language: defaultLanguage };
    pageData = await sanityFetch<SanityDocument>({
      query,
      params: queryParams,
    });

    // If still no pageData , return an error message
    if (!pageData || pageData.length === 0) {
      return <div>Error: No pageData available.</div>;
    }
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
    featuredProgramsTitle,
    featuredProgramsSubtitle,
    featuredProgramsCta1Text,
    featuredProgramsCta1Link,
    featuredProgramsCta2Text,
    featuredProgramsCta2Link,
    featuredProgramsHighlightsTitle,
    featuredProgramsDurationText,
    featuredProgramsLearnMoreText,
    featuresTitle,
    featuresSubtitle,
    features,
    testimonials: testimonialRefs,
    ctaTitle,
    ctaDescription,
    ctaButtonText,
    ctaButtonLink,
  } = pageData[0];

  // Fetch all testimonials
  const allTestimonials = await getTestimonials();

  // Check if testimonialRefs is defined and has length
  const selectedTestimonials: Testimonial[] =
    testimonialRefs && testimonialRefs.length > 0
      ? testimonialRefs
          .map((testimonialRef: any) =>
            allTestimonials.find((t) => t._id === testimonialRef._ref)
          )
          .filter(
            (testimonial: any): testimonial is Testimonial => !!testimonial
          ) // Type guard to remove undefined values
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
      <FeaturedPrograms
        featuredProgramsTitle={featuredProgramsTitle}
        featuredProgramsSubtitle={featuredProgramsSubtitle}
        featuredProgramsCta1Text={featuredProgramsCta1Text}
        featuredProgramsCta1Link={featuredProgramsCta1Link}
        featuredProgramsCta2Text={featuredProgramsCta2Text}
        featuredProgramsCta2Link={featuredProgramsCta2Link}
        featuredProgramsHighlightsTitle={featuredProgramsHighlightsTitle}
        featuredProgramsDurationText={featuredProgramsDurationText}
        featuredProgramsLearnMoreText={featuredProgramsLearnMoreText}
      />
      <CompanyFeatures
        featuresTitle={featuresTitle}
        featuresSubtitle={featuresSubtitle}
        features={features}
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
