import { Badge } from "@/components/ui/badge";
import Hero from "@/components/page-hero";
import { Check, Clock, Flag, HelpCircle, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getPrograms } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import ImageGallery from "@/components/image-gallery";

export default async function TourDetail({
  params,
}: {
  params: { id: string };
}) {
  const programs = await getPrograms();
  const { id } = params;

  const program = programs.find((item) => item.slug === id);

  if (!program) {
    return <div>Loading or not found...</div>;
  }
  return (
    <div className="h-full">
      <Hero
        title={program.name}
        subtitle={program.description}
        image={program.image}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2 flex flex-col space-y-10">
            {/* Program details */}
            <div>
              <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Details
              </h2>
              <p className="text-muted-foreground text-base mb-2">
                <PortableText value={program.expandedDescription} />
              </p>
            </div>

            {/* Itinerary */}
            {program.itinerary && (
              <div>
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Itinerary
                </h2>
                <ul className="mt-4 space-y-4">
                  {program.itinerary.map((dayDetail, index) => (
                    <li key={index}>
                      <div className="flex flex-col justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold">
                            Day {dayDetail.day}: {dayDetail.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {dayDetail.description}
                          </p>
                        </div>
                        {dayDetail.meals && (
                          <div className="mt-2">
                            <span className="text-sm font-light">
                              Meals: {dayDetail.meals.join(", ")}
                            </span>
                          </div>
                        )}
                      </div>
                      {dayDetail.notes && (
                        <p className="mt-2 text-xs  italic">
                          {dayDetail.notes}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* Sidebar */}
          <div className="md:col-span-1 flex flex-col gap-8 bg-muted rounded-lg p-4 lg:p-8">
            {/* Aditional Info */}
            <div>
              <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Additional Info
              </h2>
              <div className="flex flex-col justify-start items-start gap-2">
                {program.featured && (
                  <Badge variant="destructive">Featured</Badge>
                )}
                <Badge variant="outline">
                  <Clock className="w-3 h-3 mr-1" />
                  {program.duration} days
                </Badge>
                <Badge variant="outline">
                  <Flag className="w-3 h-3 mr-1" />
                  {program.difficulty}
                </Badge>
              </div>
            </div>

            {/* Program Highlights */}
            {program.highlights && program.highlights.length > 0 && (
              <div>
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Highlights:
                </h2>
                <div className="flex flex-col justify-start items-start gap-2">
                  {program.highlights?.map((highlight, index) => (
                    <Badge key={index}>{highlight}</Badge>
                  ))}
                </div>
              </div>
            )}

            {/* What's Included and What's Not */}
            {program.whatsIncluded && (
              <div>
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  What&apos;s Included
                </h2>
                <ul>
                  {program.whatsIncluded.map((item, index) => (
                    <li key={index} className="flex items-center gap-1 mb-1">
                      <Check className="w-5 h-5 bg-primary/10 text-primary rounded-lg p-1" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {program.whatsNotIncluded && (
              <div>
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  What&apos;s Not Included
                </h2>
                <ul>
                  {program.whatsNotIncluded.map((item, index) => (
                    <li key={index} className="flex items-center gap-1 mb-1">
                      <X className="w-5 h-5 bg-destructive text-destructive-foreground rounded-lg p-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* FAQs */}
            {program.faqs && program.faqs.length > 0 && (
              <div>
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  FAQ
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {program.faqs.map((question, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger>
                        <div className="flex items-center">
                          <HelpCircle className="w-4 h-4 mr-1" />{" "}
                          {question.question}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>{question.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
          </div>
          {/* Close Sidebar */}
        </div>
        {/* Close main grid */}
        {program.gallery &&
          program.gallery.length > 0 &&
          program.gallery[0].images && (
            <ImageGallery images={program.gallery[0].images} />
          )}
      </div>
    </div>
  );
}
