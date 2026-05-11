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
  title: "Shade Design Studio | Premium Interior Designer in Pune",

  description:
    "Shade Design Studio creates luxury residential and commercial interiors in Pune with modern, modern, elegant, and functional design solutions.",

  keywords: [
    "Interior Designer Pune",
    "Luxury Interior Design",
    "Interior Design Studio Pune",
    "Residential Interior Designer",
    "Commercial Interior Design",
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
    "Interior Designer Kondhwa",
    "Interior Designer Undri",
    "Interior Designer Kharadi",
    "Interior Designer Bavdhan",
    "Interior Designer Pashan",
    "Interior Designer Dhayari",
    "Interior Designer Warje",
    "Interior Designer Baner Road",
    "Interior Designer Aundh Road",
    "Interior Designer Kothrud Road",
    "Interior Designer Viman Nagar Road",
    "Interior Designer Hadapsar Road",
    "Interior Designer Hinjewadi Road",
    "Interior Designer Wakad Road",
    "Interior Designer Balewadi Road",
    "Interior Designer Magarpatta Road",
    "Interior Designer Kondhwa Road",
    "Interior Designer Undri Road",
    "Interior Designer Kharadi Road",
    "Interior Designer Bavdhan Road",
    "Interior Designer Pashan Road",
    "Interior Designer Dhayari Road",
    "Interior Designer Warje Road",
  ],

  openGraph: {
    title: "Shade Design Studio",
    description:
      "Luxury residential and commercial interior design studio in Pune.",

    url: "https://shadedesignstudio.in",

    siteName: "Shade Design Studio",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_IN",
    type: "website",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
