// app/_components/ContactSection.tsx
"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  // 共通のカードスタイル（ホバーすると少し浮き上がって、枠線が光る魔法！）
  const cardBase =
    "bg-zinc-900 border border-zinc-800 rounded-3xl p-5 md:p-10 group hover:border-zinc-500 transition-all duration-500 cursor-pointer";

  return (
    <section id="contact" className="py-32 w-full max-w-7xl mx-auto px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 text-left"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
          次は、あなたと。
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-400 to-white">
            最高のプロジェクトを。
          </span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        // 文字の少し後（delay: 0.2）にフワッと現れるようにズラしています！
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6" // 👈 左と右で「2つのマス目」を作る！
      >
        {/* ① 左側：巨大なEmailカード */}
        {/* hrefに mailto: を入れるとメールソフトが立ち上がります */}
        <a href="mailto:okayuharuki@gmail.com" className={`${cardBase} flex flex-col md:col-span-2 justify-between min-h-30`}>
          <div>
            <p className="text-gray-400 text-sm font-medium tracking-widest mb-2">EMAIL</p>
            {/* 親（group）がホバーされたら、文字色をゴールデンアンバーにする！ */}
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FF851B] transition-colors">
              okayuharuki@gmail.com
            </h3>
          </div>

          {/* 矢印ボタン（ホバーで白に変わる） */}
          <div className="self-end w-12 h-12 bg-black border border-zinc-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
            <span className="text-xl transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
              ↗
            </span>
          </div>
        </a>

        {/* ② 右側：SNSカード */}
        <div className="grid gap-6">
          {/* GitHub カード */}
          <a
            href="https://github.com/okayuharuki"
            target="_blank"
            rel="noopener noreferrer"
            className={`${cardBase} flex flex-col justify-between min-h-30`}
          >
            <div>
              <p className="text-gray-400 text-sm font-medium tracking-widest mb-2">GITHUB</p>
              <h3 className="text-xl font-bold text-white group-hover:text-[#FF851B] transition-colors">okayuharuki</h3>
            </div>

            {/* 矢印ボタン（Emailカードと統一） */}
            <div className="self-end w-12 h-12 bg-black border border-zinc-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
              <span className="text-xl transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
                ↗
              </span>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
