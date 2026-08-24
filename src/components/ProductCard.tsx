import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { Stars } from "@/components/Stars";
import { useCart } from "@/context/CartContext";
import { formatNaira, type BakeryProduct } from "@/data/products";

export function ProductCard({ product }: { product: BakeryProduct }) {
  const { add } = useCart();

  return (
    <article className="surface-card group flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <Link
        to="/menu/$productId"
        params={{ productId: product.id }}
        className="relative block aspect-square overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[11px] font-medium uppercase tracking-wide">
          {product.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg leading-snug font-semibold">
            <Link to="/menu/$productId" params={{ productId: product.id }}>
              {product.name}
            </Link>
          </h3>
        </div>
        <Stars rating={product.rating} />
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <span className="text-base font-semibold text-primary">
            From {formatNaira(product.price)}
          </span>
          <button
            type="button"
            onClick={() => add(product.id)}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ShoppingBag className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
