import { HomeIcon } from "@sanity/icons";

const homepage = {
  icon: HomeIcon,
  name: "homepage",
  title: "Page: Home",
  type: "document",
  groups: [
    {
      name: "header",
      title: "Header",
    },
    {
      name: "homepageStats",
      title: "Homepage Statistics",
    },
    {
      name: "companyFeatures",
      title: "Company Features",
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
      validation: (rule: any) => rule.required(),
    },
    {
      name: "pageTagline",
      title: "Page Tagline",
      type: "string",
      group: "header",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "statsTitle",
      title: "Statistics Title",
      type: "string",
      group: "homepageStats",
    },
    {
      name: "statsSubtitle",
      title: "Statistics Subtitle",
      type: "string",
      group: "homepageStats",
    },
    {
      name: "statsDescription",
      title: "Statistics Description",
      type: "text",
      group: "homepageStats",
    },
    {
      name: "statsTours",
      title: "Tours Given",
      type: "string",
      group: "homepageStats",
    },
    {
      name: "statsCustomers",
      title: "Satisfied Customers",
      type: "string",
      group: "homepageStats",
    },
    {
      name: "statsDestinations",
      title: "Destinations Covered",
      type: "string",
      group: "homepageStats",
    },
    {
      name: "featuresTitle",
      title: "Features Title",
      type: "string",
      group: "companyFeatures",
    },
    {
      name: "featuresSubtitle",
      title: "Features Subtitle",
      type: "string",
      group: "companyFeatures",
    },
    {
      name: "features",
      title: "Features",
      type: "features",
      group: "companyFeatures",
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

export default homepage;
