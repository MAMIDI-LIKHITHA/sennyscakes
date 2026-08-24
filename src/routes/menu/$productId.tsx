import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { Stars } from "@/components/Stars";
import { useCart } from "@/context/CartContext";
import { formatNaira, getProduct, products, whatsappLink } from "@/data/products";

export const Route = createFileRoute("/menu/$productId")({
  loader: ({ params }) => {
    const product = getProduct(params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.product.name ?? "Product";
    const description =
      loaderData?.product.description ??
      "Order cakes and pastries from Senny's Cakes & Pastries.";
    return {
      meta: [
        { title: `${name} | Senny's Cakes & Pastries` },
        { name: "description", content: description },
        { property: "og:title", content: `${name} | Senny's Cakes & Pastries` },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add, setDrawerOpen } = useCart();
  const [qty, setQty] = useState(1);

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="container-page py-12">
      <Link to="/menu" className="text-sm text-muted-foreground hover:text-primary">
        ← Back to menu
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <img
          src={product.image}
          alt={product.name}
          width={1024}
          height={1024}
          className="w-full rounded-3xl object-cover shadow-[0_30px_60px_-40px_oklch(0.62_0.19_6/0.5)]"
        />

        <div className="space-y-5">
          <span className="inline-block rounded-full bg-blush px-3 py-1 text-xs font-medium uppercase tracking-wide">
            {product.category}
          </span>
          <h1 className="font-display text-4xl font-semibold">{product.name}</h1>
          <Stars rating={product.rating} />
          <p className="text-2xl font-semibold text-primary">
            From {formatNaira(product.price)}
          </p>
          <p className="text-sm text-muted-foreground">{product.description}</p>

          <ul className="flex flex-wrap gap-2">
            {product.features.map((f) => (
              <li
                key={f}
                className="rounded-full border px-3 py-1 text-xs text-muted-foreground"
              >
                {f}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 rounded-full border px-3 py-2">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="rounded-full p-1 hover:bg-muted"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-6 text-center text-sm font-medium">{qty}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => q + 1)}
                className="rounded-full p-1 hover:bg-muted"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => {
                add(product.id, qty);
                setDrawerOpen(true);
              }}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <ShoppingBag className="h-4 w-4" /> Add to cart
            </button>
          </div>

          <a
            href={whatsappLink(
              `Hello Senny's Cakes & Pastries! I'd like to order ${qty} x ${product.name} (${formatNaira(product.price * qty)}).`,
            )}
            target="_blank"
            rel="noreferrer"
            className="block rounded-full border border-primary/40 px-6 py-3 text-center text-sm font-semibold transition-colors hover:bg-blush/60"
          >
            Order now on WhatsApp
          </a>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold">You may also like</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
