import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { toast } from "sonner";
import { formatNaira, products, type BakeryProduct } from "@/data/products";

export interface CartLine {
  id: string;
  quantity: number;
}

interface CartContextValue {
  lines: CartLine[];
  items: { product: BakeryProduct; quantity: number }[];
  count: number;
  total: number;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  add: (id: string, quantity?: number) => void;
  setQuantity: (id: string, quantity: number) => void;
  remove: (id: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "sennys-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines]);

  const add = useCallback((id: string, quantity = 1) => {
    const product = products.find((p) => p.id === id);
    setLines((prev) => {
      const existing = prev.find((l) => l.id === id);
      if (existing) {
        return prev.map((l) =>
          l.id === id ? { ...l, quantity: l.quantity + quantity } : l,
        );
      }
      return [...prev, { id, quantity }];
    });
    if (product) {
      toast.success(`${product.name} added to cart`, {
        description: formatNaira(product.price * quantity),
      });
    }
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    setLines((prev) =>
      quantity <= 0
        ? prev.filter((l) => l.id !== id)
        : prev.map((l) => (l.id === id ? { ...l, quantity } : l)),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<CartContextValue>(() => {
    const items = lines
      .map((line) => {
        const product = products.find((p) => p.id === line.id);
        return product ? { product, quantity: line.quantity } : null;
      })
      .filter((item): item is { product: BakeryProduct; quantity: number } =>
        Boolean(item),
      );

    return {
      lines,
      items,
      count: items.reduce((sum, i) => sum + i.quantity, 0),
      total: items.reduce((sum, i) => sum + i.quantity * i.product.price, 0),
      drawerOpen,
      setDrawerOpen,
      add,
      setQuantity,
      remove,
      clear,
    };
  }, [lines, drawerOpen, add, setQuantity, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

export function buildWhatsAppOrder(
  items: { product: BakeryProduct; quantity: number }[],
  total: number,
) {
  const lines = items.map(
    (i) =>
      `• ${i.product.name} x${i.quantity} — ${formatNaira(i.product.price * i.quantity)}`,
  );
  return [
    "Hello Senny's Cakes & Pastries! I'd like to place an order:",
    "",
    ...lines,
    "",
    `Estimated total: ${formatNaira(total)}`,
  ].join("\n");
}
