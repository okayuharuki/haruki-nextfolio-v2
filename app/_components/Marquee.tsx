"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  // 流したい文字のリスト
  const words = ["REACT", "NEXT.JS", "TAILWIND CSS", "FRAMER MOTION", "FRONTEND DEVELOPER"];

  return (
    <section className="py-24 bg-black overflow-hidden flex flex-col justify-center relative z-20">
      {/* はみ出た部分を隠す(overflow-hidden) ＆ 斜め3度に傾ける(-rotate-3) */}
      <div className="w-full overflow-hidden bg-orange-500 py-4 -rotate-3 my-32">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 10,
          }}
        >
          <div className="flex whitespace-nowrap text-4xl font-bold text-black">
            {words.map((word, index) => (
              <span key={index} className="flex items-center gap-12 pr-12">
                {word}
                <span>✦</span>
              </span>
            ))}
          </div>
          <div className="flex whitespace-nowrap text-4xl font-bold text-black">
            {words.map((word, index) => (
              <span key={`second-${index}`} className="flex items-center gap-12 pr-12">
                {word}
                <span>✦</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
