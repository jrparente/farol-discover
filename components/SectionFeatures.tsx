import SanityImage from "./SanityImage";

type SectionFeaturesProps = {
  featuresTitle?: string;
  featuresSubtitle?: string;
  features: Array<{
    title?: string;
    description?: string;
    image?: any;
  }>;
};

function SectionFeatures({
  featuresTitle,
  featuresSubtitle,
  features,
}: SectionFeaturesProps) {
  return (
    <section className="max-w-screen-xl mx-auto px-4 my-8 py-12">
      <div className="text-center">
        {featuresTitle && (
          <h2 className="text-3xl font-bold mb-4">{featuresTitle}</h2>
        )}
        {featuresSubtitle && (
          <p className="text-muted-foreground">{featuresSubtitle}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12">
        {features.map((feature, index) => (
          <div
            className="bg-muted rounded-lg mb-6 md:mb-0 shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
            key={index}
          >
            {feature.image && (
              <div className="relative h-72">
                <SanityImage
                  source={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6">
              {feature.title && (
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              )}
              {feature.description && <p>{feature.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionFeatures;
