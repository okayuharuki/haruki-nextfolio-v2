// プロジェクト一覧
type Project = {
  title: string;
  description: string;
  icon: string;
};

export const PROJECTS_DATA: Project[] = [
  {
    title: "Portfolio Site",
    description: "Next.jsとTailwind CSSで構築した、自身のポートフォリオサイト。",
    icon: "🚀",
  },
  {
    title: "今日のランチ決定くん",
    description: "迷いを過去のものに。今日のランチを劇的に決定します。",
    icon: "🍚",
  },
  {
    title: "リアルタイム天気予報",
    description: "リアルタイムの天気予報を提供。都市の名前を入力して、現在の天気情報を取得できます。",
    icon: "🌤️",
  },
];

// スキル一覧
export const SKILL_DATA = [
  // --- Frontend (Modern) ---
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",

  // --- CMS & Backend ---
  "WordPress (SWELL / カスタマイズ)",
  "PHP (テンプレート・ロジック改修)",

  // --- Fundamentals ---
  "HTML5 / CSS3",
  "JavaScript",
  "jQuery",

  // --- Design & Tools ---
  "Figma",
  "GitHub (Issue管理)",
  "Vercel",

  // --- Business & Marketing ---
  "GA4 (設定)",
];
