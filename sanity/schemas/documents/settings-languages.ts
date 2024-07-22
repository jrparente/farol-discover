const settingsLanguages = {
  name: "settingsLanguages",
  title: "Languages",
  type: "document",
  fields: [
    {
      name: "languages",
      title: "Languages",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "id",
              title: "ID",
              type: "string",
              description: "The language's code, e.g. 'en' or 'fr'",
            },
            {
              name: "languageTitle",
              title: "Title",
              type: "string",
              description: "The language's title, e.g. 'English' or 'Français'",
            },
            {
              name: "isDefault",
              title: "Is Default",
              type: "boolean",
              description: "Only one language can be the default.",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "languageTitle",
      default: "isDefault",
    },
    prepare({
      title,
      default: isDefault,
    }: {
      title: string;
      default: boolean;
    }) {
      return {
        title: `${title} ${isDefault ? "(default)" : ""}`,
      };
    },
  },
};

export default settingsLanguages;
