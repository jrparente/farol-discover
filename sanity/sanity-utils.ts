import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Homepage, Page, Program, Testimonial } from "./types/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-10-09";

const clientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
};

export const client = createClient(clientConfig);

const builder = imageUrlBuilder(client);

export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}

export async function getPrograms(): Promise<Program[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "program"]{
        _id,
        _createdAt,
        _updatedAt,
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
      date,
      "tour": tour->{
        name,
        "slug": slug.current
      },
      "avatar": avatar.asset->url
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
         _type == "testimonials" => {
        _id,
        _createdAt,
        name,
        message,
        location,
        date,
        "tour": tour->{
          name,
          "slug": slug.current
        },
        "avatar": avatar.asset->url
         }
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
    "pageBuilder": pageBuilder[]
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
      seo,
      "slug": slug.current,
      content,
      "pageBuilder": pageBuilder[]
    }`,
    { slug }
  );
}
