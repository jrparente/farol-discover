import SanityImage from "@/components/SanityImage";
import { Compass, MapPin, Smile } from "lucide-react";

type LandingStatsProps = {
  statsTitle?: string;
  statsSubtitle?: string;
  statsDescription?: string;
  stats?: {
    title: string;
    value: string;
    icon: any;
  }[];
};

export default function CompanyStatistics({
  statsTitle,
  statsSubtitle,
  statsDescription,
  stats,
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
            {stats &&
              stats.length > 0 &&
              stats.map((stat) => (
                <div key={stat.title} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-white">
                      <SanityImage
                        source={stat.icon}
                        alt={stat.title}
                        className="size-8"
                      />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium ">
                      {stat.title}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-3xl font-extrabold tracking-tight text-primary">
                    {stat.value}
                  </dd>
                </div>
              ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
