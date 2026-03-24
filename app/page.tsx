import WorkSection from "@/app/_components/WorkSection";
import HeroSection from "@/app/_components/HeroSection";
import MarqueeSection from "@/app/_components/MarqueeSection";
import AboutSection from "@/app/_components/AboutSection";
import ContactSection from "@/app/_components/ContactSection";
import StatementSection from "@/app/_components/StatementSection";

export default function Home() {
  return (
    <main className="bg-black">
      <HeroSection />
      <MarqueeSection />
      <StatementSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
