import { User } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative border-y border-border/60 bg-card/30 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
            About
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Who's Behind Nucleown?
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Nucleown Technologies was founded with one mission — to help businesses build a real,
              professional online presence without the corporate price tag.
            </p>
            <p>
              We're a lean, focused team that treats every project like it's our own business.
              Based in Pakistan, working with clients globally.
            </p>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-4 py-2 text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-cyan" />
            <span>Currently accepting new projects — response within 24 hours guaranteed.</span>
          </div>
        </div>

        <div className="relative mx-auto">
          <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-brand-cyan/20 blur-3xl" />
          {/* TODO: Replace with founder photo */}
          <div className="flex h-64 w-64 items-center justify-center rounded-full border-2 border-brand-cyan/40 bg-card-gradient shadow-glow sm:h-80 sm:w-80">
            <User className="h-24 w-24 text-brand-cyan/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
