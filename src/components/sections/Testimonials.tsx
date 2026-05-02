import { Star, Quote } from "lucide-react";

// TODO: Replace with real testimonials
const testimonials = [
  {
    quote:
      "Nucleown delivered our website faster than we expected — and it actually brings in leads. Communication was clear from day one.",
    name: "Ahmed R.",
    role: "Founder, Local Service Business",
  },
  {
    quote:
      "Clean design, mobile-perfect, and zero hassle. They genuinely cared about our goals, not just shipping a template.",
    name: "Sana K.",
    role: "Co-founder, Early-stage Startup",
  },
  {
    quote:
      "We needed a serious online presence on a tight timeline. Nucleown nailed it and stuck around for support after launch.",
    name: "Bilal M.",
    role: "Owner, Consulting Firm",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">What Clients Say</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl border border-border bg-card-gradient p-6 transition-all hover:-translate-y-0.5 hover:border-brand-cyan/40"
            >
              <Quote className="absolute right-5 top-5 h-6 w-6 text-brand-cyan/30" />
              <div className="flex gap-0.5 text-brand-cyan">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-4">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
