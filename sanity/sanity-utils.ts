import { createClient, groq } from "next-sanity";
import { AboutUs, Homepage, Program, Testimonial } from "./types/types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-10-09";

const clientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
};

export async function getPrograms(): Promise<Program[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "program"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        location,
        description,
        expandedDescription,
        "image": image.asset->url,
        difficulty,
        duration,
        price,
        highlights,
        featured,
        whatsIncluded,
        whatsNotIncluded,
        faqs,
        itinerary,
        mapUrl,
        gallery
    }`
  );
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "testimonials"]{
      _id,
      _createdAt,
      name,
      message,
      location,
      "avatar": image.asset->url
    }`
  );
}

export async function getAboutUs(): Promise<AboutUs[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "aboutUs"]{
      _id,
      _createdAt,
      pageHeading,
      pageTagline,
      pageDescription,
      title,
      subtitle,
      description,
      "image": image.asset->url,
      faqs,
      ctaTitle,
      ctaDescription,
      ctaButtonText,
      ctaButtonLink,
    }`
  );
}

export async function getHomepage(): Promise<Homepage[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "homepage"]{
      _id,
      _createdAt,
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
    }`
  );
}

export async function getPages() {
  groq`*[_type == "page"]{
    _id,
    _createdAt,
    pageHeading,
    pageTagline,
    pageBuilder[]{
        _type == "sectionInfo" => {
          _type,
          heading,
          tagline,
          image
        },
        _type == "callToAction" => @-> {
          _type,
          ctaTitle,
          ctaDescription,
          ctaButtonText,
          ctaButtonLink,
        }
        // "testimonialsObject" is a "reference"
        // We can resolve "itself" with the @ operator
        _type == "testimonialsObject" => @-> {
          _type,
          name,
          message,
          location,
          avatar,
        }
      },
  }`;
}
