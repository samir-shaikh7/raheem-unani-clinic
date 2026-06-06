import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "@/styles.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raheem Unani Clinic | Trusted Unani & Islamic Medicine in Hyderabad",
  description:
    "Personalized Unani & Islamic medicine treatments in Toli Chowki, Hyderabad. Joint pain, skin, digestive, diabetes & more. 4.7★ rated. Open 24 hours. Book your appointment today.",
  keywords:
    "Unani clinic Hyderabad, Islamic medicine, Toli Chowki clinic, Hakeem Hyderabad, herbal treatment, joint pain treatment, skin treatment",
  authors: [{ name: "Raheem Unani Clinic" }],
  openGraph: {
    title: "Raheem Unani Clinic | Trusted Unani & Islamic Medicine in Hyderabad",
    description:
      "Personalized Unani & Islamic medicine treatments in Toli Chowki, Hyderabad. Joint pain, skin, digestive, diabetes & more. 4.7★ rated. Open 24 hours. Book your appointment today.",
    type: "website",
    url: "/",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e6ae7dc5-4604-43e3-93cc-1e9767215f14/id-preview-2ea7161c--7b704cd8-bc0b-48eb-a0f6-5fc5e6a88def.lovable.app-1780675514284.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raheem Unani Clinic | Trusted Unani & Islamic Medicine in Hyderabad",
    description:
      "Personalized Unani & Islamic medicine treatments in Toli Chowki, Hyderabad. Joint pain, skin, digestive, diabetes & more. 4.7★ rated. Open 24 hours. Book your appointment today.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e6ae7dc5-4604-43e3-93cc-1e9767215f14/id-preview-2ea7161c--7b704cd8-bc0b-48eb-a0f6-5fc5e6a88def.lovable.app-1780675514284.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
