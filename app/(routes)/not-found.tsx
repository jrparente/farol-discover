import Hero from "@/components/page-hero";

export default function NotFound() {
  return (
    <div className="h-full">
      <Hero
        title="Oops! This page got lost on the trail."
        subtitle="The page you are looking for might have been moved, renamed, or might never have existed. Let's get you back on track!"
      />
      <section className="my-2 py-2 w-full flex flex-col items-center">
        <div className="text-center">
          <div className="mt-6 flex flex-col items-center">
            <a
              href="/"
              className="text-base font-medium text-white bg-primary hover:bg-blue-500 px-4 py-2 rounded-lg"
            >
              Return to Homepage &rarr;
            </a>
            <p className="mt-4 text-gray-500">
              Or explore some of our popular sections:
            </p>
            <ul className="list-none text-center">
              <li className="my-2">
                <a
                  href="/tours-and-programs"
                  className="text-base font-medium text-primary hover:text-blue-500"
                >
                  Discover our Trails
                </a>
              </li>
              <li className="my-2">
                <a
                  href="/our-team"
                  className="text-base font-medium text-primary hover:text-blue-500"
                >
                  Learn About Us
                </a>
              </li>
              <li className="my-2">
                <a
                  href="/contact-us"
                  className="text-base font-medium text-primary hover:text-blue-500"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
