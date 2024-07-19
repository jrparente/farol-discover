import { Users } from "lucide-react";
import { validation } from "sanity";

const sectionTeam = {
  name: "sectionTeam",
  type: "object",
  title: "Team Section",
  icon: Users,
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
      of: [
        {
          name: "teamMember",
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
              name: "gender",
              title: "Gender",
              type: "string",
              options: {
                layout: "radio",
                direction: "horizontal",
                list: [
                  { title: "Female", value: "female" },
                  { title: "Male", value: "male" },
                ],
              },
              validation: (rule: any) => rule.required(),
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
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
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Team Section",
      };
    },
  },
};

export default sectionTeam;
