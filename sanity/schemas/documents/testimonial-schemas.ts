import { Stars } from "lucide-react";

const testimonials = {
  icon: Stars,
  name: "testimonials",
  title: "Testimonials",
  type: "document",
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
      name: "date",
      title: "Date",
      type: "string",
    },
    {
      name: "tour",
      title: "Tour",
      type: "reference",
      to: [{ type: "program" }],
    },
    {
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: { hotspot: true },
    },
  ],
};

export default testimonials;
