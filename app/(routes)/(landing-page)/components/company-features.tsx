import { tourFeatures } from "@/constants";
import TourFeatures from "./tour-features";

type FeaturesProps = {
  featuresTitle: string;
  featuresSubtitle: string;
};

export default function CompanyFeatures({
  featuresTitle,
  featuresSubtitle,
}: FeaturesProps) {
  return (
    <section className="max-w-screen-xl mx-auto px-4 y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">{featuresTitle}</h2>
        <p className="text-muted-foreground">{featuresSubtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 mt-12">
        {tourFeatures.map((feature, index) => (
          <TourFeatures
            icon={feature.icon}
            title={feature.title}
            items={feature.items}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
