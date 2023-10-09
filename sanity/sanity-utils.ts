import { createClient, groq } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-10-09";

const clientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
};

type Program = {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  location: string;
  description: string;
  expandedDescription: any[];
  image: string;
  difficulty: string;
  duration: number;
  price: string;
  highlights: string[];
  featured: boolean;
  whatsIncluded: string[];
  whatsNotIncluded: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    meals: string[];
    notes: string;
  }[];
  mapUrl: string;
  gallery: string[];
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
