import { Users, Palette, Zap, Globe } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Client-First Approach",
    desc: "Your goals drive every decision we make.",
  },
  {
    icon: Palette,
    title: "Clean Modern Design",
    desc: "No templates. Every site is built from scratch.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "We respect your timeline and deliver on time.",
  },
  {
    icon: Globe,
    title: "Pakistan-Based & Trusted",
    desc: "Local understanding, international standards.",
  },
];

export function WhyUs() {
  return (
    <section className="relative border-y border-border/60 bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
            Why Nucleown
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Built Different. On Purpose.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card-gradient p-6 transition-all hover:-translate-y-0.5 hover:border-brand-cyan/40"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-cyan/15 text-brand-cyan">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
