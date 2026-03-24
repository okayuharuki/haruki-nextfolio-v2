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

  // 魔法の計算式１：スクロール量（0〜1）を、文字の大きさ（1倍〜40倍）に変換
  const scale = useTransform(scrollYProgress, [0, 1], [1, 40]);

  // 魔法の計算式２：最後の方（0.8〜1）で、文字をだんだん透明（1〜0）にして消す！
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <section ref={targetRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div style={{ scale, opacity }} className="text-center">
          <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tighter">HARUKI.</h1>

          <p className="text-orange-500 font-bold tracking-widest mt-4">FRONTEND DEVELOPER</p>
        </motion.div>
      </div>
    </section>
  );
}
