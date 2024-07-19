import { Info, MapPin, Mail, Map, Users, Shield, Bed } from "lucide-react";

export const routes = [
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
