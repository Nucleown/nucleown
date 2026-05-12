import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft, ArrowRight, Check, Star, Plus, Minus, BadgeCheck, Quote, Sparkles, Eye, Compass, Wrench } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFAB } from "@/components/sections/WhatsAppFAB";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const IMG = {
  heroTeam:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
  heroLeaf:
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=600&q=80",
  heroCity:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
  founder:
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
  pricing:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
  certified:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
  insights1:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
  insights2:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  insights3:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  cta:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80",
  service1:
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80",
  service2:
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80",
  service3:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  service4:
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80",
  team1: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  team2: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  team3: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  team4: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
};

function Index() {
  useReveal();
  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Founders />
        <Services />
        <Values />
        <Pricing />
        <Team />
        <Certified />
        <Testimonials />
        <BrandStrip />
        <Insights />
        <FAQ />
        <Newsletter />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFAB />
      <Toaster richColors position="top-center" />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative pt-28 pb-12 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <h1 className="max-w-3xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Building Tomorrow's
            <br /> Web, <span className="italic text-lime-accent">Together</span>
          </h1>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-deep transition hover:opacity-90"
            >
              Get a Free Quote
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
            >
              Schedule a Call
            </a>
          </div>
        </div>

        {/* Hero image with stat chips */}
        <div className="relative mt-10 overflow-hidden rounded-3xl shadow-soft">
          <img
            src={IMG.heroTeam}
            alt="Nucleown team collaborating on a website project"
            className="aspect-[16/8] w-full object-cover"
            loading="eager"
          />

          {/* Stat chips overlay */}
          <div className="absolute inset-x-0 bottom-0 hidden flex-wrap items-end justify-between gap-3 p-6 sm:flex">
            <StatChip label="Projects" value="$28.5M" sub="Impact delivered" />
            <StatChip label="Happy Clients" value="120+" sub="Globally" />
            <StatChip label="Founded" value="2024" sub="Lahore, PK" />
          </div>
        </div>

        {/* Mobile chips */}
        <div className="mt-4 grid grid-cols-3 gap-2 sm:hidden">
          <StatChip label="Projects" value="120+" sub="Delivered" small />
          <StatChip label="Clients" value="80+" sub="Globally" small />
          <StatChip label="Founded" value="2024" sub="Lahore" small />
        </div>
      </div>
    </section>
  );
}

