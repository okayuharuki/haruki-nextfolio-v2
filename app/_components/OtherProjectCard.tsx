"use client";

import { motion } from "framer-motion";
import type { ArchiveProject } from "@/app/_lib/data";

// 【何を受け取る？】ArchiveProject（過去作品のデータ）と、順番（index）
type OtherProjectsCardProps = {
  project: ArchiveProject;
  index: number;
};

export default function OtherProjectCard({ project, index }: OtherProjectsCardProps) {
  return (
    <motion.div
      // 【動き】少し下から、順番（index）に応じて時間差でポポンッ！と現れる
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      // 【見た目】黒い弁当箱。マウスが乗ると少しだけ明るくなる！
      // h-full をつけることで、隣のカードと高さが揃う。
      className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-800 transition-colors group flex flex-col justify-between h-full"
    >
      {/* 🏢 カードの上半分（アイコン・タイトル・説明） */}
      <div>
        <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left w-fit">{project.icon}</div>
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>
      </div>
      {/* 🏷️ カードの下半分（タグ・リンク） */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-bold text-gray-400 bg-black border border-zinc-700 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* リンク（マウスが乗るとテーマカラーのオレンジ色に光る！） */}
        <a
          href={project.link}
          className="text-sm font-bold text-white flex items-center gap-2 group-hover:text-[#FF851B] transition-colors mt-2"
        >
          詳細を見る <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </motion.div>
  );
}
