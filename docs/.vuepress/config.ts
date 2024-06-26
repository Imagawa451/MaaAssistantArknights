import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import Theme from "./theme";

export default defineUserConfig({
  base: "/docs/",
  lang: "zh-CN",
  title: "MaaAssistantArknights",
  description: "MAA",
  port: 3001,

  locales: {
    "/": {
      lang: "zh-CN",
      description: "开发者文档",
    },
    "/zh-tw/": {
      lang: "zh-TW",
      description: "開發者文件",
    },
    "/en-us/": {
      lang: "en-US",
      title: "Documents",
    },
    "/ja-jp/": {
      lang: "ja-JP",
      description: "ドキュメント",
    },
    "/ko-kr/": {
      lang: "ko-KR",
      description: "문서",
    },
  },

  markdown: {
    headers: {
      level: [2, 3, 4, 5],
    },
  },

  theme: Theme,

  plugins: [],

  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css?family=Noto+Sans+SC:300,400,500,700,900&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:400;500;700&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Jetbrains+Mono:wght@300,400,500,700;700&display=swap",
        rel: "stylesheet",
      },
    ],
  ],

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
