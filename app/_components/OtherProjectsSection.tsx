import OtherProjectCard from "./OtherProjectCard";
import { ARCHIVE_PROJECTS_DATA } from "@/app/_lib/data";

export default function OtherProjectsSection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900 relative z-10">
      {/* セクションのヘッダー部分 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">Other Projects.</h2>
          <p className="text-gray-400 text-lg">基礎固めから最新技術まで、これまでの学習の軌跡。</p>
        </div>

        {/* 右側に配置するGitHubリンク */}
        <a
          href="https://github.com/okayuharuki" target="_blank" rel="noopener noreferrer"
          className="text-[#FF851B] hover:opacity-80 font-bold flex items-center gap-2 transition-opacity"
        >
          GitHubで見る <span>→</span>
        </a>
      </div>

      {/* メインの作品エリア（Grid部分） */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARCHIVE_PROJECTS_DATA.map((project, index) => (
          <OtherProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
