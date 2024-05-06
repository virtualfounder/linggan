// blog/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// blog/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// blog/.vuepress/navbar/en.ts
import { navbar } from "vuepress-theme-hope";
var enNavbar = navbar([
  "/en/",
  "/en/demo/",
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/en/posts/",
    children: [
      {
        text: "Apple",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
          "3",
          "4"
        ]
      },
      {
        text: "Banana",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "Banana 1",
            icon: "pen-to-square",
            link: "1"
          },
          {
            text: "Banana 2",
            icon: "pen-to-square",
            link: "2"
          },
          "3",
          "4"
        ]
      },
      { text: "Cherry", icon: "pen-to-square", link: "cherry" },
      { text: "Dragon Fruit", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry"
    ]
  },
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/"
  }
]);

// blog/.vuepress/navbar/zh.ts
import { navbar as navbar2 } from "vuepress-theme-hope";
var zhNavbar = navbar2([
  "/",
  "/demo/",
  {
    text: "\u535A\u6587",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "\u82F9\u679C",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "\u82F9\u679C1", icon: "pen-to-square", link: "1" },
          { text: "\u82F9\u679C2", icon: "pen-to-square", link: "2" },
          "3",
          "4"
        ]
      },
      {
        text: "\u9999\u8549",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "\u9999\u8549 1",
            icon: "pen-to-square",
            link: "1"
          },
          {
            text: "\u9999\u8549 2",
            icon: "pen-to-square",
            link: "2"
          },
          "3",
          "4"
        ]
      },
      { text: "\u6A31\u6843", icon: "pen-to-square", link: "cherry" },
      { text: "\u706B\u9F99\u679C", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry"
    ]
  },
  {
    text: "V2 \u6587\u6863",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/"
  },
  {
    text: "\u77E5\u8BC6\u68C0\u7D22",
    icon: "book",
    link: "https://www.zzxxccvv.xyz/lvyou/#/"
  }
]);

// blog/.vuepress/sidebar/en.ts
import { sidebar } from "vuepress-theme-hope";
var enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "Demo",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure"
    },
    {
      text: "Articles",
      icon: "book",
      prefix: "posts/",
      children: "structure"
    },
    "intro",
    {
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html"
    }
  ]
});

// blog/.vuepress/sidebar/zh.ts
import { sidebar as sidebar2 } from "vuepress-theme-hope";
var zhSidebar = sidebar2({
  "/": [
    "",
    {
      text: "\u5982\u4F55\u4F7F\u7528",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure"
    },
    {
      text: "\u6587\u7AE0",
      icon: "book",
      prefix: "posts/",
      children: "structure"
    },
    "intro",
    {
      text: "\u5E7B\u706F\u7247",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html"
    }
  ]
});

// blog/.vuepress/logo.ts
var MR_HOPE_AVATAR = '<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient gradientTransform="matrix(.2478 .78133 -2.54797 .63622 910.35 281.58)" gradientUnits="userSpaceOnUse" id="a" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".75" stop-color="#e33939"/><stop offset=".998" stop-color="#fff"/></linearGradient><linearGradient gradientTransform="matrix(.13814 .80797 2.55599 -.6032 34.087 494.369)" gradientUnits="userSpaceOnUse" id="b" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".815" stop-color="#e33939"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><path d="M135.637 588.067c-48.891-201.334 74.605-404.162 275.837-453.028 201.233-48.866 403.998 74.734 452.889 276.068 48.892 201.335-74.606 404.162-275.838 453.029-201.233 48.866-403.997-74.734-452.888-276.069Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M596.076 197.044c-3.342-56.09 56.897-77.831 89.017-51.361m-410.65 128.819c-22.753-51.377-86.256-43.07-102.659-4.816" fill="none" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M833.568 288.02c.05 18.046-12.584 30.699-21.346 32.211-8.762 1.512-17.031-1.099-18.584-1.341 0 0-61.363-6.103-105.627 6.921-44.265 13.026-87.04 47.387-94.637 51.892-6.627 3.928-29.112 7.697-44.462-12.938-15.351-20.636.024-41.526.024-41.526s12.685-18.279 40.771-35.123c28.088-16.844 24.624-13.226 52.326-25.696 15.247-6.865 43.319-14.186 67.429-17.069 25.193-3.011 46.348-1.384 57.673.769 22.165 4.212 28.632 5.93 39.169 9.229 12.451 3.898 27.214 14.516 27.264 32.671Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M558.351 345.632c-3.458-14.237 5.214-28.566 19.367-32.003 14.154-3.437 28.43 5.32 31.887 19.557 3.458 14.238-5.212 28.567-19.367 32.004-14.152 3.437-28.43-5.319-31.887-19.558Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M220.249 483.416c46.81-11.689 91.323-.467 99.42 25.064 8.098 25.532-23.286 55.706-70.097 67.393-46.811 11.689-91.323.467-99.42-25.064-8.097-25.532 23.286-55.706 70.097-67.393Z" fill="url(#a)" fill-rule="evenodd" opacity=".261"/><path d="M739.9 357.226c-46.959 11.082-81.367 41.469-76.853 67.871 4.514 26.402 46.241 38.821 93.198 27.738 46.958-11.081 81.366-41.467 76.853-67.869-4.514-26.403-46.241-38.821-93.198-27.74Z" fill="url(#b)" fill-rule="evenodd" opacity=".261"/><path d="M400.934 398.917c-.599 18.034-13.681 30.218-22.494 31.409-8.812 1.192-16.982-1.716-18.526-2.014 0 0-61.109-8.334-105.819 3.07-44.709 11.404-88.696 44.181-96.452 48.406-6.763 3.683-29.372 6.632-43.972-14.546-14.6-21.18 1.519-41.494 1.519-41.494s13.335-17.803 42.013-33.612c28.677-15.809 25.085-12.319 53.222-23.772 15.484-6.304 43.803-12.598 68.005-14.6 25.288-2.093 46.373.305 57.616 2.867 22 5.016 28.401 6.968 38.813 10.649 12.304 4.348 26.677 15.496 26.075 33.637Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M129.05 445.546c-3.458-14.239 5.213-28.566 19.367-32.003 14.153-3.437 28.429 5.318 31.887 19.557 3.458 14.238-5.213 28.566-19.367 32.003-14.153 3.437-28.43-5.318-31.887-19.557Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M424.381 696.386s64.427 13.646 101.996 5.757C640.653 678.146 690.8 521.894 690.8 521.894" fill="none" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M796.04 666.774s-10.734-44.165-41.405-11.348c-9.681 10.359-10.438 40.604-28.217 81.89-15.942 37.02-39.564 60.728-42.938 76.063-3.374 15.335.451 35.992 26.352 41.537 25.902 5.545 41.967-23.381 41.967-23.381l44.241-164.761Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M793.337 664.734c-37.075 160.045-51.73 163.145-40.343 184.845 11.387 21.701 51.417 33.716 71.876-7.313 6.734-13.505-1.31-43.317-1.511-78.077-.307-53.06 16.865-86.111 10.403-98.1-15.332-28.452-39.377-5.875-40.425-1.355Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/></svg>';

