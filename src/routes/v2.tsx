import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Shield,
  Sparkles,
  Zap,
  Globe2,
  Rocket,
  CheckCircle2,
  MessageCircle,
  Instagram,
  Linkedin,
  Star,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import logo from "@/assets/nucleown-logo.png";
import {
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/components/sections/constants";

export const Route = createFileRoute("/v2")({
  head: () => ({
    meta: [
      { title: "Nucleown Technologies — Web Studio for Modern Brands" },
      {
        name: "description",
        content:
          "Nucleown Technologies designs and builds high-converting websites for ambitious businesses. Fast, modern, mobile-first.",
      },
      { property: "og:title", content: "Nucleown Technologies — Web Studio for Modern Brands" },
      {
        property: "og:description",
        content: "Modern web design & development from Pakistan, working globally.",
      },
    ],
  }),
  component: V2Page,
});

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function V2Page() {
  return (
    <div className="min-h-screen v2-aurora text-foreground antialiased">
      <V2Nav />
      <main>
        <V2Hero />
        <V2Marquee />
        <V2Services />
        <V2Process />
        <V2Work />
        <V2Why />
        <V2Testimonials />
        <V2Contact />
      </main>
      <V2Footer />
      <V2WhatsApp />
      <Toaster theme="dark" richColors position="top-center" />
    </div>
  );
}

/* -------------------- NAV -------------------- */
function V2Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="v2-glass flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="Nucleown" className="h-8 w-8" />
            <span className="font-display text-base font-semibold tracking-tight">
              Nucleown
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-foreground/70 transition hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild className="v2-cta-gradient text-white shadow-glow">
              <a href="#contact">
                Start a Project <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden text-foreground"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="v2-glass mt-2 rounded-2xl p-4 md:hidden">
            <div className="flex flex-col gap-3">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-white/5"
                >
                  {n.label}
                </a>
              ))}
              <Button asChild className="v2-cta-gradient text-white">
                <a href="#contact" onClick={() => setOpen(false)}>
                  Start a Project
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* -------------------- HERO -------------------- */
function V2Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="absolute inset-0 v2-grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div
        className="v2-blob absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full"
        style={{ background: "oklch(0.6 0.22 200)" }}
      />
      <div
        className="v2-blob absolute top-20 -right-24 h-[420px] w-[420px] rounded-full"
        style={{ background: "oklch(0.55 0.24 290)" }}
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <span className="v2-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium">
          <Sparkles className="h-3.5 w-3.5 text-brand-cyan" />
          A new web studio for ambitious brands
        </span>

        <h1 className="mt-8 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
          Websites that look{" "}
          <span className="v2-text-gradient">unreal</span>.{" "}
          <br className="hidden sm:block" />
          Built to actually convert.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-foreground/70 sm:text-lg">
          Nucleown Technologies is a Pakistan-based design & development studio crafting
          fast, modern websites for startups and small businesses worldwide.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="v2-cta-gradient text-white shadow-glow">
            <a href="#contact">
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="v2-glass border-white/15 text-foreground hover:bg-white/10"
          >
            <a href="#work">See Our Work</a>
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-foreground/60">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-brand-cyan" /> 24-hour response
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-brand-cyan" /> Mobile-first build
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-brand-cyan" /> SEO-ready
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-brand-cyan" /> Based in Pakistan 🇵🇰
          </span>
        </div>
      </div>
    </section>
  );
}

