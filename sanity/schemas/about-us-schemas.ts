import { DocumentTextIcon } from "@sanity/icons";

const aboutUs = {
  icon: DocumentTextIcon,
  name: "aboutUs",
  title: "Page: About Us",
  type: "document",
  groups: [
    {
      name: "header",
      title: "Header",
    },
    {
      name: "description",
      title: "Description",
    },
    {
      name: "team",
      title: "Team",
    },
    {
      name: "faq",
      title: "FAQ",
    },
    {
      name: "callToAction",
      title: "Call To Action",
    },
  ],
  fields: [
    {
      name: "pageHeading",
      title: "Page Heading",
      type: "string",
      group: "header",
    },
    {
      name: "pageTagline",
      title: "Page Tagline",
      type: "string",
      group: "header",
    },
    {
      name: "overview",
      title: "Company Overview",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "title",
      title: "Section Title",
      type: "string",
      group: "team",
    },
    {
      name: "subtitle",
      title: "Section Subtitle",
      type: "string",
      group: "team",
    },
    {
      name: "description",
      title: "Section Description",
      type: "text",
      group: "team",
    },
    {
      name: "image",
      title: "Section Image",
      type: "image",
      options: { hotspot: true },
      group: "team",
    },
    {
      name: "faqs",
      title: "Frequently Asked Questions",
      type: "array",
      group: "faq",
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
      group: "callToAction",
    },
    {
      name: "ctaDescription",
      title: "Call to Action Description",
      type: "text",
      group: "callToAction",
    },
    {
      name: "ctaButtonText",
      title: "Call to Action Button Text",
      type: "string",
      group: "callToAction",
    },
    {
      name: "ctaButtonLink",
      title: "Call to Action Button Link",
      type: "string",
      group: "callToAction",
    },
  ],
};

export default aboutUs;
