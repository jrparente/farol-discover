import LandingCta from "./components/landing-cta";
import LandingFeatures from "./components/landing-features";
import LandingHero from "./components/landing-hero";
import ProgramsOverview from "./components/programs-overview";
import LandingStats from "./components/landing-stats";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <div className="h-full">
      <LandingHero />
      <LandingStats />
      <LandingFeatures />
      <ProgramsOverview />
      <Testimonials />
      <LandingCta />
    </div>
  );
}
