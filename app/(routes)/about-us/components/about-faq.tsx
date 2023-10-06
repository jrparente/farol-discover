import { faq } from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function AboutFaq() {
  return (
    <section className="my-8 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faq.map((question, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>
                <div className="flex items-center text-left">
                  <HelpCircle className="w-4 h-4 mr-1 hidden sm:inline-block" />{" "}
                  {question.title}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-left">{question.question}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
