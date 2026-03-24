"use client";

import { motion } from "framer-motion";
import type { Project } from "@/app/_lib/data";

type WorkCardProps = {
  project: Project;
  index: number;
};

export default function WorkCard({ project, index }: WorkCardProps) {
  
  // くっつく位置をズラす計算
  const stickyTopPosition = `calc(100px + ${index} * 50px)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      
      // max-w-2xl という制限を外し、横長の巨大な弁当箱（flex-col md:flex-row）
      className="sticky group relative bg-zinc-900 border border-zinc-800 p-8 md:p-16 rounded-[2.5rem] w-full flex flex-col md:flex-row items-center gap-12 shadow-2xl"
      style={{ top: stickyTopPosition }}
    >
      
      {/* ==========================================
          💳 左半分：文字とタグとボタンのエリア
          ========================================== */}
      <div className="w-full md:w-1/2">
        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
          {project.title}
        </h3>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          {project.description}
        </p>
        
        {/* data.ts で追加した「技術タグ」を並べる！ */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-black border border-zinc-700 text-gray-300 px-4 py-2 rounded-full text-sm font-bold">
              {tag}
            </span>
          ))}
        </div>
        
        {/* data.ts で追加した「色（accentColor）」を使ってボタンを光らせる！ */}
        <a href={project.link} className={`${project.accentColor} text-lg font-bold hover:opacity-80 transition-opacity flex items-center gap-2`}>
          アプリを見る <span>→</span>
        </a>
      </div>

      {/* ==========================================
          💳 右半分：巨大なアイコンと光のエリア
          ========================================== */}
      <div className="w-full md:w-1/2 bg-black rounded-[2rem] aspect-video flex items-center justify-center border border-zinc-800 overflow-hidden relative shadow-inner">
        
        {/* data.ts で追加した「光の色（gradientFrom）」を背景にフワッと敷く！ */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
        
        {/* 巨大なアイコンが、ホバーで少しだけ前に迫ってくる！ */}
        <span className="text-8xl md:text-9xl relative z-10 group-hover:scale-110 transition-transform duration-500 cursor-pointer">
          {project.icon}
        </span>
      </div>

    </motion.div>
  );
}