import LandingHero from "./components/landing-hero";
import LandingStats from "./components/landing-stats";
import Testimonials from "./components/testimonials";
import { getHomepage } from "@/sanity/sanity-utils";
import FeaturedPrograms from "./components/landing-featured-programs";
import CompanyFeatures from "./components/landing-company-features";
import Cta from "./components/cta";

export default async function Home() {
  const homepage = await getHomepage();

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
      <LandingStats
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
