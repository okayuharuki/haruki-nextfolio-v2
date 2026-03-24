// app/_components/ContactSection.tsx
"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  // 共通のカードスタイル（ホバーすると少し浮き上がって、枠線が光る魔法！）
  const cardClass =
    "bg-zinc-900 border border-zinc-800 rounded-3xl p-10 flex flex-col justify-between group hover:border-zinc-500 transition-all duration-500 cursor-pointer";

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
        className="grid grid-cols-1 md:grid-cols-2 gap-6" // 👈 左と右で「2つのマス目」を作る！
      >
        {/* ① 左側：巨大なEmailカード */}
        {/* hrefに mailto: を入れるとメールソフトが立ち上がります */}
        <a href="mailto:okayuharuki@gmail.com" className={`${cardClass} min-h-60`}>
          <div>
            <p className="text-gray-400 text-sm font-medium tracking-widest mb-2">EMAIL</p>
            {/* 親（group）がホバーされたら、文字色をオレンジ（group-hover:text-orange-400）にする！ */}
            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-orange-400 transition-colors">
              okayuharuki@gmail.com
            </h3>
          </div>

          {/* group-hover:-translate-y-1（上に動け） group-hover:translate-x-1（右に動け） */}
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
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-row items-center justify-between group hover:border-zinc-500 transition-all duration-500 cursor-pointer"
          >
            <div>
              <p className="text-gray-400 text-sm font-medium tracking-widest mb-1">GITHUB</p>
              <h3 className="text-xl font-bold text-white">okayuharuki</h3>
            </div>

            <span className="text-2xl text-gray-500 group-hover:text-white transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300">
              ↗
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
