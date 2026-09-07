import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: "https://lumusstudio.com.br",
  description: siteConfig.description,
  areaServed: "São Paulo, Brasil",
  serviceType: "Fotografia e cobertura visual de eventos",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lumusstudio.com.br"),
  title: {
    default: "Lumus Studio — Fotografia de eventos e experiências de marca",
    template: "%s — Lumus Studio",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    title: "Lumus Studio — Narrativas visuais",
    description: siteConfig.description,
    images: [{ url: "/images/hero/auto-activation.jpg", width: 1800, height: 1200, alt: "Evento de marca fotografado pela Lumus Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumus Studio — Narrativas visuais",
    description: siteConfig.description,
    images: ["/images/hero/auto-activation.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
