import { Check } from "lucide-react";

const features = {
  icon: Check,
  name: "features",
  title: "Features",
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

export default features;
