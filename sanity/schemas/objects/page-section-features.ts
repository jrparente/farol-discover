import { List } from "lucide-react";

const sectionFeatures = {
  title: "Features",
  name: "sectionFeatures",
  icon: List,
  type: "object",
  fields: [
    {
      name: "featuresTitle",
      title: "Features Title",
      type: "string",
    },
    {
      name: "featuresSubtitle",
      title: "Features Subtitle",
      type: "string",
    },
    {
      name: "features",
      title: "Features",
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
            },
          ],
        },
      ],
    },
  ],
};

export default sectionFeatures;
