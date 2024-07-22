import { ImageIcon } from "@sanity/icons";

const sectionInfo = {
  icon: ImageIcon,
  name: "sectionInfo",
  type: "object",
  title: "Info Section",
  fields: [
    {
      name: "heading",
      type: "string",
    },
    {
      name: "tagline",
      type: "string",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
    {
      name: "buttonText",
      type: "string",
    },
    {
      name: "buttonLink",
      type: "link",
    },
    {
      name: "imagePosition",
      type: "string",
      describe: "The position of the image relative to the text.",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
  ],
  preview: {
    select: {
      title: "heading",
      image: "image",
    },
    prepare(selected: any) {
      return {
        title: selected.title || "Untitled",
        subtitle: "Info Section",
        media: selected.image || ImageIcon,
      };
    },
  },
};

export default sectionInfo;
