import { Phone, MessageCircle, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import { CLINIC } from "@/lib/clinic";

const quick = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Treatments" },
  { href: "#why", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
  { href: "#book", label: "Book Appointment" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[oklch(0.16_0.025_200)] text-white">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-gold">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-gold"><path d="M12 2l2.39 4.84L19.8 7.6l-3.9 3.81.92 5.37L12 14.27 7.18 16.78l.92-5.37L4.2 7.6l5.41-.76L12 2z"/></svg>
            </span>
            <div>
              <div className="font-display text-lg font-semibold">Raheem Unani Clinic</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">Est. Hyderabad</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/65">
            Trusted Unani & Islamic medicine for personalized, natural healing in Hyderabad.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((I, i) => (
              <a key={i} href="#" aria-label="Social" className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-white/70 transition hover:bg-gold hover:text-gold-foreground">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-gold">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {quick.map((q) => (
              <li key={q.href}><a href={q.href} className="text-white/70 transition hover:text-white">{q.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-gold">Contact</h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3 text-white/70"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> {CLINIC.location}</li>
            <li className="flex items-start gap-3 text-white/70"><Phone className="mt-0.5 h-4 w-4 text-gold" /> <a href={`tel:${CLINIC.phoneRaw}`} className="hover:text-white">{CLINIC.phone}</a></li>
            <li className="flex items-start gap-3 text-white/70"><MessageCircle className="mt-0.5 h-4 w-4 text-gold" /> <a href={`https://wa.me/${CLINIC.whatsapp}`} className="hover:text-white">WhatsApp</a></li>
            <li className="flex items-start gap-3 text-white/70"><Clock className="mt-0.5 h-4 w-4 text-gold" /> Open 24 Hours</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-gold">Book a Consultation</h4>
          <p className="mt-5 text-sm text-white/65">Reserve your appointment in seconds. We confirm instantly on WhatsApp.</p>
          <a href="#book" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-gold transition hover:scale-[1.02]">
            Book Appointment
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/50 md:flex-row md:px-8">
          <div>© {new Date().getFullYear()} Raheem Unani Clinic. All rights reserved.</div>
          <div>Crafted with care for the families of Hyderabad.</div>
        </div>
      </div>
    </footer>
  );
}
