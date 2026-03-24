"use client";

import { motion } from "framer-motion";
import { SKILL_DATA } from "@/app/_lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="bg-black text-white w-full">
      <div className="min-h-screen flex item-center justify-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl text-center"
        >
          <p className="text-4xl md:text-7xl font-bold leading-tight text-gray-100 tracking-tight">
            洗練されたモダンな設計。
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">
              そして、ランチへの飽くなき執念。
            </span>
            <br />
            最高のユーザー体験は、
            <br />
            遊び心から生まれる。
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 左側：自己紹介文（横2マス分を使う） */}
          <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6">Profile</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
              <p>こんにちは！フロントエンド開発に情熱を注ぐエンジニア、HARUKIです。</p>
              <p>
                「使いやすくて、ちょっと心が躍る」ようなUIを作るのが大好きです。 特にReactやNext.js、Tailwind
                CSSを使ったモダンなWeb開発を得意としており、 アニメーションを取り入れたリッチな表現を追求しています。
              </p>
              <p>趣味はフットサルと美味しいお店を探すことです🍔</p>
            </div>
          </div>

          {/* 右側：スキルタグ（1マス分） */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex flex-col">
            <h3 className="text-2xl font-bold mb-6">Skills</h3>
            <div className="flex flex-wrap gap-2 mt-auto">
              {SKILL_DATA.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-black border border-zinc-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
