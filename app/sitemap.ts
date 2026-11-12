import type { MetadataRoute } from "next";

const BASE_URL = "https://www.ukslewojrzanow.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/aktualnosci",
    "/druzyny",
    "/trenerzy",
    "/partnerzy",
    "/kontakt",
    "/kalendarz",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
