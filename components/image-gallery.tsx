import SanityImage from "./SanityImage";

type GalleryProps = {
  galleryHeading?: string;
  images: any[];
};

export default function ImageGallery({
  galleryHeading = "Get Inspired",
  images,
}: GalleryProps) {
  return (
    <section className="my-2 py-2">
      <div className="pt-8 px-4 mx-auto max-w-screen-xl sm:pt-16">
        <div className="mx-auto max-w-screen-sm text-center">
          {galleryHeading && (
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
              {galleryHeading}
            </h2>
          )}
        </div>
      </div>
      <div className="gap-8 items-center px-4 py-6 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-8">
        {images.map((image, index) => (
          <div key={image._key || index} className="mb-4 lg:mb-0">
            <div className="relative pb-[60%]">
              <SanityImage
                className="absolute inset-0 object-cover w-full h-full rounded-lg shadow-lg"
                source={image}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
