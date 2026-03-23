// app/_components/TestCard.tsx

type TestCardProps = {
  title: string;
  description: string;
  icon: string;
};

// 「TestCard」という名前の部品（関数）を作りますよ、という宣言
export default function TestCard({ title, description, icon }: TestCardProps) {
  return (
    // ここに、ただのHTMLとTailwind（デザイン）を書くだけ！
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 w-64">
      <h2 className="text-xl font-bold text-white">
        {icon}
        {title}
      </h2>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
}
