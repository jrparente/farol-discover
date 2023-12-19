const seo = {
  name: "seo",
  type: "object",
  title: "SEO",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title for SEO & Social Sharing",
      description:
        "Make it as enticing as possible to convert users in social feeds and search results. Ideally between 15-70 characters.",
    },
    {
      name: "description",
      type: "text",
      title: "Short paragraph for SEO & Social Sharing (Meta Description)",
      description:
        "Optional, but highly recommended as it will help attract and convert visitors from search engines and social media. Ideally between 70-160 characters.",
    },
    {
      name: "keywords",
      type: "array",
      title: "Page Keywords",
      description:
        "Specify the key terms and phrases that succinctly capture the essence of your page's content. Choose relevant keywords that potential visitors might use when searching.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "image",
      type: "image",
      title: "Social Sharing Image",
      description:
        "This image will be used when sharing the page on social media.",
      options: {
        hotspot: true,
      },
    },
  ],
};

export default seo;
