import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/nucleown-logo.png";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-2 w-2 animate-float rounded-full bg-brand-cyan/60 blur-[1px]" />
        <div
          className="absolute right-[15%] top-[35%] h-3 w-3 animate-float rounded-full bg-brand-cyan/40 blur-[2px]"
          style={{ animationDelay: "1.2s" }}
        />
        <div
          className="absolute left-[70%] top-[70%] h-1.5 w-1.5 animate-float rounded-full bg-brand-cyan/70"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute left-[30%] top-[80%] h-2 w-2 animate-float rounded-full bg-brand-cyan/40 blur-[1px]"
          style={{ animationDelay: "0.6s" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="animate-fade-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-xs font-medium text-brand-cyan">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cyan" />
            Now accepting new projects
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            We Build Websites That Get Your Business{" "}
            <span className="text-brand-cyan text-glow">Online — Professionally</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nucleown Technologies helps small businesses and startups get a powerful online
            presence. Fast. Clean. Built to convert.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
            <Button asChild size="lg" className="shadow-glow">
              <a href="#contact">
                Get a Free Consultation <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-brand-cyan/40">
              <a href="#work">See Our Work</a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground lg:justify-start">
            <span>24-hour response</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <span>Mobile-first</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <span>SEO-ready</span>
          </div>
        </div>

        <div className="relative mx-auto flex max-w-md items-center justify-center lg:max-w-none">
          <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-brand-cyan/20 blur-3xl" />
          <img
            src={logo}
            alt="Nucleown Technologies logo"
            className="w-full max-w-sm animate-fade-in drop-shadow-[0_0_60px_rgba(0,201,200,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