function StatChip({
  label,
  value,
  sub,
  small,
}: {
  label: string;
  value: string;
  sub: string;
  small?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl bg-cream px-4 ${small ? "py-2.5" : "py-3"} shadow-soft ring-1 ring-deep/10`}
    >
      <div className="text-[10px] font-semibold uppercase tracking-widest text-deep/70">
        {label}
      </div>
      <div className={`font-display ${small ? "text-lg" : "text-2xl"} text-deep`}>
        {value}
      </div>
      <div className="text-[10px] text-deep/60">{sub}</div>
    </div>
  );
}

/* ---------------- FOUNDERS ---------------- */
function Founders() {
  return (
    <section data-reveal className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <h2 className="text-4xl leading-tight sm:text-5xl">
          Founded by Designers
          <br /> who Continue to{" "}
          <span className="italic text-lime-accent">Lead the Way.</span>
        </h2>
        <div className="flex items-center">
          <p className="text-base text-muted-foreground">
            We're a team of designers, engineers and strategists dedicated to
            crafting websites that don't just look great — they perform. Every
            project is treated as a partnership, built around your audience and
            your business goals.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const items = [
    { title: "Web Design", img: IMG.service1, desc: "Modern, conversion-focused interfaces tailored to your brand." },
    { title: "Web Development", img: IMG.service2, desc: "Fast, scalable, accessible builds with the latest stack." },
    { title: "E-Commerce & SEO", img: IMG.service3, desc: "Stores that sell and pages that rank. We handle both." },
  ];
  return (
    <section data-reveal id="services" className="bg-deep py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl leading-tight sm:text-5xl">
            Covering the Full Spectrum
            <br /> of <span className="italic text-lime-accent">Digital Services</span>
          </h2>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
          >
            Learn More <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <article
              key={it.title}
              className={`group relative overflow-hidden rounded-3xl ${
                i === 1 ? "bg-lime text-deep" : "bg-primary-foreground text-foreground"
              }`}
            >
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{it.title}</h3>
                <p className="mt-1 text-sm opacity-80">{it.desc}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-grid h-10 w-10 place-items-center rounded-full bg-deep text-primary-foreground transition group-hover:bg-foreground"
                  aria-label={`Learn about ${it.title}`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- VALUES ---------------- */
function Values() {
  const items = [
    { title: "Integrity", icon: BadgeCheck, desc: "We say what we mean and do what we promise — every project, every time." },
    { title: "Client Focus", icon: Eye, desc: "Your business, your audience, your goals — that's our north star." },
    { title: "Bold Execution", icon: Sparkles, desc: "We ship work that stands out and gets remembered.", highlight: true },
    { title: "Expertise", icon: Wrench, desc: "Battle-tested craft across design, code, content and SEO." },
  ];
  return (
    <section data-reveal className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-4xl leading-tight sm:text-5xl">
          We Listen, <span className="italic text-lime-accent">Think Independently</span>,
          <br /> Build & Ship
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className={`rounded-3xl border border-border p-6 text-left transition hover:-translate-y-1 hover:shadow-soft ${
                  it.highlight ? "bg-lime ring-2 ring-deep" : "bg-card"
                }`}
              >
                <div
                  className={`grid h-11 w-11 place-items-center rounded-full ${
                    it.highlight ? "bg-deep text-primary-foreground" : "bg-secondary text-deep"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl">{it.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  return (
    <section data-reveal id="about" className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          <img src={IMG.pricing} alt="Transparent pricing meeting" className="h-[480px] w-full object-cover sm:h-[520px]" loading="lazy" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <div className="max-w-md rounded-2xl bg-cream/95 p-6 backdrop-blur sm:p-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Transparent Pricing
              </div>
              <h3 className="mt-2 font-display text-3xl sm:text-4xl">
                You'll Know What
                <br />
                <span className="italic text-lime-accent">You Will Pay</span>
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                No hidden fees. No surprises. Clear scope, clear price, clear delivery dates — locked in before we start.
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-deep px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                Schedule a Call <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TEAM ---------------- */
function Team() {
  const team = [
    { name: "Ali Raza", role: "Founder · Lead Strategy", img: IMG.team1 },
    { name: "Sara Khan", role: "Design Director", img: IMG.team2 },
    { name: "Hamza Iqbal", role: "Lead Developer", img: IMG.team3 },
    { name: "Daniyal Pervaiz", role: "SEO & Performance", img: IMG.team4 },
  ];
  return (
    <section data-reveal className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl leading-tight sm:text-5xl">
            Choosing <span className="italic text-lime-accent">The Right</span>
            <br /> Web Team
          </h2>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-deep px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Meet The Team <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t) => (
            <article key={t.name} className="rounded-3xl bg-card p-5 shadow-soft">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img src={t.img} alt={t.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg">{t.name}</h3>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <a
                  href="#contact"
                  aria-label={`Contact ${t.name}`}
                  className="grid h-9 w-9 place-items-center rounded-full bg-deep text-primary-foreground"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CERTIFIED ---------------- */
function Certified() {
  return (
    <section data-reveal className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-5">
          <div className="overflow-hidden rounded-3xl lg:col-span-3">
            <img src={IMG.certified} alt="Certified team meeting" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-3xl bg-lime p-8 text-deep lg:col-span-2 lg:p-10">
            <div className="text-xs font-semibold uppercase tracking-widest opacity-80">
              Why Choose Us
            </div>
            <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
              Certified <br /> Web Experts
            </h3>
            <p className="mt-4 text-sm text-deep/80">
              Our team holds certifications across modern frameworks, performance, and accessibility — bringing best-in-class engineering to every build.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {["Lighthouse 95+ scores", "WCAG-AA accessibility", "Type-safe modern stack", "Conversion-driven UX"].map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-deep text-primary-foreground"><Check className="h-3 w-3" /></span>
                  {x}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-deep px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Free Consultation <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const quotes = [
    { name: "Carlos Martinez", role: "Founder, Brewline", quote: "Hired Nucleown for a small project & was very happy. As a tiny shop without an in-house team, they felt like a real extension of us. I will recommend." },
    { name: "Aisha Noor", role: "Marketing, Reza Studio", quote: "Site went live two weeks ahead of schedule. Conversions jumped 40% in the first month. Their attention to detail is unreal." },
    { name: "Adeel Khan", role: "CEO, Fareen Foods", quote: "From discovery to launch, the team kept us informed and made smart decisions on our behalf. A true partner." },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % quotes.length), 6000);
    return () => clearInterval(id);
  }, [quotes.length]);
  const t = quotes[i];
  const prev = () => setI((p) => (p - 1 + quotes.length) % quotes.length);
  const next = () => setI((p) => (p + 1) % quotes.length);
  return (
    <section data-reveal id="testimonials" className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl leading-tight sm:text-5xl">
              Client <span className="italic text-lime-accent">Experiences</span> That
              <br /> Speak for Themselves
            </h2>
            <div className="mt-6 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-deep px-5 py-3 text-sm font-semibold text-primary-foreground">
                Read All Testimonials <ArrowUpRight className="h-4 w-4" />
              </a>
              <span className="text-xs text-muted-foreground">4.9 / 5 average rating</span>
            </div>
          </div>

          <div className="relative rounded-3xl bg-card p-8 shadow-soft sm:p-10">
            <Quote className="h-8 w-8 text-lime-accent" />
            <div className="mt-4 overflow-hidden">
              <p
                key={i}
                className="font-display text-2xl leading-snug text-foreground sm:text-3xl animate-fade-in"
              >
                "{t.quote}"
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-deep text-primary-foreground font-display">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-lime-accent text-lime-accent" />
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-2">
                {quotes.map((_, k) => (
                  <button
                    key={k}
                    onClick={() => setI(k)}
                    aria-label={`Show testimonial ${k + 1}`}
                    className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-deep" : "w-2 bg-border"}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-deep transition hover:bg-secondary"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="grid h-9 w-9 place-items-center rounded-full bg-deep text-primary-foreground transition hover:opacity-90"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BRAND STRIP ---------------- */
function BrandStrip() {
  const brands = ["Linkfeed", "Nytcox", "Stemic Bank", "Quadrolean", "Helo Pay", "Brewline", "Reza Studio", "Fareen Foods"];
  const loop = [...brands, ...brands];
  return (
    <section data-reveal className="border-y border-border bg-secondary/40 py-8">
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track gap-12 px-6">
          {loop.map((b, idx) => (
            <span
              key={`${b}-${idx}`}
              className="font-display text-base whitespace-nowrap tracking-tight text-foreground/70"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INSIGHTS ---------------- */
function Insights() {
  const posts = [
    {
      tag: "Web Strategy",
      title: "Use Modern Lifecycle Planning to Maximize Your Site's Potential",
      img: IMG.insights1,
    },
    {
      tag: "Diversity & Inclusion",
      title: "Designing for Everyone — Why Accessibility Matters",
      img: IMG.insights2,
      highlight: true,
    },
    {
      tag: "Performance",
      title: "How to Overcome the Impact of Slow Loading Pages",
      img: IMG.insights3,
    },
  ];
  return (
    <section data-reveal id="insights" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-xl text-4xl leading-tight sm:text-5xl">
            Hear <span className="italic text-lime-accent">Directly</span>
            <br /> From Nucleown Experts
          </h2>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-deep px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            More Insights <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className={`group overflow-hidden rounded-3xl ${
                p.highlight ? "bg-lime" : "bg-card"
              } shadow-soft`}
            >
              <div className="aspect-[5/4] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-deep">
                  {p.tag}
                </span>
                <h3 className="mt-2 font-display text-xl leading-snug text-foreground">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    { q: "What does a typical project include?", a: "Discovery, design, development, content, SEO setup, performance optimization, and one round of revisions on each phase. Hosting and post-launch care plans are optional add-ons." },
    { q: "How long does it take to launch?", a: "Most marketing sites launch in 3–5 weeks. E-commerce and custom platforms typically run 6–10 weeks." },
    { q: "What is your tech approach?", a: "We use modern, performant frameworks (React, TanStack Start, headless CMSes) chosen to fit your team and goals — not the other way around." },
    { q: "Do I have a dedicated point of contact?", a: "Yes — every project has a single producer who is your point of contact from kickoff to launch and beyond." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section data-reveal className="pb-20 sm:pb-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Web Project <span className="italic text-lime-accent">FAQ's</span>
          </h2>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Common questions on web design and development. Don't see yours? Reach out — we love a good question.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-deep px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Learn More <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="space-y-3">
          {faqs.map((f, k) => {
            const isOpen = open === k;
            return (
              <div key={f.q} className="rounded-2xl border border-border bg-card">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : k)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-medium text-foreground">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-deep">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- NEWSLETTER ---------------- */
function Newsletter() {
  const [email, setEmail] = useState("");
  return (
    <section data-reveal className="pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-3xl bg-deep p-8 text-primary-foreground md:grid-cols-2 md:items-center md:p-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-lime-accent">
              <Compass className="h-4 w-4" /> Newsletter
            </div>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl">
              Latest News &
              <br /> Resources
            </h3>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!email) return;
              toast.success("Subscribed — we'll be in touch.");
              setEmail("");
            }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="h-12 rounded-full border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button type="submit" className="h-12 shrink-0 rounded-full bg-lime px-6 text-deep hover:opacity-90">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA / CONTACT ---------------- */
function CTA() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  return (
    <section data-reveal id="contact" className="pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 overflow-hidden rounded-3xl bg-card shadow-soft md:grid-cols-2">
          <div className="relative">
            <img src={IMG.cta} alt="Take control of your web presence" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-deep">
              <Sparkles className="h-4 w-4" /> Nucleown
            </div>
            <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
              Ready to <span className="italic text-lime-accent">Take Control</span>
              <br /> of Your Web Presence?
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Tell us a little about your project — we'll get back within one business day.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!form.name || !form.email) return;
                toast.success("Thanks! We'll be in touch shortly.");
                setForm({ name: "", email: "", message: "" });
              }}
              className="mt-6 space-y-3"
            >
              <Input
                placeholder="Your name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <Input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <Textarea
                placeholder="Tell us about your project"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <Button type="submit" className="h-12 w-full rounded-full bg-deep text-primary-foreground hover:opacity-90">
                Send Message <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
