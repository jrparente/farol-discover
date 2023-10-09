import { ArrowRight, Clock, Flag, MapPin, Pin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getPrograms } from "@/sanity/sanity-utils";

export default async function LandingFeatures() {
  const programs = await getPrograms();

  return (
    <section className="my-2 py-2">
      <div className="max-w-screen-xl px-4 py-10 mx-auto flex flex-col lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Featured Programs
        </h1>
        <div className="grid grid-cols-1 gap-3">
          {programs
            .filter((program) => program.featured)
            .map((program, index) => (
              <div
                key={index}
                className={`w-full border-0 gap-8 items-center py-8 sm:py-16 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 ${
                  index % 2 === 0
                    ? "md:grid-flow-col"
                    : "md:grid-flow-col-dense"
                }`}
              >
                <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                  <Link href={`/tours/${program.slug}`}>
                    <Image
                      width={500}
                      height={500}
                      src={program.image}
                      alt={program.name}
                    />
                  </Link>
                </div>
                <div className="mt-4 md:mt-0 flex flex-col space-y-5">
                  <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    {program.name}.
                  </h2>
                  <p className="flex items-center mb-6 md:text-md text-primary font-semibold tracking-wide uppercase">
                    <MapPin className="w-4 h-4 mr-1" /> {program.location}
                  </p>
                  <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                    {program.description}
                  </p>
                  <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                    <span className="font-bold">Highlights: </span>
                    {program.highlights.join(", ")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">
                      <Flag className="w-3 h-3 mr-1" />
                      {program.difficulty}
                    </Badge>
                    <Badge variant="outline">
                      <Clock className="w-3 h-3 mr-1" />
                      {program.duration} days
                    </Badge>
                  </div>
                  <Link href={`/tours/${program.slug}`}>
                    <Button variant="default" className="flex gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
