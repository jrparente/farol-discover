import { Info, MapPin, Mail, Map, Users, Shield, Bed } from "lucide-react";

export const routes = [
  {
    label: "About Us",
    href: "/about-us",
    icon: Info,
  },
  {
    label: "Programs",
    href: "/tours",
    icon: MapPin,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

export const faq = [
  {
    title: "What kind of tours do you offer?",
    question:
      "We offer a range of tours, from city excursions to countryside explorations.",
  },
  {
    title: "How experienced are your guides?",
    question:
      " Our guides are highly trained and have extensive knowledge of local cultures and geography.",
  },
  {
    title: "Is it possible to personalize my Farol Discover tour experience?",
    question:
      "Absolutely! We offer customizable options for all our tours to meet your individual interests and requirements.",
  },
];

export const testimonials = [
  {
    name: "Alice Johnson",
    message:
      "Our experience with Farol Discover was absolutely magical. The Algarve Coastal Trails tour was a highlight of our trip!",
    location: "London, UK",
    avatar: "/alice.jpg",
  },
  {
    name: "Hans Müller",
    message:
      "Die Azoren Inselabenteuer-Tour war ein unvergessliches Erlebnis. Die Reiseleiter waren sehr kompetent und die Landschaft war atemberaubend.",
    location: "Berlin, Germany",
    avatar: "/hans.jpg",
  },
  {
    name: "Sofia und Markus",
    message:
      "Wir hatten eine wundervolle Zeit auf der Minho Green Walks Tour. Die Wanderwege waren wunderschön und die Tour war gut organisiert.",
    location: "Munich, Germany",
    avatar: "/sofia_markus.jpg",
  },
];

export const tourFeatures = [
  {
    icon: Map,
    title: "Local Expertise",
    items: ["Guided by Locals", "Hidden Trails", "Cultural Insights"],
  },
  {
    icon: Users,
    title: "Small Group Focus",
    items: ["Personalized Attention", "Flexible Itineraries", "Community Feel"],
  },
  {
    icon: Shield,
    title: "Unmatched Security",
    items: [
      "Verified Local Guides",
      "Travel Insurance Options",
      "Secure Payments",
    ],
  },
  {
    icon: Bed,
    title: "Hassle-Free Experience",
    items: [
      "Comfortable Accommodations",
      "Transportation Included",
      "Meals Provided",
    ],
  },
];
