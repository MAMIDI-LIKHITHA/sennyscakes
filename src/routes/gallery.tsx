import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

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

import img5 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.45 PM.jpeg";
import img6 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.47 PM (1).jpeg";
import img7 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.47 PM.jpeg";
import img8 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.48 PM (1).jpeg";
import img9 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.48 PM (2).jpeg";
import img10 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.48 PM.jpeg";
import img11 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.49 PM.jpeg";
import img12 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.50 PM (1).jpeg";
import img13 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.50 PM.jpeg";
import img14 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.51 PM.jpeg";

import img15 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.52 PM (1).jpeg";
import img16 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.52 PM.jpeg";
import img17 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.53 PM (1).jpeg";
import img18 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.53 PM (2).jpeg";
import img19 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.53 PM.jpeg";
import img20 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.54 PM (1).jpeg";
import img21 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.54 PM.jpeg";
import img22 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.55 PM (1).jpeg";
import img23 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.55 PM (2).jpeg";
import img24 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.55 PM (3).jpeg";
import img25 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.55 PM (4).jpeg";
import img26 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.55 PM.jpeg";
import img27 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.56 PM (1).jpeg";
import img28 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.56 PM (2).jpeg";
import img29 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.56 PM.jpeg";
import img30 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.57 PM (1).jpeg";
import img31 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.57 PM.jpeg";

const galleryImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31,
  heroCake, birthdayCake, graduationCake, cupcakes, lunchboxCake,
  smallChops, puffPuff, donuts, meatPie, brownies, foodTray, surprisePackage,
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Senny's Cakes & Pastries" },
      {

        name: "description",
        content:
          "Photos of cakes, small chops, pastries and party trays baked by Senny's Cakes & Pastries in Kaduna.",
      },
      { property: "og:title", content: "Gallery | Senny's Cakes & Pastries" },
      {
        property: "og:description",
        content: "A look at our finished cakes, trays and pastries.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="container-page py-12">
      <h1 className="font-display text-4xl font-semibold md:text-5xl">
        Baking @ it's best
      </h1>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        A look at the cakes, trays and pastries leaving our kitchen in Rifenery
        Junction.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((img, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActive(img)}

            className="group overflow-hidden rounded-2xl"
          >
            <img
              src={img}
              alt={`Senny's Cakes & Pastries — photo ${index + 1}`}
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              aria-label="Close image"
              className="absolute right-6 top-6 rounded-full bg-card p-2"
              onClick={() => setActive(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              src={active}

              alt="Senny's Cakes & Pastries product"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-h-[80vh] w-auto rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
