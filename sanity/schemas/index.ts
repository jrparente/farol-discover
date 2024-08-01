import { type SchemaTypeDefinition } from "sanity";
import project from "./documents/program-schema";
import testimonials from "./documents/testimonial-schemas";
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
import settingsSocialMedia from "./documents/settings-social-media";
import settingsLanguages from "./documents/settings-languages";
import contactForm from "./objects/page-section-contact-form";
import sectionPrograms from "./objects/page-section-programs";
import sectionRichText from "./objects/page-section-rich-text";
import settingsNavigation from "./documents/settings-navigation";
import navigation from "./objects/navigation";
import sectionFeatures from "./objects/page-section-features";
import sectionHighlights from "./objects/page-section-highlights";

const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Singletons
    homepage,

    // Documents
    page,
    project,
    testimonials,
    features,
    settingsNavigation,
    settingsSocialMedia,
    settingsLanguages,

    // Objects
    seo,
    faqs,
    sectionInfo,
    callToAction,
    imageGalleryType,
    link,
    sectionTeam,
    contactForm,
    sectionPrograms,
    sectionRichText,
    navigation,
    sectionFeatures,
    sectionHighlights,
  ],
};

export default schema;