/* -------------------- MARQUEE -------------------- */
const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "Figma",
  "Framer",
  "WordPress",
  "Shopify",
  "Webflow",
];
function V2Marquee() {
  const items = [...STACK, ...STACK];
  return (
    <section aria-hidden className="relative overflow-hidden border-y border-white/5 py-6">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: "v2-marquee 30s linear infinite", width: "200%" }}
      >
        {items.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="font-display text-2xl font-medium text-foreground/40"
          >
            {s} <span className="ml-12 text-foreground/20">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* -------------------- SERVICES (BENTO) -------------------- */
function V2Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="A focused studio. Real outcomes."
          subtitle="We're small on purpose — you work directly with the people building your site."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {/* Big card: web dev */}
          <div className="v2-glass v2-ring-glow group relative overflow-hidden rounded-3xl p-8 lg:col-span-2 lg:row-span-2">
            <div className="flex items-start justify-between">
              <div className="v2-cta-gradient inline-flex h-14 w-14 items-center justify-center rounded-2xl">
                <Code2 className="h-7 w-7 text-white" />
              </div>
              <span className="text-xs uppercase tracking-widest text-foreground/50">
                01 — Core
              </span>
            </div>
            <h3 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
              Web Design & Development
            </h3>
            <p className="mt-3 max-w-lg text-foreground/70">
              From clean landing pages to full business websites — designed in Figma,
              built with modern stacks, and shipped in days, not months.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Custom UI/UX design",
                "Mobile-first responsive",
                "Lightning-fast performance",
                "On-page SEO baked in",
                "CMS or headless setup",
                "30 days post-launch support",
              ].map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 px-3 py-2 text-sm"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-cyan" />
                  <span className="text-foreground/85">{f}</span>
                </div>
              ))}
            </div>

            <Button asChild className="mt-8 v2-cta-gradient text-white shadow-glow">
              <a href="#contact">
                Start your project <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Cybersecurity */}
          <div className="v2-glass relative overflow-hidden rounded-3xl p-7">
            <div className="flex items-center justify-between">
              <Shield className="h-8 w-8 text-brand-cyan/80" />
              <span className="v2-cta-gradient inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white animate-pulse-glow">
                Coming Soon
              </span>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">Cybersecurity</h3>
            <p className="mt-2 text-sm text-foreground/65">
              Security audits, vulnerability assessments and hardening — launching soon
              as our second pillar.
            </p>
          </div>

          {/* Speed card */}
          <div className="v2-glass relative overflow-hidden rounded-3xl p-7">
            <Zap className="h-8 w-8 text-brand-cyan/80" />
            <h3 className="mt-5 font-display text-xl font-semibold">
              7-day delivery option
            </h3>
            <p className="mt-2 text-sm text-foreground/65">
              Need something live this week? Ask about our rapid landing-page sprint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- PROCESS -------------------- */
const STEPS = [
  {
    n: "01",
    title: "Discovery call",
    body: "Free 20-minute call to understand your goals, audience and timeline.",
    icon: MessageCircle,
  },
  {
    n: "02",
    title: "Design",
    body: "We design clean, on-brand mockups in Figma and iterate with you fast.",
    icon: Sparkles,
  },
  {
    n: "03",
    title: "Build",
    body: "We code it tight: fast load, mobile-first, SEO foundations in place.",
    icon: Code2,
  },
  {
    n: "04",
    title: "Launch & support",
    body: "We ship it, train you, and stay available for the first 30 days.",
    icon: Rocket,
  },
];
function V2Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Process"
          title="Simple, transparent, no agency fluff."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="v2-glass rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <s.icon className="h-6 w-6 text-brand-cyan" />
                <span className="font-display text-2xl font-bold text-foreground/30">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/65">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- WORK -------------------- */
const PROJECTS = [
  {
    title: "Boutique e-commerce",
    type: "Shopify build",
    color: "from-cyan-400/40 to-blue-500/40",
  },
  {
    title: "SaaS landing page",
    type: "Next.js + Tailwind",
    color: "from-violet-400/40 to-fuchsia-500/40",
  },
  {
    title: "Local services site",
    type: "WordPress + SEO",
    color: "from-teal-400/40 to-emerald-500/40",
  },
];
function V2Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Selected Work" title="Recent builds." />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="v2-glass group cursor-pointer overflow-hidden rounded-3xl transition hover:-translate-y-1"
            >
              <div
                className={`relative aspect-[4/3] w-full bg-gradient-to-br ${p.color}`}
              >
                <div className="absolute inset-0 v2-grid-bg opacity-30" />
                <div className="absolute right-4 top-4 v2-glass rounded-full p-2 opacity-0 transition group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-brand-cyan">
                  {p.type}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-foreground/60">
          More projects coming soon — currently accepting{" "}
          <span className="text-brand-cyan">2 free project partnerships</span> for our
          launch portfolio.
        </p>
      </div>
    </section>
  );
}

/* -------------------- WHY -------------------- */
const WHY = [
  {
    icon: Zap,
    title: "Fast turnaround",
    body: "Most sites delivered in 1–3 weeks, not months.",
  },
  {
    icon: Sparkles,
    title: "Modern design",
    body: "Clean, on-trend interfaces that age well.",
  },
  {
    icon: Globe2,
    title: "Global, affordable",
    body: "Pakistan-based pricing, world-class quality.",
  },
  {
    icon: MessageCircle,
    title: "Direct communication",
    body: "WhatsApp the founder. No account managers.",
  },
];
function V2Why() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Why Nucleown" title="Boutique by design." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w) => (
            <div key={w.title} className="v2-glass rounded-2xl p-6">
              <div className="v2-cta-gradient inline-flex h-11 w-11 items-center justify-center rounded-xl">
                <w.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-foreground/65">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- TESTIMONIALS -------------------- */
