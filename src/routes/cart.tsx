import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { buildWhatsAppOrder, useCart } from "@/context/CartContext";
import { formatNaira, whatsappLink } from "@/data/products";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart | Senny's Cakes & Pastries" },
      {
        name: "description",
        content:
          "Review your Senny's Cakes & Pastries order and checkout directly on WhatsApp.",
      },
      { property: "og:title", content: "Your Cart | Senny's Cakes & Pastries" },
      {
        property: "og:description",
        content: "Review your order and checkout on WhatsApp.",
      },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, total, setQuantity, remove, clear } = useCart();

  return (
    <div className="container-page py-12">
      <h1 className="font-display text-4xl font-semibold md:text-5xl">Your cart</h1>

      {items.length === 0 ? (
        <div className="surface-card mt-8 p-8 text-center">
          <p className="text-sm text-muted-foreground">
            Your cart is empty right now.
          </p>
          <Link
            to="/menu"
            className="mt-4 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Browse the menu
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <ul className="space-y-4">
            {items.map(({ product, quantity }) => (
              <li
                key={product.id}
                className="surface-card flex flex-col gap-4 p-4 sm:flex-row sm:items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={112}
                  height={112}
                  className="h-28 w-28 rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <Link
                    to="/menu/$productId"
                    params={{ productId: product.id }}
                    className="font-semibold hover:text-primary"
                  >
                    {product.name}
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    {formatNaira(product.price)} each
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => setQuantity(product.id, quantity - 1)}
                      className="rounded-full border p-1.5 hover:bg-muted"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-6 text-center text-sm">{quantity}</span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => setQuantity(product.id, quantity + 1)}
                      className="rounded-full border p-1.5 hover:bg-muted"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Remove item"
                      onClick={() => remove(product.id)}
                      className="ml-2 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary"
                    >
                      <Trash2 className="h-3.5 w-3.5" /> Remove
                    </button>
                  </div>
                </div>
                <p className="font-semibold text-primary">
                  {formatNaira(product.price * quantity)}
                </p>
              </li>
            ))}
          </ul>

          <aside className="surface-card h-fit space-y-4 p-6">
            <h2 className="text-xl font-semibold">Order summary</h2>
            <div className="space-y-2 text-sm">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex justify-between gap-4">
                  <span className="text-muted-foreground">
                    {product.name} x{quantity}
                  </span>
                  <span>{formatNaira(product.price * quantity)}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t pt-4">
              <span className="text-sm text-muted-foreground">Estimated total</span>
              <span className="text-xl font-semibold">{formatNaira(total)}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Final pricing depends on size, tiers and delivery — we confirm
              everything on WhatsApp.
            </p>
            <a
              href={whatsappLink(buildWhatsAppOrder(items, total))}
              target="_blank"
              rel="noreferrer"
              className="block rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Checkout via WhatsApp
            </a>
            <button
              type="button"
              onClick={clear}
              className="w-full rounded-full border px-6 py-2.5 text-sm font-medium hover:bg-muted"
            >
              Clear cart
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
