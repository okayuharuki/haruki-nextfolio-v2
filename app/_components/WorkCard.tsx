"use client";

import { motion } from "framer-motion";

type WorkCardProps = {
  title: string;
  description: string;
  icon: string;
};

// 「WorkCard」という名前の部品（関数）を作りますよ、という宣言
export default function WorkCard({ title, description, icon }: WorkCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-zinc-900 border border-zinc-800 p-8 rounded-2xl w-full max-w-2xl overflow-hidden cursor-pointer"
    >
      {/* 隠し味：マウスが乗った時だけ、うっすらオレンジの光を照らす！ */}
      <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex items-start gap-6">
        <div className="text-5xl">{icon}</div>
        <div>
          <h2 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
            {title}
          </h2>
          <p className="text-gray-400 mt-2">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
