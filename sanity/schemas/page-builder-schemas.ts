import { DocumentTextIcon } from "@sanity/icons";

const pageType = {
  icon: DocumentTextIcon,
  name: "pages",
  type: "document",
  title: "Pages",
  fields: [
    {
      name: "pageHeading",
      title: "Page Heading",
      type: "string",
    },
    {
      name: "pageTagline",
      title: "Page Tagline",
      type: "string",
    },
    {
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        { name: "Info Section", type: "sectionInfo" },
        { name: "Call to Action", type: "callToAction" },
        // { name: "Testimonials", type: "testimonialsSection" },
      ],
    },
  ],
};

export default pageType;
