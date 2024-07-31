"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Program } from "@/sanity/types/types";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getPrograms } from "@/sanity/sanity-utils";
import { MapPin } from "lucide-react";

type ProgramsProps = {
  programs: Program[];
};

export default function FeaturedPrograms({
  programs: programsRef,
}: ProgramsProps) {
  const [sortOption, setSortOption] = useState("Newest");
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [destinationFilter, setDestinationFilter] = useState("All");
  const [programs, setPrograms] = useState<Program[]>([]);
  const [destinations, setDestinations] = useState<string[]>([]);

  // Fetch all programs and filter selected programs
  useEffect(() => {
    const fetchPrograms = async () => {
      const allPrograms = await getPrograms();

      const selectedPrograms: Program[] =
        programsRef && programsRef.length > 0
          ? programsRef
              .map((programRef) =>
                allPrograms.find((p: Program) => p._id === programRef._ref)
              )
              .filter((program): program is Program => !!program) // Type guard to remove undefined values
          : [];

      setPrograms(selectedPrograms);

      // Extract unique destinations
      const uniqueDestinations = Array.from(
        new Set(
          selectedPrograms.flatMap((program) => {
            // Log each program's location to debug
            console.log("Program Location:", program.location);
            return program.location || [];
          })
        )
      );
      setDestinations(uniqueDestinations);
    };

    fetchPrograms();
  }, [programsRef]);

  // Sorting logic
  const sortedPrograms = [...programs].sort((a, b) => {
    if (sortOption === "Newest") {
      return (
        new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
      );
    } else if (sortOption === "lastUpdated") {
      return (
        new Date(b._updatedAt).getTime() - new Date(a._updatedAt).getTime()
      );
    } else if (sortOption === "priceLowToHigh") {
      return (
        (a.price ? parseFloat(a.price) : Infinity) -
        (b.price ? parseFloat(b.price) : Infinity)
      );
    } else if (sortOption === "priceHighToLow") {
      return (
        (b.price ? parseFloat(b.price) : -Infinity) -
        (a.price ? parseFloat(a.price) : -Infinity)
      );
    }
    return 0;
  });

  // Filtering logic
  const filteredPrograms = sortedPrograms.filter((program) => {
    const matchesDifficulty =
      difficultyFilter === "All" || program.difficulty === difficultyFilter;
    const matchesCategory =
      categoryFilter === "All" ||
      (program.categories && program.categories.includes(categoryFilter));
    const matchesDestination =
      destinationFilter === "All" ||
      (program.location && program.location.includes(destinationFilter));
    return matchesDifficulty && matchesCategory && matchesDestination;
  });

  return (
    <section className="my-2 py-2">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16">
        <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Our Programs
        </h2>
        <p className="text-primary font-semibold text-sm mb-4">
          Showing {filteredPrograms.length} programs
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex flex-col gap-1">
            <label className="text-muted-foreground text-sm">Sort by:</label>
            <Select onValueChange={(value) => setSortOption(value as string)}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder={sortOption} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Newest">Newest</SelectItem>
                <SelectItem value="lastUpdated">Last Updated</SelectItem>
                <SelectItem value="priceLowToHigh">
                  Price: Low to High
                </SelectItem>
                <SelectItem value="priceHighToLow">
                  Price: High to Low
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-muted-foreground text-sm">
              Filter by Difficulty:
            </label>
            <Select
              onValueChange={(value) => setDifficultyFilter(value as string)}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder={difficultyFilter} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Moderate">Moderate</SelectItem>
                <SelectItem value="Challenging">Challenging</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-muted-foreground text-sm">
              Filter by Category:
            </label>
            <Select
              onValueChange={(value) => setCategoryFilter(value as string)}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder={categoryFilter} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Guided Tour">Guided Tours</SelectItem>
                <SelectItem value="Self-Guided Tour">
                  Self-Guided Tours
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-muted-foreground text-sm">
              Filter by Destination:
            </label>
            <Select
              value={destinationFilter}
              onValueChange={(value) => setDestinationFilter(value as string)}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue>
                  {destinationFilter === "All" ? "All" : destinationFilter}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                {destinations.map((destination, index) => (
                  <SelectItem key={index} value={destination}>
                    {destination}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-5">
          {filteredPrograms.map((program, index) => (
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
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <CardHeader className="px-6 py-4">
                  <CardTitle>
                    <h2 className="font-bold text-xl mb-2">{program.name}</h2>
                    <p className="flex items-center text-sm text-primary font-semibold tracking-wide uppercase">
                      <MapPin className="w-4 h-4 mr-1" />{" "}
                      {program.location.join(", ")}
                    </p>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-4 flex flex-col gap-3">
                  <p className="text-muted-foreground text-base">
                    {program.description}
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{program.duration} days</Badge>
                    <Badge variant="secondary">{program.difficulty}</Badge>
                    {program.categories && (
                      <Badge variant="secondary">{program.categories}</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
