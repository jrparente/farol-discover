import Link from "next/link";
import { Button } from "@/components/ui/button";

type CtaProps = {
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
};

export default function Cta({
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaButtonLink = "/",
}: CtaProps) {
  return (
    <section className="my-2 py-2">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          {ctaTitle && (
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
              {ctaTitle}
            </h2>
          )}
          {ctaDescription && (
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              {ctaDescription}
            </p>
          )}
          {ctaButtonLink && ctaButtonText && (
            <Link href={ctaButtonLink}>
              <Button>{ctaButtonText}</Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
