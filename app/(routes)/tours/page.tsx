import Hero from "@/components/page-hero";
import FeaturedPrograms from "./components/featured-programs";
import { getPrograms } from "@/sanity/sanity-utils";

export default async function Tours() {
  const programs = await getPrograms();

  return (
    <div className="h-full">
      <Hero
        title="Unveil the Hidden Wonders of Portugal"
        subtitle="Embark on unforgettable walking and trekking tours crafted by local experts"
      />
      <FeaturedPrograms programs={programs} />
    </div>
  );
}
