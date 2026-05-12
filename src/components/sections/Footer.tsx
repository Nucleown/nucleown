import { Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/nucleown-logo.png";

export function Footer() {
  return (
    <footer className="bg-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Nucleown Technologies" className="h-9 w-9 rounded-full bg-primary-foreground/10 object-cover" />
              <span className="font-display text-2xl">Nucleown</span>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70">
              We design and build websites that turn visitors into customers.
              Pakistan-based, working globally.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
              <li>Phone</li>
              <li className="text-primary-foreground">+92 312 4344746</li>
              <li>Email</li>
              <li className="text-primary-foreground">msaadvirkofficial@outlook.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
              Visit Us
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
              <li className="text-primary-foreground">Al Rehman Garden, Lahore</li>
              <li>Pakistan 54950</li>
              <li>Working Globally 🌍</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-lime hover:text-deep">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-lime hover:text-deep">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-lime hover:text-deep">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center">
          <p>© 2026 Nucleown Technologies. All rights reserved.</p>
          <p>Crafted with care, in Pakistan.</p>
        </div>
      </div>
    </footer>
  );
}
