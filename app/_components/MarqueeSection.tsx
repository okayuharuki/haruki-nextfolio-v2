"use client";

import { motion } from "framer-motion";

export default function MarqueeSection() {
  // 流したい文字のリスト
  const words = ["REACT", "NEXT.JS", "TAILWIND CSS", "FRAMER MOTION", "FRONTEND DEVELOPER"];

  return (
    <section className="py-24 bg-black overflow-hidden flex flex-col justify-center relative z-20">
      {/* はみ出た部分を隠す(overflow-hidden) ＆ 斜め3度に傾ける(-rotate-3) */}
      <div className="w-full overflow-hidden bg-[#FF851B] shadow-[0_0_100px_rgba(249,115,22,0.4)] py-4 -rotate-3 my-32">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 10,
          }}
        >
          {[0, 1].map((copy) => (
            <div key={copy} className="flex whitespace-nowrap font-bold text-black text-5xl md:text-7xl uppercase">
              {words.map((word, index) => (
                <span key={index} className="flex items-center gap-12 pr-12">
                  {word}
                  <span>✦</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
