export type MenuItem = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  popular?: boolean;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "KTM Special Momo",
    category: "Momo",
    description: "Our signature momo packed with delicious flavors.",
    price: 180,
    image: "/images/special-momo.jpg",
    popular: true,
  },
  {
    id: 2,
    name: "Buff Momo",
    category: "Momo",
    description: "Juicy buff momos served with our special chutney.",
    price: 150,
    image: "/images/buff-momo.jpg",
  },
  {
    id: 3,
    name: "Chicken Momo",
    category: "Momo",
    description: "Tender chicken filling wrapped in soft momo dough.",
    price: 180,
    image: "/images/chicken-momo.jpg",
  },
  {
    id: 4,
    name: "Chicken Chowmein",
    category: "Noodles",
    description: "Fresh noodles tossed with chicken and vegetables.",
    price: 180,
    image: "/images/chicken-chowmein.jpg",
  },
  {
    id: 5,
    name: "Veg Chowmein",
    category: "Noodles",
    description: "Stir-fried noodles with fresh vegetables.",
    price: 140,
    image: "/images/veg-chowmein.jpg",
  },
  {
    id: 6,
    name: "Chicken Fried Rice",
    category: "Rice",
    description: "Flavorful fried rice with chicken and vegetables.",
    price: 180,
    image: "/images/chicken-fried-rice.jpg",
  },
];