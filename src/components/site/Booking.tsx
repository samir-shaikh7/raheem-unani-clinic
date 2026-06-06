"use client";

import { useState } from "react";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MessageCircle, CalendarCheck, Sparkles } from "lucide-react";
import { Reveal, SectionEyebrow } from "./Reveal";
import { CLINIC } from "@/lib/clinic";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20).regex(/^[0-9+\-\s()]+$/, "Invalid phone"),
  treatment: z.string().trim().min(2, "Select a treatment").max(80),
  date: z.string().trim().min(1, "Pick a date").max(20),
  message: z.string().trim().max(500).optional().default(""),
});

const treatments = ["Joint Pain", "Skin Disorders", "Digestive", "Diabetes", "Kidney", "Male Health", "Women's Health", "General Wellness", "Other"];

export function Booking() {
  const [done, setDone] = useState<null | z.infer<typeof schema>>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setDone(parsed.data);
  };

  const waMessage = done
    ? encodeURIComponent(
        `Hello Raheem Unani Clinic, I'd like to confirm my appointment.\n\nName: ${done.name}\nPhone: ${done.phone}\nTreatment: ${done.treatment}\nPreferred date: ${done.date}\n${done.message ? `Note: ${done.message}` : ""}`,
      )
    : "";

  return (
    <section id="book" className="relative overflow-hidden bg-hero-gradient py-24 md:py-32">
      <div aria-hidden className="absolute -top-20 left-1/3 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
      <div aria-hidden className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionEyebrow><span className="text-gold">Book Your Visit</span></SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-white md:text-5xl">
            Begin your journey to <span className="text-gradient-gold italic">natural healing</span>
          </h2>
          <p className="mt-5 max-w-md text-base text-white/75">
            Reserve a consultation in under a minute. We&apos;ll confirm your slot on WhatsApp within minutes.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Personalized diagnosis & treatment plan",
              "100% herbal — no chemicals or side effects",
              "Confidential & comfortable consultation",
              "Available 24 hours, every day",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-white/85">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="shimmer-border relative rounded-3xl glass p-1 shadow-luxe">
            <div className="rounded-[calc(theme(borderRadius.3xl)-4px)] bg-card p-6 md:p-8">
              <AnimatePresence mode="wait">
                {!done ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }}
                    onSubmit={onSubmit} className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                      <Sparkles className="h-3.5 w-3.5" /> Free consultation
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-foreground">Book Your Appointment</h3>

                    <Field label="Full Name" name="name" placeholder="Your name" error={errors.name} />
                    <Field label="Phone Number" name="phone" type="tel" placeholder="+91 90304 17500" error={errors.phone} />

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Treatment Required</label>
                      <select name="treatment" defaultValue="" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-primary/20 transition focus:ring-2">
                        <option value="" disabled>Select a treatment</option>
                        {treatments.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                      {errors.treatment && <p className="mt-1 text-xs text-destructive">{errors.treatment}</p>}
                    </div>

                    <Field label="Preferred Date" name="date" type="date" error={errors.date} />

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message (optional)</label>
                      <textarea name="message" rows={3} maxLength={500} placeholder="Briefly describe your concern..."
                        className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-primary/20 transition focus:ring-2" />
                    </div>

                    <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:scale-[1.01] hover:shadow-luxe">
                      <CalendarCheck className="h-4 w-4" /> Confirm Appointment
                    </button>
                    <p className="text-center text-[11px] text-muted-foreground">We&apos;ll never share your details. By submitting you agree to be contacted by our clinic.</p>
                  </motion.form>
                ) : (
                  <motion.div key="done" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="py-6 text-center">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 14 }}
                      className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle2 className="h-8 w-8" />
                    </motion.div>
                    <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">Thank you, {done.name.split(" ")[0]}!</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Your appointment request for <strong>{done.treatment}</strong> on <strong>{done.date}</strong> is received.
                      Continue on WhatsApp to confirm instantly.
                    </p>
                    <a href={`https://wa.me/${CLINIC.whatsapp}?text=${waMessage}`} target="_blank" rel="noopener noreferrer"
                       className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[oklch(0.6_0.18_150)] px-6 py-3 text-sm font-semibold text-white shadow-soft hover:scale-[1.02]">
                      <MessageCircle className="h-4 w-4" /> Continue on WhatsApp
                    </a>
                    <button onClick={() => setDone(null)} className="mt-3 block w-full text-xs text-muted-foreground hover:text-foreground">Book another</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, error }: { label: string; name: string; type?: string; placeholder?: string; error?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name} type={type} placeholder={placeholder} maxLength={120}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-primary/20 transition focus:ring-2"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
