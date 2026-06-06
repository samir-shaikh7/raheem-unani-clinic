"use client";

import { Bone, Sparkles, Soup, Activity, Droplets, Mars, Venus, Leaf, ArrowUpRight } from "lucide-react";
import { Reveal, SectionEyebrow, StaggerGroup, StaggerItem } from "./Reveal";

const services = [
  { i: Bone, t: "Joint Pain Treatment", d: "Relief from arthritis, sciatica and chronic back pain through targeted herbal therapy." },
  { i: Sparkles, t: "Skin Disorders", d: "Eczema, psoriasis, acne and pigmentation healed naturally — without steroids." },
  { i: Soup, t: "Digestive Problems", d: "Restore gut health for acidity, IBS, constipation and chronic indigestion." },
  { i: Activity, t: "Diabetes Support", d: "Stabilize blood sugar with a holistic Unani regimen and lifestyle coaching." },
  { i: Droplets, t: "Kidney Disorders", d: "Gentle herbal support for stones, infections and kidney function." },
  { i: Mars, t: "Male Health", d: "Confidential treatment for sexual wellness, vitality and reproductive concerns." },
  { i: Venus, t: "Women's Health", d: "Hormonal balance, PCOS, menstrual and fertility care with deep care." },
  { i: Leaf, t: "General Wellness", d: "Detox, immunity boosters and seasonal regimens for long-term vitality." },
];

export function Services() {
  return (
    <section id="services" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Treatments &amp; Services</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-foreground md:text-5xl">
              Personalized care for{" "}
              <span className="text-gradient-emerald italic">every condition</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From chronic ailments to everyday wellness — explore the conditions we treat with proven Unani protocols.
            </p>
          </Reveal>
        </div>
        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <StaggerItem key={s.t}>
              <a href="#book" className="group relative block h-full overflow-hidden rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1.5 hover:shadow-luxe">
                <div aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition group-hover:bg-gold/15" />
                <span className="relative inline-grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
                  <s.i className="h-5 w-5" />
                </span>
                <h3 className="relative mt-5 font-display text-xl font-semibold text-foreground">{s.t}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                <span className="relative mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition group-hover:gap-2">
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
