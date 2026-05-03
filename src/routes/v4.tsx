import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Globe2,
  Shield,
  Rocket,
  CheckCircle2,
  MessageCircle,
  Instagram,
  Linkedin,
  Star,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import logo from "@/assets/nucleown-logo.png";
import {
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/components/sections/constants";

export const Route = createFileRoute("/v4")({
  head: () => ({
    meta: [
      { title: "Nucleown — Neo-Brutalist Edition (v4)" },
      {
        name: "description",
        content:
          "Loud, blocky, unapologetic. The neo-brutalist take on Nucleown Technologies.",
      },
      { property: "og:title", content: "Nucleown — Neo-Brutalist Edition (v4)" },
      {
        property: "og:description",
        content:
          "Hard shadows, thick borders, blocky color. Nucleown in full neo-brutalist mode.",
      },
    ],
  }),
  component: V4Page,
});

function V4Page() {
  return (
    <div className="nb-root min-h-screen">
      <NbNav />
      <main>
        <NbHero />
        <NbServices />
        <NbWhy />
        <NbContact />
      </main>
      <NbFooter />
      <NbFAB />
      <Toaster theme="light" richColors position="top-center" />
    </div>
  );
}

function NbNav() {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-black bg-[#FFE066]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <div className="nb-box bg-white p-1">
            <img src={logo} alt="Nucleown" className="h-8 w-8" />
          </div>
          <span className="font-display text-xl font-black uppercase tracking-tight text-black">
            Nucleown
          </span>
        </a>
        <div className="hidden items-center gap-2 md:flex">
          {["Services", "Why", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="nb-box bg-white px-3 py-1.5 text-sm font-black uppercase text-black hover:bg-[#FF6B9D] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              {l}
            </a>
          ))}
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="nb-box bg-[#00C9C8] px-4 py-2 text-sm font-black uppercase text-black"
        >
          Quote →
        </a>
      </nav>
    </header>
  );
}

