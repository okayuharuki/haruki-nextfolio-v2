"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

// ==========================================
// 親分（Header）からどんな「指示」をもらうか、ルール（型）を決める！
// ==========================================
export type MobileDrawerProps = {
  isOpen: boolean; // ドロワーが開いているかどうか
  onClose: () => void; // ドロワーを閉じるための関数
  navItems: { name: string; href: string }[]; // ナビゲーションアイテムのリスト
};

// ==========================================
// ( ) の中で、親分からの指示（Props）を受け取る！
// ==========================================
export default function MobileDrawer({ isOpen, onClose, navItems }: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {/* isOpen が「true」の時だけ、この黒い箱を画面に出す！ */}
      {isOpen && (
        // 黒くて透けてる全画面の箱（UI）
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }} // 消える時はまた上へ帰っていく！
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-screen z-40 bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-12 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="text-3xl font-bold tracking-widest text-gray-300 hover:text-[#FF851B] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
