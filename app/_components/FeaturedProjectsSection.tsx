import { PROJECTS_DATA } from "@/app/_lib/data";
import FeaturedProjectCard from "./FeaturedProjectCard";

export default function FeaturedProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto py-32 px-6 md:px-12 flex flex-col items-center relative z-10"
    >
      <h2 className="text-5xl md:text-7xl font-bold mb-16 tracking-tighter text-white text-center">
        Featured <br className="md:hidden" />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF851B] to-[#FFD700]">Projects.</span>
      </h2>
      {/* ==========================================
          🃏 カードが重なる魔法のエリア
          ========================================== */}
      <div className="flex flex-col gap-6 md:gap-24 w-full pb-32">
        {PROJECTS_DATA.map((project, index) => (
          <FeaturedProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
