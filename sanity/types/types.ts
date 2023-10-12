import { PortableTextBlock } from "sanity";

export type Program = {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  location: string;
  description: string;
  expandedDescription: PortableTextBlock[];
  image?: string;
  difficulty?: string;
  duration?: number;
  price?: string;
  highlights?: string[];
  featured?: boolean;
  whatsIncluded?: string[];
  whatsNotIncluded?: string[];
  faqs?: {
    question?: string;
    answer?: string;
  }[];
  itinerary?: {
    day?: number;
    title?: string;
    description?: string;
    meals?: string[];
    notes?: string;
  }[];
  mapUrl?: string;
  gallery?: Array<{
    _type: string;
    images?: string[];
    galleryHeading?: string;
  }>;
};

export type Testimonial = {
  _id: string;
  _createdAt: string;
  name: string;
  message: string;
  location: string;
  avatar?: string;
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
  overview?: PortableTextBlock[];
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  faqs?: string[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
};

export type Homepage = {
  _id: string;
  _createdAt: string;
  pageHeading: string;
  pageTagline: string;
  statsTitle?: string;
  statsSubtitle?: string;
  statsDescription?: string;
  statsTours?: string;
  statsCustomers?: string;
  statsDestinations?: string;
  featuresTitle?: string;
  featuresSubtitle?: string;
  testimonials?: Testimonial[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
};

export type Page = {
  _id: string;
  _createdAt?: Date;
  pageHeading?: string;
  pageTagline?: string;
  slug?: string;
  content?: PortableTextBlock[];
  pageBuilder?: Array<{
    _type: string;
    heading?: string;
    tagline?: string;
    description?: string;
    image?: string;
    ctaTitle?: string;
    ctaDescription?: string;
    ctaButtonText?: string;
    ctaButtonLink?: string;
    images?: string[];
    galleryHeading?: string;
  }>;
};
