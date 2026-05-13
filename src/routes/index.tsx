import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft, ArrowRight, Check, Star, Plus, Minus, BadgeCheck, Quote, Sparkles, Eye, Compass, Wrench, Shield, Headphones, Code2, Search, ShoppingCart, Palette, Ear, Brain, Hammer, Rocket } from "lucide-react";
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
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
  founder:
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
  partner:
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=80",
  certified:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  cta:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
  service1:
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80",
  service2:
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80",
  service3:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
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
        <Process />
        <Partner />
        <Certified />
        <Testimonials />
        <BrandStrip />
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
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="max-w-3xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              We Build Websites
              <br /> That <span className="italic text-lime-accent">Mean Business.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Custom web design and development for startups and businesses ready to own their digital presence. Fast. Clean. Built to convert.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-deep transition hover:opacity-90"
            >
              Start Your Project
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
            >
              See Our Work
            </a>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl shadow-soft">
          <img
            src={IMG.heroTeam}
            alt="Modern web project in progress"
            className="aspect-[16/8] w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-x-0 bottom-0 hidden flex-wrap items-end justify-between gap-3 p-6 sm:flex">
            <StatChip label="Built In" value="< 3s" sub="Page load" />
            <StatChip label="Mobile-First" value="100%" sub="Every build" />
            <StatChip label="Founded" value="2024" sub="Lahore, PK" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 sm:hidden">
          <StatChip label="Load" value="< 3s" sub="Fast" small />
          <StatChip label="Mobile" value="100%" sub="First" small />
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

