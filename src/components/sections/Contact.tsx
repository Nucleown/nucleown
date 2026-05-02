import { useState, type FormEvent } from "react";
import { Send, MessageCircle, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import {
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  LINKEDIN_URL,
  LINKEDIN_NAME,
} from "./constants";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [projectType, setProjectType] = useState("website");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: Wire to real backend / email service
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      setProjectType("website");
      toast.success("Message sent!", {
        description: "We'll get back to you within 24 hours.",
      });
    }, 700);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Let's Build Something Great
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your project — we'll get back to you within 24 hours.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-12 rounded-2xl border border-border bg-card-gradient p-6 shadow-card-soft sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp Number</Label>
              <Input id="whatsapp" name="whatsapp" placeholder="+92 XXX XXXXXXX" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Project Type</Label>
              <Select value={projectType} onValueChange={setProjectType}>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="landing">Landing Page</SelectItem>
                  <SelectItem value="redesign">Redesign</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your project, goals, and timeline."
              />
            </div>
          </div>

          <Button type="submit" size="lg" disabled={submitting} className="mt-6 w-full shadow-glow">
            {submitting ? "Sending…" : "Send Message"}
            <Send className="h-4 w-4" />
          </Button>
        </form>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand-cyan/40"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-cyan/15 text-brand-cyan">
              <MessageCircle className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                WhatsApp
              </div>
              <div className="truncate text-sm font-medium">{WHATSAPP_DISPLAY}</div>
            </div>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand-cyan/40"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-cyan/15 text-brand-cyan">
              <Instagram className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Instagram
              </div>
              <div className="truncate text-sm font-medium">{INSTAGRAM_HANDLE}</div>
            </div>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand-cyan/40"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-cyan/15 text-brand-cyan">
              <Linkedin className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                LinkedIn
              </div>
              <div className="truncate text-sm font-medium">{LINKEDIN_NAME}</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
