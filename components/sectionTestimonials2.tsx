import { getTestimonials } from "@/sanity/sanity-utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Quote, User2 } from "lucide-react";
import Link from "next/link";

async function SectionTestimonials({ title }: { title: string }) {
  let testimonials = await getTestimonials();

  // Sort testimonials by creation date from newest to oldest
  testimonials = testimonials.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="my-2 py-2">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16">
        <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          {title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials &&
            testimonials.length > 0 &&
            testimonials.map((testimonial) => (
              <div
                key={testimonial._id}
                className="grid grid-cols-1 md:grid-cols-3 p-4 mx-2 my-4 gap-8 bg-white border border-gray-200 rounded-lg shadow-md sm:flex-row sm:items-start"
              >
                <div className="flex flex-col items-center justify-center h-full text-center md:col-span-1">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full sm:w-20 sm:h-20">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>
                        <User2 fill="currentColor" />
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <p className="mb-2 text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.date}</p>
                </div>

                <div className="h-full flex flex-col items-center justify-center text-center md:col-span-2">
                  <Quote
                    className="size-5 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    fill="currentColor"
                  />
                  <p className="text-gray-800 font-medium leading-relaxed text-balance italic">
                    {testimonial.message}
                  </p>
                  {testimonial.tour && (
                    <p className="mt-4 text-sm text-gray-500">
                      Tour:{" "}
                      <Link
                        href={testimonial.tour.slug}
                        className="text-primary hover:text-brand underline font-medium"
                      >
                        {testimonial.tour.name}
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default SectionTestimonials;
