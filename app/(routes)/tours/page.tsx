import Hero from "@/components/page-hero";
import FeaturedPrograms from "./components/featured-programs";

export default function Tours() {
  return (
    <div className="h-full">
      <Hero
        title="Unveil the Hidden Wonders of Portugal"
        subtitle="Embark on unforgettable walking and trekking tours crafted by local experts"
      />
      <FeaturedPrograms />
    </div>
  );
}
