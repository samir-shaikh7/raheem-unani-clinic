"use client";

import { Star, Quote } from "lucide-react";
import { Reveal, SectionEyebrow } from "./Reveal";

const reviews = [
  { n: "Mohammed Imran", c: "Toli Chowki", r: 5, t: "After years of joint pain, the Hakeem's herbal treatment gave me real relief in just a few weeks. Truly grateful." },
  { n: "Ayesha Begum", c: "Mehdipatnam", r: 5, t: "Best Unani clinic in Hyderabad. Very caring, listens patiently and explains everything. My skin issues are finally healing." },
  { n: "Rahul Sharma", c: "Banjara Hills", r: 5, t: "I was skeptical about Unani at first. After 2 months my digestion is completely back to normal. Highly recommend." },
  { n: "Fatima Khan", c: "Tolichowki", r: 4, t: "Calm clean clinic, doctor is honest and never overcharges. My mother's diabetes is much better controlled now." },
  { n: "Abdul Rahman", c: "Shaikpet", r: 5, t: "Open 24 hours saved us during an emergency. Excellent care, blessed to have such a clinic in our area." },
  { n: "Priya Reddy", c: "Jubilee Hills", r: 5, t: "Treated my chronic acne after dermatologists failed. Natural and gentle. So thankful for this place." },
  { n: "Syed Mahmood", c: "Golconda", r: 5, t: "Very knowledgeable Hakeem. Treatment is genuine and works. Booked my whole family here now." },
  { n: "Nazia Sultana", c: "Asif Nagar", r: 5, t: "I came for women's health concerns. Treated with dignity, the medicines worked beautifully. Mashallah." },
];

function Card({ r }: { r: typeof reviews[number] }) {
  return (
    <div className="mx-3 w-[320px] shrink-0 rounded-2xl border border-border bg-card p-6 shadow-soft md:w-[380px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground font-semibold">
            {r.n.split(" ").map((w) => w[0]).slice(0, 2).join("")}
          </span>
          <div>
            <div className="font-semibold text-foreground">{r.n}</div>
            <div className="text-xs text-muted-foreground">{r.c}</div>
          </div>
        </div>
        <Quote className="h-5 w-5 text-gold/60" />
      </div>
      <div className="mt-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < r.r ? "fill-gold text-gold" : "text-muted"}`} />
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">&ldquo;{r.t}&rdquo;</p>
      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.75h3.56c2.08-1.92 3.28-4.74 3.28-8.08z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.75c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.12A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.45.34-2.12V7.04H2.18a11 11 0 0 0 0 9.92l3.66-2.84z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.04l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"/>
        </svg>
        Verified Google Review
      </div>
    </div>
  );
}

export function Reviews() {
  const row1 = [...reviews, ...reviews];
  const row2 = [...reviews.slice().reverse(), ...reviews.slice().reverse()];
  return (
    <section id="reviews" className="relative overflow-hidden bg-luxe-gradient py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
        <Reveal>
          <SectionEyebrow>Patient Stories</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-foreground md:text-5xl">
            Loved by <span className="text-gradient-emerald italic">thousands of families</span>
          </h2>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5 shadow-soft">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
            </div>
            <div className="font-semibold text-foreground">4.7</div>
            <span className="text-sm text-muted-foreground">on Google · 500+ reviews</span>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 space-y-6">
        <div className="pause-on-hover relative overflow-hidden">
          <div className="flex w-max animate-marquee">
            {row1.map((r, i) => <Card key={`a-${i}`} r={r} />)}
          </div>
        </div>
        <div className="pause-on-hover relative overflow-hidden">
          <div className="flex w-max animate-marquee" style={{ animationDirection: "reverse", animationDuration: "55s" }}>
            {row2.map((r, i) => <Card key={`b-${i}`} r={r} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
