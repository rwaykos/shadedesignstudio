import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shadedesignstudio.in"),
  title: "Shade Design Studio | Premium Interior Designer in Pune & PCMC",

  description:
    "Shade Design Studio creates luxury residential and commercial interiors in Pune and PCMC with modern, elegant, and functional design solutions.",

  keywords: [
    "Interior Designer Pune",
    "Luxury Interior Design Pune",
    "Interior Design Studio Pune",
    "Residential Interior Designer Pune",
    "Commercial Interior Design Pune",
    "Modular Kitchen Pune",
    "Interior Designer PCMC",
    "Interior Designer Chinchwad",
    "Interior Designer Pimpri",
    "Interior Designer Baner",
    "Interior Designer Aundh",
    "Interior Designer Kothrud",
    "Interior Designer Viman Nagar",
    "Interior Designer Hadapsar",
    "Interior Designer Hinjewadi",
    "Interior Designer Wakad",
    "Interior Designer Balewadi",
    "Interior Designer Magarpatta",
    "Interior Designer Kharadi",
    "Interior Designer Bavdhan",
  ],

  openGraph: {
    title: "Shade Design Studio | Premium Interior Designer in Pune",
    description:
      "Luxury residential and commercial interior design studio in Pune & PCMC.",
    url: "https://shadedesignstudio.in",
    siteName: "Shade Design Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shade Design Studio Luxury Interior Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shade Design Studio | Premium Interior Designer in Pune",
    description:
      "Luxury residential and commercial interior design studio in Pune & PCMC.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InteriorDesignStudio",
              "name": "Shade Design Studio",
              "image": "https://shadedesignstudio.in/og-image.jpg",
              "@id": "https://shadedesignstudio.in",
              "url": "https://shadedesignstudio.in",
              "telephone": "+919975597846",
              "priceRange": "₹₹₹",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "MH",
                "addressCountry": "IN"
              },
              "areaServed": [
                "Pune",
                "PCMC",
                "Baner",
                "Wakad",
                "Kharadi",
                "Hinjewadi",
                "Kothrud",
                "Balewadi",
                "Aundh",
                "Viman Nagar",
                "Hadapsar",
                "Magarpatta",
                "Bavdhan"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}