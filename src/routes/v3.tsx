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
  Phone,
  Mail,
  Sparkles,
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

export const Route = createFileRoute("/v3")({
  head: () => ({
    meta: [
      { title: "Nucleown — Skeuomorphic Edition (v3)" },
      {
        name: "description",
        content:
          "A tactile, glossy skeuomorphic take on the Nucleown Technologies website — buttons you almost want to press.",
      },
      { property: "og:title", content: "Nucleown — Skeuomorphic Edition (v3)" },
      {
        property: "og:description",
        content:
          "Glossy buttons, soft shadows, brushed metal — Nucleown reimagined in skeuomorphic style.",
      },
    ],
  }),
  component: V3Page,
});

function V3Page() {
  return (
    <div className="skeu-root min-h-screen">
      <SkeuNav />
      <main>
        <SkeuHero />
        <SkeuServices />
        <SkeuWhy />
        <SkeuContact />
      </main>
      <SkeuFooter />
      <SkeuFAB />
      <Toaster theme="light" richColors position="top-center" />
    </div>
  );
}

function SkeuNav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <nav className="skeu-panel flex items-center justify-between rounded-2xl px-4 py-2.5">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="Nucleown" className="h-9 w-9 rounded-lg skeu-chip" />
            <span className="skeu-text-emboss font-display text-lg font-bold">
              Nucleown
            </span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {["Services", "Why Us", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(" ", "-")}`}
                className="skeu-link rounded-lg px-3 py-1.5 text-sm font-semibold"
              >
                {l}
              </a>
            ))}
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="skeu-btn-primary rounded-xl px-4 py-2 text-sm font-bold">
            Get Quote
          </a>
        </nav>
      </div>
    </header>
  );
}

function SkeuHero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="skeu-panel rounded-3xl p-8 sm:p-14">
          <div className="skeu-chip mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0D3348]">
            <Sparkles className="h-3.5 w-3.5" /> Pakistan-based · Global clients
          </div>
          <h1 className="skeu-text-emboss font-display text-4xl font-extrabold leading-tight sm:text-6xl">
            We Build Websites That Get Businesses{" "}
            <span className="skeu-text-shine">Online Professionally</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-[#3a4a55] sm:text-lg">
            Tactile, polished, conversion-focused web experiences. Real craft —
            no templates, no shortcuts.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="skeu-btn-primary rounded-xl px-6 py-3 text-sm font-bold">
              Start Your Project
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="skeu-btn-secondary rounded-xl px-6 py-3 text-sm font-bold">
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </span>
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["50+", "Projects"],
              ["24h", "Response"],
              ["100%", "Custom"],
              ["5★", "Rated"],
            ].map(([n, l]) => (
              <div key={l} className="skeu-chip rounded-2xl px-4 py-3 text-center">
                <div className="skeu-text-emboss font-display text-2xl font-extrabold">{n}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#5a6b76]">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkeuServices() {
  return (
    <section id="services" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="skeu-text-emboss text-center font-display text-3xl font-extrabold sm:text-4xl">
          What We Build
        </h2>
        <p className="mt-3 text-center text-[#5a6b76]">
          Press in. Notice the depth. That's the same care we put into your site.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="skeu-panel rounded-3xl p-7">
            <div className="skeu-icon mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl">
              <Globe2 className="h-7 w-7 text-[#0D3348]" />
            </div>
            <h3 className="skeu-text-emboss font-display text-2xl font-bold">
              Web Design & Development
            </h3>
            <p className="mt-3 text-[#3a4a55]">
              Custom-coded marketing sites, business sites, e-commerce — fast,
              SEO-ready, mobile-first.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-[#3a4a55]">
              {[
                "Custom design — no templates",
                "Lightning-fast performance",
                "SEO foundations baked in",
                "Mobile-first, pixel-perfect",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#00A8A7]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="skeu-panel relative rounded-3xl p-7">
            <span className="absolute right-5 top-5 skeu-chip rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#8a5a00]">
              Coming Soon
            </span>
            <div className="skeu-icon mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl">
              <Shield className="h-7 w-7 text-[#0D3348]" />
            </div>
            <h3 className="skeu-text-emboss font-display text-2xl font-bold">
              Cybersecurity Services
            </h3>
            <p className="mt-3 text-[#3a4a55]">
              Vulnerability audits, hardening, and ongoing protection — launching soon.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-[#3a4a55]">
              {[
                "Security audits",
                "WordPress hardening",
                "Malware cleanup",
                "Ongoing monitoring",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#00A8A7]" />
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

function SkeuWhy() {
  const items = [
    { icon: Rocket, title: "Fast Turnaround", body: "Most sites delivered in 2–3 weeks." },
    { icon: Star, title: "Real Craft", body: "Hand-built. No drag-and-drop bloat." },
    { icon: MessageCircle, title: "Direct Access", body: "Talk to the people building it." },
  ];
  return (
    <section id="why-us" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl skeu-panel rounded-3xl p-8 sm:p-12">
        <h2 className="skeu-text-emboss text-center font-display text-3xl font-extrabold sm:text-4xl">
          Why Nucleown
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="skeu-chip rounded-2xl p-6 text-center">
              <div className="skeu-icon mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl">
                <it.icon className="h-6 w-6 text-[#0D3348]" />
              </div>
              <h3 className="skeu-text-emboss font-display text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-[#3a4a55]">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkeuContact() {
  const [loading, setLoading] = useState(false);
  return (
    <section id="contact" className="px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <div className="skeu-panel rounded-3xl p-8">
          <h2 className="skeu-text-emboss font-display text-3xl font-extrabold">
            Let's Talk
          </h2>
          <p className="mt-3 text-[#3a4a55]">
            Tell us about your project. We reply within 24 hours.
          </p>
          <div className="mt-6 space-y-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="skeu-chip flex items-center gap-3 rounded-xl px-4 py-3">
              <Phone className="h-4 w-4 text-[#00A8A7]" />
              <span className="font-semibold text-[#0D3348]">{WHATSAPP_DISPLAY}</span>
            </a>
            <a href="mailto:hello@nucleown.com" className="skeu-chip flex items-center gap-3 rounded-xl px-4 py-3">
              <Mail className="h-4 w-4 text-[#00A8A7]" />
              <span className="font-semibold text-[#0D3348]">hello@nucleown.com</span>
            </a>
            <div className="flex gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="skeu-icon flex h-11 w-11 items-center justify-center rounded-xl">
                <Instagram className="h-5 w-5 text-[#0D3348]" />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="skeu-icon flex h-11 w-11 items-center justify-center rounded-xl">
                <Linkedin className="h-5 w-5 text-[#0D3348]" />
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
              toast.success("Message sent! We'll be in touch within 24 hours.");
              (e.target as HTMLFormElement).reset();
            }, 600);
          }}
          className="skeu-panel rounded-3xl p-8"
        >
          <div className="space-y-4">
            <SkeuField label="Name" name="name" required />
            <SkeuField label="Email" name="email" type="email" required />
            <SkeuField label="WhatsApp / Phone" name="phone" />
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#5a6b76]">
                Project details
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="skeu-input w-full rounded-xl px-4 py-3 text-sm text-[#0D3348] outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="skeu-btn-primary w-full rounded-xl px-6 py-3 text-sm font-bold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function SkeuField({
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
      <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#5a6b76]">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="skeu-input w-full rounded-xl px-4 py-3 text-sm text-[#0D3348] outline-none"
      />
    </div>
  );
}

function SkeuFooter() {
  return (
    <footer className="px-4 pb-10 sm:px-6">
      <div className="mx-auto max-w-6xl skeu-panel rounded-2xl px-6 py-5 text-center text-xs text-[#5a6b76]">
        © {new Date().getFullYear()} Nucleown Technologies — Crafted in Pakistan.
      </div>
    </footer>
  );
}

function SkeuFAB() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="skeu-fab fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </a>
  );
}
