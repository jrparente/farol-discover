import project from "./program-schema";
import testimonials from "./testimonial-schemas";
import aboutUs from "./about-us-schemas";
import homepage from "./homepage-schemas";
import features from "./features-schemas";
import pageType from "./page-builder-schemas";
import sectionInfo from "./page-section-info-type";
import callToAction from "./page-section-cta-type";
import testimonialsSection from "./page-section-testimonials-type";

const schemas = [
  project,
  testimonials,
  features,
  aboutUs,
  homepage,
  pageType,
  sectionInfo,
  callToAction,
  testimonialsSection,
];

export default schemas;
