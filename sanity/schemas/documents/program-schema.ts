import { Footprints } from "lucide-react";

const program = {
  icon: Footprints,
  name: "program",
  title: "Programs",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "location",
      title: "Destinations",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
    },
    {
      name: "expandedDescription",
      title: "Expanded Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "categories",
      title: "Categories",
      type: "string",
      options: {
        list: [
          { title: "Guided Tour", value: "Guided Tour" },
          { title: "Self-Guided Tour", value: "Self-Guided Tour" },
        ],
      },
    },
    {
      name: "image",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "difficulty",
      title: "Difficulty",
      type: "string",
      options: {
        list: [
          { title: "Easy", value: "Easy" },
          { title: "Moderate", value: "Moderate" },
          { title: "Challenging", value: "Challenging" },
        ],
      },
    },
    {
      name: "duration",
      title: "Duration (days)",
      type: "number",
    },
    {
      name: "price",
      title: "Price Starting From (per person):",
      type: "number",
    },
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "featured",
      title: "Is Featured?",
      type: "boolean",
    },
    {
      name: "whatsIncluded",
      title: "What's Included",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "whatsNotIncluded",
      title: "What's Not Included",
      type: "array",
      of: [{ type: "string" }],
    },
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
    {
      name: "itinerary",
      title: "Itinerary",
      type: "array",
      of: [
        {
          type: "object",
          name: "itineraryItem",
          title: "Itinerary Item",
          fields: [
            {
              name: "day",
              title: "Day",
              type: "number",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "meals",
              title: "Meals",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "notes",
              title: "Notes",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "mapUrl",
      title: "Map URL",
      type: "url",
    },
    {
      name: "gallery",
      type: "array",
      title: "Image Gallery",
      of: [
        {
          type: "gallery",
        },
      ],
    },
  ],
};

export default program;