/* ---------------- FOUNDERS / ABOUT ---------------- */
function Founders() {
  return (
    <section data-reveal id="about" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
        <h2 className="text-4xl leading-tight sm:text-5xl">
          Built by Someone Who Refuses
          <br /> to Deliver{" "}
          <span className="italic text-lime-accent">Mediocre Work.</span>
        </h2>
        <div className="space-y-4 text-base text-muted-foreground">
          <p>
            Nucleown Technologies was born from one frustration — too many businesses online with websites that embarrass them.
          </p>
          <p className="font-display text-xl text-foreground">We fix that.</p>
          <p>
            Every site we build is treated like it's our own business on the line. No templates. No shortcuts. No excuses.
          </p>
          <p className="text-sm font-semibold uppercase tracking-widest text-deep">
            Based in Pakistan. Built for the world.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const items = [
    {
      title: "Web Design",
      icon: Palette,
      img: IMG.service1,
      tag: "Stop blending in.",
      desc: "We design websites that stop the scroll, communicate your value in seconds, and make visitors trust you before they read a word. Every pixel is intentional. Every layout is earned.",
    },
    {
      title: "Web Development",
      icon: Code2,
      img: IMG.service2,
      tag: "Beautiful means nothing if it breaks.",
      desc: "We build fast, mobile-first, rock-solid websites that load in under 3 seconds, work on every device, and never let your business down at the wrong moment.",
    },
    {
      title: "E-Commerce & SEO",
      icon: ShoppingCart,
      img: IMG.service3,
      tag: "Built to be found. Built to sell.",
      desc: "We build online stores that convert browsers into buyers and optimise every page so Google sends you customers while you sleep.",
    },
  ];
  return (
    <section data-reveal id="services" className="bg-deep py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-lime-accent">What We Do</div>
            <h2 className="mt-3 max-w-2xl text-4xl leading-tight sm:text-5xl">
              Covering the Full Spectrum
              <br /> of Your <span className="italic text-lime-accent">Digital Presence.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
          >
            Start a Project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <article
                key={it.title}
                data-reveal
                data-delay={i + 1}
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
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    <h3 className="font-display text-2xl">{it.title}</h3>
                  </div>
                  <p className="mt-2 text-sm font-semibold opacity-90">{it.tag}</p>
                  <p className="mt-2 text-sm opacity-80">{it.desc}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Cybersecurity coming soon */}
        <div data-reveal className="mt-5 grid gap-5 rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 sm:p-8 md:grid-cols-[auto,1fr,auto] md:items-center">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-lime text-deep">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-2xl">Cybersecurity</h3>
              <span className="rounded-full bg-lime/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-lime-accent">
                Coming Soon
              </span>
            </div>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Your website is a target. Most businesses find out too late. We're building a full cybersecurity module to protect what you've worked hard to create.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-deep hover:opacity-90"
          >
            Join the Waitlist <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    { title: "Listen", icon: Ear, desc: "We start by shutting up and understanding your business, your customers, and what success actually looks like for you. No assumptions. No cookie-cutter solutions." },
    { title: "Think", icon: Brain, desc: "We map out the architecture, design strategy, and content structure before a single line of code is written. Proper planning is why our projects don't fall apart mid-build." },
    { title: "Build", icon: Hammer, desc: "This is where we disappear for a while and do the work. Clean code. Pixel-perfect design. Built to perform, not just to look good in a screenshot.", highlight: true },
    { title: "Ship", icon: Rocket, desc: "We don't just hand you files and disappear. We launch, test, fix, and make sure everything works before you ever pay the final invoice." },
  ];
  return (
    <section data-reveal className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-4xl leading-tight sm:text-5xl">
          We Listen. <span className="italic text-lime-accent">Think Independently.</span>
          <br /> Build & Ship.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                data-reveal
                data-delay={i + 1}
                className={`rounded-3xl border border-border p-6 text-left transition hover:-translate-y-1 hover:shadow-soft ${
                  it.highlight ? "bg-lime ring-2 ring-deep" : "bg-card"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`grid h-11 w-11 place-items-center rounded-full ${
                      it.highlight ? "bg-deep text-primary-foreground" : "bg-secondary text-deep"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className={`font-display text-3xl ${it.highlight ? "text-deep/40" : "text-foreground/30"}`}>
                    0{i + 1}
                  </span>
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

/* ---------------- PARTNER ---------------- */
function Partner() {
  return (
    <section data-reveal className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          <img src={IMG.partner} alt="Working directly with our team" className="h-[480px] w-full object-cover sm:h-[520px]" loading="lazy" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <div className="max-w-md rounded-2xl bg-cream p-6 ring-1 ring-deep/10 sm:p-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-deep/70">
                Direct Partnership
              </div>
              <h3 className="mt-2 font-display text-3xl text-deep sm:text-4xl">
                You're Not Hiring an Agency.
                <br />
                <span className="italic text-lime-accent">You're Getting a Partner.</span>
              </h3>
              <p className="mt-3 text-sm text-deep/80">
                At Nucleown, you deal directly with the people doing the actual work — not account managers, not outsourced contractors, not someone reading from a script. When you message us, the person building your website replies. That's the difference.
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-deep px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                Talk To The Builder <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
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
            <img src={IMG.certified} alt="Built to international standards" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-3xl bg-lime p-8 text-deep lg:col-span-2 lg:p-10">
            <div className="text-xs font-semibold uppercase tracking-widest opacity-80">
              Why Choose Us
            </div>
            <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
              We Don't Just Say <br /> We're Good.
              <br /> <span className="italic">We Prove It.</span>
            </h3>
            <p className="mt-4 text-sm text-deep/80">
              Every project we deliver is held to international standards of performance, accessibility, and security. This isn't a checklist we follow — it's the only way we know how to work.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {["Fast load times", "Mobile-first builds", "SEO-ready structure", "Clean, maintainable code"].map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-deep text-primary-foreground"><Check className="h-3 w-3" /></span>
                  {x}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-deep/70">
              Trusted by businesses across Pakistan and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const quotes = [
    { name: "Small Business Owner", role: "Pakistan", quote: "I came to Nucleown with nothing but an idea and a tight budget. What they delivered was beyond anything I expected. Professional, fast, and genuinely invested in my success." },
    { name: "Startup Founder", role: "Client", quote: "Most agencies talk. Nucleown builds. The site was live in two weeks and we got our first online inquiry within 48 hours." },
    { name: "Service Business Owner", role: "Client", quote: "Honest, direct, and talented. They told me what I needed — not what I wanted to hear. My website finally represents my business properly." },
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
            <div className="text-xs font-semibold uppercase tracking-widest text-deep">
              Client Experiences
            </div>
            <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">
              That <span className="italic text-lime-accent">Speak</span> for
              <br /> Themselves
            </h2>
            <div className="mt-6 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-deep px-5 py-3 text-sm font-semibold text-primary-foreground">
                Become The Next One <ArrowUpRight className="h-4 w-4" />
              </a>
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
                  <div className="text-sm font-semibold">— {t.name}</div>
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
  const brands = [
    "Fast Load Times",
    "Mobile-First",
    "SEO-Ready",
    "WCAG-AA Accessible",
    "Clean Code",
    "Secure by Default",
    "Lighthouse 95+",
    "Built in Pakistan",
  ];
  const loop = [...brands, ...brands];
  return (
    <section data-reveal className="border-y border-border bg-secondary/40 py-8">
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track gap-12 px-6">
          {loop.map((b, idx) => (
            <span
              key={`${b}-${idx}`}
              className="flex items-center gap-2 font-display text-base whitespace-nowrap tracking-tight text-foreground/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-lime-accent" />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    { q: "How long does a website take to build?", a: "Most business websites take 1–3 weeks depending on complexity and how quickly you provide content. We give you a clear timeline before we start and we stick to it." },
    { q: "What do you need from me to get started?", a: "Your business details, brand assets if you have them, and a clear idea of your goals. Don't have everything ready? We'll guide you through it step by step." },
    { q: "Do you work with clients outside Pakistan?", a: "Absolutely. We work remotely with clients globally. Communication happens via WhatsApp, email, or video call — whatever works for you." },
    { q: "What if I need changes after the site is live?", a: "We include a revision window post-launch. For ongoing updates, we offer monthly maintenance packages." },
    { q: "How much does a website cost?", a: "Every project is scoped individually based on your requirements. We don't do one-size-fits-all pricing. Contact us for a free consultation and honest quote." },
    { q: "Is my website going to be secure?", a: "Security is built in from day one — SSL, clean code, secure hosting setup. Our upcoming Cybersecurity module will offer full security audits for businesses that want deeper protection." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section data-reveal className="pb-20 sm:pb-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Web Project <span className="italic text-lime-accent">FAQs</span>
          </h2>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Common questions on web design and development. Don't see yours? Reach out — we love a good question.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-deep px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Ask Us Anything <ArrowUpRight className="h-4 w-4" />
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
              <Compass className="h-4 w-4" /> Stay In The Loop
            </div>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl">
              A Basis For All
              <br /> Your <span className="italic text-lime-accent">Digital Needs.</span>
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
            <img src={IMG.cta} alt="Start your project with Nucleown" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-deep">
              <Headphones className="h-4 w-4" /> Let's Talk
            </div>
            <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
              Ready to <span className="italic text-lime-accent">Start Your Project?</span>
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Tell us a little about your project — the person building your website will reply. Usually within one business day.
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
