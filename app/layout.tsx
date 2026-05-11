import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Tajawal } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manageflow.ae"),
  title: {
    default: "ManageFlow — Boutique digital studio. United Arab Emirates.",
    template: "%s · ManageFlow",
  },
  description:
    "A boutique digital studio crafting premium brand systems, websites, and visual content for ambitious companies across the UAE. Bilingual EN · AR.",
  applicationName: "ManageFlow",
  keywords: [
    "ManageFlow",
    "UAE branding studio",
    "Dubai brand identity",
    "Abu Dhabi web design",
    "boutique digital studio",
    "Arabic English website",
  ],
  openGraph: {
    title: "ManageFlow — Boutique digital studio",
    description:
      "Premium brand systems, websites, and visual content. United Arab Emirates.",
    type: "website",
    locale: "en_AE",
    alternateLocale: "ar_AE",
    siteName: "ManageFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "ManageFlow — Boutique digital studio",
    description:
      "Premium brand systems, websites, and visual content. United Arab Emirates.",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1119",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${fraunces.variable} ${inter.variable} ${tajawal.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ManageFlow",
              description:
                "Boutique digital studio crafting premium brand systems, websites, and visual content for ambitious companies across the UAE.",
              url: "https://manageflow.ae",
              telephone: "+971568115344",
              email: "hello@manageflow.ae",
              address: {
                "@type": "PostalAddress",
                addressLocality: "United Arab Emirates",
                addressCountry: "AE",
              },
              areaServed: {
                "@type": "Country",
                name: "United Arab Emirates",
              },
              serviceType: [
                "Brand Identity",
                "Website Design",
                "Professional Presence",
                "Sales Materials",
                "Promotional Campaigns",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+971568115344",
                contactType: "customer service",
                availableLanguage: ["English", "Arabic"],
              },
            }),
          }}
        />
      </head>
      <body className="bg-ink text-paper antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
