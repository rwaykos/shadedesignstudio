import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { locationsData } from "../Data/locations";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

type Props = {
  params: Promise<{ slug: string }>;
};

// Helper function to extract location key from slug (e.g. "interior-designer-in-baner" -> "baner")
function getLocationKey(slug: string): string | null {
  const prefix = "interior-designer-in-";
  if (slug.startsWith(prefix)) {
    return slug.replace(prefix, "");
  }
  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const locationKey = getLocationKey(resolvedParams.slug);
  
  if (!locationKey || !locationsData[locationKey]) return {};

  const data = locationsData[locationKey];

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://shadedesignstudio.in/interior-designer-in-${data.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(locationsData).map((key) => ({
    slug: `interior-designer-in-${key}`,
  }));
}

export default async function LocationLandingPage({ params }: Props) {
  const resolvedParams = await params;
  const locationKey = getLocationKey(resolvedParams.slug);

  if (!locationKey || !locationsData[locationKey]) {
    notFound();
  }

  const locationInfo = locationsData[locationKey];

  return (
    <main className="bg-[#F7F5F2] min-h-screen text-[#1F1F1F]">
      {/* Localized Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InteriorDesignStudio",
            "name": `Shade Design Studio - ${locationInfo.cityName}`,
            "url": `https://shadedesignstudio.in/interior-designer-in-${locationInfo.slug}`,
            "telephone": "+919975597846",
            "areaServed": locationInfo.cityName,
          }),
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#1F5D42] mb-3">
            Interior Designer in {locationInfo.cityName}
          </p>
          <h1 className="text-4xl sm:text-6xl font-light text-slate-900 leading-tight mb-6">
            {locationInfo.headline}
          </h1>
          <p className="text-black/70 text-lg font-light leading-relaxed mb-8">
            {locationInfo.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`https://wa.me/919975597846?text=Hi%20Shade%20Design%20Studio,%20I%20am%20looking%20for%20an%20interior%20designer%20in%20${locationInfo.cityName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition"
            >
              Book Consultation in {locationInfo.cityName}
            </a>
            <a
              href="tel:+919975597846"
              className="bg-[#1F5D42] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#174832] transition inline-flex items-center gap-2"
            >
              <FaPhoneAlt size={12} /> Call Designer
            </a>
          </div>
        </div>
      </section>

      {/* Featured Location Project */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-[28px] overflow-hidden">
            <Image
              src={locationInfo.featuredProject.image}
              alt={`Interior Design Project in ${locationInfo.cityName}`}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="uppercase text-xs font-semibold text-[#1F5D42] tracking-widest mb-2">
              {locationInfo.featuredProject.type}
            </p>
            <h2 className="text-3xl font-light mb-4">
              {locationInfo.featuredProject.title}
            </h2>
            <p className="text-black/65 text-sm leading-relaxed mb-6">
              Designed specifically for modern floor plans in {locationInfo.cityName}, combining smart spatial layout with premium luxury finishes.
            </p>
            <Link
              href="/#projects"
              className="text-xs uppercase font-bold tracking-wider text-black border-b border-black pb-1 hover:opacity-60 transition"
            >
              Explore Full Portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* Societies Served */}
      <section className="py-20 px-6 bg-[#F7F5F2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-light mb-8">
            Projects & Societies Served in {locationInfo.cityName}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locationInfo.societies.map((society, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-black/5 flex items-center gap-3"
              >
                <FaCheckCircle className="text-[#1F5D42] flex-shrink-0" />
                <span className="text-sm font-medium text-slate-800">
                  {society}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}