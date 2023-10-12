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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "pageHeading", maxLength: 96 },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "pageBuilder",
      type: "array",
      title: "Page Sections",
      of: [
        { name: "Info Section", type: "sectionInfo" },
        { name: "Call to Action", type: "callToAction" },
        {
          name: "gallery",
          title: "Image Gallery",
          type: "gallery",
        },
      ],
    },
  ],
};

export default page;
