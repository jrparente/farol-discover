import { List } from "lucide-react";

const sectionHighlights = {
  title: "Highlights",
  name: "sectionHighlights",
  icon: List,
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
              description: "This icon will be used on light backgrounds",
            },
            {
              name: "imageWhite",
              title: "Image White",
              type: "image",
              options: {
                hotspot: true,
              },
              description: "This icon will be used on dark backgrounds",
            },
          ],
        },
      ],
    },
  ],
};

export default sectionHighlights;
