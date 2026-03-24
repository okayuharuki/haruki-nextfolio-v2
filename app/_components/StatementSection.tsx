"use client";

import { motion } from "framer-motion";

export default function StatementSection() {
  return (
    <section className="bg-black text-white w-full">
      <div className="min-h-screen flex items-center justify-center px-6 relative z-10">
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
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-pink-500 to-purple-500">
              そして、ランチへの飽くなき執念。
            </span>
            <br />
            最高のユーザー体験は、
            <br />
            遊び心から生まれる。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
