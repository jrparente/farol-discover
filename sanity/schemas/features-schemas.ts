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
          type: "string",
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
