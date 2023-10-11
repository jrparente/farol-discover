import { Stars } from "lucide-react";

const testimonialsSection = {
  icon: Stars,
  name: "testimonialsSection",
  title: "Testimonials",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "message",
          title: "Message",
          type: "text",
        },
        {
          name: "location",
          title: "Location",
          type: "string",
        },
        {
          name: "avatar",
          title: "Avatar",
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
  ],
};

export default testimonialsSection;
