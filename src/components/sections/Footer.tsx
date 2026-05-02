import logo from "@/assets/nucleown-logo.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Nucleown Technologies" className="h-9 w-9 rounded-full" />
            <span className="font-display text-lg font-semibold">nucleown</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            We build websites that get businesses online — professionally.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-brand-cyan"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:text-right">
          <p className="text-sm text-muted-foreground">
            Based in Pakistan 🇵🇰 — Working Globally
          </p>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          © 2025 Nucleown Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
