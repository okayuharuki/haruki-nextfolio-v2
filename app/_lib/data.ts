{
  /* ==========================================
          プロジェクト一覧
    ========================================== */
}
export type Project = {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  link: string;
  accentColor: string;
  gradientFrom: string;
};

export const PROJECTS_DATA: Project[] = [
  {
    title: "Portfolio Site",
    description:
      "Next.jsとTailwind CSSで構築した、自身のポートフォリオサイト。最新のモダンWebデザインと、Framer Motionによる滑らかなアニメーションを体現しました。",
    icon: "🚀",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
    accentColor: "text-orange-500", // オレンジ色の文字
    gradientFrom: "from-orange-500/20", // オレンジ色の光
  },
  {
    title: "今日のランチ決定くん",
    description:
      "迷いを過去のものに。シンプルで直感的なUIと独自のアルゴリズムで、今日のランチを劇的に決定する究極のサポートツールです。",
    icon: "🍚",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    link: "#",
    accentColor: "text-blue-400", // 2枚目はブルーに！
    gradientFrom: "from-blue-500/20",
  },
  {
    title: "リアルタイム天気予報",
    description:
      "都市の名前を入力するだけで、外部APIからリアルタイムの気象情報を提供。非同期処理を活用した実用的なツールです。",
    icon: "🌤️",
    tags: ["API", "JavaScript", "Tailwind CSS"],
    link: "#",
    accentColor: "text-green-400", // 3枚目はグリーンに！
    gradientFrom: "from-green-500/20",
  },
];

{
  /* ==========================================
          その他のプロジェクト一覧
    ========================================== */
}
// 上にあるプロジェクトの型からaccentColorとgradientFromを抜いたものを定義
export type ArchiveProject = Omit<Project, "accentColor" | "gradientFrom">;

export const ARCHIVE_PROJECTS_DATA: ArchiveProject[] = [
  {
    title: "コーポレートサイト模写",
    description:
      "HTML/CSSの基礎を固めるために作成。レスポンシブデザイン（スマホ対応）のピクセルパーフェクトな実装にこだわりました。",
    tags: ["HTML5", "CSS3", "JavaScript"],
    icon: "🏢",
    link: "#",
  },
  {
    title: "オリジナルブログ",
    description:
      "既存テーマを使わず、自作テーマで構築したWordPressサイト。PHPによるループ処理やカスタム投稿タイプを実装しています。",
    tags: ["WordPress", "PHP", "Sass"],
    icon: "✍️",
    link: "#",
  },
  {
    title: "シンプルなTodoアプリ",
    description:
      "Reactの基礎（useState, useEffect）を学ぶための第一歩。データの追加・削除・完了状態の切り替えを実装しました。",
    tags: ["React", "Tailwind CSS"],
    icon: "✅",
    link: "#",
  },
];

{
  /* ==========================================
          スキル一覧
    ========================================== */
}
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
