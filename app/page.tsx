import HeroSection from "@/app/_components/HeroSection";
import MarqueeSection from "@/app/_components/MarqueeSection";
import AboutSection from "@/app/_components/AboutSection";
import FeaturedProjectsSection from "@/app/_components/FeaturedProjectsSection";
import OtherProjectsSection from "@/app/_components/OtherProjectsSection";
import ContactSection from "@/app/_components/ContactSection";
import StatementSection from "@/app/_components/StatementSection";

export default function Home() {
  return (
    <main className="bg-black">
      <HeroSection />
      <MarqueeSection />
      <StatementSection />
      <FeaturedProjectsSection />
      <OtherProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
