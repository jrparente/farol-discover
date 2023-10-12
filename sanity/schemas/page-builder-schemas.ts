import { DocumentTextIcon } from "@sanity/icons";

const page = {
  icon: DocumentTextIcon,
  name: "page",
  type: "document",
  title: "Page builder",
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
        {
          name: "testimonialsObject",
          title: "Testimonials",
          type: "object",
          fields: [
            {
              name: "testimonials",
              title: "Testimonials Section",
              type: "reference",
              to: [{ type: "testimonials" }],
            },
          ],
        },
      ],
    },
  ],
};

export default page;
