import { Compass, MapPin, Smile } from "lucide-react";

type LandingStatsProps = {
  statsTitle: string;
  statsSubtitle: string;
  statsDescription: string;
  statsTours: string;
  statsCustomers: string;
  statsDestinations: string;
};

export default function LandingStats({
  statsTitle,
  statsSubtitle,
  statsDescription,
  statsTours,
  statsCustomers,
  statsDestinations,
}: LandingStatsProps) {
  return (
    <section className="bg-secondary py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            {statsTitle}
          </h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl">
            {statsSubtitle}
          </h3>
          <p className="mt-4 max-w-2xl text-xl lg:mx-auto text-muted-foreground">
            {statsDescription}
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
                {statsTours}
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
                {statsCustomers}
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
                {statsDestinations}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
