import Cta from "@/components/cta";
import ImageGallery from "@/components/image-gallery";
import InfoSection from "@/components/info-section";
import Content from "@/components/page-content";
import Hero from "@/components/page-hero";
import Team from "@/components/section-team";
import ContactForm from "@/components/sectionContactForm";
import SectionFAQ from "@/components/SectionFAQ";
import { getPage, getPages } from "@/sanity/sanity-utils";
import { notFound } from "next/navigation";
import FeaturedPrograms from "@/components/section-featured-programs";
import SectionFeatures from "@/components/SectionFeatures";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const allPages = await getPages();

  return allPages;
}

async function generateMetadata({ params }: Props) {
  try {
    const page = await getPage(params.slug);
    if (!page) {
      return null;
    } else {
      const { title, description, keywords } = page.seo;
      const keywordString = keywords.join(", ");

      return {
        title: {
          default: title,
          template: `%s | Farol Discover`,
        },
        description,
        keywords: keywordString,
      };
    }
  } catch (error) {
    console.error(error);
  }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="h-full">
      <Hero
        title={page.pageHeading as string}
        subtitle={page.pageTagline as string}
      />
      {page.content && <Content content={page.content} />}
      {page.pageBuilder &&
        page.pageBuilder.map((section, index) => {
          switch (section._type) {
            case "Info Section":
              return (
                <InfoSection
                  key={index}
                  title={section.heading ?? ""}
                  subtitle={section.tagline ?? ""}
                  image={section.image ?? ""}
                  buttonText={section.buttonText ?? ""}
                  buttonLink={section.buttonLink ?? ""}
                  imagePosition={section.imagePosition ?? ""}
                  content={section.content ?? ""}
                />
              );
            case "Call to Action":
              return (
                <Cta
                  key={index}
                  ctaTitle={section.ctaTitle ?? ""}
                  ctaDescription={section.ctaDescription ?? ""}
                  ctaButtonLink={section.ctaButtonLink ?? ""}
                  ctaButtonText={section.ctaButtonText ?? ""}
                />
              );
            case "gallery":
              return section.images ? (
                <ImageGallery
                  galleryHeading={section.galleryHeading}
                  images={section.images}
                />
              ) : null;
            case "faqs":
              return (
                <SectionFAQ
                  key={index}
                  heading={section.heading}
                  faqs={section.faqs ?? []}
                />
              );
            case "team":
              return (
                <Team
                  key={index}
                  heading={section.heading}
                  subheading={section.subheading ?? ""}
                  teamMembers={section.teamMembers ?? []}
                />
              );
            case "contactForm":
              return (
                <ContactForm
                  key={index}
                  title={section.title ?? ""}
                  subtitle={section.subtitle ?? ""}
                />
              );
            case "sectionPrograms":
              return (
                <FeaturedPrograms
                  key={index}
                  programs={section.programs ?? []}
                />
              );
            case "sectionFeatures":
              return (
                <SectionFeatures
                  key={index}
                  featuresTitle={section.featuresTitle ?? ""}
                  featuresSubtitle={section.featuresSubtitle ?? ""}
                  features={
                    section.features ?? [
                      { title: "", description: "", image: "" },
                    ]
                  }
                />
              );
            default:
              return null;
          }
        })}
    </div>
  );
}

export { generateMetadata };
