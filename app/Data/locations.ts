export interface LocationData {
  slug: string;
  cityName: string;
  headline: string;
  description: string;
  societies: string[];
  metaTitle: string;
  metaDescription: string;
  featuredProject: {
    title: string;
    image: string;
    type: string;
  };
}

export const locationsData: Record<string, LocationData> = {
  baner: {
    slug: "baner",
    cityName: "Baner",
    headline: "Luxury Residential & Commercial Interiors in Baner",
    description:
      "Shade Design Studio delivers bespoke interior solutions for premium apartments, penthouses, and commercial spaces in Baner.",
    societies: [
      "Kasturi Epitome",
      "Supreme Amadore",
      "Kalpataru Jade Residences",
      "Amar Landmark",
    ],
    metaTitle: "Interior Designer in Baner Pune | Shade Design Studio",
    metaDescription:
      "Top-rated interior designer in Baner, Pune. Specializing in luxury 3BHK/4BHK apartments, penthouses, and modern office spaces.",
    featuredProject: {
      title: "Modern 4BHK Luxury Apartment",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      type: "Residential Interior",
    },
  },
  wakad: {
    slug: "wakad",
    cityName: "Wakad",
    headline: "Bespoke Modern Interiors in Wakad & PCMC",
    description:
      "Transforming homes in Wakad with modern modular kitchens, custom wardrobe designs, and intelligent spatial planning.",
    societies: [
      "Kohinoor Courtyard",
      "Sonigara Kesar",
      "Mont Vert Sevilles",
      "Aloma County",
    ],
    metaTitle: "Interior Designer in Wakad PCMC | Shade Design Studio",
    metaDescription:
      "Looking for an interior designer in Wakad? Shade Design Studio crafts functional and elegant residential interiors across PCMC.",
    featuredProject: {
      title: "Minimalist 3BHK Apartment Design",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
      type: "Residential Interior",
    },
  },
  kharadi: {
    slug: "kharadi",
    cityName: "Kharadi",
    headline: "Premium Interior Design Services in Kharadi",
    description:
      "From sleek tech-firm offices to elegant high-rise apartments, we bring sophisticated design aesthetics to Kharadi.",
    societies: [
      "Panchshil Towers",
      "Gera World of Joy",
      "Zen Elite",
      "Majestique Manhattan",
    ],
    metaTitle: "Interior Designer in Kharadi Pune | Shade Design Studio",
    metaDescription:
      "Luxury interior design studio in Kharadi, Pune. Customized residential and commercial interiors near EON IT Park.",
    featuredProject: {
      title: "Contemporary Workspace & Executive Suite",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop",
      type: "Commercial & Office Interior",
    },
  },
  Tathawade: {
    slug: "tathawade",
    cityName: "Tathawade",
    headline: "Modern Interior Design in Tathawade",
    description:
      "Transforming homes in Tathawade with modern modular kitchens, custom wardrobe designs, and intelligent spatial planning.",
    societies: [
      "Vision Starwest",
      "Eden Garden",
      "RKL",
      "Wardhman Moonstone",
    ],
    metaTitle: "Interior Designer in Tathawade Pune | Shade Design Studio",
    metaDescription:
      "Luxury interior design studio in Tathawade, Pune. Customized residential and commercial interiors near EON IT Park.",
    featuredProject: {
      title: "Contemporary Workspace & Executive Suite",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop",
      type: "Commercial & Office Interior",
    },
  },
};