function NbHero() {
  return (
    <section id="top" className="border-b-4 border-black bg-[#F5F1E8] px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="nb-box mb-6 inline-block bg-[#FF6B9D] px-3 py-1 text-xs font-black uppercase tracking-wider text-black">
          ★ Pakistan → Worldwide
        </div>
        <h1 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-black sm:text-7xl">
          Websites
          <br />
          That Actually
          <br />
          <span className="nb-highlight">Get You Online.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-semibold text-black">
          No fluff. No templates. No bloat. Just hand-built sites that load fast
          and convert hard.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="nb-btn bg-[#00C9C8] px-6 py-3 text-base font-black uppercase text-black">
            Start Project <ArrowRight className="ml-1 inline h-5 w-5" />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="nb-btn bg-white px-6 py-3 text-base font-black uppercase text-black">
            <MessageCircle className="mr-1 inline h-5 w-5" /> WhatsApp
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["50+", "PROJECTS", "#FFE066"],
            ["24H", "REPLY", "#FF6B9D"],
            ["100%", "CUSTOM", "#00C9C8"],
            ["5★", "RATED", "#A78BFA"],
          ].map(([n, l, c]) => (
            <div key={l} className="nb-box p-4 text-center" style={{ background: c }}>
              <div className="font-display text-3xl font-black text-black">{n}</div>
              <div className="text-xs font-black uppercase tracking-wider text-black">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NbServices() {
  return (
    <section id="services" className="border-b-4 border-black bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-black uppercase text-black sm:text-5xl">
          What We <span className="nb-highlight">Build.</span>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="nb-box bg-[#FFE066] p-7">
            <div className="nb-box mb-5 inline-flex h-14 w-14 items-center justify-center bg-white">
              <Globe2 className="h-7 w-7 text-black" />
            </div>
            <h3 className="font-display text-2xl font-black uppercase text-black">
              Web Design & Dev
            </h3>
            <p className="mt-3 font-semibold text-black">
              Marketing sites, business sites, e-commerce. Custom code, no templates.
            </p>
            <ul className="mt-5 space-y-2 text-sm font-bold text-black">
              {["Custom design", "Fast performance", "SEO ready", "Mobile-first"].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="nb-box relative bg-[#FF6B9D] p-7">
            <span className="nb-box absolute right-4 top-4 bg-black px-2 py-1 text-[10px] font-black uppercase text-[#FFE066]">
              Soon
            </span>
            <div className="nb-box mb-5 inline-flex h-14 w-14 items-center justify-center bg-white">
              <Shield className="h-7 w-7 text-black" />
            </div>
            <h3 className="font-display text-2xl font-black uppercase text-black">
              Cybersecurity
            </h3>
            <p className="mt-3 font-semibold text-black">
              Audits, hardening, monitoring. Coming soon to the menu.
            </p>
            <ul className="mt-5 space-y-2 text-sm font-bold text-black">
              {["Security audits", "WP hardening", "Malware cleanup", "Monitoring"].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function NbWhy() {
  const items = [
    { icon: Rocket, title: "Fast", body: "2–3 week turnaround. Period.", c: "#00C9C8" },
    { icon: Star, title: "Real", body: "Hand-built. No bloat.", c: "#A78BFA" },
    { icon: Zap, title: "Direct", body: "Talk to the builders.", c: "#FFE066" },
  ];
  return (
    <section id="why" className="border-b-4 border-black bg-[#F5F1E8] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-black uppercase text-black sm:text-5xl">
          Why <span className="nb-highlight">Us?</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="nb-box p-6" style={{ background: it.c }}>
              <div className="nb-box mb-4 inline-flex h-12 w-12 items-center justify-center bg-white">
                <it.icon className="h-6 w-6 text-black" />
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-black">{it.title}</h3>
              <p className="mt-2 font-semibold text-black">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NbContact() {
  const [loading, setLoading] = useState(false);
  return (
    <section id="contact" className="bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <div className="nb-box bg-[#A78BFA] p-8">
          <h2 className="font-display text-4xl font-black uppercase text-black">
            Let's Talk.
          </h2>
          <p className="mt-3 font-semibold text-black">
            Reply within 24 hours. Always.
          </p>
          <div className="mt-6 space-y-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="nb-box flex items-center gap-3 bg-white px-4 py-3 font-black text-black">
              <MessageCircle className="h-5 w-5" /> {WHATSAPP_DISPLAY}
            </a>
            <a href="mailto:hello@nucleown.com" className="nb-box flex items-center gap-3 bg-white px-4 py-3 font-black text-black">
              ✉ hello@nucleown.com
            </a>
            <div className="flex gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="nb-box flex h-12 w-12 items-center justify-center bg-white">
                <Instagram className="h-5 w-5 text-black" />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="nb-box flex h-12 w-12 items-center justify-center bg-white">
                <Linkedin className="h-5 w-5 text-black" />
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              toast.success("Sent! We'll reply within 24 hours.");
              (e.target as HTMLFormElement).reset();
            }, 600);
          }}
          className="nb-box bg-[#FFE066] p-8"
        >
          <div className="space-y-4">
            <NbField label="Name" name="name" required />
            <NbField label="Email" name="email" type="email" required />
            <NbField label="Phone" name="phone" />
            <div>
              <label className="mb-1.5 block text-xs font-black uppercase tracking-wider text-black">
                Project
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="nb-input w-full bg-white px-3 py-2 text-sm font-semibold text-black outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="nb-btn w-full bg-[#00C9C8] px-6 py-3 text-base font-black uppercase text-black"
            >
              {loading ? "Sending..." : "Send →"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function NbField({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-black uppercase tracking-wider text-black">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="nb-input w-full bg-white px-3 py-2 text-sm font-semibold text-black outline-none"
      />
    </div>
  );
}

function NbFooter() {
  return (
    <footer className="border-t-4 border-black bg-black px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-6xl text-center text-xs font-black uppercase tracking-widest text-[#FFE066]">
        © {new Date().getFullYear()} Nucleown Technologies · Built loud in Pakistan.
      </div>
    </footer>
  );
}

function NbFAB() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="nb-btn fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center bg-[#00C9C8]"
    >
      <MessageCircle className="h-6 w-6 text-black" />
    </a>
  );
}
