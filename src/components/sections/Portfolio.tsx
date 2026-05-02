import { ArrowUpRight, Layout, Briefcase, Rocket } from "lucide-react";

const projects = [
  {
    title: "Business Landing Page",
    subtitle: "Concept",
    type: "Landing Page",
    icon: Layout,
    gradient: "from-brand-cyan/30 via-brand-teal/40 to-brand-navy",
  },
  {
    title: "Service Website",
    subtitle: "Local Business",
    type: "Business Site",
    icon: Briefcase,
    gradient: "from-brand-teal/40 via-brand-cyan/20 to-brand-navy",
  },
  {
    title: "Startup Web Presence",
    subtitle: "Concept",
    type: "Startup",
    icon: Rocket,
    gradient: "from-brand-navy via-brand-teal/40 to-brand-cyan/30",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
            Portfolio
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Our Work</h2>
          <p className="mt-4 text-muted-foreground">A selection of projects we've built.</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, subtitle, type, icon: Icon, gradient }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-brand-cyan/50 hover:shadow-glow"
            >
              {/* TODO: Replace with real project screenshot */}
              <div
                className={`relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br ${gradient}`}
              >
                <Icon className="h-12 w-12 text-foreground/40" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-brand-cyan">
                  {type}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{subtitle}</p>
                <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan transition-colors hover:text-brand-cyan-glow">
                  View Project <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          More projects coming soon.{" "}
          <span className="text-brand-cyan">
            Currently accepting 2 free project partnerships.
          </span>
        </p>
      </div>
    </section>
  );
}
