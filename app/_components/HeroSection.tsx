"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  // センサーを作る（HTMLの箱にくっつける準備）
  const targetRef = useRef<HTMLDivElement>(null);

  // センサーを滑走路にくっつけて、スクロールの進み具合（0〜1）を測る！
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"], // スクロールの開始と終了のタイミングを指定
  });

  const zoomScale = useTransform(scrollYProgress, [0, 1], [1, 40]);
  const zoomOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section ref={targetRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="absolute top-1/4 text-center z-10 w-full px-4 pt-15"
        >
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-400 mb-4">
            すべては、最高の体験のために。
          </h2>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-linear-to-br from-white to-gray-500">
            HARUKI.
          </h1>
          <p className="text-[#FF851B] font-bold tracking-widest mt-4">FRONTEND DEVELOPER</p>
        </motion.div>

        <motion.div
          style={{ scale: zoomScale, opacity: zoomOpacity }}
          className="w-25 h-25 md:w-60 md:h-60 bg-linear-to-tr from-orange-500 via-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_100px_rgba(249,115,22,0.4)] relative"
        >
          <div className="w-[90%] h-[90%] bg-black rounded-full flex items-center justify-center">
            <span className="text-5xl md:text-7xl"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
