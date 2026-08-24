import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { buildWhatsAppOrder, useCart } from "@/context/CartContext";
import { formatNaira, whatsappLink } from "@/data/products";

export function CartDrawer() {
  const { drawerOpen, setDrawerOpen, items, total, setQuantity, remove } =
    useCart();

  return (
    <AnimatePresence>
      {drawerOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDrawerOpen(false)}
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-card shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 260 }}
          >
            <header className="flex items-center justify-between border-b px-5 py-4">
              <h2 className="text-xl font-semibold">Your basket</h2>
              <button
                type="button"
                aria-label="Close cart"
                onClick={() => setDrawerOpen(false)}
                className="rounded-full p-2 hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  Your basket is empty. Browse the menu to add something sweet.
                </p>
              ) : (
                <ul className="space-y-4">
                  {items.map(({ product, quantity }) => (
                    <li key={product.id} className="flex gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        width={80}
                        height={80}
                        className="h-20 w-20 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{product.name}</p>
                        <p className="text-sm text-primary">
                          {formatNaira(product.price * quantity)}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => setQuantity(product.id, quantity - 1)}
                            className="rounded-full border p-1 hover:bg-muted"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-6 text-center text-sm">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => setQuantity(product.id, quantity + 1)}
                            className="rounded-full border p-1 hover:bg-muted"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            aria-label="Remove item"
                            onClick={() => remove(product.id)}
                            className="ml-auto rounded-full p-1.5 text-muted-foreground hover:bg-muted"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <footer className="space-y-3 border-t px-5 py-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Estimated total</span>
                <span className="text-lg font-semibold">
                  {formatNaira(total)}
                </span>
              </div>
              <a
                href={whatsappLink(buildWhatsAppOrder(items, total))}
                target="_blank"
                rel="noreferrer"
                className={`block rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 ${
                  items.length === 0 ? "pointer-events-none opacity-50" : ""
                }`}
              >
                Checkout via WhatsApp
              </a>
              <Link
                to="/cart"
                onClick={() => setDrawerOpen(false)}
                className="block rounded-full border px-4 py-2.5 text-center text-sm font-medium hover:bg-muted"
              >
                View full cart
              </Link>
            </footer>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
