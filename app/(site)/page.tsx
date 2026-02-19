import { Hero } from "@/components/sections/Hero";
import { ContentGrid } from "@/components/sections/ContentGrid";
import { AboutSection } from "@/components/sections/AboutSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { getHomePage } from "@/lib/queries/homePage";
import { getSiteSettings } from "@/lib/queries/siteSettings";

export const revalidate = 60

export default async function Home() {
  const [page, settings] = await Promise.all([
    getHomePage(),
    getSiteSettings(),
  ])

  return (
    <main className="min-h-screen">
      <Hero page={page} settings={settings} />
      <ContentGrid />
      <AboutSection page={page} />
      <NewsSection />
    </main>
  );
}
