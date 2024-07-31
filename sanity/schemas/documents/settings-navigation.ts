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
      name: "navItems",
      title: "Navigation Items",
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
              name: "link",
              title: "Link",
              type: "link",
            },
          ],
        },
      ],
    },
  ],
};

export default settingsNavigation;
