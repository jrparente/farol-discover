import { Footprints } from "lucide-react";

const sectionPrograms = {
  name: "sectionPrograms",
  title: "Programs Section",
  icon: Footprints,
  type: "object",
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
    },
    {
      name: "sectionSubtitle",
      title: "Section Subtitle",
      type: "string",
    },
    {
      name: "programs",
      title: "Programs",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "program",
            },
          ],
        },
      ],
    },
  ],
};

export default sectionPrograms;
