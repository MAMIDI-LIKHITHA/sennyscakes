import heroCake from "@/assets/hero-cake.jpg";
import birthdayCake from "@/assets/birthday-cake.jpg";
import graduationCake from "@/assets/graduation-cake.jpg";
import cupcakes from "@/assets/cupcakes.jpg";
import lunchboxCake from "@/assets/lunchbox-cake.jpg";
import smallChops from "@/assets/small-chops.jpg";
import puffPuff from "@/assets/puff-puff.jpg";
import donuts from "@/assets/donuts.jpg";
import meatPie from "@/assets/meat-pie.jpg";
import brownies from "@/assets/brownies.jpg";
import foodTray from "@/assets/food-tray.jpg";
import surprisePackage from "@/assets/surprise-package.jpg";

export const WHATSAPP_NUMBER = "2349136240827";
export const INSTAGRAM = "https://instagram.com/senny's_cakes_and_pastries";
export const TIKTOK = "https://tiktok.com/@sennys.cakes.and.p";

export const categories = ["Cakes", "Small Chops", "Pastries", "Extras"] as const;
export type Category = (typeof categories)[number];

export interface BakeryProduct {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: number;
  rating: number;
  image: string;
  features: string[];
}

export const products: BakeryProduct[] = [
  {
    id: "wedding-cake",
    name: "Traditional Wedding Cake",
    category: "Cakes",
    description:
      "An elegant two-tier buttercream centrepiece finished with hand-piped shells, sugar pearls and fresh florals. Tiers, flavour and colour palette are all made to order.",
    price: 45000,
    rating: 5,
    image: heroCake,
    features: ["Custom design", "Multi-tier", "Fresh flowers"],
  },
  {
    id: "birthday-cake-pink",
    name: "Pink Rosette Birthday Cake",
    category: "Cakes",
    description:
      "Hand-piped pink rosettes with pearl accents and your custom birthday message. A Senny's favourite for milestone celebrations.",
    price: 15000,
    rating: 4.9,
    image: birthdayCake,
    features: ["Piped rosettes", "Custom message", "6\" or 8\""],
  },
  {
    id: "graduation-cake",
    name: "Black & Gold Graduation Cake",
    category: "Cakes",
    description:
      "A bold black fondant cake with a graduation cap topper and gold detailing — perfect for the \"Congratulations\" moment.",
    price: 22000,
    rating: 4.9,
    image: graduationCake,
    features: ["Fondant finish", "Gold accents", "Cap topper"],
  },
  {
    id: "lunchbox-cake",
    name: "Foil / Lunchbox Cake",
    category: "Cakes",
    description:
      "Mini personalised cake packed in a takeaway box with a piped message. Sweet, affordable and ready for a same-day surprise.",
    price: 6000,
    rating: 4.8,
    image: lunchboxCake,
    features: ["Personalised", "Gift boxed", "Same-day"],
  },
  {
    id: "cupcakes",
    name: "Rose Swirl Cupcakes (Box of 12)",
    category: "Cakes",
    description:
      "Twelve moist vanilla or chocolate cupcakes crowned with deep rose buttercream swirls, boxed and ready to share.",
    price: 9000,
    rating: 4.9,
    image: cupcakes,
    features: ["Box of 12", "Vanilla or chocolate", "Rose swirl"],
  },
  {
    id: "small-chops-combo",
    name: "Small Chops Combo Tray",
    category: "Small Chops",
    description:
      "Samosa, spring rolls and puff puff served with dipping sauce. Our most-ordered party tray, made fresh on the day.",
    price: 12000,
    rating: 5,
    image: smallChops,
    features: ["Samosa + spring rolls", "Dipping sauce", "Party size"],
  },
  {
    id: "puff-puff",
    name: "Puff Puff (Plain, Milky or Glazed)",
    category: "Small Chops",
    description:
      "Soft, golden Nigerian puff puff — order plain, milky or glazed. Sold in packs sized for gatherings big and small.",
    price: 3500,
    rating: 4.8,
    image: puffPuff,
    features: ["3 finishes", "Freshly fried", "Pack options"],
  },
  {
    id: "donuts",
    name: "Glazed Milky Donuts",
    category: "Pastries",
    description:
      "Pillowy ring donuts under a sweet milky glaze. Available plain or fully glazed, boxed by the half dozen or dozen.",
    price: 4500,
    rating: 4.8,
    image: donuts,
    features: ["Plain or milky", "6 or 12 pack", "Baked daily"],
  },
  {
    id: "meat-pie",
    name: "Meat Pie & Fish Pie",
    category: "Pastries",
    description:
      "Buttery crescent-fold pastries with a rich, well-seasoned filling. Choose meat, fish or a mixed pack.",
    price: 5000,
    rating: 4.9,
    image: meatPie,
    features: ["Meat or fish", "Flaky crust", "Mixed packs"],
  },
  {
    id: "brownies",
    name: "Fudgy Brownie Trays",
    category: "Pastries",
    description:
      "Dense chocolate brownies in mini foil trays with a caramel or chocolate drizzle. Great for gifting and dessert tables.",
    price: 6500,
    rating: 4.9,
    image: brownies,
    features: ["Caramel drizzle", "Mini trays", "Dessert tables"],
  },
  {
    id: "food-tray",
    name: "Party Food Tray",
    category: "Extras",
    description:
      "A loaded combo tray with fried chicken, puff puff, spring rolls and samosa — built for birthdays, showers and office treats.",
    price: 18000,
    rating: 5,
    image: foodTray,
    features: ["Chicken + small chops", "Combo tray", "Event ready"],
  },
  {
    id: "surprise-package",
    name: "Surprise Package",
    category: "Extras",
    description:
      "A gift box built around a mini cake with snacks, a drink and a note — delivered to make somebody's day in Kaduna.",
    price: 20000,
    rating: 5,
    image: surprisePackage,
    features: ["Mini cake + treats", "Gift wrapped", "Delivery in Kaduna"],
  },
];

export const formatNaira = (value: number) =>
  `₦${value.toLocaleString("en-NG")}`;

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
