"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Reveal, SectionEyebrow } from "./Reveal";

const items = [
  { src: "/clinic-reception.jpg", alt: "Clinic reception", span: "md:col-span-2 md:row-span-2" },
  { src: "/consultation-room.jpg", alt: "Consultation room", span: "" },
  { src: "/herbs.jpg", alt: "Herbal jars", span: "" },
  { src: "/treatment.jpg", alt: "Herbal preparation", span: "md:col-span-2" },
  { src: "/doctor.jpg", alt: "Our Hakeem", span: "" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="gallery" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Inside the Clinic</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-foreground md:text-5xl">
              A space designed for <span className="text-gradient-emerald italic">healing</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.05} className={`${it.span} group relative overflow-hidden rounded-3xl shadow-soft`}>
              <button onClick={() => setOpen(it.src)} className="block h-full w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 text-left text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">{it.alt}</div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-foreground/80 p-4 backdrop-blur"
            onClick={() => setOpen(null)}
          >
            <button onClick={() => setOpen(null)} aria-label="Close" className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20">
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              src={open} alt="" className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-luxe"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