// blog/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://zzxxccvv.xyz",
  author: {
    name: "\u865A\u62DF\u53D1\u73B0",
    url: "https://zzxxccvv.xyz"
  },
  iconAssets: "fontawesome-with-brands",
  logo: "https://theme-hope-assets.vuejs.press/logo.svg",
  repo: "vuepress-theme-hope/vuepress-theme-hope",
  docsDir: "src",
  blog: {
    medias: {
      Baidu: "https://baidu.com",
      BiliBili: "https://bilibili.com",
      Bitbucket: "https://zzxxccvv.xyz",
      Dingding: "https://zzxxccvv.xyz",
      Discord: "https://zzxxccvv.xyz",
      Dribbble: "https://zzxxccvv.xyz",
      Email: "https://zzxxccvv.xyz",
      Evernote: "https://zzxxccvv.xyz",
      Facebook: "https://zzxxccvv.xyz",
      Flipboard: "https://zzxxccvv.xyz",
      Gitee: "https://zzxxccvv.xyz",
      GitHub: "https://zzxxccvv.xyz",
      Gitlab: "https://zzxxccvv.xyz",
      Gmail: "https://zzxxccvv.xyz",
      Instagram: "https://zzxxccvv.xyz",
      Lark: "https://zzxxccvv.xyz",
      Lines: "https://zzxxccvv.xyz",
      Linkedin: "https://zzxxccvv.xyz",
      Pinterest: "https://zzxxccvv.xyz",
      Pocket: "https://zzxxccvv.xyz",
      QQ: "https://zzxxccvv.xyz",
      Qzone: "https://zzxxccvv.xyz",
      Reddit: "https://zzxxccvv.xyz",
      Rss: "https://zzxxccvv.xyz",
      Steam: "https://zzxxccvv.xyz",
      Twitter: "https://zzxxccvv.xyz",
      Wechat: "https://zzxxccvv.xyz",
      Weibo: "https://zzxxccvv.xyz",
      Whatsapp: "https://zzxxccvv.xyz",
      Youtube: "https://zzxxccvv.xyz",
      Zhihu: "https://zzxxccvv.xyz",
      MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR]
    }
  },
  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,
      footer: '<a href="http://beian.miit.gov.cn/" rel="noopener noreferrer" target="_blank" style="color:inherit;text-decoration:none;white-space:nowrap;">\u6EC7ICP\u59072024019755\u53F7-2</a> | <a href="https://beian.mps.gov.cn/#/query/webSearch?code=53030202000521" rel="noopener noreferrer" target="_blank" style="color:inherit;text-decoration:none;white-space:nowrap;"><img src="https://aigc456-1322485937.cos.ap-chengdu.myqcloud.com/load/202404062058072.png" style="width:1rem;vertical-align:middle;"> \u6EC7\u516C\u7F51\u5B89\u590753030202000521</a> | <a href="/about/site.html">\u5173\u4E8E\u7F51\u7AD9</a>',
      displayFooter: true,
      blog: {
        description: "\u4E00\u4E2A\u524D\u7AEF\u5F00\u53D1\u8005",
        intro: "/zh/intro.html"
      },
      metaLocales: {
        editLink: "Edit this page on GitHub"
      }
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
        intro: "/intro.html"
      },
      // page meta
      metaLocales: {
        editLink: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875"
      }
    }
  },
  encrypt: {
    config: {
      "/demo/encrypt.html": ["tyu357"],
      "/en/demo/encrypt.html": ["tyu357"],
      "/posts/\u672D\u8BB0/202404/20240423.html": ["tyu357"],
      "/posts/\u672D\u8BB0/202404/20240425.html": ["tyu357"],
      "/posts/\u672D\u8BB0/202404/20240426.html": ["tyu357"],
      "/posts/\u672D\u8BB0/202405/20240502.html": ["tyu357"],
      "/posts/books/\u4E09\u4F53\u4E00.html": ["tyu357\u4E09\u4F53"],
      "/posts/books/\u4E09\u4F53\u4E8C.html": ["tyu357\u4E09\u4F53"],
      "/posts/books/\u4E09\u4F53\u4E09.html": ["tyu357\u4E09\u4F53"]
    }
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
      serverURL: "https://waline-comment.vuejs.press"
    },
    docsearch: {
      appId: "6G2Q2UCYVT",
      apiKey: "2fbcc1ba98f2b57af8bd6c27b671c9d2",
      indexName: "zzxxccvv",
      locales: {
        "/": {
          placeholder: "\u641C\u7D22\u6587\u6863",
          translations: {
            button: {
              buttonText: "\u641C\u7D22\u6587\u6863",
              buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
            },
            modal: {
              searchBox: {
                resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
                resetButtonAriaLabel: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
                cancelButtonText: "\u53D6\u6D88",
                cancelButtonAriaLabel: "\u53D6\u6D88"
              },
              startScreen: {
                recentSearchesTitle: "\u641C\u7D22\u5386\u53F2",
                noRecentSearchesText: "\u6CA1\u6709\u641C\u7D22\u5386\u53F2",
                saveRecentSearchButtonTitle: "\u4FDD\u5B58\u81F3\u641C\u7D22\u5386\u53F2",
                removeRecentSearchButtonTitle: "\u4ECE\u641C\u7D22\u5386\u53F2\u4E2D\u79FB\u9664",
                favoriteSearchesTitle: "\u6536\u85CF",
                removeFavoriteSearchButtonTitle: "\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664"
              },
              errorScreen: {
                titleText: "\u65E0\u6CD5\u83B7\u53D6\u7ED3\u679C",
                helpText: "\u4F60\u53EF\u80FD\u9700\u8981\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5"
              },
              footer: {
                selectText: "\u9009\u62E9",
                navigateText: "\u5207\u6362",
                closeText: "\u5173\u95ED",
                searchByText: "\u641C\u7D22\u63D0\u4F9B\u8005"
              },
              noResultsScreen: {
                noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
                suggestedQueryText: "\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u67E5\u8BE2",
                reportMissingResultsText: "\u4F60\u8BA4\u4E3A\u8BE5\u67E5\u8BE2\u5E94\u8BE5\u6709\u7ED3\u679C\uFF1F",
                reportMissingResultsLinkText: "\u70B9\u51FB\u53CD\u9988"
              }
            }
          }
        },
        "/en/": {
          placeholder: "Search Documentation",
          translations: {
            button: {
              buttonText: "Search Documentation"
            }
          }
        }
      }
    },
    components: {
      components: [
        "Badge",
        "VPCard",
        "ArtPlayer",
        "BiliBili",
        "CodePen",
        "PDF",
        // "Replit",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VPBanner",
        "VidStack",
        "XiGua"
      ]
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
                content: "Recommended"
              };
          }
        }
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
        presets: ["ts", "vue"]
      },
      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      // 在启用之前安装 @vue/repl
      vuePlayground: true,
      // install sandpack-vue3 before enabling it
      sandpack: true
    },
    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      // cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black"
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff"
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png"
          }
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
                type: "image/png"
              }
            ]
          }
        ]
      }
    }
  },
  fullscreen: true
});

