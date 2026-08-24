import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { categories, products, type Category } from "@/data/products";

export const Route = createFileRoute("/menu/")({
  head: () => ({
    meta: [
      { title: "Menu | Senny's Cakes & Pastries, Kaduna" },
      {
        name: "description",
        content:
          "Browse cakes, small chops, pastries and extras from Senny's Cakes & Pastries. Add to cart and checkout on WhatsApp.",
      },
      { property: "og:title", content: "Menu | Senny's Cakes & Pastries" },
      {
        property: "og:description",
        content: "Cakes, small chops, pastries and party extras made fresh in Kaduna.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const list = filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="container-page py-12">
      <h1 className="font-display text-4xl font-semibold md:text-5xl">The menu</h1>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        Prices are starting points — sizes, tiers and flavours are confirmed on
        WhatsApp before baking.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {(["All", ...categories] as const).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              filter === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card hover:bg-blush/60"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
