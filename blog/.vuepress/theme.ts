import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";
import { MR_HOPE_AVATAR } from "./logo.js";
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default hopeTheme({
  
  hostname: "https://mister-hope.github.io",

  author: {
    name: "虚拟发现",
    url: "https://mister-hope.com",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "https://theme-hope-assets.vuejs.press/logo.svg",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",

  blog: {
    medias: {
      Baidu: "https://example.com",
      BiliBili: "https://example.com",
      Bitbucket: "https://example.com",
      Dingding: "https://example.com",
      Discord: "https://example.com",
      Dribbble: "https://example.com",
      Email: "mailto:info@example.com",
      Evernote: "https://example.com",
      Facebook: "https://example.com",
      Flipboard: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gitlab: "https://example.com",
      Gmail: "mailto:info@example.com",
      Instagram: "https://example.com",
      Lark: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      Pocket: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      Reddit: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
      MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR],
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: '<a href="http://beian.miit.gov.cn/" rel="noopener noreferrer" target="_blank" style="color:inherit;text-decoration:none;white-space:nowrap;">滇ICP备2024019755号-2</a> / <a href="https://beian.mps.gov.cn/#/query/webSearch?code=53030202000521" rel="noopener noreferrer" target="_blank" style="color:inherit;text-decoration:none;white-space:nowrap;"><img src="https://aigc456-1322485937.cos.ap-chengdu.myqcloud.com/load/202404062058072.png" style="width:1rem;vertical-align:middle;"> 滇公网安备53030202000521</a> | <a href="/about/site.html">关于网站</a>',

      displayFooter: true,

      blog: {
        description: "一个前端开发者",
        intro: "/zh/intro.html",
      
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Default footer",

      displayFooter: true,

      blog: {
        description: "A FrontEnd programmer",
        intro: "/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["tyu357"],
      "/en/demo/encrypt.html": ["tyu357"],
      "/posts/札记/20240423.html": ["tyu357"],
      "/posts/札记/20240425.html": ["tyu357"],
      "/posts/札记/20240426.html": ["tyu357"],
    },
  },

  // enable it to preview all changes in time
  hotReload: true,

  plugins: {
    blog: true,
    
    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    comment: {
      provider: "Waline",
      serverURL: "https://waline-comment.vuejs.press",
    },
    docsearch:({
      appId: "6G2Q2UCYVT",

      apiKey: "2fbcc1ba98f2b57af8bd6c27b671c9d2",
  
      indexName: "zzxxccvv",
  
      locales: {
        "/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
        "/en/": {
          placeholder: "Search Documentation",
          translations: {
            button: {
              buttonText: "Search Documentation",
            },
          },
        },
      },
    }),
    components: {
      components: ["Badge", "VPCard",
      "ArtPlayer",
      
      "BiliBili",
      "CodePen",
      "PDF",
      "Replit",
      "Share",
      "SiteInfo",
      "StackBlitz",
      "VPBanner",
      
      "VidStack",
      "XiGua",],
    },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

 // 在启用之前安装 chart.js
 chart: true,

 // insert component easily

 // 在启用之前安装 echarts
 echarts: true,

 // 在启用之前安装 flowchart.ts
 flowchart: true,

 // gfm requires mathjax-full to provide tex support
 gfm: true,

 // 在启用之前安装 katex
 katex: true,

 // 在启用之前安装 mathjax-full
 mathjax: true,

 // 在启用之前安装 mermaid
  mermaid: true,

 playground: {
   presets: ["ts", "vue"],
 },

 // 在启用之前安装 reveal.js
 // revealJs: {
 //   plugins: ["highlight", "math", "search", "notes", "zoom"],
 // },

 // 在启用之前安装 @vue/repl
 vuePlayground: true,

 // install sandpack-vue3 before enabling it
 sandpack: true,
},

// 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
pwa: {
 favicon: "/favicon.ico",
 cacheHTML: true,
// cachePic: true,
 appendBase: true,
 apple: {
   icon: "/assets/icon/apple-icon-152.png",
   statusBarColor: "black",
 },
 msTile: {
   image: "/assets/icon/ms-icon-144.png",
   color: "#ffffff",
 },
 manifest: {
   icons: [
     {
       src: "/assets/icon/chrome-mask-512.png",
       sizes: "512x512",
       purpose: "maskable",
       type: "image/png",
     },
     {
       src: "/assets/icon/chrome-mask-192.png",
       sizes: "192x192",
       purpose: "maskable",
       type: "image/png",
     },
     {
       src: "/assets/icon/chrome-512.png",
       sizes: "512x512",
       type: "image/png",
     },
     {
       src: "/assets/icon/chrome-192.png",
       sizes: "192x192",
       type: "image/png",
     },
   ],
   shortcuts: [
     {
       name: "Demo",
       short_name: "Demo",
       url: "/demo/",
       icons: [
         {
           src: "/assets/icon/guide-maskable.png",
           sizes: "192x192",
           purpose: "maskable",
           type: "image/png",
         },
       ],
     },
   ],
 },
},
},
fullscreen: true,
});
