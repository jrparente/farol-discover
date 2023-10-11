const callToAction = {
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
      type: "string",
    },
  ],
};

export default callToAction;
