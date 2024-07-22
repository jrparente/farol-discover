import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Program } from "@/sanity/types/types";

type ProgramsProps = {
  programs: Program[];
};

export default async function FeaturedPrograms({ programs }: ProgramsProps) {
  return (
    <section className="my-8 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-5">
          {programs.map((program, index) => (
            <Link key={index} href={`/tours/${program.slug}`}>
              <Card className="relative">
                {program.featured && (
                  <Badge
                    variant="destructive"
                    className="rounded absolute top-0 left-0 m-2 z-20"
                  >
                    Featured
                  </Badge>
                )}
                <div className="relative h-64 w-full rounded-t-lg overflow-hidden">
                  <Image
                    src={program.image!}
                    alt={program.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardHeader className="px-6 py-4">
                  <CardTitle className="font-bold text-xl mb-2">
                    {program.name}
                  </CardTitle>
                  <p className="text-muted-foreground text-base">
                    {program.description}
                  </p>
                </CardHeader>
                <CardContent className="px-6 p-4 md:p-6">
                  <Badge variant="secondary">{program.duration} days</Badge>
                  <Badge variant="secondary">{program.difficulty}</Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
