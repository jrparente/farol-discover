import LandingHero from "./components/landing-hero";
import Testimonials from "./components/testimonials";
import { getHomepage, getPages } from "@/sanity/sanity-utils";
import FeaturedPrograms from "./components/featured-programs";
import CompanyFeatures from "./components/company-features";
import Cta from "./components/cta";
import CompanyStatistics from "./components/company-statistics";

export default async function Home() {
  const homepage = await getHomepage();
  const pages = await getPages();
  console.log(pages);

  if (!homepage) {
    return <div>No homepage data available</div>;
  }

  const {
    pageHeading,
    pageTagline,
    statsTitle,
    statsSubtitle,
    statsDescription,
    statsTours,
    statsCustomers,
    statsDestinations,
    featuresTitle,
    featuresSubtitle,
    ctaTitle,
    ctaDescription,
    ctaButtonText,
    ctaButtonLink,
  } = homepage[0];

  return (
    <div className="h-full">
      <LandingHero pageHeading={pageHeading} pageTagline={pageTagline} />
      <CompanyStatistics
        statsTitle={statsTitle}
        statsSubtitle={statsSubtitle}
        statsDescription={statsDescription}
        statsTours={statsTours}
        statsCustomers={statsCustomers}
        statsDestinations={statsDestinations}
      />
      <FeaturedPrograms />
      <CompanyFeatures
        featuresTitle={featuresTitle}
        featuresSubtitle={featuresSubtitle}
      />
      <Testimonials />
      <Cta
        ctaTitle={ctaTitle}
        ctaDescription={ctaDescription}
        ctaButtonText={ctaButtonText}
        ctaButtonLink={ctaButtonLink}
      />
    </div>
  );
}
