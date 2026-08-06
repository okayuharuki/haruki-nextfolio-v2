import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // 💡 ご自身のドメインに変更してください
  const baseUrl = "https://haruki-nextfolio-v2.vercel.app/";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // 今後、ログインなしで見せたい「公開ページ」が増えたらここに追加していけます
  ];
}
