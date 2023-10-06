import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingCta() {
  return (
    <section className="my-2 py-2">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            Discover Hidden Portugal Like Never Before
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Join Farol Discover and embark on authentic walking and trekking
            tours.
          </p>
          <Link href="/contact">
            <Button>Book Your Adventure</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
