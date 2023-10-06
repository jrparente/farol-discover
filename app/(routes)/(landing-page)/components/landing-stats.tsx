import { Compass, MapPin, Smile } from "lucide-react";

export default function LandingStats() {
  return (
    <section className="bg-secondary py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Farol Discover
          </h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl">
            Where Your Adventure Begins
          </h3>
          <p className="mt-4 max-w-2xl text-xl lg:mx-auto text-muted-foreground">
            Farol Discover is your trusted guide to Portugal&apos;s hidden
            treasures, offering unparalleled experiences crafted by locals.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-white">
                  <MapPin className="text-primary" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium ">
                  Tours Given
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-3xl font-extrabold tracking-tight text-primary">
                2K+
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-white">
                  <Smile className="text-primary" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium ">
                  Satisfied Customers
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-3xl font-extrabold tracking-tight text-primary">
                100%
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-white">
                  <Compass className="text-primary" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium ">
                  Destinations Covered
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-3xl font-extrabold tracking-tight text-primary">
                10+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
