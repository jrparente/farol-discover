import { Description } from "@radix-ui/react-toast";
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
      name: "pageName",
      title: "Page Name",
      type: "string",
      fieldset: "header",
      group: "content",
      description: "The name of the page, to be used in links and navigation",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "pageHeading",
      title: "Page Heading",
      type: "string",
      fieldset: "header",
      group: "content",
      description:
        "The main heading of the page, used in the hero banner at the top of the page",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "pageTagline",
      title: "Page Tagline",
      type: "string",
      fieldset: "header",
      group: "content",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "pageName", maxLength: 96 },
      fieldset: "header",
      group: "content",
      validation: (Rule: any) => Rule.required(),
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
        {
          name: "contactForm",
          type: "contactForm",
        },
        {
          name: "sectionPrograms",
          type: "sectionPrograms",
        },
        {
          name: "sectionFeatures",
          type: "sectionFeatures",
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
