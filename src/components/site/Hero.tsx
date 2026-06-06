"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Phone,
  MessageCircle,
  CalendarCheck,
  Star,
  Clock,
  ShieldCheck,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { CLINIC } from "@/lib/clinic";

function Counter({
  to,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const mv = useMotionValue(0);
  const [val, setVal] = useState("0");
  useEffect(() => {
    const c = animate(mv, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setVal(v.toFixed(decimals)),
    });
    return () => c.stop();
  }, [to, decimals, mv]);
  return (
    <>
      {val}
      {suffix}
    </>
  );
}

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-hero-gradient pt-28 md:pt-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-float"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-3xl animate-float"
        style={{ animationDelay: "1.4s" }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-24 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10 lg:pb-32">
        <div className="text-center lg:text-left">
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/90"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Trusted by 10,000+ patients across Hyderabad
          </motion.div>

          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 font-display text-4xl font-medium leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Natural Healing Through{" "}
            <span className="text-gradient-gold italic">Trusted Unani</span> &
            Islamic Medicine
          </motion.h1>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            custom={2}
            className="mx-auto mt-6 max-w-xl text-base text-white/75 sm:text-lg lg:mx-0"
          >
            Personalized treatments for long-term wellness — guided by centuries
            of traditional healing and modern patient care.
          </motion.p>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <a
              href="#book"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold transition hover:scale-[1.03]"
            >
              <CalendarCheck className="h-4 w-4" /> Book Appointment
            </a>
            <a
              href={`https://wa.me/${CLINIC.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Now
            </a>
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-white/90 transition hover:text-white"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </motion.div>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {[
              {
                icon: Star,
                value: <Counter to={4.7} decimals={1} />,
                label: "Patient Rating",
                suffix: "★",
              },
              {
                icon: Clock,
                value: "24",
                label: "Hours Open",
                suffix: "/7",
              },
              {
                icon: ShieldCheck,
                value: <Counter to={10} />,
                label: "Trusted Care",
                suffix: "Yr+",
              },
              { icon: MapPin, value: "Toli", label: "Chowki, HYD" },
            ].map((s, i) => (
              <div key={i} className="glass rounded-2xl px-3 py-4 text-center">
                <s.icon className="mx-auto h-4 w-4 text-gold" />
                <div className="mt-2 font-display text-2xl font-semibold text-white">
                  {s.value}
                  {(s as any).suffix && (
                    <span className="text-gold">{(s as any).suffix}</span>
                  )}
                </div>
                <div className="mt-0.5 text-[11px] uppercase tracking-wider text-white/60">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-gold/30 via-transparent to-primary/30 blur-2xl"
          />
          <div className="relative">
            <div className="shimmer-border relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-primary/20 shadow-luxe">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/doctor.jpg"
                alt="Hakeem at Raheem Unani Clinic"
                className="h-full w-full object-cover"
                width={896}
                height={1152}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/60 via-transparent to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-4 top-10 glass rounded-2xl p-4 text-white shadow-luxe md:-left-10"
            >
              <div className="flex items-center gap-2 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold" />
                ))}
              </div>
              <div className="mt-1 font-display text-xl font-semibold">
                4.7 / 5.0
              </div>
              <div className="text-[11px] text-white/70">Google Reviews</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
              className="absolute -right-4 bottom-12 glass rounded-2xl p-4 text-white shadow-luxe md:-right-8"
            >
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold/20 text-gold">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-display text-lg font-semibold leading-none">
                    Open Now
                  </div>
                  <div className="text-[11px] text-white/70">
                    24 Hours · Every Day
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hover:text-white"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
