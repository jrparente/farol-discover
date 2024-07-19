import { DocumentTextIcon } from "@sanity/icons";
import { PenBox, Search } from "lucide-react";

const page = {
  icon: DocumentTextIcon,
  name: "page",
  type: "document",
  title: "Page builder",
  groups: [
    {
      name: "content",
      title: "Content",
      icon: PenBox,
    },
    {
      name: "seo",
      title: "SEO",
      icon: Search,
    },
  ],
  fieldsets: [
    {
      name: "header",
      title: "Header",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "description",
      title: "Description",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "pageHeading",
      title: "Page Heading",
      type: "string",
      fieldset: "header",
      group: "content",
    },
    {
      name: "pageTagline",
      title: "Page Tagline",
      type: "string",
      fieldset: "header",
      group: "content",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "pageHeading", maxLength: 96 },
      fieldset: "header",
      group: "content",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      fieldset: "description",
      group: "content",
    },
    {
      name: "pageBuilder",
      type: "array",
      title: "Page Sections",
      group: "content",
      of: [
        { name: "Info Section", type: "sectionInfo" },
        { name: "Call to Action", type: "callToAction" },
        {
          name: "gallery",
          title: "Image Gallery",
          type: "gallery",
        },
        {
          name: "faqs",
          type: "faqs",
        },
        {
          name: "team",
          type: "sectionTeam",
        },
      ],
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    },
  ],
};

export default page;
