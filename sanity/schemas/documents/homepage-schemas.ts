import { HomeIcon } from "@sanity/icons";
import { PenBox, Search } from "lucide-react";

const homepage = {
  icon: HomeIcon,
  name: "homepage",
  title: "Page: Home",
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
      name: "homepageStats",
      title: "Homepage Statistics",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "featuredPrograms",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "companyFeatures",
      title: "Company Features",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "testimonials",
      title: "Testimonials",
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
      name: "pageName",
      title: "Page Name",
      type: "string",
      group: "content",
      fieldset: "header",
      validation: (rule: any) => rule.required(),
      hidden: true,
    },
    {
      name: "pageHeading",
      title: "Page Heading",
      type: "string",
      group: "content",
      fieldset: "header",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "pageTagline",
      title: "Page Tagline",
      type: "string",
      group: "content",
      fieldset: "header",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "pageHeadingImage",
      title: "Page Heading Image",
      type: "image",
      group: "content",
      fieldset: "header",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
    {
      name: "pageHeadingMainButtonText",
      title: "Main Button Text",
      type: "string",
      group: "content",
      fieldset: "header",
    },
    {
      name: "pageHeadingMainButtonLink",
      title: "Main Button Link",
      type: "link",
      group: "content",
      fieldset: "header",
    },
    {
      name: "pageHeadingSecondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
      group: "content",
      fieldset: "header",
    },
    {
      name: "pageHeadingSecondaryButtonLink",
      title: "Secondary Button Link",
      type: "link",
      group: "content",
      fieldset: "header",
    },
    {
      name: "statsTitle",
      title: "Statistics Title",
      type: "string",
      group: "content",
      fieldset: "homepageStats",
    },
    {
      name: "statsSubtitle",
      title: "Statistics Subtitle",
      type: "string",
      group: "content",
      fieldset: "homepageStats",
    },
    {
      name: "statsDescription",
      title: "Statistics Description",
      type: "text",
      group: "content",
      fieldset: "homepageStats",
    },
    {
      name: "stats",
      title: "Statistics",
      type: "array",
      group: "content",
      fieldset: "homepageStats",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "value",
              title: "Value",
              type: "string",
            },
            {
              name: "icon",
              title: "Icon",
              type: "image",
              options: {
                hotspot: true,
              },
              description:
                "Icon should be a png file with a transparent background, 100x100 pixels, color should be #16A34A. Recommended source: https://icons8.com/",
            },
          ],
        },
      ],
    },
    {
      name: "featuredProgramsTitle",
      title: "Featured Programs Title",
      type: "string",
      group: "content",
      fieldset: "featuredPrograms",
    },
    {
      name: "featuredProgramsSubtitle",
      title: "Featured Programs Subtitle",
      type: "text",
      group: "content",
      fieldset: "featuredPrograms",
    },
    {
      name: "featuredProgramsCta1Text",
      title: "Featured Programs CTA 1 Text",
      type: "string",
      group: "content",
      fieldset: "featuredPrograms",
    },
    {
      name: "featuredProgramsCta1Link",
      title: "Featured Programs CTA 1 Link",
      type: "link",
      group: "content",
      fieldset: "featuredPrograms",
    },
    {
      name: "featuredProgramsCta2Text",
      title: "Featured Programs CTA 2 Text",
      type: "string",
      group: "content",
      fieldset: "featuredPrograms",
    },
    {
      name: "featuredProgramsCta2Link",
      title: "Featured Programs CTA 2 Link",
      type: "link",
      group: "content",
      fieldset: "featuredPrograms",
    },
    {
      name: "featuredProgramsHighlightsTitle",
      type: "string",
      group: "content",
      fieldset: "featuredPrograms",
    },
    {
      name: "featuredProgramsDurationText",
      type: "string",
      group: "content",
      fieldset: "featuredPrograms",
    },
    {
      name: "featuredProgramsLearnMoreText",
      type: "string",
      group: "content",
      fieldset: "featuredPrograms",
    },
    {
      name: "featuresTitle",
      title: "Features Title",
      type: "string",
      group: "content",
      fieldset: "companyFeatures",
    },
    {
      name: "featuresSubtitle",
      title: "Features Subtitle",
      type: "string",
      group: "content",
      fieldset: "companyFeatures",
    },
    {
      name: "features",
      title: "Features",
      type: "features",
      group: "content",
      fieldset: "companyFeatures",
    },
    {
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonials" }] }],
      group: "content",
      fieldset: "testimonials",
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
      type: "link",
      group: "content",
      fieldset: "callToAction",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    },

    {
      name: "language",
      type: "string",
      readOnly: true,
    },
  ],

  preview: {
    prepare() {
      return {
        title: "Homepage",
      };
    },
  },
};

export default homepage;
