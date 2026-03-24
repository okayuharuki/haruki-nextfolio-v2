import WorkSection from "@/app/_components/WorkSection";
import HeroSection from "@/app/_components/HeroSection";
import Marquee from "@/app/_components/Marquee";
import AboutSection from "@/app/_components/AboutSection";
import ContactSection from "@/app/_components/ContactSection";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <Marquee />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
