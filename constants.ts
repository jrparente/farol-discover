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

export const programs = [
  {
    id: "smugglers-paths-lagoons",
    name: "Portugal - Smugglers' Paths and Lagoons",
    location: "Algarve, Portugal",
    description:
      "An 8-day hiking trip exploring both the coast and the hinterland of the Algarve.",
    expandedDescription:
      "Discover the untouched beauty of Portugal's Algarve region on this 8-day adventure. From the serenity of the sea where gentle waves caress sandy shores, to the vibrant colors of traditional fishing boats, experience the essence of Algarvian life. Explore the contrasting landscapes of the coast and the hinterland, each offering a unique blend of nature, culture, and history. It's not just a hiking trip; it's an authentic Algarvian experience.",
    image: "/smugglers-paths-lagoons.jpg",
    difficulty: "Moderate",
    duration: 8,
    price: "€1,395",
    highlights: [
      "Sandbank hiking to Tavira",
      "Boat tour in Ria Formosa",
      "Smuggler trails in Alcoutim",
      "Portuguese cataplana cooking class",
    ],
    featured: false,
    whatsIncluded: ["Hotel overnight stays"],
    whatsNotIncluded: ["Flights", "Travel Insurance"],
    mapUrl: "https://maps.example.com/smugglers-paths-lagoons",
    gallery: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
  },
  {
    id: "algarve-coastal-trails",
    name: "Algarve Coastal Trails",
    location: "Algarve",
    description:
      "A 5-day adventure exploring the stunning cliffs and beaches of the Algarve.",
    expandedDescription:
      "Embark on a 5-day journey through the awe-inspiring landscapes of the Algarve coastline. From the jaw-dropping cliffs of Ponta da Piedade to the enchanting Benagil Sea Cave, this tour offers an unparalleled experience that combines adventure, relaxation, and natural beauty.",
    image: "/algarve.jpg",
    difficulty: "Moderate",
    duration: 5,
    price: "€400",
    highlights: ["Ponta da Piedade", "Praia da Marinha", "Benagil Sea Cave"],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrival and Orientation",
        description:
          "Land at Faro Airport and take a scheduled shuttle to our starting point. Get settled in your accommodation and join the group for an orientation meeting in the evening.",
        meals: ["Dinner"],
        notes: "Shuttle service from Faro Airport is included.",
      },
      {
        day: 2,
        title: "Visit Ponta da Piedade",
        description:
          "After breakfast, we head to Ponta da Piedade for a guided tour. Known for its rugged cliffs and grottoes, you'll be captivated by the natural beauty. After lunch, free time to explore or relax on the beach.",
        meals: ["Breakfast", "Lunch"],
        notes: "Wear comfortable shoes suitable for walking.",
      },
      {
        day: 3,
        title: "Praia da Marinha and Snorkeling",
        description:
          "Spend the day at Praia da Marinha, famous for its golden sands and crystal-clear waters. Option to join a snorkeling excursion to see underwater caves.",
        meals: ["Breakfast", "Lunch"],
        notes: "Snorkeling equipment provided.",
      },
      {
        day: 4,
        title: "Benagil Sea Cave Kayaking",
        description:
          "Today we venture out to the iconic Benagil Sea Cave. We'll kayak our way through this natural wonder, with plenty of time for photos.",
        meals: ["Breakfast", "Lunch"],
        notes: "Kayaking experience is not required.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Our adventure comes to an end. After breakfast, shuttles are available to Faro Airport.",
        meals: ["Breakfast"],
        notes: "Shuttle service to Faro Airport is included.",
      },
    ],
    whatsIncluded: ["Accommodation", "Meals", "Local Guides"],
    whatsNotIncluded: ["Flights", "Travel Insurance"],
    requirements: ["Moderate fitness level", "Hiking boots"],
    reviews: [
      {
        user: "John",
        comment: "Amazing experience!",
        rating: 5,
      },
      // ... more reviews
    ],
    faqs: [
      {
        question: "How do I get there?",
        answer:
          "You can take a flight to Faro Airport, and then a shuttle to the starting point.",
      },
    ],
    mapUrl: "https://maps.example.com/algarve-coastal-trails",
    gallery: ["/programs/algarve/img1.jpg", "/programs/algarve/img2.jpg"],
  },
  {
    id: "azores-island-adventure",
    name: "Azores Island Adventure",
    location: "Azores",
    description:
      "Journey through lush landscapes and volcanic terrains in the Azores.",
    expandedDescription:
      "Embark on a 7-day adventure through the Azores, a stunning archipelago in the middle of the Atlantic Ocean. This challenging yet rewarding journey takes you through lush landscapes, breathtaking volcanic terrains, and serene lakes. From hiking volcanic craters to relaxing in thermal waters, this adventure is sure to offer unparalleled experiences and lifelong memories. This tour is designed for those who seek challenges and are in love with the great outdoors.",
    image: "/acores.jpg",
    difficulty: "Challenging",
    duration: 7,
    price: "€600",
    highlights: ["Sete Cidades", "Furnas Lake", "Caldeira Velha"],
    featured: true,
  },
  {
    id: "minho-green-walks",
    name: "Minho Green Walks",
    location: "Minho",
    description:
      "Discover the historic sites and natural beauty of the Minho region.",
    expandedDescription:
      "Immerse yourself in a 3-day journey through the idyllic Minho region, renowned for its lush landscapes, historic sites, and cultural richness. Starting with a visit to the Peneda-Gerês National Park, Portugal's only national park, you'll experience diverse flora and fauna as you hike through scenic trails. Meander along the banks of the Lima River, taking in the tranquility and natural beauty that surrounds you. Your adventure also includes a visit to Barcelos, a historic city known for its medieval architecture and the legendary Rooster of Barcelos. With an easy difficulty level, this tour offers a perfect blend of nature, history, and relaxation.",
    image: "/minho.jpg",
    difficulty: "Easy",
    duration: 3,
    price: "€250",
    highlights: ["Peneda-Gerês National Park", "Lima River", "Barcelos"],
    featured: true,
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
