"use client";

import { useEffect, useRef, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote, User2 } from "lucide-react";
import { Transition } from "@headlessui/react";

import { testimonials } from "@/constants";

export default function Testimonials() {
  const [active, setActive] = useState<number>(0);

  const prevSlide = () => {
    setActive((prevActive) =>
      prevActive - 1 < 0 ? testimonials.length - 1 : prevActive - 1
    );
  };

  const nextSlide = () => {
    setActive((prevActive) =>
      prevActive + 1 === testimonials.length ? 0 : prevActive + 1
    );
  };

  return (
    <section className="my-8 bg-secondary py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <Transition
            key={testimonial.name}
            show={active === index}
            enter={`transition ease-in-out duration-500`}
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave={`transition ease-out duration-100`}
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <Quote
                  className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  fill="currentColor"
                />
                <blockquote>
                  <p className="text-2xl font-medium text-gray-900 dark:text-white">
                    &quot;{testimonial.message}&quot;
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>
                      <User2 fill="currentColor" />
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                      {testimonial.location}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </Transition>
        ))}
      </div>
      <div className="max-w-screen-xl mx-auto flex gap-4 py-8 mt-4 items-center justify-center">
        <Button variant="ghost" onClick={prevSlide}>
          <ArrowLeft />
          <span className="sr-only">Previous</span>
        </Button>
        <Button variant="ghost" onClick={nextSlide}>
          <ArrowRight />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </section>
  );
}
