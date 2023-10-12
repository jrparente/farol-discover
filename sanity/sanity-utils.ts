import { createClient, groq } from "next-sanity";
import { AboutUs, Homepage, Page, Program, Testimonial } from "./types/types";

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
        "gallery": gallery[]{
          _type == "gallery" => {
            _type,
            "images": images[].asset->url
          },
        },
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
      overview,
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
      "testimonials": testimonials[]->{ 
        _id,
        _createdAt,
        name,
        message,
        location,
        "avatar": avatar.asset->url
      },
      ctaTitle,
      ctaDescription,
      ctaButtonText,
      ctaButtonLink,
    }`
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
    _id,
    _createdAt,
    pageHeading,
    pageTagline,
    "slug": slug.current,
    content,
    "pageBuilder": pageBuilder[]{
        _type == "Info Section" => {
          _type,
          heading,
          tagline,
          description,
          "image": image.asset->url
        },
        _type == "Call to Action" => {
          _type,
          ctaTitle,
          ctaDescription,
          ctaButtonText,
          ctaButtonLink,
        },
        _type == "gallery" => {
          _type,
          "images": images[].asset->url
        },
      },
  }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      pageHeading,
      pageTagline,
      "slug": slug.current,
      content,
      "pageBuilder": pageBuilder[]{
          _type == "Info Section" => {
            _type,
            heading,
            tagline,
            description,
            "image": image.asset->url
          },
          _type == "Call to Action" => {
            _type,
            ctaTitle,
            ctaDescription,
            ctaButtonText,
            ctaButtonLink,
          },
          _type == "gallery" => {
            _type,
            galleryHeading,
            "images": images[].asset->url
          },
        },
    }`,
    { slug }
  );
}
