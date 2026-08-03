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
  openInNewTab?: boolean; // falseにすると_blank無効（デフォルトはtrue）
};

export const PROJECTS_DATA: Project[] = [
  {
    title: "Football Connect",
    description:
      "サッカー / フットサル / ソサイチのチーム運営を1つにまとめるWebアプリです。出欠管理・選手名鑑・試合記録・個人タイトル集計に加え、選手をドラッグで配置しコマ送り再生できる作戦ボードを備えています。Next.js 16 + React 19 を Cloudflare Workers 上で動かし、Supabase の行レベルセキュリティでチーム単位のデータ分離を実装。Stripe によるチーム単位のサブスクリプション課金まで含めて実運用しています。開発にはAIコーディング（Claude Code）を全面的に活用し、実装だけでなくセキュリティレビューやリファクタリングにも用いています。",
    icon: "⚽",
    tags: ["Next.js", "TypeScript", "Cloudflare Workers", "Supabase", "Tailwind CSS"],
    link: "https://football-connect.app/", // ※実際のアプリURLに書き換えてください
    accentColor: "text-purple-400", // 鮮やかなパープルで本格SaaS感を演出
    gradientFrom: "from-purple-500/20",
    openInNewTab: true,
  },
  {
    title: "今日のランチ決定くん",
    description:
      "迷いを過去のものに。シンプルで直感的なUIと独自のアルゴリズムで、今日のランチを劇的に決定する究極のサポートツールです。",
    icon: "🍚",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://lunch-decider-app-nine.vercel.app/",
    accentColor: "text-blue-400", // 2枚目はブルーに！
    gradientFrom: "from-blue-500/20",
  },
  {
    title: "Portfolio Site",
    description:
      "Next.jsとTypeScriptで構築。最新のモダンWebデザインとFramer Motionによる直感的なUIに加え、Lighthouseでの全項目100点を達成。速度・SEO・アクセシビリティを極限まで最適化しました。",
    icon: "🚀",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "#",
    accentColor: "text-orange-500", // オレンジ色の文字
    gradientFrom: "from-orange-500/20", // オレンジ色の光
    openInNewTab: false, // 今いるサイト自身なので別タブで開かない
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
    title: "SaaS企業のコーポレートサイト",
    description:
      "Next.jsとmicroCMSの連携を学ぶ教材を通して作成。microCMSおよびWordPressと連携（ヘッドレスCMS化）し、容易に記事投稿ができる更新性の高いシステムを実現しました。",
    tags: ["Next.js", "microCMS", "WordPress", "Tailwind CSS"],
    icon: "🏢",
    link: "https://flow-meister-jet-seven.vercel.app/",
  },
  {
    title: "WordPressテーマ開発",
    description:
      "実務レベルのWordPress構築を学ぶための課題として、ゼロから自作テーマを作成。指定された要件を満たしつつ、PHPによるループ処理やカスタム投稿タイプを実装しました。",
    tags: ["WordPress", "PHP", "Sass"],
    icon: "✍️",
    link: "https://okayuharuki.com/create-site/okayu0326-clinic/",
  },
  {
    title: "キャンペーンサイト模写",
    description:
      "Figmaからのコーディング手法を学ぶ教材の課題作品。レスポンシブデザイン（スマホ対応）はもちろん、ピクセルパーフェクトな実装にこだわりました。",
    tags: ["HTML5", "CSS3", "JavaScript"],
    icon: "🎉",
    link: "https://okayuharuki.com/create-site/onomichi/",
  },
  {
    title: "WebアプリLP模写",
    description:
      "Figmaからのコーディング実践。モダンなWebアプリのランディングページを想定し、自然なホバーアニメーションや複雑なレイアウトの再現に注力しました。",
    tags: ["HTML5", "CSS3", "JavaScript"],
    icon: "💻", // 🏢から少し変えてみました！
    link: "https://okayuharuki.com/create-site/OHA/",
  },
  {
    title: "シンプルなTodoアプリ",
    description:
      "Reactの基礎（useState, useEffect）を定着させるための第一歩。データの追加・削除・完了状態の切り替えといったCRUD操作の基本を実装しました。",
    tags: ["React", "Tailwind CSS"],
    icon: "✅",
    link: "https://haruki-todo-react-v2.vercel.app/",
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
