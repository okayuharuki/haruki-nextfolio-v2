import { PROJECTS_DATA } from "@/app/_lib/data";
import WorkCard from "./WorkCard";

export default function WorkSection() {
  return (
    <section id="works" className="w-full max-w-7xl mx-auto py-20 px-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-12 tracking-widest text-white">WORKS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {PROJECTS_DATA.map((project, index) => (
          <WorkCard key={index} title={project.title} description={project.description} icon={project.icon} />
        ))}
      </div>
    </section>
  );
}
