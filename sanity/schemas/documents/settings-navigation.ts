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
  ],
};

export default settingsNavigation;
