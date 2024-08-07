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
      name: "language",
      type: "string",
      readOnly: true,
    },
  ],
};

export default settingsNavigation;
