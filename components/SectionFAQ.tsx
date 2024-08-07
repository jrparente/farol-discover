import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { cn } from "@/lib/utils";

type SectionFAQProps = {
  heading?: string;
  backgroundColor?: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

function SectionFAQ({
  heading = "Frequently Asked Questions",
  backgroundColor,
  faqs,
}: SectionFAQProps) {
  return (
    <section className={cn("my-12 py-12", backgroundColor)}>
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          {heading}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((question, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>
                <div className="flex items-center text-left">
                  <HelpCircle className="w-4 h-4 mr-1 hidden sm:inline-block" />{" "}
                  {question.question}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-left">{question.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default SectionFAQ;
