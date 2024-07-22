import { MenuIcon } from "lucide-react";

const navigation = {
  name: "navigation",
  title: "Navigation",
  icon: MenuIcon,
  type: "document",

  fields: [
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

export default navigation;
