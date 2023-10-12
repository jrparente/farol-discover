import Image from "next/image";

type GalleryProps = {
  galleryHeading?: string;
  images: string[];
};

export default function ImageGallery({
  galleryHeading = "Explore Portugal's Untouched Beauty: A Visual Journey",
  images,
}: GalleryProps) {
  return (
    <section className="my-2 py-2">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          {galleryHeading && (
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
              {galleryHeading}
            </h2>
          )}
        </div>
      </div>
      <div className="gap-8 items-center px-4 py-10 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16">
        {images.map((image, imgIndex) => (
          <Image
            key={imgIndex}
            src={image}
            alt={`Gallery image ${imgIndex + 1}`}
            width={500}
            height={300}
          />
        ))}
      </div>
    </section>
  );
}
