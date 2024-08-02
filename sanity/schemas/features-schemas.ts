import { Check } from "lucide-react";

const features = {
  icon: Check,
  name: "features",
  title: "Features",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        {
          name: "icon",
          title: "Icon",
          type: "image",
          options: {
            hotspot: true,
          },
          description:
            "Icon should be a png file with a transparent background, 100x100 pixels, color should be #16A34A. Recommended source: https://icons8.com/",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "items",
          title: "Items",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
  ],
};

export default features;
