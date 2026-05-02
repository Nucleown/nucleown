import { Code2, Shield, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Custom Design",
  "Mobile-First",
  "Fast Loading",
  "SEO Ready",
  "Ongoing Support",
];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
            Services
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            What We Build For You
          </h2>
          <p className="mt-4 text-muted-foreground">
            Focused on outcomes — not feature checklists. Every engagement starts with your goal.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Web Design */}
          <article className="group relative overflow-hidden rounded-2xl border border-border bg-card-gradient p-8 shadow-card-soft transition-all hover:-translate-y-1 hover:border-brand-cyan/50 hover:shadow-glow">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cyan/15 text-brand-cyan">
              <Code2 className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl font-semibold">Web Design & Development</h3>
            <p className="mt-3 text-muted-foreground">
              Custom websites built for speed, mobile responsiveness, and conversions. From landing
              pages to full business websites.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-brand-cyan" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="mt-8 shadow-glow">
              <a href="#contact">
                Start Your Project <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </article>

          {/* Cybersecurity */}
          <article className="relative overflow-hidden rounded-2xl border border-border bg-card-gradient p-8 opacity-90 shadow-card-soft">
            <div className="absolute right-6 top-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-cyan/40 bg-brand-cyan/10 px-3 py-1 text-xs font-semibold text-brand-cyan shadow-glow animate-pulse-glow">
                Coming Soon
              </span>
            </div>

            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan/70">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground/90">
              Cybersecurity
            </h3>
            <p className="mt-3 text-muted-foreground">
              Advanced security audits, vulnerability assessments, and protection solutions.
              Launching soon.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand-cyan/60" /> Security audits
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand-cyan/60" /> Vulnerability assessments
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand-cyan/60" /> Hardening & monitoring
              </li>
            </ul>

            <Button disabled variant="outline" className="mt-8 border-border">
              Notify Me
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
