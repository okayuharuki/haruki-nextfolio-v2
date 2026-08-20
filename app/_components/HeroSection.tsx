"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function HeroSection() {
  /* 💡 【修正点①】警告の最大の原因だった targetRef と target 指定を完全に削除！
     ページ全体のスクロール量（scrollY）を直接監視する、最も軽くて安全な方法に切り替えます。 */
  const { scrollY } = useScroll();

  /* 💡 スマホでのカクつき対策：生のscrollYは指の動きのノイズをそのまま拾ってしまうため、
     useSpringで滑らかに補間してからtransformに渡す。 */
  const smoothScrollY = useSpring(scrollY, { stiffness: 300, damping: 40, mass: 0.5 });

  /* 💡 【修正点②】割合（0〜1）ではなく、実際のスクロールピクセル数（px）でマッピングします。
     h-[300vh]（画面3枚分分スクロールできる長さ）に合わせて、直感的な数値に調整しています。
     scaleの最大値は40→18に抑え、拡大時の再ラスタライズ負荷を軽減。 */
  const zoomScale = useTransform(smoothScrollY, [0, 1200], [1, 18]);
  const zoomOpacity = useTransform(smoothScrollY, [900, 1200], [1, 0]);
  const textY = useTransform(smoothScrollY, [0, 400], [0, -100]);
  const textOpacity = useTransform(smoothScrollY, [0, 400], [1, 0]);

  return (
    /* 💡 【修正点③】ref={targetRef} を削除してスッキリさせました */
    <section className="h-[300vh] relative">
      <div className="sticky top-0 h-dvh flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: textY, opacity: textOpacity, willChange: "transform, opacity" }}
          className="absolute top-1/4 text-center z-10 w-full px-4 pt-15"
        >
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-400 mb-4">
            すべては、最高の経験のために。
          </h2>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-linear-to-br from-white to-gray-500">
            HARUKI.
          </h1>
          <p className="text-[#FF851B] font-bold tracking-widest mt-4">FRONTEND DEVELOPER</p>
        </motion.div>

        <motion.div
          style={{ scale: zoomScale, opacity: zoomOpacity, willChange: "transform, opacity" }}
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
