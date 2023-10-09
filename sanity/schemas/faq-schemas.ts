import { FileQuestion } from "lucide-react";

const faq = {
  icon: FileQuestion,
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
