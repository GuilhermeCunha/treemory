import { Topbar } from "./components/top-bar";
import { HeroSection } from "./components/hero-section";
import { FeaturesSection } from "./components/features-section";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Topbar className="sticky top-0 z-20" />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}
