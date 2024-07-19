const link = {
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    {
      name: "linkType",
      type: "string",
      title: "Link Type",
      options: {
        layout: "radio",
        direction: "horizontal",
        list: [
          { title: "Internal", value: "internal" },
          { title: "External", value: "external" },
        ],
      },
    },
    {
      name: "external",
      type: "url",
      title: "URL",
      description: "Example: https://www.google.com",
      hidden: ({ parent }: { parent: any }) => parent?.linkType !== "external",
    },
    {
      name: "internal",
      type: "reference",
      to: [{ type: "homepage" }, { type: "page" }],
      hidden: ({ parent }: { parent: any }) => parent?.linkType !== "internal",
      options: {
        filter: ({ document }: { document: any }) => {
          if (!document.language) {
            return {};
          }

          return {
            filter: "language == $language",
            params: {
              language: document.language,
            },
          };
        },
      },
    },
  ],
};

export default link;
