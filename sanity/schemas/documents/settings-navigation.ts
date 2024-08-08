import { MenuIcon } from "lucide-react";

const settingsNavigation = {
  name: "settingsNavigation",
  title: "Navigation",
  icon: MenuIcon,
  type: "document",

  fields: [
    {
      name: "headerNav",
      title: "Header Navigation",
      type: "navigation",
    },
    {
      name: "bookNowButtonText",
      title: "Book Now Button Text",
      type: "string",
      validate: (Rule: any) => Rule.required(),
    },
    {
      name: "language",
      type: "string",
      readOnly: true,
    },
  ],

  preview: {
    prepare() {
      return {
        title: "Navigation",
      };
    },
  },
};

export default settingsNavigation;
