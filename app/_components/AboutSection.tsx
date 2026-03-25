"use client";

import { motion } from "framer-motion";
import { SKILL_DATA } from "@/app/_lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 左側：自己紹介文（横2マス分を使う） */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 bg-zinc-900 border border-zinc-800 p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-6">Profile</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
              <p>こんにちは、HARUKIです。</p>
              <p>
                「使いやすい」だけでなく、「使っていてちょっと楽しくなる」ような体験をつくることを大切にしています。
              </p>
              <p>
                現在はフロントエンドエンジニアとして、ReactやNext.jsを使った開発に取り組みながら、ユーザーが迷わず直感的に使える設計や、思わず使いたくなるようなUIを意識して開発しています。
              </p>
              <p>グルメや旅行が好きで、「人の時間を少し豊かにするサービス」を作ることが自分のモチベーションです。</p>
              <p>
                これからは、技術だけでなく体験や価値提供まで考えられるエンジニアとして成長していきたいと考えています。
              </p>
            </div>
          </motion.div>

          {/* 右側：スキルタグ（1マス分） */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-6">Skills</h3>
            <div className="flex flex-wrap gap-2 mt-auto">
              {SKILL_DATA.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-black border border-zinc-700 rounded-full text-sm font-medium text-gray-400 cursor-default hover:text-[#FF851B] hover:border-[#FF851B] transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
