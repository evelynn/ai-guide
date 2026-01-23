import { defineConfig } from "vuepress/config";
import extraSideBar from "./extraSideBar";
import footer from "./footer";
import navbar from "./navbar";
import sidebar from "./sidebar";

const author = "프로그래머 피쉬 피";
const domain = "https://ai.codefather.cn";
const tags = [
  "ai",
  "deepseek",
  "AI 뉴스",
  "인공지능",
  "AI 산업 동향",
  "AI 기술",
  "AI 뉴스",
  "AI 동향",
  "AI 시장 분석",
  "AI 모델",
  "AI 독점 분석",
  "AI 심층 해석",
];

export default defineConfig({
  title: "피쉬 피 AI 지식베이스",
  description:
    "피쉬 피 AI 지식베이스 - 무료 DeepSeek 튜토리얼｜도구 사이트｜리소스 라이브러리는 원스톱 오픈 소스 무료 인공지능 지식 공유 플랫폼입니다. Deepseek, GPT 등 인기 AI 도구 소개, 사용 가이드, 팁 공유, 응용 시나리오, AI 수익화, 산업 뉴스, 튜토리얼 리소스 모음을 제공하며, 체계적인 AI 튜토리얼과 엄선된 AI 리소스를 제공하여 AI 기술을 빠르게 습득하고 AI 전문가가 되도록 돕습니다!",
  head: [
    // 站点图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // SEO
    [
      "meta",
      {
        name: "keywords",
        content:
          "ai, deepseek, AI 뉴스, 인공지능, AI 산업 동향, AI 기술, AI 뉴스, AI 동향, AI 시장 분석, AI 모델, AI 독점 분석, AI 심층 해석",
      },
    ],
    // 百度统计
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?6998d638562bceef30be297767e91d64";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `,
    ],
  ],
  permalink: "/:slug",

  // 监听文件变化，热更新
  extraWatchFiles: [".vuepress/*.ts", ".vuepress/sidebars/*.ts"],
  markdown: {
    // 开启代码块的行号
    lineNumbers: true,
    // 支持 4 级以上的标题渲染
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
  },
  // @ts-ignore
  plugins: [
    ["@vuepress/back-to-top"],
    // Google 分析
    [
      "@vuepress/google-analytics",
      {
        ga: "GTM-WVS9HM6W", // 补充自己的谷歌分析 ID，比如 UA-00000000-0
      },
    ],
    ["@vuepress/medium-zoom"],
    // https://github.com/lorisleiva/vuepress-plugin-seo
    [
      "seo",
      {
        siteTitle: (_, $site) => $site.title + " - 무료 DeepSeek 튜토리얼｜도구 사이트｜리소스 라이브러리",
        title: ($page) => $page.title + " - 무료 DeepSeek 튜토리얼｜도구 사이트｜리소스 라이브러리",
        description: ($page) => $page.frontmatter.description || $page.description,
        author: (_, $site) => $site.themeConfig.author || author,
        tags: ($page) => $page.frontmatter.tags || tags,
        type: ($page) => "article",
        url: (_, $site, path) => ($site.themeConfig.domain || domain || "") + path,
        image: ($page, $site) =>
          $page.frontmatter.image &&
          (($site.themeConfig.domain && !$page.frontmatter.image.startsWith("http")) || "") + $page.frontmatter.image,
        publishedAt: ($page) => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: ($page) => $page.lastUpdated && new Date($page.lastUpdated),
      },
    ],
    // https://github.com/ekoeryanto/vuepress-plugin-sitemap
    [
      "sitemap",
      {
        hostname: domain,
      },
    ],
    // https://github.com/IOriens/vuepress-plugin-baidu-autopush
    ["vuepress-plugin-baidu-autopush"],
    // https://github.com/zq99299/vuepress-plugin/tree/master/vuepress-plugin-tags
    ["vuepress-plugin-tags"],
    // https://github.com/znicholasbrown/vuepress-plugin-code-copy
    [
      "vuepress-plugin-code-copy",
      {
        successText: "코드가 복사되었습니다",
      },
    ],
    // https://github.com/webmasterish/vuepress-plugin-feed
    [
      "feed",
      {
        canonical_base: domain,
        count: 10000,
        // 需要自动推送的文档目录
        posts_directories: [],
      },
    ],
    // https://github.com/tolking/vuepress-plugin-img-lazy
    ["img-lazy"],
  ],
  // 主题配置
  themeConfig: {
    logo: "/logo.png",
    nav: navbar,
    sidebar,
    lastUpdated: "最近更新",

    // GitHub 仓库位置
    repo: "liyupi/ai-guide",
    docsBranch: "master",

    // 编辑链接
    editLinks: true,
    editLinkText: "完善页面",

    // @ts-ignore
    // 底部版权信息
    footer,
    // 额外右侧边栏
    extraSideBar,
  },
});