const QUOTES = [
  {
    name: "Placeholder Client",
    role: "Founder, Boutique brand",
    body: "Nucleown rebuilt our site in under two weeks. Conversions doubled within the first month.",
  },
  {
    name: "Placeholder Client",
    role: "Owner, Local services",
    body: "Clean design, fast turnaround, and they actually answer WhatsApp. Highly recommend.",
  },
  {
    name: "Placeholder Client",
    role: "Co-founder, SaaS startup",
    body: "Our landing page finally matches the quality of our product. Worth every rupee.",
  },
];
function V2Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Testimonials" title="What clients say." />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {QUOTES.map((q, i) => (
            <figure key={i} className="v2-glass rounded-3xl p-7">
              <div className="flex gap-1 text-brand-cyan">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-base leading-relaxed text-foreground/85">
                "{q.body}"
              </blockquote>
              <figcaption className="mt-6 border-t border-white/5 pt-4">
                <div className="font-display text-sm font-semibold">{q.name}</div>
                <div className="text-xs text-foreground/55">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CONTACT -------------------- */
function V2Contact() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks! We'll get back to you within 24 hours.");
    }, 700);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="v2-glass v2-ring-glow grid overflow-hidden rounded-3xl lg:grid-cols-5">
          <div className="relative p-8 lg:col-span-2 lg:p-10">
            <div className="absolute inset-0 v2-cta-gradient opacity-20" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                Let's build it
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Get a free quote in 24 hours.
              </h2>
              <p className="mt-4 text-foreground/75">
                Tell us about your project. We'll reply with a clear scope, timeline
                and price — no fluff, no pressure.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <a
                  href={WHATSAPP_URL}
                  className="flex items-center gap-2 text-foreground/85 hover:text-brand-cyan"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp {WHATSAPP_DISPLAY}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  className="flex items-center gap-2 text-foreground/85 hover:text-brand-cyan"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
                <a
                  href={LINKEDIN_URL}
                  className="flex items-center gap-2 text-foreground/85 hover:text-brand-cyan"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 p-8 lg:col-span-3 lg:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-foreground/70">
                  Your name
                </label>
                <Input required name="name" placeholder="Jane Doe" className="bg-white/5" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-foreground/70">
                  Email
                </label>
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="bg-white/5"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-foreground/70">
                  WhatsApp
                </label>
                <Input
                  name="whatsapp"
                  placeholder="+92 300 1234567"
                  className="bg-white/5"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-foreground/70">
                  Project type
                </label>
                <Select name="type">
                  <SelectTrigger className="bg-white/5">
                    <SelectValue placeholder="Select one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="landing">Landing page</SelectItem>
                    <SelectItem value="business">Business website</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="redesign">Redesign</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-foreground/70">
                Tell us about your project
              </label>
              <Textarea
                required
                name="message"
                rows={4}
                placeholder="A few sentences about your business and what you need…"
                className="bg-white/5"
              />
            </div>
            <Button
              type="submit"
              disabled={submitting}
              className="w-full v2-cta-gradient text-white shadow-glow"
              size="lg"
            >
              {submitting ? "Sending…" : "Send message"}{" "}
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function V2Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Nucleown" className="h-7 w-7" />
          <span className="font-display text-sm font-semibold">
            Nucleown Technologies
          </span>
        </div>
        <p className="text-xs text-foreground/55">
          © {new Date().getFullYear()} Nucleown Technologies — Based in Pakistan 🇵🇰,
          working globally.
        </p>
        <Link to="/" className="text-xs text-foreground/55 hover:text-brand-cyan">
          ← Back to v1
        </Link>
      </div>
    </footer>
  );
}

/* -------------------- WHATSAPP FAB -------------------- */
function V2WhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-glow animate-pulse-glow"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-medium sm:inline">Chat with us</span>
    </a>
  );
}

/* -------------------- helpers -------------------- */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-foreground/65">{subtitle}</p>}
    </div>
  );
}
