"use client";

import { motion, Variants } from "framer-motion";

// ==========================================
// アニメーションの設計図（Variants）
// ==========================================
// ① 親分のルール：「画面に入ったら、0.4秒間隔（staggerChildren）で子分たちを順番に呼び出せ！」
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5, // 子分たちを0.5秒間隔で呼び出す
    },
  },
};
// ② 子分のルール：「呼ばれたら、下から30px上にフワッと現れろ！」
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

export default function StatementSection() {
  return (
    <section className="bg-black text-white w-full">
      <div className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-5xl text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-4xl mb-10 md:text-7xl font-bold leading-tight text-gray-100 tracking-tight"
          >
            ランチへの飽くなき執念。
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-4xl mb-10 md:text-7xl font-bold leading-tight text-gray-100 tracking-tight"
          >
            日常の悩みを、
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-pink-500 to-purple-500">
              ちょっと楽しい体験に変える。
            </span>
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-4xl md:text-7xl font-bold leading-tight text-gray-100 tracking-tight"
          >
            モダンな技術と遊び心で、
            <br />
            チームの可能性を最大化する。
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
