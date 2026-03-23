import WorkSection from "@/app/_components/WorkSection";
import HeroSection from "@/app/_components/HeroSection";
import Marquee from "@/app/_components/Marquee";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <Marquee />
      <WorkSection />
    </div>
  );
}