// blog/.vuepress/config.ts
import { appendDatePlugin } from "@vuepress/plugin-append-date";
import { oml2dPlugin } from "vuepress-plugin-oh-my-live2d";
import { removeHtmlExtensionPlugin } from "vuepress-plugin-remove-html-extension";
import { netabareSwitchPlugin } from "vuepress-plugin-netabare-switch";
var config_default = defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "\u7075\u611F\u865A\u62DF\u53D1\u73B0\u73B0\u5B9E\u7684\u7F16\u7A0B\u5B9D\u5178",
      description: "\u8D34\u5FC3\u7684\u7F16\u7A0B\u5B66\u4E60\u8DEF\u7EBF\uFF0C\u5168\u9762\u7684\u7F16\u7A0B\u77E5\u8BC6\u767E\u79D1"
    },
    "/en/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope"
    }
  },
  theme: theme_default,
  // Enable it with pwa
  shouldPrefetch: false,
  plugins: [
    netabareSwitchPlugin(),
    removeHtmlExtensionPlugin(),
    appendDatePlugin(),
    oml2dPlugin({
      // 在这里配置选项
      models: [
        {
          path: "https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json",
          scale: 0.12,
          position: [-10, 50],
          stageStyle: {
            width: 350
          }
        }
      ]
    })
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYmxvZy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImJsb2cvLnZ1ZXByZXNzL3RoZW1lLnRzIiwgImJsb2cvLnZ1ZXByZXNzL25hdmJhci9lbi50cyIsICJibG9nLy52dWVwcmVzcy9uYXZiYXIvemgudHMiLCAiYmxvZy8udnVlcHJlc3Mvc2lkZWJhci9lbi50cyIsICJibG9nLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzIiwgImJsb2cvLnZ1ZXByZXNzL2xvZ28udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJYOi9ub2RlanNcdThCRkVcdTdBMEJcdTRFMDlcdTU5NTdcdTRFRTNcdTc4MDEvbm9kZWpzXHU1NDBFXHU3QUVGXHU4QkZFXHU3QTBCXHU0RUUzXHU3ODAxKFx1NjVDNVx1NkUzOFx1NUMwRlx1N0EwQlx1NUU4RikvaG9wZS9saW5nZ2FuL2Jsb2cvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJYOlxcXFxub2RlanNcdThCRkVcdTdBMEJcdTRFMDlcdTU5NTdcdTRFRTNcdTc4MDFcXFxcbm9kZWpzXHU1NDBFXHU3QUVGXHU4QkZFXHU3QTBCXHU0RUUzXHU3ODAxKFx1NjVDNVx1NkUzOFx1NUMwRlx1N0EwQlx1NUU4RilcXFxcaG9wZVxcXFxsaW5nZ2FuXFxcXGJsb2dcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vWDovbm9kZWpzJUU4JUFGJUJFJUU3JUE4JThCJUU0JUI4JTg5JUU1JUE1JTk3JUU0JUJCJUEzJUU3JUEwJTgxL25vZGVqcyVFNSU5MCU4RSVFNyVBQiVBRiVFOCVBRiVCRSVFNyVBOCU4QiVFNCVCQiVBMyVFNyVBMCU4MSglRTYlOTclODUlRTYlQjglQjglRTUlQjAlOEYlRTclQTglOEIlRTUlQkElOEYpL2hvcGUvbGluZ2dhbi9ibG9nLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZS5qc1wiO1xyXG5pbXBvcnQgeyBhcHBlbmREYXRlUGx1Z2luIH0gZnJvbSBcIkB2dWVwcmVzcy9wbHVnaW4tYXBwZW5kLWRhdGVcIjtcclxuaW1wb3J0IHsgb21sMmRQbHVnaW4gfSBmcm9tIFwidnVlcHJlc3MtcGx1Z2luLW9oLW15LWxpdmUyZFwiO1xyXG5pbXBvcnQgeyByZW1vdmVIdG1sRXh0ZW5zaW9uUGx1Z2luIH0gZnJvbSAndnVlcHJlc3MtcGx1Z2luLXJlbW92ZS1odG1sLWV4dGVuc2lvbic7XHJcbmltcG9ydCB7IG5ldGFiYXJlU3dpdGNoUGx1Z2luIH0gZnJvbSAndnVlcHJlc3MtcGx1Z2luLW5ldGFiYXJlLXN3aXRjaCc7XHJcbmltcG9ydCBXaW5kaUNTUyBmcm9tICd2aXRlLXBsdWdpbi13aW5kaWNzcyc7XHJcblxyXG5jb25zdCBhdXRob3IgPSBcIlx1NzA3NVx1NjExRlx1ODY1QVx1NjJERlx1NTNEMVx1NzNCMFx1NzNCMFx1NUI5RVwiO1xyXG5jb25zdCBkb21haW4gPSBcImh0dHBzOi8vd3d3Lnp6eHhjY3Z2Lnh5elwiO1xyXG5jb25zdCB0YWdzID0gW1wiXHU3QTBCXHU1RThGXHU1NDU4XCIsIFwiXHU3RjE2XHU3QTBCXCIsIFwiXHU4QkExXHU3Qjk3XHU2NzNBXCJdO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xyXG4gXHJcbiAgYmFzZTogXCIvXCIsXHJcblxyXG4gIGxvY2FsZXM6IHtcclxuICAgIFwiL1wiOiB7IFxyXG4gICAgICAgbGFuZzogXCJ6aC1DTlwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlx1NzA3NVx1NjExRlx1ODY1QVx1NjJERlx1NTNEMVx1NzNCMFx1NzNCMFx1NUI5RVx1NzY4NFx1N0YxNlx1N0EwQlx1NUI5RFx1NTE3OFwiLFxyXG4gICAgICAgZGVzY3JpcHRpb246IFwiXHU4RDM0XHU1RkMzXHU3Njg0XHU3RjE2XHU3QTBCXHU1QjY2XHU0RTYwXHU4REVGXHU3RUJGXHVGRjBDXHU1MTY4XHU5NzYyXHU3Njg0XHU3RjE2XHU3QTBCXHU3N0U1XHU4QkM2XHU3NjdFXHU3OUQxXCIsXHJcbiAgICAgXHJcbiAgICB9LFxyXG4gICAgXCIvZW4vXCI6IHtcclxuICAgICAgbGFuZzogXCJlbi1VU1wiLFxyXG4gICAgICB0aXRsZTogXCJCbG9nIERlbW9cIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiQSBibG9nIGRlbW8gZm9yIHZ1ZXByZXNzLXRoZW1lLWhvcGVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgdGhlbWUsXHJcblxyXG4gIC8vIEVuYWJsZSBpdCB3aXRoIHB3YVxyXG4gICBzaG91bGRQcmVmZXRjaDogZmFsc2UsXHJcbiAgIFxyXG4gICBwbHVnaW5zOiBbXHJcbiAgICBuZXRhYmFyZVN3aXRjaFBsdWdpbigpLFxyXG4gICAgcmVtb3ZlSHRtbEV4dGVuc2lvblBsdWdpbigpLFxyXG4gICAgYXBwZW5kRGF0ZVBsdWdpbigpLFxyXG4gICAgb21sMmRQbHVnaW4oe1xyXG4gICAgICAvLyBcdTU3MjhcdThGRDlcdTkxQ0NcdTkxNERcdTdGNkVcdTkwMDlcdTk4NzlcclxuICAgICAgbW9kZWxzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9FaWthbnlhL0xpdmUyZC1tb2RlbC9MaXZlMkQvU2Vua29fTm9ybWFscy9zZW5rby5tb2RlbDMuanNvbicsXHJcbiAgICAgICAgICBzY2FsZTogMC4xMixcclxuICAgICAgICAgIHBvc2l0aW9uOiBbLTEwLCA1MF0sXHJcbiAgICAgICAgICBzdGFnZVN0eWxlOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNTBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pLFxyXG5cclxuIFxyXG4gICBdLFxyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJYOi9ub2RlanNcdThCRkVcdTdBMEJcdTRFMDlcdTU5NTdcdTRFRTNcdTc4MDEvbm9kZWpzXHU1NDBFXHU3QUVGXHU4QkZFXHU3QTBCXHU0RUUzXHU3ODAxKFx1NjVDNVx1NkUzOFx1NUMwRlx1N0EwQlx1NUU4RikvaG9wZS9saW5nZ2FuL2Jsb2cvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJYOlxcXFxub2RlanNcdThCRkVcdTdBMEJcdTRFMDlcdTU5NTdcdTRFRTNcdTc4MDFcXFxcbm9kZWpzXHU1NDBFXHU3QUVGXHU4QkZFXHU3QTBCXHU0RUUzXHU3ODAxKFx1NjVDNVx1NkUzOFx1NUMwRlx1N0EwQlx1NUU4RilcXFxcaG9wZVxcXFxsaW5nZ2FuXFxcXGJsb2dcXFxcLnZ1ZXByZXNzXFxcXHRoZW1lLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9YOi9ub2RlanMlRTglQUYlQkUlRTclQTglOEIlRTQlQjglODklRTUlQTUlOTclRTQlQkIlQTMlRTclQTAlODEvbm9kZWpzJUU1JTkwJThFJUU3JUFCJUFGJUU4JUFGJUJFJUU3JUE4JThCJUU0JUJCJUEzJUU3JUEwJTgxKCVFNiU5NyU4NSVFNiVCOCVCOCVFNSVCMCU4RiVFNyVBOCU4QiVFNSVCQSU4RikvaG9wZS9saW5nZ2FuL2Jsb2cvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7aW1wb3J0IHsgaG9wZVRoZW1lIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuaW1wb3J0IHsgZW5OYXZiYXIsIHpoTmF2YmFyIH0gZnJvbSBcIi4vbmF2YmFyL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IGVuU2lkZWJhciwgemhTaWRlYmFyIH0gZnJvbSBcIi4vc2lkZWJhci9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBNUl9IT1BFX0FWQVRBUiB9IGZyb20gXCIuL2xvZ28uanNcIjtcclxuaW1wb3J0IHsgYXBwZW5kRGF0ZVBsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tYXBwZW5kLWRhdGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xyXG4gIFxyXG4gIGhvc3RuYW1lOiBcImh0dHBzOi8venp4eGNjdnYueHl6XCIsXHJcblxyXG4gIGF1dGhvcjoge1xyXG4gICAgbmFtZTogXCJcdTg2NUFcdTYyREZcdTUzRDFcdTczQjBcIixcclxuICAgIHVybDogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxyXG4gIH0sXHJcblxyXG4gIGljb25Bc3NldHM6IFwiZm9udGF3ZXNvbWUtd2l0aC1icmFuZHNcIixcclxuXHJcbiAgbG9nbzogXCJodHRwczovL3RoZW1lLWhvcGUtYXNzZXRzLnZ1ZWpzLnByZXNzL2xvZ28uc3ZnXCIsXHJcblxyXG4gIHJlcG86IFwidnVlcHJlc3MtdGhlbWUtaG9wZS92dWVwcmVzcy10aGVtZS1ob3BlXCIsXHJcblxyXG4gIGRvY3NEaXI6IFwic3JjXCIsXHJcblxyXG4gIGJsb2c6IHtcclxuICAgIG1lZGlhczoge1xyXG4gICAgICBCYWlkdTogXCJodHRwczovL2JhaWR1LmNvbVwiLFxyXG4gICAgICBCaWxpQmlsaTogXCJodHRwczovL2JpbGliaWxpLmNvbVwiLFxyXG4gICAgICBCaXRidWNrZXQ6IFwiaHR0cHM6Ly96enh4Y2N2di54eXpcIixcclxuICAgICAgRGluZ2Rpbmc6IFwiaHR0cHM6Ly96enh4Y2N2di54eXpcIixcclxuICAgICAgRGlzY29yZDogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxyXG4gICAgICBEcmliYmJsZTogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxyXG4gICAgICBFbWFpbDogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxyXG4gICAgICBFdmVybm90ZTogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxyXG4gICAgICBGYWNlYm9vazogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxyXG4gICAgICBGbGlwYm9hcmQ6IFwiaHR0cHM6Ly96enh4Y2N2di54eXpcIixcclxuICAgICAgR2l0ZWU6IFwiaHR0cHM6Ly96enh4Y2N2di54eXpcIixcclxuICAgICAgR2l0SHViOiBcImh0dHBzOi8venp4eGNjdnYueHl6XCIsXHJcbiAgICAgIEdpdGxhYjogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxyXG4gICAgICBHbWFpbDogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxyXG4gICAgICBJbnN0YWdyYW06IFwiaHR0cHM6Ly96enh4Y2N2di54eXpcIixcclxuICAgICAgTGFyazogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxyXG4gICAgICBMaW5lczogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxyXG4gICAgICBMaW5rZWRpbjogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxyXG4gICAgICBQaW50ZXJlc3Q6IFwiaHR0cHM6Ly96enh4Y2N2di54eXpcIixcclxuICAgICAgUG9ja2V0OiBcImh0dHBzOi8venp4eGNjdnYueHl6XCIsXHJcbiAgICAgIFFROiBcImh0dHBzOi8venp4eGNjdnYueHl6XCIsXHJcbiAgICAgIFF6b25lOiBcImh0dHBzOi8venp4eGNjdnYueHl6XCIsXHJcbiAgICAgIFJlZGRpdDogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxyXG4gICAgICBSc3M6IFwiaHR0cHM6Ly96enh4Y2N2di54eXpcIixcclxuICAgICAgU3RlYW06IFwiaHR0cHM6Ly96enh4Y2N2di54eXpcIixcclxuICAgICAgVHdpdHRlcjogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxyXG4gICAgICBXZWNoYXQ6IFwiaHR0cHM6Ly96enh4Y2N2di54eXpcIixcclxuICAgICAgV2VpYm86IFwiaHR0cHM6Ly96enh4Y2N2di54eXpcIixcclxuICAgICAgV2hhdHNhcHA6IFwiaHR0cHM6Ly96enh4Y2N2di54eXpcIixcclxuICAgICAgWW91dHViZTogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxyXG4gICAgICBaaGlodTogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxyXG4gICAgICBNckhvcGU6IFtcImh0dHBzOi8vbWlzdGVyLWhvcGUuY29tXCIsIE1SX0hPUEVfQVZBVEFSXSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgbG9jYWxlczoge1xyXG4gICAgXCIvXCI6IHtcclxuICAgICAgLy8gbmF2YmFyXHJcbiAgICAgIG5hdmJhcjogemhOYXZiYXIsXHJcblxyXG4gICAgICAvLyBzaWRlYmFyXHJcbiAgICAgIHNpZGViYXI6IHpoU2lkZWJhcixcclxuXHJcbiAgICAgIGZvb3RlcjogJzxhIGhyZWY9XCJodHRwOi8vYmVpYW4ubWlpdC5nb3YuY24vXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPVwiY29sb3I6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246bm9uZTt3aGl0ZS1zcGFjZTpub3dyYXA7XCI+XHU2RUM3SUNQXHU1OTA3MjAyNDAxOTc1NVx1NTNGNy0yPC9hPiB8IDxhIGhyZWY9XCJodHRwczovL2JlaWFuLm1wcy5nb3YuY24vIy9xdWVyeS93ZWJTZWFyY2g/Y29kZT01MzAzMDIwMjAwMDUyMVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT1cImNvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7d2hpdGUtc3BhY2U6bm93cmFwO1wiPjxpbWcgc3JjPVwiaHR0cHM6Ly9haWdjNDU2LTEzMjI0ODU5MzcuY29zLmFwLWNoZW5nZHUubXlxY2xvdWQuY29tL2xvYWQvMjAyNDA0MDYyMDU4MDcyLnBuZ1wiIHN0eWxlPVwid2lkdGg6MXJlbTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XCI+IFx1NkVDN1x1NTE2Q1x1N0Y1MVx1NUI4OVx1NTkwNzUzMDMwMjAyMDAwNTIxPC9hPiB8IDxhIGhyZWY9XCIvYWJvdXQvc2l0ZS5odG1sXCI+XHU1MTczXHU0RThFXHU3RjUxXHU3QUQ5PC9hPicsXHJcblxyXG4gICAgICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxyXG5cclxuICAgICAgYmxvZzoge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlx1NEUwMFx1NEUyQVx1NTI0RFx1N0FFRlx1NUYwMFx1NTNEMVx1ODAwNVwiLFxyXG4gICAgICAgIGludHJvOiBcIi96aC9pbnRyby5odG1sXCIsXHJcbiAgICAgIFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgbWV0YUxvY2FsZXM6IHtcclxuICAgICAgICBlZGl0TGluazogXCJFZGl0IHRoaXMgcGFnZSBvbiBHaXRIdWJcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGluZXNlIGxvY2FsZSBjb25maWdcclxuICAgICAqL1xyXG4gICAgXCIvZW4vXCI6IHtcclxuICAgICAgLy8gbmF2YmFyXHJcbiAgICAgIG5hdmJhcjogZW5OYXZiYXIsXHJcblxyXG4gICAgICAvLyBzaWRlYmFyXHJcbiAgICAgIHNpZGViYXI6IGVuU2lkZWJhcixcclxuXHJcbiAgICAgIGZvb3RlcjogXCJEZWZhdWx0IGZvb3RlclwiLFxyXG5cclxuICAgICAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcclxuXHJcbiAgICAgIGJsb2c6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBIEZyb250RW5kIHByb2dyYW1tZXJcIixcclxuICAgICAgICBpbnRybzogXCIvaW50cm8uaHRtbFwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8gcGFnZSBtZXRhXHJcbiAgICAgIG1ldGFMb2NhbGVzOiB7XHJcbiAgICAgICAgZWRpdExpbms6IFwiXHU1NzI4IEdpdEh1YiBcdTRFMEFcdTdGMTZcdThGOTFcdTZCNjRcdTk4NzVcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgZW5jcnlwdDoge1xyXG4gICAgY29uZmlnOiB7XHJcbiAgICAgIFwiL2RlbW8vZW5jcnlwdC5odG1sXCI6IFtcInR5dTM1N1wiXSxcclxuICAgICAgXCIvZW4vZGVtby9lbmNyeXB0Lmh0bWxcIjogW1widHl1MzU3XCJdLFxyXG4gICAgICBcIi9wb3N0cy9cdTY3MkRcdThCQjAvMjAyNDA0LzIwMjQwNDIzLmh0bWxcIjogW1widHl1MzU3XCJdLFxyXG4gICAgICBcIi9wb3N0cy9cdTY3MkRcdThCQjAvMjAyNDA0LzIwMjQwNDI1Lmh0bWxcIjogW1widHl1MzU3XCJdLFxyXG4gICAgICBcIi9wb3N0cy9cdTY3MkRcdThCQjAvMjAyNDA0LzIwMjQwNDI2Lmh0bWxcIjogW1widHl1MzU3XCJdLFxyXG4gICAgICBcIi9wb3N0cy9cdTY3MkRcdThCQjAvMjAyNDA1LzIwMjQwNTAyLmh0bWxcIjogW1widHl1MzU3XCJdLFxyXG4gICAgICBcIi9wb3N0cy9ib29rcy9cdTRFMDlcdTRGNTNcdTRFMDAuaHRtbFwiOiBbXCJ0eXUzNTdcdTRFMDlcdTRGNTNcIl0sXHJcbiAgICAgIFwiL3Bvc3RzL2Jvb2tzL1x1NEUwOVx1NEY1M1x1NEU4Qy5odG1sXCI6IFtcInR5dTM1N1x1NEUwOVx1NEY1M1wiXSxcclxuICAgICAgXCIvcG9zdHMvYm9va3MvXHU0RTA5XHU0RjUzXHU0RTA5Lmh0bWxcIjogW1widHl1MzU3XHU0RTA5XHU0RjUzXCJdLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICAvLyBlbmFibGUgaXQgdG8gcHJldmlldyBhbGwgY2hhbmdlcyBpbiB0aW1lXHJcbiAgaG90UmVsb2FkOiB0cnVlLFxyXG5cclxuICBwbHVnaW5zOiB7XHJcbiAgICBibG9nOiB0cnVlLFxyXG4gIFxyXG4gICAgXHJcbiAgICAvLyBJbnN0YWxsIEB3YWxpbmUvY2xpZW50IGJlZm9yZSBlbmFibGluZyBpdFxyXG4gICAgLy8gTm90ZTogVGhpcyBpcyBmb3IgdGVzdGluZyBPTkxZIVxyXG4gICAgLy8gWW91IE1VU1QgZ2VuZXJhdGUgYW5kIHVzZSB5b3VyIG93biBjb21tZW50IHNlcnZpY2UgaW4gcHJvZHVjdGlvbi5cclxuICAgIGNvbW1lbnQ6IHtcclxuICAgICAgcHJvdmlkZXI6IFwiV2FsaW5lXCIsXHJcbiAgICAgIHNlcnZlclVSTDogXCJodHRwczovL3dhbGluZS1jb21tZW50LnZ1ZWpzLnByZXNzXCIsXHJcbiAgICB9LFxyXG4gICAgZG9jc2VhcmNoOih7XHJcbiAgICAgIGFwcElkOiBcIjZHMlEyVUNZVlRcIixcclxuXHJcbiAgICAgIGFwaUtleTogXCIyZmJjYzFiYTk4ZjJiNTdhZjhiZDZjMjdiNjcxYzlkMlwiLFxyXG4gIFxyXG4gICAgICBpbmRleE5hbWU6IFwienp4eGNjdnZcIixcclxuICBcclxuICAgICAgbG9jYWxlczoge1xyXG4gICAgICAgIFwiL1wiOiB7XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjNcIixcclxuICAgICAgICAgIHRyYW5zbGF0aW9uczoge1xyXG4gICAgICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIlx1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2M1wiLFxyXG4gICAgICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbDogXCJcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjNcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW9kYWw6IHtcclxuICAgICAgICAgICAgICBzZWFyY2hCb3g6IHtcclxuICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uVGl0bGU6IFwiXHU2RTA1XHU5NjY0XHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2XCIsXHJcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvbkFyaWFMYWJlbDogXCJcdTZFMDVcdTk2NjRcdTY3RTVcdThCRTJcdTY3NjFcdTRFRjZcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiXHU1M0Q2XHU2RDg4XCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25BcmlhTGFiZWw6IFwiXHU1M0Q2XHU2RDg4XCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBzdGFydFNjcmVlbjoge1xyXG4gICAgICAgICAgICAgICAgcmVjZW50U2VhcmNoZXNUaXRsZTogXCJcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjJcIixcclxuICAgICAgICAgICAgICAgIG5vUmVjZW50U2VhcmNoZXNUZXh0OiBcIlx1NkNBMVx1NjcwOVx1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMlwiLFxyXG4gICAgICAgICAgICAgICAgc2F2ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiBcIlx1NEZERFx1NUI1OFx1ODFGM1x1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMlwiLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGU6IFwiXHU0RUNFXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyXHU0RTJEXHU3OUZCXHU5NjY0XCIsXHJcbiAgICAgICAgICAgICAgICBmYXZvcml0ZVNlYXJjaGVzVGl0bGU6IFwiXHU2NTM2XHU4NUNGXCIsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVGYXZvcml0ZVNlYXJjaEJ1dHRvblRpdGxlOiBcIlx1NEVDRVx1NjUzNlx1ODVDRlx1NEUyRFx1NzlGQlx1OTY2NFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZXJyb3JTY3JlZW46IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlVGV4dDogXCJcdTY1RTBcdTZDRDVcdTgzQjdcdTUzRDZcdTdFRDNcdTY3OUNcIixcclxuICAgICAgICAgICAgICAgIGhlbHBUZXh0OiBcIlx1NEY2MFx1NTNFRlx1ODBGRFx1OTcwMFx1ODk4MVx1NjhDMFx1NjdFNVx1NEY2MFx1NzY4NFx1N0Y1MVx1N0VEQ1x1OEZERVx1NjNBNVwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RUZXh0OiBcIlx1OTAwOVx1NjJFOVwiLFxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUZXh0OiBcIlx1NTIwN1x1NjM2MlwiLFxyXG4gICAgICAgICAgICAgICAgY2xvc2VUZXh0OiBcIlx1NTE3M1x1OTVFRFwiLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoQnlUZXh0OiBcIlx1NjQxQ1x1N0QyMlx1NjNEMFx1NEY5Qlx1ODAwNVwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgbm9SZXN1bHRzU2NyZWVuOiB7XHJcbiAgICAgICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiBcIlx1NjVFMFx1NkNENVx1NjI3RVx1NTIzMFx1NzZGOFx1NTE3M1x1N0VEM1x1Njc5Q1wiLFxyXG4gICAgICAgICAgICAgICAgc3VnZ2VzdGVkUXVlcnlUZXh0OiBcIlx1NEY2MFx1NTNFRlx1NEVFNVx1NUMxRFx1OEJENVx1NjdFNVx1OEJFMlwiLFxyXG4gICAgICAgICAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNUZXh0OiBcIlx1NEY2MFx1OEJBNFx1NEUzQVx1OEJFNVx1NjdFNVx1OEJFMlx1NUU5NFx1OEJFNVx1NjcwOVx1N0VEM1x1Njc5Q1x1RkYxRlwiLFxyXG4gICAgICAgICAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNMaW5rVGV4dDogXCJcdTcwQjlcdTUxRkJcdTUzQ0RcdTk5ODhcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiL2VuL1wiOiB7XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWFyY2ggRG9jdW1lbnRhdGlvblwiLFxyXG4gICAgICAgICAgdHJhbnNsYXRpb25zOiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiU2VhcmNoIERvY3VtZW50YXRpb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBjb21wb25lbnRzOiBbXHJcbiAgICAgIFwiQmFkZ2VcIiwgXHJcbiAgICAgIFwiVlBDYXJkXCIsXHJcbiAgICAgIFwiQXJ0UGxheWVyXCIsXHJcbiAgICAgIFwiQmlsaUJpbGlcIixcclxuICAgICAgXCJDb2RlUGVuXCIsXHJcbiAgICAgIFwiUERGXCIsXHJcbiAgICAgIC8vIFwiUmVwbGl0XCIsXHJcbiAgICAgIFwiU2hhcmVcIixcclxuICAgICAgXCJTaXRlSW5mb1wiLFxyXG4gICAgICBcIlN0YWNrQmxpdHpcIixcclxuICAgICAgXCJWUEJhbm5lclwiLFxyXG4gICAgICBcclxuICAgICAgXCJWaWRTdGFja1wiLFxyXG4gICAgICBcIlhpR3VhXCIsXSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVGhlc2UgZmVhdHVyZXMgYXJlIGVuYWJsZWQgZm9yIGRlbW8sIG9ubHkgcHJlc2VydmUgZmVhdHVyZXMgeW91IG5lZWQgaGVyZVxyXG4gICAgbWRFbmhhbmNlOiB7XHJcbiAgICAgXHJcbiAgICAgIGFsaWduOiB0cnVlLFxyXG4gICAgICBhdHRyczogdHJ1ZSxcclxuICAgICAgY29kZXRhYnM6IHRydWUsXHJcbiAgICAgIGNvbXBvbmVudDogdHJ1ZSxcclxuICAgICAgZGVtbzogdHJ1ZSxcclxuICAgICAgZmlndXJlOiB0cnVlLFxyXG4gICAgICBpbWdMYXp5bG9hZDogdHJ1ZSxcclxuICAgICAgaW1nU2l6ZTogdHJ1ZSxcclxuICAgICAgaW5jbHVkZTogdHJ1ZSxcclxuICAgICAgbWFyazogdHJ1ZSxcclxuICAgIFxyXG4gICAgICBzdHlsaXplOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWF0Y2hlcjogXCJSZWNvbW1lbmRlZFwiLFxyXG4gICAgICAgICAgcmVwbGFjZXI6ICh7IHRhZyB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YWcgPT09IFwiZW1cIilcclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGFnOiBcIkJhZGdlXCIsXHJcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRpcFwiIH0sXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlJlY29tbWVuZGVkXCIsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgc3ViOiB0cnVlLFxyXG4gICAgICBzdXA6IHRydWUsXHJcbiAgICAgIHRhYnM6IHRydWUsXHJcbiAgICAgIHRhc2tsaXN0OiB0cnVlLFxyXG4gICAgICB2UHJlOiB0cnVlLFxyXG5cclxuIC8vIFx1NTcyOFx1NTQyRlx1NzUyOFx1NEU0Qlx1NTI0RFx1NUI4OVx1ODhDNSBjaGFydC5qc1xyXG4gY2hhcnQ6IHRydWUsXHJcblxyXG4gLy8gaW5zZXJ0IGNvbXBvbmVudCBlYXNpbHlcclxuXHJcbiAvLyBcdTU3MjhcdTU0MkZcdTc1MjhcdTRFNEJcdTUyNERcdTVCODlcdTg4QzUgZWNoYXJ0c1xyXG4gZWNoYXJ0czogdHJ1ZSxcclxuXHJcbiAvLyBcdTU3MjhcdTU0MkZcdTc1MjhcdTRFNEJcdTUyNERcdTVCODlcdTg4QzUgZmxvd2NoYXJ0LnRzXHJcbiBmbG93Y2hhcnQ6IHRydWUsXHJcblxyXG4gLy8gZ2ZtIHJlcXVpcmVzIG1hdGhqYXgtZnVsbCB0byBwcm92aWRlIHRleCBzdXBwb3J0XHJcbiBnZm06IHRydWUsXHJcblxyXG4gLy8gXHU1NzI4XHU1NDJGXHU3NTI4XHU0RTRCXHU1MjREXHU1Qjg5XHU4OEM1IGthdGV4XHJcbiBrYXRleDogdHJ1ZSxcclxuXHJcbiAvLyBcdTU3MjhcdTU0MkZcdTc1MjhcdTRFNEJcdTUyNERcdTVCODlcdTg4QzUgbWF0aGpheC1mdWxsXHJcbiBtYXRoamF4OiB0cnVlLFxyXG5cclxuIC8vIFx1NTcyOFx1NTQyRlx1NzUyOFx1NEU0Qlx1NTI0RFx1NUI4OVx1ODhDNSBtZXJtYWlkXHJcbiAgbWVybWFpZDogdHJ1ZSxcclxuXHJcbiBwbGF5Z3JvdW5kOiB7XHJcbiAgIHByZXNldHM6IFtcInRzXCIsIFwidnVlXCJdLFxyXG4gfSxcclxuXHJcbiAvLyBcdTU3MjhcdTU0MkZcdTc1MjhcdTRFNEJcdTUyNERcdTVCODlcdTg4QzUgcmV2ZWFsLmpzXHJcbiAvLyByZXZlYWxKczoge1xyXG4gLy8gICBwbHVnaW5zOiBbXCJoaWdobGlnaHRcIiwgXCJtYXRoXCIsIFwic2VhcmNoXCIsIFwibm90ZXNcIiwgXCJ6b29tXCJdLFxyXG4gLy8gfSxcclxuXHJcbiAvLyBcdTU3MjhcdTU0MkZcdTc1MjhcdTRFNEJcdTUyNERcdTVCODlcdTg4QzUgQHZ1ZS9yZXBsXHJcbiB2dWVQbGF5Z3JvdW5kOiB0cnVlLFxyXG5cclxuIC8vIGluc3RhbGwgc2FuZHBhY2stdnVlMyBiZWZvcmUgZW5hYmxpbmcgaXRcclxuIHNhbmRwYWNrOiB0cnVlLFxyXG59LFxyXG5cclxuLy8gXHU1OTgyXHU2NzlDXHU0RjYwXHU5NzAwXHU4OTgxIFBXQVx1MzAwMlx1NUI4OVx1ODhDNSBAdnVlcHJlc3MvcGx1Z2luLXB3YSBcdTVFNzZcdTUzRDZcdTZEODhcdTRFMEJcdTY1QjlcdTZDRThcdTkxQ0FcclxucHdhOiB7XHJcbiBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxyXG4gY2FjaGVIVE1MOiB0cnVlLFxyXG4vLyBjYWNoZVBpYzogdHJ1ZSxcclxuIGFwcGVuZEJhc2U6IHRydWUsXHJcbiBhcHBsZToge1xyXG4gICBpY29uOiBcIi9hc3NldHMvaWNvbi9hcHBsZS1pY29uLTE1Mi5wbmdcIixcclxuICAgc3RhdHVzQmFyQ29sb3I6IFwiYmxhY2tcIixcclxuIH0sXHJcbiBtc1RpbGU6IHtcclxuICAgaW1hZ2U6IFwiL2Fzc2V0cy9pY29uL21zLWljb24tMTQ0LnBuZ1wiLFxyXG4gICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiB9LFxyXG4gbWFuaWZlc3Q6IHtcclxuICAgaWNvbnM6IFtcclxuICAgICB7XHJcbiAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTUxMi5wbmdcIixcclxuICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcclxuICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgfSxcclxuICAgICB7XHJcbiAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTE5Mi5wbmdcIixcclxuICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcclxuICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgfSxcclxuICAgICB7XHJcbiAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS01MTIucG5nXCIsXHJcbiAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXHJcbiAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgIH0sXHJcbiAgICAge1xyXG4gICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtMTkyLnBuZ1wiLFxyXG4gICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxyXG4gICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICB9LFxyXG4gICBdLFxyXG4gICBzaG9ydGN1dHM6IFtcclxuICAgICB7XHJcbiAgICAgICBuYW1lOiBcIkRlbW9cIixcclxuICAgICAgIHNob3J0X25hbWU6IFwiRGVtb1wiLFxyXG4gICAgICAgdXJsOiBcIi9kZW1vL1wiLFxyXG4gICAgICAgaWNvbnM6IFtcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vZ3VpZGUtbWFza2FibGUucG5nXCIsXHJcbiAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxyXG4gICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgXSxcclxuICAgICB9LFxyXG4gICBdLFxyXG4gfSxcclxufSxcclxufSxcclxuZnVsbHNjcmVlbjogdHJ1ZSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiWDovbm9kZWpzXHU4QkZFXHU3QTBCXHU0RTA5XHU1OTU3XHU0RUUzXHU3ODAxL25vZGVqc1x1NTQwRVx1N0FFRlx1OEJGRVx1N0EwQlx1NEVFM1x1NzgwMShcdTY1QzVcdTZFMzhcdTVDMEZcdTdBMEJcdTVFOEYpL2hvcGUvbGluZ2dhbi9ibG9nLy52dWVwcmVzcy9uYXZiYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIlg6XFxcXG5vZGVqc1x1OEJGRVx1N0EwQlx1NEUwOVx1NTk1N1x1NEVFM1x1NzgwMVxcXFxub2RlanNcdTU0MEVcdTdBRUZcdThCRkVcdTdBMEJcdTRFRTNcdTc4MDEoXHU2NUM1XHU2RTM4XHU1QzBGXHU3QTBCXHU1RThGKVxcXFxob3BlXFxcXGxpbmdnYW5cXFxcYmxvZ1xcXFwudnVlcHJlc3NcXFxcbmF2YmFyXFxcXGVuLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9YOi9ub2RlanMlRTglQUYlQkUlRTclQTglOEIlRTQlQjglODklRTUlQTUlOTclRTQlQkIlQTMlRTclQTAlODEvbm9kZWpzJUU1JTkwJThFJUU3JUFCJUFGJUU4JUFGJUJFJUU3JUE4JThCJUU0JUJCJUEzJUU3JUEwJTgxKCVFNiU5NyU4NSVFNiVCOCVCOCVFNSVCMCU4RiVFNyVBOCU4QiVFNSVCQSU4RikvaG9wZS9saW5nZ2FuL2Jsb2cvLnZ1ZXByZXNzL25hdmJhci9lbi50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW5OYXZiYXIgPSBuYXZiYXIoW1xyXG4gIFwiL2VuL1wiLFxyXG4gIFwiL2VuL2RlbW8vXCIsXHJcbiAge1xyXG4gICAgdGV4dDogXCJQb3N0c1wiLFxyXG4gICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXHJcbiAgICBwcmVmaXg6IFwiL2VuL3Bvc3RzL1wiLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiQXBwbGVcIixcclxuICAgICAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcclxuICAgICAgICBwcmVmaXg6IFwiYXBwbGUvXCIsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIHsgdGV4dDogXCJBcHBsZTFcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiMVwiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiQXBwbGUyXCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcIjJcIiB9LFxyXG4gICAgICAgICAgXCIzXCIsXHJcbiAgICAgICAgICBcIjRcIixcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJCYW5hbmFcIixcclxuICAgICAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcclxuICAgICAgICBwcmVmaXg6IFwiYmFuYW5hL1wiLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiQmFuYW5hIDFcIixcclxuICAgICAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXHJcbiAgICAgICAgICAgIGxpbms6IFwiMVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogXCJCYW5hbmEgMlwiLFxyXG4gICAgICAgICAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcclxuICAgICAgICAgICAgbGluazogXCIyXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCIzXCIsXHJcbiAgICAgICAgICBcIjRcIixcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7IHRleHQ6IFwiQ2hlcnJ5XCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcImNoZXJyeVwiIH0sXHJcbiAgICAgIHsgdGV4dDogXCJEcmFnb24gRnJ1aXRcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiZHJhZ29uZnJ1aXRcIiB9LFxyXG4gICAgICBcInRvbWF0b1wiLFxyXG4gICAgICBcInN0cmF3YmVycnlcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlYyIERvY3NcIixcclxuICAgIGljb246IFwiYm9va1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3RoZW1lLWhvcGUudnVlanMucHJlc3MvXCIsXHJcbiAgfSxcclxuXSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiWDovbm9kZWpzXHU4QkZFXHU3QTBCXHU0RTA5XHU1OTU3XHU0RUUzXHU3ODAxL25vZGVqc1x1NTQwRVx1N0FFRlx1OEJGRVx1N0EwQlx1NEVFM1x1NzgwMShcdTY1QzVcdTZFMzhcdTVDMEZcdTdBMEJcdTVFOEYpL2hvcGUvbGluZ2dhbi9ibG9nLy52dWVwcmVzcy9uYXZiYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIlg6XFxcXG5vZGVqc1x1OEJGRVx1N0EwQlx1NEUwOVx1NTk1N1x1NEVFM1x1NzgwMVxcXFxub2RlanNcdTU0MEVcdTdBRUZcdThCRkVcdTdBMEJcdTRFRTNcdTc4MDEoXHU2NUM1XHU2RTM4XHU1QzBGXHU3QTBCXHU1RThGKVxcXFxob3BlXFxcXGxpbmdnYW5cXFxcYmxvZ1xcXFwudnVlcHJlc3NcXFxcbmF2YmFyXFxcXHpoLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9YOi9ub2RlanMlRTglQUYlQkUlRTclQTglOEIlRTQlQjglODklRTUlQTUlOTclRTQlQkIlQTMlRTclQTAlODEvbm9kZWpzJUU1JTkwJThFJUU3JUFCJUFGJUU4JUFGJUJFJUU3JUE4JThCJUU0JUJCJUEzJUU3JUEwJTgxKCVFNiU5NyU4NSVFNiVCOCVCOCVFNSVCMCU4RiVFNyVBOCU4QiVFNSVCQSU4RikvaG9wZS9saW5nZ2FuL2Jsb2cvLnZ1ZXByZXNzL25hdmJhci96aC50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgemhOYXZiYXIgPSBuYXZiYXIoW1xyXG4gIFwiL1wiLFxyXG4gIFwiL2RlbW8vXCIsXHJcbiAge1xyXG4gICAgdGV4dDogXCJcdTUzNUFcdTY1ODdcIixcclxuICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxyXG4gICAgcHJlZml4OiBcIi9wb3N0cy9cIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1ODJGOVx1Njc5Q1wiLFxyXG4gICAgICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxyXG4gICAgICAgIHByZWZpeDogXCJhcHBsZS9cIixcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1ODJGOVx1Njc5QzFcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiMVwiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiXHU4MkY5XHU2NzlDMlwiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCIyXCIgfSxcclxuICAgICAgICAgIFwiM1wiLFxyXG4gICAgICAgICAgXCI0XCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU5OTk5XHU4NTQ5XCIsXHJcbiAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXHJcbiAgICAgICAgcHJlZml4OiBcImJhbmFuYS9cIixcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlx1OTk5OVx1ODU0OSAxXCIsXHJcbiAgICAgICAgICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIjFcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiXHU5OTk5XHU4NTQ5IDJcIixcclxuICAgICAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXHJcbiAgICAgICAgICAgIGxpbms6IFwiMlwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiM1wiLFxyXG4gICAgICAgICAgXCI0XCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgeyB0ZXh0OiBcIlx1NkEzMVx1Njg0M1wiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCJjaGVycnlcIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiXHU3MDZCXHU5Rjk5XHU2NzlDXCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcImRyYWdvbmZydWl0XCIgfSxcclxuICAgICAgXCJ0b21hdG9cIixcclxuICAgICAgXCJzdHJhd2JlcnJ5XCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogXCJWMiBcdTY1ODdcdTY4NjNcIixcclxuICAgIGljb246IFwiYm9va1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3RoZW1lLWhvcGUudnVlanMucHJlc3MvemgvXCIsXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgdGV4dDogXCJcdTc3RTVcdThCQzZcdTY4QzBcdTdEMjJcIixcclxuICAgIGljb246IFwiYm9va1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3d3dy56enh4Y2N2di54eXovbHZ5b3UvIy9cIixcclxuICB9LFxyXG5dKTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJYOi9ub2RlanNcdThCRkVcdTdBMEJcdTRFMDlcdTU5NTdcdTRFRTNcdTc4MDEvbm9kZWpzXHU1NDBFXHU3QUVGXHU4QkZFXHU3QTBCXHU0RUUzXHU3ODAxKFx1NjVDNVx1NkUzOFx1NUMwRlx1N0EwQlx1NUU4RikvaG9wZS9saW5nZ2FuL2Jsb2cvLnZ1ZXByZXNzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIlg6XFxcXG5vZGVqc1x1OEJGRVx1N0EwQlx1NEUwOVx1NTk1N1x1NEVFM1x1NzgwMVxcXFxub2RlanNcdTU0MEVcdTdBRUZcdThCRkVcdTdBMEJcdTRFRTNcdTc4MDEoXHU2NUM1XHU2RTM4XHU1QzBGXHU3QTBCXHU1RThGKVxcXFxob3BlXFxcXGxpbmdnYW5cXFxcYmxvZ1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhclxcXFxlbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vWDovbm9kZWpzJUU4JUFGJUJFJUU3JUE4JThCJUU0JUI4JTg5JUU1JUE1JTk3JUU0JUJCJUEzJUU3JUEwJTgxL25vZGVqcyVFNSU5MCU4RSVFNyVBQiVBRiVFOCVBRiVCRSVFNyVBOCU4QiVFNCVCQiVBMyVFNyVBMCU4MSglRTYlOTclODUlRTYlQjglQjglRTUlQjAlOEYlRTclQTglOEIlRTUlQkElOEYpL2hvcGUvbGluZ2dhbi9ibG9nLy52dWVwcmVzcy9zaWRlYmFyL2VuLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBjb25zdCBlblNpZGViYXIgPSBzaWRlYmFyKHtcbiAgXCIvZW4vXCI6IFtcbiAgICBcIlwiLFxuICAgIHtcbiAgICAgIHRleHQ6IFwiRGVtb1wiLFxuICAgICAgaWNvbjogXCJsYXB0b3AtY29kZVwiLFxuICAgICAgcHJlZml4OiBcImRlbW8vXCIsXG4gICAgICBsaW5rOiBcImRlbW8vXCIsXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiQXJ0aWNsZXNcIixcbiAgICAgIGljb246IFwiYm9va1wiLFxuICAgICAgcHJlZml4OiBcInBvc3RzL1wiLFxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gICAgfSxcbiAgICBcImludHJvXCIsXG4gICAge1xuICAgICAgdGV4dDogXCJTbGlkZXNcIixcbiAgICAgIGljb246IFwicGVyc29uLWNoYWxrYm9hcmRcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9wbHVnaW4tbWQtZW5oYW5jZS52dWVqcy5wcmVzcy9ndWlkZS9jb250ZW50L3JldmVhbGpzL2RlbW8uaHRtbFwiLFxuICAgIH0sXG4gIF0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiWDovbm9kZWpzXHU4QkZFXHU3QTBCXHU0RTA5XHU1OTU3XHU0RUUzXHU3ODAxL25vZGVqc1x1NTQwRVx1N0FFRlx1OEJGRVx1N0EwQlx1NEVFM1x1NzgwMShcdTY1QzVcdTZFMzhcdTVDMEZcdTdBMEJcdTVFOEYpL2hvcGUvbGluZ2dhbi9ibG9nLy52dWVwcmVzcy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJYOlxcXFxub2RlanNcdThCRkVcdTdBMEJcdTRFMDlcdTU5NTdcdTRFRTNcdTc4MDFcXFxcbm9kZWpzXHU1NDBFXHU3QUVGXHU4QkZFXHU3QTBCXHU0RUUzXHU3ODAxKFx1NjVDNVx1NkUzOFx1NUMwRlx1N0EwQlx1NUU4RilcXFxcaG9wZVxcXFxsaW5nZ2FuXFxcXGJsb2dcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXJcXFxcemgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1g6L25vZGVqcyVFOCVBRiVCRSVFNyVBOCU4QiVFNCVCOCU4OSVFNSVBNSU5NyVFNCVCQiVBMyVFNyVBMCU4MS9ub2RlanMlRTUlOTAlOEUlRTclQUIlQUYlRTglQUYlQkUlRTclQTglOEIlRTQlQkIlQTMlRTclQTAlODEoJUU2JTk3JTg1JUU2JUI4JUI4JUU1JUIwJThGJUU3JUE4JThCJUU1JUJBJThGKS9ob3BlL2xpbmdnYW4vYmxvZy8udnVlcHJlc3Mvc2lkZWJhci96aC50c1wiO2ltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5leHBvcnQgY29uc3QgemhTaWRlYmFyID0gc2lkZWJhcih7XG4gIFwiL1wiOiBbXG4gICAgXCJcIixcbiAgICB7XG4gICAgICB0ZXh0OiBcIlx1NTk4Mlx1NEY1NVx1NEY3Rlx1NzUyOFwiLFxuICAgICAgaWNvbjogXCJsYXB0b3AtY29kZVwiLFxuICAgICAgcHJlZml4OiBcImRlbW8vXCIsXG4gICAgICBsaW5rOiBcImRlbW8vXCIsXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU2NTg3XHU3QUUwXCIsXG4gICAgICBpY29uOiBcImJvb2tcIixcbiAgICAgIHByZWZpeDogXCJwb3N0cy9cIixcbiAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuICAgIH0sXG4gICAgXCJpbnRyb1wiLFxuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU1RTdCXHU3MDZGXHU3MjQ3XCIsXG4gICAgICBpY29uOiBcInBlcnNvbi1jaGFsa2JvYXJkXCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vcGx1Z2luLW1kLWVuaGFuY2UudnVlanMucHJlc3MvemgvZ3VpZGUvY29udGVudC9yZXZlYWxqcy9kZW1vLmh0bWxcIixcbiAgICB9LFxuICBdLFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIlg6L25vZGVqc1x1OEJGRVx1N0EwQlx1NEUwOVx1NTk1N1x1NEVFM1x1NzgwMS9ub2RlanNcdTU0MEVcdTdBRUZcdThCRkVcdTdBMEJcdTRFRTNcdTc4MDEoXHU2NUM1XHU2RTM4XHU1QzBGXHU3QTBCXHU1RThGKS9ob3BlL2xpbmdnYW4vYmxvZy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIlg6XFxcXG5vZGVqc1x1OEJGRVx1N0EwQlx1NEUwOVx1NTk1N1x1NEVFM1x1NzgwMVxcXFxub2RlanNcdTU0MEVcdTdBRUZcdThCRkVcdTdBMEJcdTRFRTNcdTc4MDEoXHU2NUM1XHU2RTM4XHU1QzBGXHU3QTBCXHU1RThGKVxcXFxob3BlXFxcXGxpbmdnYW5cXFxcYmxvZ1xcXFwudnVlcHJlc3NcXFxcbG9nby50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vWDovbm9kZWpzJUU4JUFGJUJFJUU3JUE4JThCJUU0JUI4JTg5JUU1JUE1JTk3JUU0JUJCJUEzJUU3JUEwJTgxL25vZGVqcyVFNSU5MCU4RSVFNyVBQiVBRiVFOCVBRiVCRSVFNyVBOCU4QiVFNCVCQiVBMyVFNyVBMCU4MSglRTYlOTclODUlRTYlQjglQjglRTUlQjAlOEYlRTclQTglOEIlRTUlQkElOEYpL2hvcGUvbGluZ2dhbi9ibG9nLy52dWVwcmVzcy9sb2dvLnRzXCI7ZXhwb3J0IGNvbnN0IE1SX0hPUEVfQVZBVEFSID1cbiAgJzxzdmcgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KC4yNDc4IC43ODEzMyAtMi41NDc5NyAuNjM2MjIgOTEwLjM1IDI4MS41OClcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBpZD1cImFcIiB4MT1cIjM3LjgyN1wiIHgyPVwiMTU5Ljk4OFwiIHkxPVwiMjcyLjkxNlwiIHkyPVwiMjc0LjYzXCI+PHN0b3Agb2Zmc2V0PVwiLjc1XCIgc3RvcC1jb2xvcj1cIiNlMzM5MzlcIi8+PHN0b3Agb2Zmc2V0PVwiLjk5OFwiIHN0b3AtY29sb3I9XCIjZmZmXCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KC4xMzgxNCAuODA3OTcgMi41NTU5OSAtLjYwMzIgMzQuMDg3IDQ5NC4zNjkpXCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgaWQ9XCJiXCIgeDE9XCIzNy44MjdcIiB4Mj1cIjE1OS45ODhcIiB5MT1cIjI3Mi45MTZcIiB5Mj1cIjI3NC42M1wiPjxzdG9wIG9mZnNldD1cIi44MTVcIiBzdG9wLWNvbG9yPVwiI2UzMzkzOVwiLz48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiNmZmZcIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD1cIk0xMzUuNjM3IDU4OC4wNjdjLTQ4Ljg5MS0yMDEuMzM0IDc0LjYwNS00MDQuMTYyIDI3NS44MzctNDUzLjAyOCAyMDEuMjMzLTQ4Ljg2NiA0MDMuOTk4IDc0LjczNCA0NTIuODg5IDI3Ni4wNjggNDguODkyIDIwMS4zMzUtNzQuNjA2IDQwNC4xNjItMjc1LjgzOCA0NTMuMDI5LTIwMS4yMzMgNDguODY2LTQwMy45OTctNzQuNzM0LTQ1Mi44ODgtMjc2LjA2OVpcIiBmaWxsPVwiI2ZkZTY4YVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjZDA4ODE5XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMTBcIi8+PHBhdGggZD1cIk01OTYuMDc2IDE5Ny4wNDRjLTMuMzQyLTU2LjA5IDU2Ljg5Ny03Ny44MzEgODkuMDE3LTUxLjM2MW0tNDEwLjY1IDEyOC44MTljLTIyLjc1My01MS4zNzctODYuMjU2LTQzLjA3LTEwMi42NTktNC44MTZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiM2ZDVlNTZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxMVwiLz48cGF0aCBkPVwiTTgzMy41NjggMjg4LjAyYy4wNSAxOC4wNDYtMTIuNTg0IDMwLjY5OS0yMS4zNDYgMzIuMjExLTguNzYyIDEuNTEyLTE3LjAzMS0xLjA5OS0xOC41ODQtMS4zNDEgMCAwLTYxLjM2My02LjEwMy0xMDUuNjI3IDYuOTIxLTQ0LjI2NSAxMy4wMjYtODcuMDQgNDcuMzg3LTk0LjYzNyA1MS44OTItNi42MjcgMy45MjgtMjkuMTEyIDcuNjk3LTQ0LjQ2Mi0xMi45MzgtMTUuMzUxLTIwLjYzNi4wMjQtNDEuNTI2LjAyNC00MS41MjZzMTIuNjg1LTE4LjI3OSA0MC43NzEtMzUuMTIzYzI4LjA4OC0xNi44NDQgMjQuNjI0LTEzLjIyNiA1Mi4zMjYtMjUuNjk2IDE1LjI0Ny02Ljg2NSA0My4zMTktMTQuMTg2IDY3LjQyOS0xNy4wNjkgMjUuMTkzLTMuMDExIDQ2LjM0OC0xLjM4NCA1Ny42NzMuNzY5IDIyLjE2NSA0LjIxMiAyOC42MzIgNS45MyAzOS4xNjkgOS4yMjkgMTIuNDUxIDMuODk4IDI3LjIxNCAxNC41MTYgMjcuMjY0IDMyLjY3MVpcIiBmaWxsPVwiI2ZmZlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjZDA4ODE5XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiOFwiLz48cGF0aCBkPVwiTTU1OC4zNTEgMzQ1LjYzMmMtMy40NTgtMTQuMjM3IDUuMjE0LTI4LjU2NiAxOS4zNjctMzIuMDAzIDE0LjE1NC0zLjQzNyAyOC40MyA1LjMyIDMxLjg4NyAxOS41NTcgMy40NTggMTQuMjM4LTUuMjEyIDI4LjU2Ny0xOS4zNjcgMzIuMDA0LTE0LjE1MiAzLjQzNy0yOC40My01LjMxOS0zMS44ODctMTkuNTU4WlwiIGZpbGw9XCIjNmQ1ZTU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZT1cIiM2ZDVlNTZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCI2LjI2OFwiLz48cGF0aCBkPVwiTTIyMC4yNDkgNDgzLjQxNmM0Ni44MS0xMS42ODkgOTEuMzIzLS40NjcgOTkuNDIgMjUuMDY0IDguMDk4IDI1LjUzMi0yMy4yODYgNTUuNzA2LTcwLjA5NyA2Ny4zOTMtNDYuODExIDExLjY4OS05MS4zMjMuNDY3LTk5LjQyLTI1LjA2NC04LjA5Ny0yNS41MzIgMjMuMjg2LTU1LjcwNiA3MC4wOTctNjcuMzkzWlwiIGZpbGw9XCJ1cmwoI2EpXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIG9wYWNpdHk9XCIuMjYxXCIvPjxwYXRoIGQ9XCJNNzM5LjkgMzU3LjIyNmMtNDYuOTU5IDExLjA4Mi04MS4zNjcgNDEuNDY5LTc2Ljg1MyA2Ny44NzEgNC41MTQgMjYuNDAyIDQ2LjI0MSAzOC44MjEgOTMuMTk4IDI3LjczOCA0Ni45NTgtMTEuMDgxIDgxLjM2Ni00MS40NjcgNzYuODUzLTY3Ljg2OS00LjUxNC0yNi40MDMtNDYuMjQxLTM4LjgyMS05My4xOTgtMjcuNzRaXCIgZmlsbD1cInVybCgjYilcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgb3BhY2l0eT1cIi4yNjFcIi8+PHBhdGggZD1cIk00MDAuOTM0IDM5OC45MTdjLS41OTkgMTguMDM0LTEzLjY4MSAzMC4yMTgtMjIuNDk0IDMxLjQwOS04LjgxMiAxLjE5Mi0xNi45ODItMS43MTYtMTguNTI2LTIuMDE0IDAgMC02MS4xMDktOC4zMzQtMTA1LjgxOSAzLjA3LTQ0LjcwOSAxMS40MDQtODguNjk2IDQ0LjE4MS05Ni40NTIgNDguNDA2LTYuNzYzIDMuNjgzLTI5LjM3MiA2LjYzMi00My45NzItMTQuNTQ2LTE0LjYtMjEuMTggMS41MTktNDEuNDk0IDEuNTE5LTQxLjQ5NHMxMy4zMzUtMTcuODAzIDQyLjAxMy0zMy42MTJjMjguNjc3LTE1LjgwOSAyNS4wODUtMTIuMzE5IDUzLjIyMi0yMy43NzIgMTUuNDg0LTYuMzA0IDQzLjgwMy0xMi41OTggNjguMDA1LTE0LjYgMjUuMjg4LTIuMDkzIDQ2LjM3My4zMDUgNTcuNjE2IDIuODY3IDIyIDUuMDE2IDI4LjQwMSA2Ljk2OCAzOC44MTMgMTAuNjQ5IDEyLjMwNCA0LjM0OCAyNi42NzcgMTUuNDk2IDI2LjA3NSAzMy42MzdaXCIgZmlsbD1cIiNmZmZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiI2QwODgxOVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjhcIi8+PHBhdGggZD1cIk0xMjkuMDUgNDQ1LjU0NmMtMy40NTgtMTQuMjM5IDUuMjEzLTI4LjU2NiAxOS4zNjctMzIuMDAzIDE0LjE1My0zLjQzNyAyOC40MjkgNS4zMTggMzEuODg3IDE5LjU1NyAzLjQ1OCAxNC4yMzgtNS4yMTMgMjguNTY2LTE5LjM2NyAzMi4wMDMtMTQuMTUzIDMuNDM3LTI4LjQzLTUuMzE4LTMxLjg4Ny0xOS41NTdaXCIgZmlsbD1cIiM2ZDVlNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiIzZkNWU1NlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjYuMjY4XCIvPjxwYXRoIGQ9XCJNNDI0LjM4MSA2OTYuMzg2czY0LjQyNyAxMy42NDYgMTAxLjk5NiA1Ljc1N0M2NDAuNjUzIDY3OC4xNDYgNjkwLjggNTIxLjg5NCA2OTAuOCA1MjEuODk0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZDA4ODE5XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMTFcIi8+PHBhdGggZD1cIk03OTYuMDQgNjY2Ljc3NHMtMTAuNzM0LTQ0LjE2NS00MS40MDUtMTEuMzQ4Yy05LjY4MSAxMC4zNTktMTAuNDM4IDQwLjYwNC0yOC4yMTcgODEuODktMTUuOTQyIDM3LjAyLTM5LjU2NCA2MC43MjgtNDIuOTM4IDc2LjA2My0zLjM3NCAxNS4zMzUuNDUxIDM1Ljk5MiAyNi4zNTIgNDEuNTM3IDI1LjkwMiA1LjU0NSA0MS45NjctMjMuMzgxIDQxLjk2Ny0yMy4zODFsNDQuMjQxLTE2NC43NjFaXCIgZmlsbD1cIiNmZGU2OGFcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiI2QwODgxOVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjEwXCIvPjxwYXRoIGQ9XCJNNzkzLjMzNyA2NjQuNzM0Yy0zNy4wNzUgMTYwLjA0NS01MS43MyAxNjMuMTQ1LTQwLjM0MyAxODQuODQ1IDExLjM4NyAyMS43MDEgNTEuNDE3IDMzLjcxNiA3MS44NzYtNy4zMTMgNi43MzQtMTMuNTA1LTEuMzEtNDMuMzE3LTEuNTExLTc4LjA3Ny0uMzA3LTUzLjA2IDE2Ljg2NS04Ni4xMTEgMTAuNDAzLTk4LjEtMTUuMzMyLTI4LjQ1Mi0zOS4zNzctNS44NzUtNDAuNDI1LTEuMzU1WlwiIGZpbGw9XCIjZmRlNjhhXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZT1cIiNkMDg4MTlcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxMFwiLz48L3N2Zz4nO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxZixTQUFTLHdCQUF3Qjs7O0FDQW5DLFNBQVMsaUJBQWlCOzs7QUNBVixTQUFTLGNBQWM7QUFFbmhCLElBQU0sV0FBVyxPQUFPO0FBQUEsRUFDN0I7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQSxR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aUNBQWlDO0FBQzFDLFNBQVMsNEJBQTRCO0FBUXJDLElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFFOUIsTUFBTTtBQUFBLEVBRU4sU0FBUztBQUFBLElBQ1AsS0FBSztBQUFBLE1BQ0YsTUFBTTtBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1IsYUFBYTtBQUFBLElBRWhCO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFBQSxFQUVBO0FBQUE7QUFBQSxFQUdDLGdCQUFnQjtBQUFBLEVBRWhCLFNBQVM7QUFBQSxJQUNSLHFCQUFxQjtBQUFBLElBQ3JCLDBCQUEwQjtBQUFBLElBQzFCLGlCQUFpQjtBQUFBLElBQ2pCLFlBQVk7QUFBQTtBQUFBLE1BRVYsUUFBUTtBQUFBLFFBQ047QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxVQUNQLFVBQVUsQ0FBQyxLQUFLLEVBQUU7QUFBQSxVQUNsQixZQUFZO0FBQUEsWUFDVixPQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFHRjtBQUNILENBQUM7IiwKICAibmFtZXMiOiBbIm5hdmJhciIsICJuYXZiYXIiLCAic2lkZWJhciIsICJzaWRlYmFyIl0KfQo=
