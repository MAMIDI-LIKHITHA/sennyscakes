import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import heroCake from "@/assets/hero-cake.jpg";

import img5 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.45 PM.jpeg";
import img6 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.47 PM (1).jpeg";
import img7 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.47 PM.jpeg";
import img8 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.48 PM (1).jpeg";
import img9 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.48 PM (2).jpeg";
import img10 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.48 PM.jpeg";
import img11 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.49 PM.jpeg";
import img12 from "@/assets/WhatsApp Image 2026-08-24 at 1.39.50 PM (1).jpeg";

const recentWorkImages = [img5, img6, img7, img8, img9, img10, img11, img12];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Senny's Cakes & Pastries | Kaduna Bakery" },
      {
        name: "description",
        content:
          "The story behind Senny's Cakes & Pastries — a Kaduna bakery baking cakes, pastries, small chops and surprise packages to order.",
      },
      { property: "og:title", content: "About Senny's Cakes & Pastries" },
      {
        property: "og:description",
        content: "Baking @ it's best — our story, philosophy and location in Kaduna.",
      },
    ],
  }),
  component: AboutPage,

});
function AboutPage() {
  return (
    <div className="container-page py-12">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <h1 className="font-display text-4xl font-semibold md:text-5xl">
            Baking @ it's best
          </h1>
          <p className="text-sm text-muted-foreground">
            Senny's Cakes & Pastries began in a home kitchen in Kaduna, baking
            birthday cakes for friends and family. Word travelled, orders grew, and
            today we bake wedding tiers, graduation cakes, lunchbox cakes, cupcakes,
            small chops, pastries and full party trays for celebrations across the
            city.
          </p>
          <p className="text-sm text-muted-foreground">
            Our promise is simple: nothing leaves the counter unless it tastes as
            good as it looks. Every order is made fresh, decorated by hand, and
            confirmed with you personally before we start baking.
          </p>
          <p className="flex items-center gap-2 text-sm font-medium">
            <MapPin className="h-4 w-4 text-primary" /> Rifenery Junction, Kaduna,
            Nigeria
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Talk to us
          </Link>
        </div>

        <img
          src={heroCake}
          alt="Two-tier buttercream wedding cake by Senny's Cakes & Pastries"
          loading="lazy"
          width={1600}
          height={1008}
          className="w-full rounded-3xl object-cover"
        />
      </div>
      <section className="mt-16 grid gap-4 sm:grid-cols-3">
        {[
          { label: "Made to order", value: "Every cake, every time" },
          { label: "Baked fresh", value: "Same-day frying & baking" },
          { label: "Delivered", value: "Across Kaduna" },
        ].map((s) => (
          <div key={s.label} className="surface-card p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-primary">
              {s.label}
            </p>
            <p className="mt-2 text-lg font-semibold">{s.value}</p>
          </div>
        ))}
      </section>
      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold">Recent work</h2>
        <div className="mt-6 grid gap-4 grid-cols-2 md:grid-cols-4">
          {recentWorkImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Senny's Cakes & Pastries — recent work ${index + 1}`}
              loading="lazy"

              width={1024}
              height={1024}
              className="aspect-square w-full rounded-2xl object-cover"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
