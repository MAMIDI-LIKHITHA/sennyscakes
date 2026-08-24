import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle, Music2 } from "lucide-react";
import { Logo } from "@/components/Logo";
import { INSTAGRAM, TIKTOK, whatsappLink } from "@/data/products";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-blush/40">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div className="space-y-3">
          <Logo className="h-14 w-14" />
          <h3 className="text-xl font-semibold">Senny's Cakes & Pastries</h3>
          <p className="text-sm text-muted-foreground">
            Baking @ it's best — custom cakes, pastries, small chops and surprise
            packages, made fresh in Kaduna.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="text-base font-semibold">Explore</h4>
          {[
            { to: "/menu", label: "Menu" },
            { to: "/gallery", label: "Gallery" },
            { to: "/about", label: "About" },
            { to: "/cart", label: "Cart" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block text-muted-foreground hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="text-base font-semibold">Order & follow</h4>
          <a
            href={whatsappLink("Hello Senny's Cakes & Pastries!")}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <MessageCircle className="h-4 w-4" /> +234 913 624 0827
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <Instagram className="h-4 w-4" /> @senny's_cakes_and_pastries
          </a>
          <a
            href={TIKTOK}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <Music2 className="h-4 w-4" /> @sennys.cakes.and.p
          </a>
          <p className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" /> Rifenery Junction, Kaduna, Nigeria
          </p>
        </div>
      </div>
      <div className="container-page border-t border-border/70 py-5 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Senny's Cakes & Pastries. Baking @ it's best.
      </div>
    </footer>
  );
}
