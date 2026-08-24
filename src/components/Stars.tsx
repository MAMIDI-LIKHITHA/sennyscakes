import { Star } from "lucide-react";

export function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1 text-xs text-muted-foreground">
      <span className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5 text-gold"
            fill={i < Math.round(rating) ? "currentColor" : "none"}
            strokeWidth={1.5}
          />
        ))}
      </span>
      {rating.toFixed(1)}
    </span>
  );
}
