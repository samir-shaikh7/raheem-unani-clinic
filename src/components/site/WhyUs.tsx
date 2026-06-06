"use client";

import { UserCheck, Leaf, HeartPulse, GraduationCap, MapPin, Clock } from "lucide-react";
import { Reveal, SectionEyebrow, StaggerGroup, StaggerItem } from "./Reveal";

const items = [
  { i: UserCheck, t: "Personalized Care", d: "Every patient receives a treatment plan crafted to their unique constitution." },
  { i: Leaf, t: "Natural Treatment Approach", d: "Pure herbal medicines — no chemicals, no steroids, no side effects." },
  { i: HeartPulse, t: "Patient-Centered Care", d: "We listen first, diagnose carefully, and walk with you to recovery." },
  { i: GraduationCap, t: "Experienced Guidance", d: "Years of clinical practice in classical Unani and Islamic medicine." },
  { i: MapPin, t: "Convenient Location", d: "Located at the heart of Toli Chowki — easy to reach from anywhere in Hyderabad." },
  { i: Clock, t: "Open 24 Hours", d: "Emergencies don't wait. Neither do we. Reach us any hour of the day." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/40 py-24 md:py-32">
      <div aria-hidden className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Why Choose Us</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-foreground md:text-5xl">
              A clinic that puts <span className="text-gradient-emerald italic">your healing first</span>
            </h2>
          </Reveal>
        </div>

        <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <StaggerItem key={it.t}>
              <div className="group relative h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:scale-[1.02] hover:shadow-luxe">
                <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-teal-dark text-primary-foreground shadow-gold">
                  <it.i className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">{it.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
                <div aria-hidden className="absolute bottom-0 left-0 h-1 w-0 rounded-b-3xl bg-gradient-to-r from-gold to-primary transition-all duration-500 group-hover:w-full" />
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
