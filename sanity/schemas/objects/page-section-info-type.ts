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
