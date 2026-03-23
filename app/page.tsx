import TestCard from "@/app/_components/TestCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold mb-8">Hello, V2! 🚀</h1>

      {/* 1枚目のカード：お天気アプリのデータを渡す！ */}
      <TestCard title="お天気アプリ" description="リアルタイムな気象データを美しく表示します。" icon="🌤️" />

      {/* 2枚目のカード：ランチDeciderのデータを渡す！ */}
      <TestCard title="ランチDecider" description="迷いを過去のものに。今日のランチを劇的に決定します。" icon="🍱" />
    </div>
  );
}
