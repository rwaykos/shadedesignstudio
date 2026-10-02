import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shadedesignstudio.in";
  
  const locations = ["baner", "wakad", "kharadi","Tathawade"];

  const locationEntries: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${baseUrl}/interior-designer-in-${loc}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...locationEntries,
  ];
}