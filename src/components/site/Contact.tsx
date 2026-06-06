"use client";

import { Phone, MessageCircle, MapPin, Clock, Navigation } from "lucide-react";
import { Reveal, SectionEyebrow } from "./Reveal";
import { CLINIC } from "@/lib/clinic";

export function Contact() {
  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Visit Us</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-foreground md:text-5xl">
              Find us in the heart of <span className="text-gradient-emerald italic">Toli Chowki</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
              <div className="space-y-6">
                <InfoRow icon={MapPin} title="Address" content={`${CLINIC.location}\nHyderabad, Telangana 500008`} />
                <InfoRow icon={Phone} title="Phone" content={CLINIC.phone} href={`tel:${CLINIC.phoneRaw}`} />
                <InfoRow icon={Clock} title="Business Hours" content="Open 24 Hours · Every Day" />
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a href={`tel:${CLINIC.phoneRaw}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:scale-[1.02]">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[oklch(0.6_0.18_150)] px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.02]">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-accent">
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-border shadow-luxe">
              <iframe
                title="Clinic location"
                src={CLINIC.mapsEmbed}
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, title, content, href }: { icon: React.ComponentType<{ className?: string }>; title: string; content: string; href?: string }) {
  const body = <div className="whitespace-pre-line text-sm text-muted-foreground">{content}</div>;
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-foreground">{title}</div>
        {href ? <a href={href} className="mt-1 block hover:text-primary">{body}</a> : <div className="mt-1">{body}</div>}
      </div>
    </div>
  );
}
