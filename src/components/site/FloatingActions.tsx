import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { CLINIC } from "@/lib/clinic";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 md:right-6 md:bottom-6">
      <a
        href={`https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent("Hello, I'd like to book an appointment at Raheem Unani Clinic.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-[oklch(0.6_0.18_150)] text-white shadow-soft transition hover:scale-105 md:h-14 md:w-14"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full" />
        <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
      </a>
      <a
        href={`tel:${CLINIC.phoneRaw}`}
        aria-label="Call clinic"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition hover:scale-105 md:h-14 md:w-14"
      >
        <Phone className="h-5 w-5 md:h-6 md:w-6" />
      </a>
      <a
        href="#book"
        aria-label="Book appointment"
        className="hidden h-14 w-14 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-gold transition hover:scale-105 md:inline-flex"
      >
        <CalendarCheck className="h-6 w-6" />
      </a>
    </div>
  );
}
