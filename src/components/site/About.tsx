"use client";

import { Reveal, SectionEyebrow } from "./Reveal";
import { Award, Leaf, HeartHandshake, BookOpen } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative bg-luxe-gradient py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative">
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-3xl shadow-luxe">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/herbs.jpg"
                  alt="Traditional Unani herbal jars"
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <div className="rounded-3xl bg-primary p-6 text-primary-foreground shadow-luxe">
                <div className="font-display text-5xl font-medium leading-none">
                  10+
                </div>
                <div className="mt-2 text-sm text-primary-foreground/80">
                  Years of healing experience guided by traditional Unani
                  principles.
                </div>
              </div>
            </div>
            <div className="mt-10 overflow-hidden rounded-3xl shadow-luxe">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/treatment.jpg"
                alt="Doctor preparing herbal formulation"
                loading="lazy"
                className="h-[28rem] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionEyebrow>About the Hakeem</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-foreground md:text-5xl">
            Compassionate care rooted in{" "}
            <span className="text-gradient-emerald italic">
              centuries of wisdom
            </span>
            .
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            At Raheem Unani Clinic, we blend classical Unani diagnostics with
            patient-first modern care. Every consultation is personalized —
            understanding your body&apos;s <em>mizaj</em> (temperament) before
            recommending a path to long-term wellness.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                i: Award,
                t: "Certified Hakeem",
                d: "Trained in classical Unani medicine with years of clinical practice.",
              },
              {
                i: Leaf,
                t: "100% Natural",
                d: "Herbal formulations free from harmful chemicals or steroids.",
              },
              {
                i: HeartHandshake,
                t: "Patient-First",
                d: "Listening, diagnosis and follow-up at every step of your healing.",
              },
              {
                i: BookOpen,
                t: "Islamic Tradition",
                d: "Treatments rooted in Tibb-e-Nabawi and prophetic medicine.",
              },
            ].map((f) => (
              <div
                key={f.t}
                className="rounded-2xl border border-border bg-card/80 p-5 backdrop-blur transition hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <f.i className="h-5 w-5" />
                </span>
                <div className="mt-3 font-display text-lg font-semibold text-foreground">
                  {f.t}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{f.d}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
