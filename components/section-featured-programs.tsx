import { Program } from "@/sanity/types/types";
import FeaturedProgramsClient from "./sectionFeaturedProgramsClient";
import { getProgramsQuery } from "@/sanity/lib/sanity.queries";
import { sanityFetch } from "@/sanity/lib/sanity.fetch";
import { getLanguageFromLocale } from "@/sanity/sanity-utils";

export default async function FeaturedPrograms({
  language,
}: {
  language: string;
}) {
  const query = getProgramsQuery;
  const locale = getLanguageFromLocale(language);
  const queryParams = { language: locale };
  const programData = await sanityFetch<Program[]>({
    query,
    params: queryParams,
  });

  console.log("programData", programData);

  return (
    <FeaturedProgramsClient initialPrograms={programData} language={language} />
  );
}
