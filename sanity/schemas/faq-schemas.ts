import { HelpCircle } from "lucide-react";

const faq = {
  icon: HelpCircle,
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
    },
    {
      name: "answer",
      title: "Answer",
      type: "text",
    },
  ],
};

export default faq;
