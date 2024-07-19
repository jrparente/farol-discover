import { DocumentTextIcon } from "@sanity/icons";
import { PenBox, Search } from "lucide-react";

const aboutUs = {
  icon: DocumentTextIcon,
  name: "aboutUs",
  title: "Page: About Us",
  type: "document",
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
    {
      name: "team",
      title: "Team",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "faq",
      title: "FAQ",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "callToAction",
      title: "Call To Action",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "pageHeading",
      title: "Page Heading",
      type: "string",
      group: "content",
      fieldset: "header",
    },
    {
      name: "pageTagline",
      title: "Page Tagline",
      type: "string",
      group: "content",
      fieldset: "header",
    },
    {
      name: "overview",
      title: "Company Overview",
      type: "array",
      of: [{ type: "block" }],
      group: "content",
      fieldset: "description",
    },
    {
      name: "title",
      title: "Section Title",
      type: "string",
      group: "content",
      fieldset: "team",
    },
    {
      name: "subtitle",
      title: "Section Subtitle",
      type: "string",
      group: "content",
      fieldset: "team",
    },
    {
      name: "description",
      title: "Section Description",
      type: "text",
      group: "content",
      fieldset: "team",
    },
    {
      name: "image",
      title: "Section Image",
      type: "image",
      options: { hotspot: true },
      group: "content",
      fieldset: "team",
    },
    {
      name: "faqs",
      title: "Frequently Asked Questions",
      type: "array",
      group: "content",
      fieldset: "faq",
      of: [
        {
          type: "object",
          name: "faqItem",
          title: "FAQ Item",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "ctaTitle",
      title: "Call to Action Title",
      type: "string",
      group: "content",
      fieldset: "callToAction",
    },
    {
      name: "ctaDescription",
      title: "Call to Action Description",
      type: "text",
      group: "content",
      fieldset: "callToAction",
    },
    {
      name: "ctaButtonText",
      title: "Call to Action Button Text",
      type: "string",
      group: "content",
      fieldset: "callToAction",
    },
    {
      name: "ctaButtonLink",
      title: "Call to Action Button Link",
      type: "string",
      group: "content",
      fieldset: "callToAction",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    },
  ],
};

export default aboutUs;
