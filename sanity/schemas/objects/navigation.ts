import { Link, MenuIcon } from "lucide-react";

const navigation = {
  title: "Navigation",
  name: "navigation",
  type: "object",
  fields: [
    {
      name: "navItems",
      title: "Navigation Items",
      type: "array",
      of: [
        {
          name: "navItem",
          title: "Navigation Item",
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
              type: "reference",
              to: [{ type: "homepage" }, { type: "page" }],
              options: {
                filter: ({ document }: { document: any }) => {
                  if (!document.language) {
                    return {};
                  }
                  return {
                    filter: "language == $language",
                    params: { language: document.language },
                  };
                },
              },
            },
            {
              name: "subNavItems",
              title: "Sub Navigation Items",
              type: "array",
              of: [
                {
                  name: "subNavItem",
                  title: "Sub Navigation Item",
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Title",
                      type: "string",
                    },
                    {
                      // subtitle
                      name: "subtitle",
                      title: "Subtitle",
                      type: "string",
                    },
                    {
                      name: "link",
                      title: "Internal Link",
                      type: "reference",
                      to: [{ type: "homepage" }, { type: "page" }],
                      options: {
                        filter: ({ document }: { document: any }) => {
                          if (!document.language) {
                            return {};
                          }
                          return {
                            filter: "language == $language",
                            params: { language: document.language },
                          };
                        },
                      },
                    },
                    {
                      name: "externalLink",
                      title: "External Link",
                      type: "url",
                    },
                  ],
                  preview: {
                    select: {
                      title: "title",
                    },
                    prepare({ title }: { title: string }) {
                      return {
                        title: title || "Untitled",
                        media: Link,
                      };
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: "title",
              subNavItems: "navItem.subNavItems",
            },
            prepare({
              title,
              subNavItems,
            }: {
              title: string;
              subNavItems: any[];
            }) {
              return {
                title: title || "Untitled",
                media: subNavItems && subNavItems.length > 0 ? MenuIcon : Link,
              };
            },
          },
        },
      ],
    },
  ],
};

export default navigation;
