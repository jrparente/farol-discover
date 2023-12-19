import project from "./program-schema";
import testimonials from "./testimonial-schemas";
import aboutUs from "./about-us-schemas";
import homepage from "./homepage-schemas";
import features from "./features-schemas";
import page from "./page-builder-schemas";
import sectionInfo from "./page-section-info-type";
import callToAction from "./page-section-cta-type";
import { imageGalleryType } from "./page-section-image-gallery";
import faqs from "./page-section-faqs";
import seo from "./page-section-metadata";

const schemas = [
  // Singletons
  aboutUs,
  homepage,

  // Documents
  page,
  project,
  testimonials,
  features,

  // Objects
  seo,
  faqs,
  sectionInfo,
  callToAction,
  imageGalleryType,
];

export default schemas;
