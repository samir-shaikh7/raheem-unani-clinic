import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Reviews } from "@/components/site/Reviews";
import { Gallery } from "@/components/site/Gallery";
import { Booking } from "@/components/site/Booking";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

const CLINIC_DESC =
  "Personalized Unani & Islamic medicine treatments in Toli Chowki, Hyderabad. Joint pain, skin, digestive, diabetes & more. 4.7★ rated. Open 24 hours. Book your appointment today.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Raheem Unani Clinic",
  image: "/og-image.jpg",
  description: CLINIC_DESC,
  url: "/",
  telephone: "+919030417500",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Toli Chowki",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500008",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "500",
  },
  medicalSpecialty: ["Unani Medicine", "Traditional Medicine", "Wellness"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Reviews />
        <Gallery />
        <Booking />
        <Contact />
        <Footer />
        <FloatingActions />
      </main>
    </>
  );
}
