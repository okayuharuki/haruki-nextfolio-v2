"use client";

import { useState } from "react";
import Link from "next/link";
import MobileDrawer from "./MobileDrawer";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "ABOUT", href: "#about" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      {/* 側の箱（画面の一番上に固定する魔法たち）
     fixed: 画面に固定, top-0: 一番上, z-50: 全ての要素より手前に出す
     bg-black/50 と backdrop-blur-md で「半透明のすりガラス」を作ります！ */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        {/* 中身を横並びにする箱 */}
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-widest text-white hover:text-[#FF851B] transition-colors"
          >
            HARUKI.
          </Link>
          {/* スマホで隠す（hidden）＆ PCで横並び（md:flex） */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}
          </nav>
          {/* スマホ版ハンバーガーボタン（md:hidden でスマホの時だけ表示！） */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:text-[#FF851B] transition-colors"
          >
            <span className="sr-only">メニュー</span>
            {/* 三本線のアイコン（SVGコードで描く画像です） */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      <MobileDrawer
        isOpen={isOpen} // 「今のスイッチはこれだ！」
        onClose={() => setIsOpen(false)} // 「閉じる時はこのトランシーバーのボタンを押せ！」
        navItems={navItems} // 「メニューの文字はこれを使え！」
      />
    </>
  );
}
