import { PortableTextBlock } from "sanity";

export type Program = {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  location: string;
  description: string;
  expandedDescription: PortableTextBlock[];
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

export type Testimonial = {
  _id: string;
  _createdAt: string;
  name: string;
  message: string;
  location: string;
  avatar: string;
};

export type Faq = {
  _id: string;
  _createdAt: string;
  question: string;
  answer: string;
};

export type AboutUs = {
  _id: string;
  _createdAt: string;
  pageHeading: string;
  pageTagline: string;
  pageDescription: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  faqs: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
};
