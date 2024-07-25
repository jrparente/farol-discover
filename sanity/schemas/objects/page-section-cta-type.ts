import { StarIcon } from "@sanity/icons";

const callToAction = {
  icon: StarIcon,
  name: "callToAction",
  type: "object",
  title: "Call to Action",
  fields: [
    {
      name: "ctaTitle",
      title: "Call to Action Title",
      type: "string",
    },
    {
      name: "ctaDescription",
      title: "Call to Action Description",
      type: "text",
    },
    {
      name: "ctaButtonText",
      title: "Call to Action Button Text",
      type: "string",
    },
    {
      name: "ctaButtonLink",
      title: "Call to Action Button Link",
      type: "link",
    },
  ],
  preview: {
    select: {
      title: "ctaTitle",
    },
    prepare(selected: any) {
      return {
        title: selected.title || "Untitled",
        subtitle: "Call to Action",
        media: StarIcon,
      };
    },
  },
};

export default callToAction;
