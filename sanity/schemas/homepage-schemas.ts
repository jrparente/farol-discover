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
      name: "statsTours",
      title: "Tours Given",
      type: "string",
      group: "content",
      fieldset: "homepageStats",
    },
    {
      name: "statsCustomers",
      title: "Satisfied Customers",
      type: "string",
      group: "content",
      fieldset: "homepageStats",
    },
    {
      name: "statsDestinations",
      title: "Destinations Covered",
      type: "string",
      group: "content",
      fieldset: "homepageStats",
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

export default homepage;
