const sectionInfo = {
  name: "sectionInfo",
  type: "object",
  title: "Info Section",
  fields: [
    {
      name: "heading",
      type: "string",
    },
    {
      name: "tagline",
      type: "string",
    },
    {
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
  ],
};

export default sectionInfo;
