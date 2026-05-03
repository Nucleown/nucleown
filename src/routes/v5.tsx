import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, lazy, Suspense } from "react";
import { ArrowUpRight, Sparkles, Crown, Diamond, Hexagon, Award, MessageCircle, Instagram, Linkedin } from "lucide-react";
import {
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/components/sections/constants";

const Scene3D = lazy(() =>
  import("@/components/v5/Scene3D").then((m) => ({ default: m.Scene3D })),
);

export const Route = createFileRoute("/v5")({
  head: () => ({
    meta: [
      { title: "Nucleown — Atelier Edition (v5) · Luxury 3D" },
      { name: "description", content: "An exclusive, animated 3D atelier showcase by Nucleown Technologies." },
    ],
  }),
  component: V5Page,
});

function V5Page() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0807] text-[#f5ecd9] font-display">
      {/* Ambient gradient */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 20% 10%, rgba(212,175,55,0.18), transparent 50%), radial-gradient(circle at 80% 90%, rgba(232,200,122,0.12), transparent 55%), linear-gradient(180deg, #0a0807 0%, #1a1410 100%)",
        }}
      />
      {/* Noise overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      <Nav />

      {/* HERO */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 pt-32 pb-20 lg:pt-40">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[#d4af37] backdrop-blur-sm">
          <Crown className="h-3 w-3" /> Atelier Edition · MMXXVI
        </div>

        <h1 className="text-center font-serif text-[14vw] leading-[0.85] tracking-tighter sm:text-[10vw] lg:text-[8.5rem]">
          <span className="block italic text-[#f5ecd9]">Crafted</span>
          <span
            className="block bg-gradient-to-b from-[#fff2c2] via-[#d4af37] to-[#8a6a1f] bg-clip-text text-transparent"
            style={{ transform: `translateY(${scrollY * -0.15}px)` }}
          >
            Digital Couture
          </span>
        </h1>

        {/* 3D Stage */}
        <div className="relative mt-8 h-[55vh] w-full max-w-4xl">
          <div className="absolute inset-0 rounded-full bg-[#d4af37]/10 blur-3xl" />
          {mounted && (
            <Suspense fallback={<OrbFallback />}>
              <Scene3D />
            </Suspense>
          )}
        </div>

        <p className="mt-10 max-w-2xl text-center text-base leading-relaxed text-[#f5ecd9]/70 sm:text-lg">
          A private atelier for visionary brands. We sculpt websites the way master jewelers set
          stones — with patience, precision, and an obsession for the unseen detail.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[#d4af37] bg-gradient-to-r from-[#d4af37] to-[#b8932a] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#0a0807] transition-transform hover:scale-[1.02]"
          >
            Request Audience
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#atelier"
            className="text-xs uppercase tracking-[0.3em] text-[#d4af37]/80 underline-offset-8 hover:underline"
          >
            View the Atelier ↓
          </a>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative z-10 overflow-hidden border-y border-[#d4af37]/15 bg-black/40 py-6 backdrop-blur-sm">
        <div className="flex animate-[marquee_40s_linear_infinite] gap-16 whitespace-nowrap font-serif text-2xl italic text-[#d4af37]/60">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-16">
              Bespoke Web Design <Diamond className="h-4 w-4" /> Bespoke Identity{" "}
              <Diamond className="h-4 w-4" /> Private Commissions <Diamond className="h-4 w-4" />
            </span>
          ))}
        </div>
      </div>

      {/* PILLARS */}
      <section id="atelier" className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="mb-20 grid gap-8 lg:grid-cols-[1fr_2fr]">
          <p className="text-xs uppercase tracking-[0.4em] text-[#d4af37]">— The Atelier</p>
          <h2 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl">
            Four disciplines. <span className="italic text-[#d4af37]">One obsession.</span>
          </h2>
        </div>

        <div className="grid gap-px bg-[#d4af37]/15 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Pillar key={i} index={i} {...p} />
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center">
        <Sparkles className="mx-auto mb-8 h-8 w-8 text-[#d4af37]" />
        <p className="font-serif text-3xl leading-snug italic sm:text-5xl">
          “We do not build websites. We compose <span className="text-[#d4af37]">heirlooms</span>{" "}
          for the digital age — singular, sovereign, and impossibly refined.”
        </p>
        <p className="mt-8 text-xs uppercase tracking-[0.4em] text-[#d4af37]/70">
          Nucleown Technologies — Maison Statement
        </p>
      </section>

      {/* COMMISSIONS */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#d4af37]">— Commissions</p>
            <h2 className="mt-3 font-serif text-5xl tracking-tight sm:text-6xl">
              Selected works
            </h2>
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#f5ecd9]/50">
            By invitation only
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {works.map((w, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/20 bg-gradient-to-br from-[#1a1410] to-[#0a0807] p-10 transition-all hover:border-[#d4af37]/60"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d4af37]/10 blur-3xl transition-opacity group-hover:opacity-70" />
              <div className="relative">
                <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">{w.tag}</span>
                <h3 className="mt-4 font-serif text-3xl">{w.title}</h3>
                <p className="mt-3 text-sm text-[#f5ecd9]/60">{w.note}</p>
                <ArrowUpRight className="mt-8 h-6 w-6 text-[#d4af37] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center">
        <Award className="mx-auto mb-6 h-10 w-10 text-[#d4af37]" />
        <h2 className="font-serif text-5xl tracking-tight sm:text-7xl">
          Begin your <span className="italic text-[#d4af37]">commission</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[#f5ecd9]/60">
          We accept a limited number of clients each season. Reach the maison directly.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            className="inline-flex items-center gap-3 rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#0a0807] hover:bg-[#e8c87a]"
          >
            <MessageCircle className="h-4 w-4" /> {WHATSAPP_DISPLAY}
          </a>
          <a
            href={INSTAGRAM_URL}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/40 hover:border-[#d4af37]"
          >
            <Instagram className="h-4 w-4 text-[#d4af37]" />
          </a>
          <a
            href={LINKEDIN_URL}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/40 hover:border-[#d4af37]"
          >
            <Linkedin className="h-4 w-4 text-[#d4af37]" />
          </a>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#d4af37]/15 py-10 text-center text-xs uppercase tracking-[0.3em] text-[#f5ecd9]/40">
        © MMXXVI Nucleown · Maison de Code
      </footer>

      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
      `}</style>
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d4af37]/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-3">
          <Hexagon className="h-6 w-6 text-[#d4af37]" />
          <span className="font-serif text-xl tracking-wider">Nucleown</span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/70 sm:inline">
            · Atelier
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.3em] text-[#f5ecd9]/70 md:flex">
          <a href="/" className="hover:text-[#d4af37]">v1</a>
          <a href="/v2" className="hover:text-[#d4af37]">v2</a>
          <a href="/v3" className="hover:text-[#d4af37]">v3</a>
          <a href="/v4" className="hover:text-[#d4af37]">v4</a>
          <span className="text-[#d4af37]">v5 ●</span>
        </nav>
        <a
          href={WHATSAPP_URL}
          className="rounded-full border border-[#d4af37]/50 px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0807]"
        >
          Enquire
        </a>
      </div>
    </header>
  );
}

function Pillar({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: typeof Diamond;
  title: string;
  desc: string;
  index: number;
}) {
  return (
    <div className="group relative bg-[#0a0807] p-12 transition-colors hover:bg-[#120d0a]">
      <div className="flex items-start justify-between">
        <Icon className="h-10 w-10 text-[#d4af37] transition-transform group-hover:rotate-12" />
        <span className="font-serif text-sm italic text-[#d4af37]/60">
          0{index + 1}
        </span>
      </div>
      <h3 className="mt-10 font-serif text-3xl tracking-tight">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-[#f5ecd9]/60">{desc}</p>
    </div>
  );
}

function OrbFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-48 w-48 animate-pulse rounded-full bg-gradient-to-br from-[#d4af37] to-[#8a6a1f] blur-md" />
    </div>
  );
}

const pillars = [
  {
    icon: Diamond,
    title: "Bespoke Architecture",
    desc: "Each site is engineered from blank canvas. No templates, no compromises — only structure that mirrors your singular ambition.",
  },
  {
    icon: Crown,
    title: "Editorial Identity",
    desc: "Typography curated like a private library. Color palettes mixed like rare pigments. Every pixel earns its place.",
  },
  {
    icon: Sparkles,
    title: "Cinematic Motion",
    desc: "Interactions choreographed with the patience of haute couture — slow, deliberate, and quietly spectacular.",
  },
  {
    icon: Award,
    title: "Lifetime Stewardship",
    desc: "Your commission is never abandoned. We maintain, evolve, and protect it as our own — for as long as you wish.",
  },
];

const works = [
  { tag: "Private Members Club", title: "Maison Verde", note: "A reservation portal for a 12-table establishment in Lahore." },
  { tag: "Heritage Jeweler", title: "Aurelia & Sons", note: "Catalog presentation for a fourth-generation atelier." },
  { tag: "Architecture Studio", title: "Studio Noir", note: "A monograph site documenting a decade of residential work." },
  { tag: "Boutique Hotel", title: "The Cypress", note: "A booking experience tuned for return guests and quiet luxury." },
];
