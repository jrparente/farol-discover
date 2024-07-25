import { PortableTextBlock } from "sanity";

export type Program = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
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
  date: string;
  tour: { _ref: string; _type: string; name: string; slug: string };
  avatar?: string;
};

export type Faq = {
  _id: string;
  _createdAt: string;
  question: string;
  answer: string;
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
  ctaButtonLink?: any;
};

export type Page = {
  _id: string;
  _createdAt?: Date;
  pageHeading?: string;
  pageTagline?: string;
  slug?: string;
  content?: PortableTextBlock[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  pageBuilder?: Array<{
    _type: string;
    title?: string;
    subtitle?: string;
    heading?: string;
    subheading?: string;
    tagline?: string;
    description?: string;
    content?: PortableTextBlock[];
    buttonText?: string;
    buttonLink?: string;
    imagePosition?: string;
    image?: string;
    ctaTitle?: string;
    ctaDescription?: string;
    ctaButtonText?: string;
    ctaButtonLink?: any;
    images?: [];
    galleryHeading?: string;
    teamMembers?: Array<{
      name: string;
      role: string;
      gender: string;
      image?: { asset: { url: string }; alt: string };
      bio?: string;
      linkedin?: string;
    }>;
    faqs?: {
      question: string;
      answer: string;
    }[];
    contactForm?: {
      title?: string;
      subtitle?: string;
    };
  }>;
};
