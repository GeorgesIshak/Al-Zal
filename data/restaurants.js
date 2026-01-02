import { Flame, Leaf, Bike } from "lucide-react";

export const categories = [
  "Shawarma",
  "Chicken",
  "Falafel",
  "Street",
  "Fresh",
  "Burgers",
  "Fries",
  "BBQ",
  "Wraps",
  "Manakish",
  "Karāk",
  "Desserts",
  "Cold",
  "Plates",
  "Family"
];

export const ourSpecsData = [
  { 
    title: "Fresh Ingredients Daily", 
    description: "Every dish is made using fresh, locally sourced ingredients for real street-food flavor.",
    icon: Leaf,
    accent: "#4CAF50"
  },
  { 
    title: "Authentic Street Food Taste", 
    description: "Traditional recipes prepared the same way they’re made on the streets of Saudi Arabia.",
    icon: Flame,
    accent: "#FF5722"
  },
  { 
    title: "Fast Delivery & Pickup", 
    description: "Hot meals delivered quickly — or pick up your order without waiting.",
    icon: Bike,
    accent: "#FFC107"
  }
];
export const restaurants = [
  {
    id: 1,
    order: 1,
    name: "North Yard",
    category: "Street Food",
    description: "A cobbled yard home to independent restaurants.",
    image: "/11.avif",
    lat: 24.7136,
    lng: 46.6753,
  },
  {
    id: 2,
    order: 2,
    name: "Hawley Wharf",
    category: "Canal Side",
    description: "Eat, shop and experience by the canal.",
    image: "/12.jpg",
    lat: 24.71365,
    lng: 46.67535,
  },
  {
    id: 3,
    order: 3,
    name: "Stables",
    category: "Market",
    description: "A labyrinth of cultures and flavors.",
    image: "/13.avif",
    lat: 24.7137,
    lng: 46.6754,
  },
  {
    id: 4,
    order: 4,
    name: "Camden Lock",
    category: "Food & Drinks",
    description: "Barges, bars and iconic street food.",
    image: "/14.jpg",
    lat: 24.71375,
    lng: 46.67545,
  },
  {
    id: 5,
    order: 5,
    name: "East Yard",
    category: "Dining",
    description: "Local favorites with global taste.",
    image: "/15.jpg",
    lat: 24.7138,
    lng: 46.6755,
  },
  {
    id: 6,
    order: 6,
    name: "West Corner",
    category: "Fusion",
    description: "Bold street flavors from around the world.",
    image: "/12.jpg",
    lat: 24.71385,
    lng: 46.67555,
  },
  {
    id: 7,
    order: 7,
    name: "Al Zal Special",
    category: "Saudi Street Food",
    description: "Authentic Saudi flavors made fresh.",
    image: "/13.avif",
    lat: 24.7139,
    lng: 46.6756,
  },
];

