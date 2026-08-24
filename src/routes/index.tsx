import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Cake, Clock, HeartHandshake } from "lucide-react";
import heroCake from "@/assets/hero-cake.jpg";
import { ProductCard } from "@/components/ProductCard";
import { products, whatsappLink } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Senny's Cakes & Pastries | Baking @ It's Best, Kaduna" },
      {
        name: "description",
        content:
          "Custom cakes, cupcakes, small chops, pastries and surprise packages from Senny's Cakes & Pastries in Rifenery Junction, Kaduna. Order on WhatsApp.",
      },
      { property: "og:title", content: "Senny's Cakes & Pastries — Baking @ It's Best" },
      {
        property: "og:description",
        content:
          "Cakes, pastries, small chops and surprise packages baked fresh in Kaduna.",
      },
    ],
  }),
  component: Home,
});

const featured = products.filter((p) =>
  ["wedding-cake", "birthday-cake-pink", "small-chops-combo", "surprise-package"].includes(
    p.id,
  ),
);

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-blush via-background to-background">
        <div className="container-page grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <Cake className="h-3.5 w-3.5" /> Rifenery Junction, Kaduna
            </span>
            <h1 className="font-display text-5xl leading-[1.05] font-bold tracking-tight md:text-7xl">
              Baking <span className="text-gradient-rose">@ it's best</span>
            </h1>
            <p className="max-w-md text-base text-muted-foreground md:text-lg">
              Custom cakes, cupcakes, small chops, pastries and surprise packages —
              handmade to order and delivered across Kaduna.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Shop the menu <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink(
                  "Hello Senny's Cakes & Pastries! I'd like to ask about an order.",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-blush/60"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <img
              src={heroCake}
              alt="Two-tier buttercream cake with pink rosettes and fresh roses"
              width={1600}
              height={1008}
              className="animate-float w-full rounded-3xl object-cover shadow-[0_40px_80px_-40px_oklch(0.62_0.19_6/0.55)]"
            />
          </motion.div>
        </div>
      </section>

      <section className="container-page grid gap-4 py-14 sm:grid-cols-3">
        {[
          {
            icon: Cake,
            title: "Made to order",
            body: "Every cake is designed around your theme, colours and message.",
          },
          {
            icon: Clock,
            title: "Fresh on the day",
            body: "Small chops and pastries are fried and baked the morning of your event.",
          },
          {
            icon: HeartHandshake,
            title: "Order on WhatsApp",
            body: "Build your basket here, then checkout straight into a WhatsApp chat.",
          },
        ].map((f) => (
          <div key={f.title} className="surface-card p-6">
            <f.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </section>

      <section className="container-page py-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Featured favourites
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The orders our customers in Kaduna keep coming back for.
            </p>
          </div>
          <Link
            to="/menu"
            className="text-sm font-semibold text-primary hover:underline"
          >
            View full menu →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <div className="surface-card grid gap-8 p-8 md:grid-cols-2 md:p-12">
          <div className="space-y-4">
            <h2 className="font-display text-3xl font-semibold">Our story</h2>
            <p className="text-sm text-muted-foreground">
              Senny's Cakes & Pastries started in a home kitchen in Kaduna with one
              rule: nothing leaves the counter unless it tastes as good as it looks.
              Today we bake wedding tiers, lunchbox cakes, party trays and surprise
              packages for celebrations all over the city.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Read more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {products.slice(4, 10).map((p) => (
              <img
                key={p.id}
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square w-full rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
        <div className="mt-6 text-center">
          <Link
            to="/gallery"
            className="text-sm font-semibold text-primary hover:underline"
          >
            See the full gallery →
          </Link>
        </div>
      </section>
    </>
  );
}
