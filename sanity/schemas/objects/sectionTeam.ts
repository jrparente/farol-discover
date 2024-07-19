const sectionTeam = {
  name: "sectionTeam",
  title: "Team Section",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "string",
    },
    {
      name: "teamMembers",
      title: "Team Members",
      type: "array",
      of: {
        type: "object",
        fields: [
          {
            name: "name",
            title: "Name",
            type: "string",
            validation: (rule: any) => rule.required(),
          },
          {
            name: "role",
            title: "Role",
            type: "string",
            validation: (rule: any) => rule.required(),
          },
          {
            name: "image",
            title: "Image",
            type: "image",
            options: {
              hotspot: true,
            },
            validation: (rule: any) => rule.required(),
            fields: [
              {
                name: "alt",
                type: "string",
              },
            ],
          },
          {
            name: "bio",
            title: "Bio",
            type: "text",
          },
          {
            name: "linkedin",
            title: "LinkedIn",
            type: "url",
          },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }: { title: string }) {
      return {
        title: "Team Section",
        subtitle: title,
      };
    },
  },
};

export default sectionTeam;
