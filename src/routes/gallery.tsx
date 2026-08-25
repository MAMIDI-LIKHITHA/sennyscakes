import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { categories, products, type Category } from "@/data/products";

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
  const [tab, setTab] = useState<Category | "All">("All");
  const [active, setActive] = useState<string | null>(null);
  const list = tab === "All" ? products : products.filter((p) => p.category === tab);

  return (
    <div className="container-page py-12">
      <h1 className="font-display text-4xl font-semibold md:text-5xl">
        Baking @ it's best
      </h1>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        A look at the cakes, trays and pastries leaving our kitchen in Rifenery
        Junction.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {(["All", ...categories] as const).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setTab(c)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              tab === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card hover:bg-blush/60"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActive(p.image)}
            className="group overflow-hidden rounded-2xl"
          >
            <img
              src={p.image}
              alt={p.name}
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
