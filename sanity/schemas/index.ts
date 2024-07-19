import { type SchemaTypeDefinition } from "sanity";
import project from "./documents/program-schema";
import testimonials from "./documents/testimonial-schemas";
import aboutUs from "./documents/about-us-schemas";
import homepage from "./documents/homepage-schemas";
import features from "./features-schemas";
import page from "./documents/page-builder-schemas";
import sectionInfo from "./objects/page-section-info-type";
import callToAction from "./objects/page-section-cta-type";
import { imageGalleryType } from "./objects/page-section-image-gallery";
import faqs from "./objects/page-section-faqs";
import seo from "./objects/page-section-metadata";
import link from "./objects/link";
import sectionTeam from "./objects/sectionTeam";

const schema: { types: SchemaTypeDefinition[] } = {
  types: [
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
    link,
    sectionTeam,
  ],
};

export default schema;
