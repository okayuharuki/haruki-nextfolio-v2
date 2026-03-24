import Link from "next/link";

export default function Header() {
  return (
    // 側の箱（画面の一番上に固定する魔法たち）
    // fixed: 画面に固定, top-0: 一番上, z-50: 全ての要素より手前に出す
    // bg-black/50 と backdrop-blur-md で「半透明のすりガラス」を作ります！
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      {/* 中身を横並びにする箱 */}
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-widest text-white hover:text-[#FF851B] transition-colors">
          HARUKI.
        </Link>
        <nav className="flex gap-8 text-sm font-medium text-gray-300">
          <Link href="#about" className="hover:text-white transition-colors">
            ABOUT
          </Link>
          <Link href="#works" className="hover:text-white transition-colors">
            WORKS
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}
