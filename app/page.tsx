import WorkSection from "@/app/_components/WorkSection";
import HeroSection from "@/app/_components/HeroSection";
import Marquee from "@/app/_components/Marquee";
import AboutSection from "@/app/_components/AboutSection";
import ContactSection from "@/app/_components/ContactSection";
import StatementSection from "@/app/_components/StatementSection";

export default function Home() {
  return (
    <main className="bg-black">
      <HeroSection />
      <Marquee />
      <StatementSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </main>
  );
}
