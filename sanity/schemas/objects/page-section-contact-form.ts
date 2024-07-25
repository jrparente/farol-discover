import { Mail } from "lucide-react";

const contactForm = {
  title: "Contact Form",
  name: "contactForm",
  icon: Mail,
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    },
  ],
};

export default contactForm;
