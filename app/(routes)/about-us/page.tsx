import Hero from "@/components/page-hero";
import AboutFaq from "./components/about-faq";
import { getAboutUs } from "@/sanity/sanity-utils";
import Cta from "@/components/cta";
import InfoSection from "@/components/info-section";
import Content from "@/components/page-content";

export default async function AboutUs() {
  const aboutUs = await getAboutUs();

  return (
    <div className="h-full">
      <Hero title={aboutUs[0].pageHeading} subtitle={aboutUs[0].pageTagline} />
      {aboutUs[0].overview && <Content content={aboutUs[0].overview} />}

      <InfoSection
        title={aboutUs[0].title}
        subtitle={aboutUs[0].subtitle}
        description={aboutUs[0].description}
        image={aboutUs[0].image}
      />

      <AboutFaq />
      <Cta
        ctaTitle={aboutUs[0].ctaTitle}
        ctaDescription={aboutUs[0].ctaDescription}
        ctaButtonLink={aboutUs[0].ctaButtonLink}
        ctaButtonText={aboutUs[0].ctaButtonText}
      />
    </div>
  );
}
