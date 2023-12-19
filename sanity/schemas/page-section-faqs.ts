import { FileQuestion } from "lucide-react";

const faqs = {
  name: "faqs",
  title: "FAQs",
  type: "object",
  icon: FileQuestion,
  fields: [
    {
      name: "faqs",
      title: "Frequently Asked Questions",
      type: "array",
      of: [
        {
          type: "object",
          name: "faqItem",
          title: "FAQ Item",
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
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "FAQs",
        media: FileQuestion,
      };
    },
  },
};

export default faqs;
