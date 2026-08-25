import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle, Music2 } from "lucide-react";
import { INSTAGRAM, TIKTOK, whatsappLink } from "@/data/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Senny's Cakes & Pastries, Kaduna" },
      {
        name: "description",
        content:
          "Reach Senny's Cakes & Pastries on WhatsApp at +234 913 624 0827, Instagram or TikTok. Based at Rifenery Junction, Kaduna.",
      },
      { property: "og:title", content: "Contact Senny's Cakes & Pastries" },
      {
        property: "og:description",
        content: "WhatsApp, Instagram, TikTok and our Kaduna location.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [occasion, setOccasion] = useState("");
  const [message, setMessage] = useState("");

  const composed = whatsappLink(
    `Hello Senny's Cakes & Pastries!\n\nName: ${name || "-"}\nOccasion: ${occasion || "-"}\n\n${message}`,
  );

  return (
    <div className="container-page py-12">
      <h1 className="font-display text-4xl font-semibold md:text-5xl">Get in touch</h1>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        Tell us what you're celebrating and we'll help plan the cake, trays or
        surprise package.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          {[
            {
              icon: MessageCircle,
              label: "+234 913 624 0827",
              href: whatsappLink("Hello Senny's Cakes & Pastries!"),
              sub: "WhatsApp — fastest way to order",
            },
            {
              icon: Instagram,
              label: "@senny's_cakes_and_pastries",
              href: INSTAGRAM,
              sub: "Instagram",
            },
            {
              icon: Music2,
              label: "@sennys.cakes.and.p",
              href: TIKTOK,
              sub: "TikTok",
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="surface-card flex items-center gap-4 p-5 transition-transform hover:-translate-y-0.5"
            >
              <c.icon className="h-5 w-5 text-primary" />
              <span>
                <span className="block text-sm font-semibold">{c.label}</span>
                <span className="block text-xs text-muted-foreground">{c.sub}</span>
              </span>
            </a>
          ))}
          <div className="surface-card flex items-center gap-4 p-5">
            <MapPin className="h-5 w-5 text-primary" />
            <span>
              <span className="block text-sm font-semibold">
                Rifenery Junction, Kaduna
              </span>
              <span className="block text-xs text-muted-foreground">
                Pickup and delivery available
              </span>
            </span>
          </div>
        </div>

        <form
          className="surface-card space-y-4 p-6"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(composed, "_blank");
          }}
        >
          <h2 className="text-xl font-semibold">Send an enquiry</h2>
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-sm font-medium">
              Your name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-xl border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="occasion" className="text-sm font-medium">
              Occasion
            </label>
            <input
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              placeholder="Birthday, wedding, graduation…"
              className="w-full rounded-xl border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-sm font-medium">
              What would you like?
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
              className="w-full rounded-xl border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Send on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
