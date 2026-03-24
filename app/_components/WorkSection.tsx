import { PROJECTS_DATA } from "@/app/_lib/data";
import WorkCard from "./WorkCard";

export default function WorkSection() {
  return (
    <section
      id="works"
      className="w-full max-w-7xl mx-auto py-32 px-6 md:px-12 flex flex-col items-center relative z-10"
    >
      <h2 className="text-5xl md:text-7xl font-bold mb-24 tracking-tighter text-white text-center">
        Featured <br className="md:hidden" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF851B] to-[#FFD700]">Works.</span>
      </h2>
      {/* ==========================================
          🃏 カードが重なる魔法のエリア
          ========================================== */}
      <div className="flex flex-col gap-24 w-full pb-32">
        {PROJECTS_DATA.map((project, index) => (
          <WorkCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
