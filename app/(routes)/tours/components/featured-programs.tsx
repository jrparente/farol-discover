"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Program } from "@/sanity/types/types";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ProgramsProps = {
  programs: Program[];
};

export default function FeaturedPrograms({ programs }: ProgramsProps) {
  const [sortOption, setSortOption] = useState("newest");
  const [filterOption, setFilterOption] = useState("all");

  // Sorting logic
  const sortedPrograms = [...programs].sort((a, b) => {
    if (sortOption === "newest") {
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
    if (filterOption === "all") return true;
    return program.difficulty === filterOption;
  });

  return (
    <section className="my-8 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Our Programs
        </h2>
        <div className="flex gap-2 mt-5">
          <Select onValueChange={(value) => setSortOption(value as string)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={"Sort by:"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="lastUpdated">Last Updated</SelectItem>
              <SelectItem value="priceLowToHigh">Price: Low to High</SelectItem>
              <SelectItem value="priceHighToLow">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setFilterOption(value as string)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={"Filter by Difficulty:"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Easy">Easy</SelectItem>
              <SelectItem value="Moderate">Moderate</SelectItem>
              <SelectItem value="Challenging">Challenging</SelectItem>
            </SelectContent>
          </Select>
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
