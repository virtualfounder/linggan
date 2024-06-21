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
        text: "\u672D\u8BB04\u6708",
        icon: "pen-to-square",
        prefix: "\u672D\u8BB0/202404",
        children: [
          { text: "\u8FD9\u662F\u7B2C\u4E00\u7BC7\u6587\u7AE0-0412", icon: "pen-to-square", link: "20240412" },
          { text: "\u4ECA\u5929\u5B8C\u6210\u7684\u4EE3\u7801-0413", icon: "pen-to-square", link: "20240413" },
          "20240414",
          "20240415"
        ]
      },
      {
        text: "\u7B14\u8BB05\u6708",
        icon: "pen-to-square",
        prefix: "\u672D\u8BB0/202405/20240506",
        children: [
          {
            text: "\u7B14\u8BB0\u4E00",
            icon: "pen-to-square",
            link: "\u7B14\u8BB0\u4E00"
          },
          {
            text: "\u7B14\u8BB0\u4E8C",
            icon: "pen-to-square",
            link: "\u7B14\u8BB0\u4E8C"
          },
          "\u7B14\u8BB0\u4E09",
          "\u7B14\u8BB0\u56DB",
          "\u7B14\u8BB0\u4E94"
        ]
      }
      // { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      // { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
    ]
  },
  {
    text: "\u4E00\u672C\u4E66",
    icon: "book",
    link: "https://www.zzxxccvv.xyz/posts/%E4%B8%80%E6%9C%AC%E4%B9%A6/%E7%94%A8latex%E5%86%99%E7%9A%84%E4%B8%80%E6%9C%AC%E4%B9%A6"
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
    // {
    //   text: "札记",
    //   icon: "book",
    //   prefix: "posts/札记",
    //   children: "structure",
    // },
    // {
    //   text: "编程分享",
    //   icon: "book",
    //   prefix: "posts/编程分享",
    //   children: "structure",
    // },
    // {
    //   text: "产品服务",
    //   icon: "book",
    //   prefix: "posts/产品服务",
    //   children: "structure",
    // },
    "intro",
    {
      text: "\u5E7B\u706F\u7247",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html"
    }
  ]
});

// blog/.vuepress/theme.ts
var theme_default = hopeTheme(
  {
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
        Zhihu: "https://zzxxccvv.xyz"
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
        "/posts/\u672D\u8BB0/202404/20240423/20240423.html": ["tyu357"],
        "/posts/\u672D\u8BB0/202404/20240425/20240425.html": ["tyu357"],
        "/posts/\u672D\u8BB0/202404/20240426/20240426.html": ["tyu357"],
        "/posts/\u672D\u8BB0/202405/20240502/20240502.html": ["tyu357"],
        "/posts/\u672D\u8BB0/202406/20240609/20240609.html": ["tyu357"],
        "/posts/books/\u4E09\u4F53\u4E00.html": ["tyu357\u4E09\u4F53"],
        "/posts/books/\u4E09\u4F53\u4E8C.html": ["tyu357\u4E09\u4F53"],
        "/posts/books/\u4E09\u4F53\u4E09.html": ["tyu357\u4E09\u4F53"]
      }
    },
    // enable it to preview all changes in time
    hotReload: false,
    plugins: {
      blog: true,
      git: {
        // 配置项
        createdTime: true,
        updatedTime: true,
        contributors: true
      },
      watermark: {
        enabled: false
      },
      copyright: {
        global: true,
        maxLength: 100
      },
      // Install @waline/client before enabling it
      // Note: This is for testing ONLY!
      // You MUST generate and use your own comment service in production.
      comment: {
        provider: "Waline",
        serverURL: "https://waline-comment.vuejs.press"
      },
      docsearch: {
        appId: "G3FD8QYKBY",
        apiKey: "2e6202a47627bdf54a3c2452765c1fa9",
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
        footnote: true,
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
        spoiler: true,
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
        //  revealJs: {
        //   plugins: ["highlight", "math", "search", "notes", "zoom"],
        //  },
        // 在启用之前安装 @vue/repl
        vuePlayground: true,
        // install sandpack-vue3 before enabling it
        sandpack: true
      },
      // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
      pwa: {
        favicon: "/favicon.ico",
        cacheHTML: true,
        cacheImage: true,
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
  },
  { custom: true }
);

// blog/.vuepress/config.ts
import { oml2dPlugin } from "vuepress-plugin-oh-my-live2d";
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
    //  netabareSwitchPlugin(),
    // removeHtmlExtensionPlugin(),
    //  appendDatePlugin(),
    oml2dPlugin({
      // 在这里配置选项
      dockedPosition: "right",
      models: [
        {
          "path": "https://model.oml2d.com/Pio/model.json",
          "scale": 0.4,
          "position": [0, 50],
          "stageStyle": {
            "height": 300
          }
        }
      ]
    })
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYmxvZy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImJsb2cvLnZ1ZXByZXNzL3RoZW1lLnRzIiwgImJsb2cvLnZ1ZXByZXNzL25hdmJhci9lbi50cyIsICJibG9nLy52dWVwcmVzcy9uYXZiYXIvemgudHMiLCAiYmxvZy8udnVlcHJlc3Mvc2lkZWJhci9lbi50cyIsICJibG9nLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiWDovbm9kZWpzXHU4QkZFXHU3QTBCXHU0RTA5XHU1OTU3XHU0RUUzXHU3ODAxL25vZGVqc1x1NTQwRVx1N0FFRlx1OEJGRVx1N0EwQlx1NEVFM1x1NzgwMShcdTY1QzVcdTZFMzhcdTVDMEZcdTdBMEJcdTVFOEYpL2hvcGUvbGluZ2dhbi9ibG9nLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiWDpcXFxcbm9kZWpzXHU4QkZFXHU3QTBCXHU0RTA5XHU1OTU3XHU0RUUzXHU3ODAxXFxcXG5vZGVqc1x1NTQwRVx1N0FFRlx1OEJGRVx1N0EwQlx1NEVFM1x1NzgwMShcdTY1QzVcdTZFMzhcdTVDMEZcdTdBMEJcdTVFOEYpXFxcXGhvcGVcXFxcbGluZ2dhblxcXFxibG9nXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1g6L25vZGVqcyVFOCVBRiVCRSVFNyVBOCU4QiVFNCVCOCU4OSVFNSVBNSU5NyVFNCVCQiVBMyVFNyVBMCU4MS9ub2RlanMlRTUlOTAlOEUlRTclQUIlQUYlRTglQUYlQkUlRTclQTglOEIlRTQlQkIlQTMlRTclQTAlODEoJUU2JTk3JTg1JUU2JUI4JUI4JUU1JUIwJThGJUU3JUE4JThCJUU1JUJBJThGKS9ob3BlL2xpbmdnYW4vYmxvZy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gXCJ2dWVwcmVzc1wiO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcclxuaW1wb3J0IHsgYXBwZW5kRGF0ZVBsdWdpbiB9IGZyb20gXCJAdnVlcHJlc3MvcGx1Z2luLWFwcGVuZC1kYXRlXCI7XHJcbmltcG9ydCB7IG9tbDJkUGx1Z2luIH0gZnJvbSBcInZ1ZXByZXNzLXBsdWdpbi1vaC1teS1saXZlMmRcIjtcclxuaW1wb3J0IHsgcmVtb3ZlSHRtbEV4dGVuc2lvblBsdWdpbiB9IGZyb20gJ3Z1ZXByZXNzLXBsdWdpbi1yZW1vdmUtaHRtbC1leHRlbnNpb24nO1xyXG5cclxuLy8gaW1wb3J0IHsgbmV0YWJhcmVTd2l0Y2hQbHVnaW4gfSBmcm9tICd2dWVwcmVzcy1wbHVnaW4tbmV0YWJhcmUtc3dpdGNoJztcclxuXHJcbmNvbnN0IGF1dGhvciA9IFwiXHU3MDc1XHU2MTFGXHU4NjVBXHU2MkRGXHU1M0QxXHU3M0IwXHU3M0IwXHU1QjlFXCI7XHJcbmNvbnN0IGRvbWFpbiA9IFwiaHR0cHM6Ly93d3cuenp4eGNjdnYueHl6XCI7XHJcbmNvbnN0IHRhZ3MgPSBbXCJcdTdBMEJcdTVFOEZcdTU0NThcIiwgXCJcdTdGMTZcdTdBMEJcIiwgXCJcdThCQTFcdTdCOTdcdTY3M0FcIl07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XHJcbiBcclxuICBiYXNlOiBcIi9cIixcclxuXHJcbiAgbG9jYWxlczoge1xyXG4gICAgXCIvXCI6IHsgXHJcbiAgICAgICBsYW5nOiBcInpoLUNOXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiXHU3MDc1XHU2MTFGXHU4NjVBXHU2MkRGXHU1M0QxXHU3M0IwXHU3M0IwXHU1QjlFXHU3Njg0XHU3RjE2XHU3QTBCXHU1QjlEXHU1MTc4XCIsXHJcbiAgICAgICBkZXNjcmlwdGlvbjogXCJcdThEMzRcdTVGQzNcdTc2ODRcdTdGMTZcdTdBMEJcdTVCNjZcdTRFNjBcdThERUZcdTdFQkZcdUZGMENcdTUxNjhcdTk3NjJcdTc2ODRcdTdGMTZcdTdBMEJcdTc3RTVcdThCQzZcdTc2N0VcdTc5RDFcIixcclxuICAgICBcclxuICAgIH0sXHJcbiAgICBcIi9lbi9cIjoge1xyXG4gICAgICBsYW5nOiBcImVuLVVTXCIsXHJcbiAgICAgIHRpdGxlOiBcIkJsb2cgRGVtb1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJBIGJsb2cgZGVtbyBmb3IgdnVlcHJlc3MtdGhlbWUtaG9wZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICB0aGVtZSxcclxuXHJcbiAgLy8gRW5hYmxlIGl0IHdpdGggcHdhXHJcbiAgIHNob3VsZFByZWZldGNoOiBmYWxzZSxcclxuICAgXHJcbiAgIHBsdWdpbnM6IFtcclxuICAgXHJcbiAgLy8gIG5ldGFiYXJlU3dpdGNoUGx1Z2luKCksXHJcbiAgICAvLyByZW1vdmVIdG1sRXh0ZW5zaW9uUGx1Z2luKCksXHJcbiAgICAvLyAgYXBwZW5kRGF0ZVBsdWdpbigpLFxyXG4gICAgb21sMmRQbHVnaW4oe1xyXG4gICAgICAvLyBcdTU3MjhcdThGRDlcdTkxQ0NcdTkxNERcdTdGNkVcdTkwMDlcdTk4NzlcclxuICAgICAgZG9ja2VkUG9zaXRpb246XCJyaWdodFwiLFxyXG4gICAgICBtb2RlbHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcInBhdGhcIjogXCJodHRwczovL21vZGVsLm9tbDJkLmNvbS9QaW8vbW9kZWwuanNvblwiLFxyXG4gIFwic2NhbGVcIjogMC40LFxyXG4gIFwicG9zaXRpb25cIjogWzAsIDUwXSxcclxuICBcInN0YWdlU3R5bGVcIjoge1xyXG4gICAgXCJoZWlnaHRcIjogMzAwXHJcbiAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSksXHJcblxyXG4gXHJcbiAgIF0sXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIlg6L25vZGVqc1x1OEJGRVx1N0EwQlx1NEUwOVx1NTk1N1x1NEVFM1x1NzgwMS9ub2RlanNcdTU0MEVcdTdBRUZcdThCRkVcdTdBMEJcdTRFRTNcdTc4MDEoXHU2NUM1XHU2RTM4XHU1QzBGXHU3QTBCXHU1RThGKS9ob3BlL2xpbmdnYW4vYmxvZy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIlg6XFxcXG5vZGVqc1x1OEJGRVx1N0EwQlx1NEUwOVx1NTk1N1x1NEVFM1x1NzgwMVxcXFxub2RlanNcdTU0MEVcdTdBRUZcdThCRkVcdTdBMEJcdTRFRTNcdTc4MDEoXHU2NUM1XHU2RTM4XHU1QzBGXHU3QTBCXHU1RThGKVxcXFxob3BlXFxcXGxpbmdnYW5cXFxcYmxvZ1xcXFwudnVlcHJlc3NcXFxcdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1g6L25vZGVqcyVFOCVBRiVCRSVFNyVBOCU4QiVFNCVCOCU4OSVFNSVBNSU5NyVFNCVCQiVBMyVFNyVBMCU4MS9ub2RlanMlRTUlOTAlOEUlRTclQUIlQUYlRTglQUYlQkUlRTclQTglOEIlRTQlQkIlQTMlRTclQTAlODEoJUU2JTk3JTg1JUU2JUI4JUI4JUU1JUIwJThGJUU3JUE4JThCJUU1JUJBJThGKS9ob3BlL2xpbmdnYW4vYmxvZy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuaW1wb3J0IHsgZW5OYXZiYXIsIHpoTmF2YmFyIH0gZnJvbSBcIi4vbmF2YmFyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBlblNpZGViYXIsIHpoU2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXIvaW5kZXguanNcIjtcbmltcG9ydCB7IE1SX0hPUEVfQVZBVEFSIH0gZnJvbSBcIi4vbG9nby5qc1wiO1xuO1xuZXhwb3J0IGRlZmF1bHQgaG9wZVRoZW1lKHtcbiAgXG4gIGhvc3RuYW1lOiBcImh0dHBzOi8venp4eGNjdnYueHl6XCIsXG5cbiAgYXV0aG9yOiB7XG4gICAgbmFtZTogXCJcdTg2NUFcdTYyREZcdTUzRDFcdTczQjBcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly96enh4Y2N2di54eXpcIixcbiAgfSxcblxuICBpY29uQXNzZXRzOiBcImZvbnRhd2Vzb21lLXdpdGgtYnJhbmRzXCIsXG5cbiAgbG9nbzogXCJodHRwczovL3RoZW1lLWhvcGUtYXNzZXRzLnZ1ZWpzLnByZXNzL2xvZ28uc3ZnXCIsXG5cbiAgcmVwbzogXCJ2dWVwcmVzcy10aGVtZS1ob3BlL3Z1ZXByZXNzLXRoZW1lLWhvcGVcIixcblxuICBkb2NzRGlyOiBcInNyY1wiLFxuXG4gIGJsb2c6IHtcbiAgICBtZWRpYXM6IHtcbiAgICAgIEJhaWR1OiBcImh0dHBzOi8vYmFpZHUuY29tXCIsXG4gICAgICBCaWxpQmlsaTogXCJodHRwczovL2JpbGliaWxpLmNvbVwiLFxuICAgICAgQml0YnVja2V0OiBcImh0dHBzOi8venp4eGNjdnYueHl6XCIsXG4gICAgICBEaW5nZGluZzogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxuICAgICAgRGlzY29yZDogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxuICAgICAgRHJpYmJibGU6IFwiaHR0cHM6Ly96enh4Y2N2di54eXpcIixcbiAgICAgIEVtYWlsOiBcImh0dHBzOi8venp4eGNjdnYueHl6XCIsXG4gICAgICBFdmVybm90ZTogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxuICAgICAgRmFjZWJvb2s6IFwiaHR0cHM6Ly96enh4Y2N2di54eXpcIixcbiAgICAgIEZsaXBib2FyZDogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxuICAgICAgR2l0ZWU6IFwiaHR0cHM6Ly96enh4Y2N2di54eXpcIixcbiAgICAgIEdpdEh1YjogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxuICAgICAgR2l0bGFiOiBcImh0dHBzOi8venp4eGNjdnYueHl6XCIsXG4gICAgICBHbWFpbDogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxuICAgICAgSW5zdGFncmFtOiBcImh0dHBzOi8venp4eGNjdnYueHl6XCIsXG4gICAgICBMYXJrOiBcImh0dHBzOi8venp4eGNjdnYueHl6XCIsXG4gICAgICBMaW5lczogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxuICAgICAgTGlua2VkaW46IFwiaHR0cHM6Ly96enh4Y2N2di54eXpcIixcbiAgICAgIFBpbnRlcmVzdDogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxuICAgICAgUG9ja2V0OiBcImh0dHBzOi8venp4eGNjdnYueHl6XCIsXG4gICAgICBRUTogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxuICAgICAgUXpvbmU6IFwiaHR0cHM6Ly96enh4Y2N2di54eXpcIixcbiAgICAgIFJlZGRpdDogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxuICAgICAgUnNzOiBcImh0dHBzOi8venp4eGNjdnYueHl6XCIsXG4gICAgICBTdGVhbTogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxuICAgICAgVHdpdHRlcjogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxuICAgICAgV2VjaGF0OiBcImh0dHBzOi8venp4eGNjdnYueHl6XCIsXG4gICAgICBXZWlibzogXCJodHRwczovL3p6eHhjY3Z2Lnh5elwiLFxuICAgICAgV2hhdHNhcHA6IFwiaHR0cHM6Ly96enh4Y2N2di54eXpcIixcbiAgICAgIFlvdXR1YmU6IFwiaHR0cHM6Ly96enh4Y2N2di54eXpcIixcbiAgICAgIFpoaWh1OiBcImh0dHBzOi8venp4eGNjdnYueHl6XCIsXG4gIFxuICAgIH0sXG4gIH0sXG5cbiAgbG9jYWxlczoge1xuICAgIFwiL1wiOiB7XG4gICAgICAvLyBuYXZiYXJcbiAgICAgIG5hdmJhcjogemhOYXZiYXIsXG5cbiAgICAgIC8vIHNpZGViYXJcbiAgICAgIHNpZGViYXI6IHpoU2lkZWJhcixcblxuICAgICAgZm9vdGVyOiAnPGEgaHJlZj1cImh0dHA6Ly9iZWlhbi5taWl0Lmdvdi5jbi9cIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9XCJjb2xvcjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjpub25lO3doaXRlLXNwYWNlOm5vd3JhcDtcIj5cdTZFQzdJQ1BcdTU5MDcyMDI0MDE5NzU1XHU1M0Y3LTI8L2E+IHwgPGEgaHJlZj1cImh0dHBzOi8vYmVpYW4ubXBzLmdvdi5jbi8jL3F1ZXJ5L3dlYlNlYXJjaD9jb2RlPTUzMDMwMjAyMDAwNTIxXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPVwiY29sb3I6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246bm9uZTt3aGl0ZS1zcGFjZTpub3dyYXA7XCI+PGltZyBzcmM9XCJodHRwczovL2FpZ2M0NTYtMTMyMjQ4NTkzNy5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vbG9hZC8yMDI0MDQwNjIwNTgwNzIucG5nXCIgc3R5bGU9XCJ3aWR0aDoxcmVtO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtcIj4gXHU2RUM3XHU1MTZDXHU3RjUxXHU1Qjg5XHU1OTA3NTMwMzAyMDIwMDA1MjE8L2E+IHwgPGEgaHJlZj1cIi9hYm91dC9zaXRlLmh0bWxcIj5cdTUxNzNcdTRFOEVcdTdGNTFcdTdBRDk8L2E+JyxcblxuICAgICAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcblxuICAgICAgYmxvZzoge1xuICAgICAgICBkZXNjcmlwdGlvbjogXCJcdTRFMDBcdTRFMkFcdTUyNERcdTdBRUZcdTVGMDBcdTUzRDFcdTgwMDVcIixcbiAgICAgICAgaW50cm86IFwiL3poL2ludHJvLmh0bWxcIixcbiAgICAgIFxuICAgICAgfSxcblxuICAgICAgbWV0YUxvY2FsZXM6IHtcbiAgICAgICAgZWRpdExpbms6IFwiRWRpdCB0aGlzIHBhZ2Ugb24gR2l0SHViXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGluZXNlIGxvY2FsZSBjb25maWdcbiAgICAgKi9cbiAgICBcIi9lbi9cIjoge1xuICAgICAgLy8gbmF2YmFyXG4gICAgICBuYXZiYXI6IGVuTmF2YmFyLFxuXG4gICAgICAvLyBzaWRlYmFyXG4gICAgICBzaWRlYmFyOiBlblNpZGViYXIsXG5cbiAgICAgIGZvb3RlcjogXCJEZWZhdWx0IGZvb3RlclwiLFxuXG4gICAgICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxuXG4gICAgICBibG9nOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgRnJvbnRFbmQgcHJvZ3JhbW1lclwiLFxuICAgICAgICBpbnRybzogXCIvaW50cm8uaHRtbFwiLFxuICAgICAgfSxcblxuICAgICAgLy8gcGFnZSBtZXRhXG4gICAgICBtZXRhTG9jYWxlczoge1xuICAgICAgICBlZGl0TGluazogXCJcdTU3MjggR2l0SHViIFx1NEUwQVx1N0YxNlx1OEY5MVx1NkI2NFx1OTg3NVwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIGVuY3J5cHQ6IHtcbiAgICBjb25maWc6IHtcbiAgICAgIFwiL2RlbW8vZW5jcnlwdC5odG1sXCI6IFtcInR5dTM1N1wiXSxcbiAgICAgIFwiL2VuL2RlbW8vZW5jcnlwdC5odG1sXCI6IFtcInR5dTM1N1wiXSxcbiAgICAgIFwiL3Bvc3RzL1x1NjcyRFx1OEJCMC8yMDI0MDQvMjAyNDA0MjMvMjAyNDA0MjMuaHRtbFwiOiBbXCJ0eXUzNTdcIl0sXG4gICAgICBcIi9wb3N0cy9cdTY3MkRcdThCQjAvMjAyNDA0LzIwMjQwNDI1LzIwMjQwNDI1Lmh0bWxcIjogW1widHl1MzU3XCJdLFxuICAgICAgXCIvcG9zdHMvXHU2NzJEXHU4QkIwLzIwMjQwNC8yMDI0MDQyNi8yMDI0MDQyNi5odG1sXCI6IFtcInR5dTM1N1wiXSxcbiAgICAgIFwiL3Bvc3RzL1x1NjcyRFx1OEJCMC8yMDI0MDUvMjAyNDA1MDIvMjAyNDA1MDIuaHRtbFwiOiBbXCJ0eXUzNTdcIl0sXG4gICAgICBcIi9wb3N0cy9cdTY3MkRcdThCQjAvMjAyNDA2LzIwMjQwNjA5LzIwMjQwNjA5Lmh0bWxcIjogW1widHl1MzU3XCJdLFxuICAgICAgXCIvcG9zdHMvYm9va3MvXHU0RTA5XHU0RjUzXHU0RTAwLmh0bWxcIjogW1widHl1MzU3XHU0RTA5XHU0RjUzXCJdLFxuICAgICAgXCIvcG9zdHMvYm9va3MvXHU0RTA5XHU0RjUzXHU0RThDLmh0bWxcIjogW1widHl1MzU3XHU0RTA5XHU0RjUzXCJdLFxuICAgICAgXCIvcG9zdHMvYm9va3MvXHU0RTA5XHU0RjUzXHU0RTA5Lmh0bWxcIjogW1widHl1MzU3XHU0RTA5XHU0RjUzXCJdLFxuICAgIH0sXG4gIH0sXG5cbiAgLy8gZW5hYmxlIGl0IHRvIHByZXZpZXcgYWxsIGNoYW5nZXMgaW4gdGltZVxuICBob3RSZWxvYWQ6IGZhbHNlLFxuXG4gIHBsdWdpbnM6IHtcbiAgICBibG9nOiB0cnVlLFxuICAgIGdpdDp7XG4gICAgICAvLyBcdTkxNERcdTdGNkVcdTk4NzlcbiAgICAgIGNyZWF0ZWRUaW1lOnRydWUsXG4gICAgICB1cGRhdGVkVGltZTp0cnVlLFxuICAgICAgY29udHJpYnV0b3JzOnRydWUsXG4gICAgfSxcbiAgICB3YXRlcm1hcms6e1xuICAgICAgZW5hYmxlZDpmYWxzZSxcbiAgICB9LFxuICAgIGNvcHlyaWdodDp7XG4gICAgICBnbG9iYWw6dHJ1ZSxcbiAgICAgIG1heExlbmd0aDoxMDAsXG5cblxuICAgIH0sXG4gICAgLy8gSW5zdGFsbCBAd2FsaW5lL2NsaWVudCBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAvLyBOb3RlOiBUaGlzIGlzIGZvciB0ZXN0aW5nIE9OTFkhXG4gICAgLy8gWW91IE1VU1QgZ2VuZXJhdGUgYW5kIHVzZSB5b3VyIG93biBjb21tZW50IHNlcnZpY2UgaW4gcHJvZHVjdGlvbi5cbiAgICBjb21tZW50OiB7XG4gICAgICBwcm92aWRlcjogXCJXYWxpbmVcIixcbiAgICAgIHNlcnZlclVSTDogXCJodHRwczovL3dhbGluZS1jb21tZW50LnZ1ZWpzLnByZXNzXCIsXG4gICAgfSxcbiAgICBkb2NzZWFyY2g6KHtcbiAgICAgIGFwcElkOiBcIkczRkQ4UVlLQllcIixcblxuICAgICAgYXBpS2V5OiBcIjJlNjIwMmE0NzYyN2JkZjU0YTNjMjQ1Mjc2NWMxZmE5XCIsXG4gICAgICBcbiAgICAgIGluZGV4TmFtZTogXCJ6enh4Y2N2dlwiLFxuICBcbiAgICAgIGxvY2FsZXM6IHtcbiAgICAgICAgXCIvXCI6IHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjNcIixcbiAgICAgICAgICB0cmFuc2xhdGlvbnM6IHtcbiAgICAgICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIlx1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2M1wiLFxuICAgICAgICAgICAgICBidXR0b25BcmlhTGFiZWw6IFwiXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kYWw6IHtcbiAgICAgICAgICAgICAgc2VhcmNoQm94OiB7XG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b25UaXRsZTogXCJcdTZFMDVcdTk2NjRcdTY3RTVcdThCRTJcdTY3NjFcdTRFRjZcIixcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvbkFyaWFMYWJlbDogXCJcdTZFMDVcdTk2NjRcdTY3RTVcdThCRTJcdTY3NjFcdTRFRjZcIixcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIlx1NTNENlx1NkQ4OFwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDogXCJcdTUzRDZcdTZEODhcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3RhcnRTY3JlZW46IHtcbiAgICAgICAgICAgICAgICByZWNlbnRTZWFyY2hlc1RpdGxlOiBcIlx1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMlwiLFxuICAgICAgICAgICAgICAgIG5vUmVjZW50U2VhcmNoZXNUZXh0OiBcIlx1NkNBMVx1NjcwOVx1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMlwiLFxuICAgICAgICAgICAgICAgIHNhdmVSZWNlbnRTZWFyY2hCdXR0b25UaXRsZTogXCJcdTRGRERcdTVCNThcdTgxRjNcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjJcIixcbiAgICAgICAgICAgICAgICByZW1vdmVSZWNlbnRTZWFyY2hCdXR0b25UaXRsZTogXCJcdTRFQ0VcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjJcdTRFMkRcdTc5RkJcdTk2NjRcIixcbiAgICAgICAgICAgICAgICBmYXZvcml0ZVNlYXJjaGVzVGl0bGU6IFwiXHU2NTM2XHU4NUNGXCIsXG4gICAgICAgICAgICAgICAgcmVtb3ZlRmF2b3JpdGVTZWFyY2hCdXR0b25UaXRsZTogXCJcdTRFQ0VcdTY1MzZcdTg1Q0ZcdTRFMkRcdTc5RkJcdTk2NjRcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXJyb3JTY3JlZW46IHtcbiAgICAgICAgICAgICAgICB0aXRsZVRleHQ6IFwiXHU2NUUwXHU2Q0Q1XHU4M0I3XHU1M0Q2XHU3RUQzXHU2NzlDXCIsXG4gICAgICAgICAgICAgICAgaGVscFRleHQ6IFwiXHU0RjYwXHU1M0VGXHU4MEZEXHU5NzAwXHU4OTgxXHU2OEMwXHU2N0U1XHU0RjYwXHU3Njg0XHU3RjUxXHU3RURDXHU4RkRFXHU2M0E1XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgIHNlbGVjdFRleHQ6IFwiXHU5MDA5XHU2MkU5XCIsXG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUZXh0OiBcIlx1NTIwN1x1NjM2MlwiLFxuICAgICAgICAgICAgICAgIGNsb3NlVGV4dDogXCJcdTUxNzNcdTk1RURcIixcbiAgICAgICAgICAgICAgICBzZWFyY2hCeVRleHQ6IFwiXHU2NDFDXHU3RDIyXHU2M0QwXHU0RjlCXHU4MDA1XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG5vUmVzdWx0c1NjcmVlbjoge1xuICAgICAgICAgICAgICAgIG5vUmVzdWx0c1RleHQ6IFwiXHU2NUUwXHU2Q0Q1XHU2MjdFXHU1MjMwXHU3NkY4XHU1MTczXHU3RUQzXHU2NzlDXCIsXG4gICAgICAgICAgICAgICAgc3VnZ2VzdGVkUXVlcnlUZXh0OiBcIlx1NEY2MFx1NTNFRlx1NEVFNVx1NUMxRFx1OEJENVx1NjdFNVx1OEJFMlwiLFxuICAgICAgICAgICAgICAgIHJlcG9ydE1pc3NpbmdSZXN1bHRzVGV4dDogXCJcdTRGNjBcdThCQTRcdTRFM0FcdThCRTVcdTY3RTVcdThCRTJcdTVFOTRcdThCRTVcdTY3MDlcdTdFRDNcdTY3OUNcdUZGMUZcIixcbiAgICAgICAgICAgICAgICByZXBvcnRNaXNzaW5nUmVzdWx0c0xpbmtUZXh0OiBcIlx1NzBCOVx1NTFGQlx1NTNDRFx1OTk4OFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBcIi9lbi9cIjoge1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBEb2N1bWVudGF0aW9uXCIsXG4gICAgICAgICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJTZWFyY2ggRG9jdW1lbnRhdGlvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBjb21wb25lbnRzOiBbXG4gICAgICBcIkJhZGdlXCIsIFxuICAgICAgXCJWUENhcmRcIixcbiAgICAgIFwiQXJ0UGxheWVyXCIsXG4gICAgICBcIkJpbGlCaWxpXCIsXG4gICAgICBcIkNvZGVQZW5cIixcbiAgICAgIFwiUERGXCIsXG4gICAgXG4gICAgICBcIlNoYXJlXCIsXG4gICAgICBcIlNpdGVJbmZvXCIsXG4gICAgICBcIlN0YWNrQmxpdHpcIixcbiAgICAgIFwiVlBCYW5uZXJcIixcbiAgICAgIFxuICAgICAgXCJWaWRTdGFja1wiLFxuICAgICAgXCJYaUd1YVwiLF0sXG4gICAgfSxcblxuICAgIC8vIFRoZXNlIGZlYXR1cmVzIGFyZSBlbmFibGVkIGZvciBkZW1vLCBvbmx5IHByZXNlcnZlIGZlYXR1cmVzIHlvdSBuZWVkIGhlcmVcbiAgICBtZEVuaGFuY2U6IHtcbiAgICAgIFxuICAgICAgZm9vdG5vdGU6IHRydWUsXG4gICAgICBhbGlnbjogdHJ1ZSxcbiAgICAgIGF0dHJzOiB0cnVlLFxuICAgICAgY29kZXRhYnM6IHRydWUsXG4gICAgICBjb21wb25lbnQ6IHRydWUsXG4gICAgICBkZW1vOiB0cnVlLFxuICAgICAgZmlndXJlOiB0cnVlLFxuICAgICAgaW1nTGF6eWxvYWQ6IHRydWUsXG4gICAgICBpbWdTaXplOiB0cnVlLFxuICAgICAgaW5jbHVkZTogdHJ1ZSxcbiAgICAgIG1hcms6IHRydWUsXG4gICAgICBzcG9pbGVyOiB0cnVlLFxuICAgICAgc3R5bGl6ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgbWF0Y2hlcjogXCJSZWNvbW1lbmRlZFwiLFxuICAgICAgICAgIHJlcGxhY2VyOiAoeyB0YWcgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhZyA9PT0gXCJlbVwiKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRhZzogXCJCYWRnZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGlwXCIgfSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlJlY29tbWVuZGVkXCIsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzdWI6IHRydWUsXG4gICAgICBzdXA6IHRydWUsXG4gICAgICB0YWJzOiB0cnVlLFxuICAgICAgdGFza2xpc3Q6IHRydWUsXG4gICAgICB2UHJlOiB0cnVlLFxuXG4gLy8gXHU1NzI4XHU1NDJGXHU3NTI4XHU0RTRCXHU1MjREXHU1Qjg5XHU4OEM1IGNoYXJ0LmpzXG4gY2hhcnQ6IHRydWUsXG5cbiAvLyBpbnNlcnQgY29tcG9uZW50IGVhc2lseVxuXG4gLy8gXHU1NzI4XHU1NDJGXHU3NTI4XHU0RTRCXHU1MjREXHU1Qjg5XHU4OEM1IGVjaGFydHNcbiBlY2hhcnRzOiB0cnVlLFxuXG4gLy8gXHU1NzI4XHU1NDJGXHU3NTI4XHU0RTRCXHU1MjREXHU1Qjg5XHU4OEM1IGZsb3djaGFydC50c1xuIGZsb3djaGFydDogdHJ1ZSxcblxuIC8vIGdmbSByZXF1aXJlcyBtYXRoamF4LWZ1bGwgdG8gcHJvdmlkZSB0ZXggc3VwcG9ydFxuIGdmbTogdHJ1ZSxcblxuIC8vIFx1NTcyOFx1NTQyRlx1NzUyOFx1NEU0Qlx1NTI0RFx1NUI4OVx1ODhDNSBrYXRleFxuIGthdGV4OiB0cnVlLFxuXG4gLy8gXHU1NzI4XHU1NDJGXHU3NTI4XHU0RTRCXHU1MjREXHU1Qjg5XHU4OEM1IG1hdGhqYXgtZnVsbFxuIG1hdGhqYXg6IHRydWUsXG5cbiAvLyBcdTU3MjhcdTU0MkZcdTc1MjhcdTRFNEJcdTUyNERcdTVCODlcdTg4QzUgbWVybWFpZFxuICBtZXJtYWlkOiB0cnVlLFxuXG4gcGxheWdyb3VuZDoge1xuICAgcHJlc2V0czogW1widHNcIiwgXCJ2dWVcIl0sXG4gfSxcblxuIC8vIFx1NTcyOFx1NTQyRlx1NzUyOFx1NEU0Qlx1NTI0RFx1NUI4OVx1ODhDNSByZXZlYWwuanNcbi8vICByZXZlYWxKczoge1xuLy8gICBwbHVnaW5zOiBbXCJoaWdobGlnaHRcIiwgXCJtYXRoXCIsIFwic2VhcmNoXCIsIFwibm90ZXNcIiwgXCJ6b29tXCJdLFxuXG4vLyAgfSxcbiAvLyBcdTU3MjhcdTU0MkZcdTc1MjhcdTRFNEJcdTUyNERcdTVCODlcdTg4QzUgQHZ1ZS9yZXBsXG4gdnVlUGxheWdyb3VuZDogdHJ1ZSxcblxuIC8vIGluc3RhbGwgc2FuZHBhY2stdnVlMyBiZWZvcmUgZW5hYmxpbmcgaXRcbiBzYW5kcGFjazogdHJ1ZSxcbn0sXG5cbi8vIFx1NTk4Mlx1Njc5Q1x1NEY2MFx1OTcwMFx1ODk4MSBQV0FcdTMwMDJcdTVCODlcdTg4QzUgQHZ1ZXByZXNzL3BsdWdpbi1wd2EgXHU1RTc2XHU1M0Q2XHU2RDg4XHU0RTBCXHU2NUI5XHU2Q0U4XHU5MUNBXG5wd2E6IHtcbiBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxuIGNhY2hlSFRNTDogdHJ1ZSxcbiBjYWNoZUltYWdlOiB0cnVlLFxuIGFwcGVuZEJhc2U6IHRydWUsXG4gYXBwbGU6IHtcbiAgIGljb246IFwiL2Fzc2V0cy9pY29uL2FwcGxlLWljb24tMTUyLnBuZ1wiLFxuICAgc3RhdHVzQmFyQ29sb3I6IFwiYmxhY2tcIixcbiB9LFxuIG1zVGlsZToge1xuICAgaW1hZ2U6IFwiL2Fzc2V0cy9pY29uL21zLWljb24tMTQ0LnBuZ1wiLFxuICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuIH0sXG4gbWFuaWZlc3Q6IHtcbiAgIGljb25zOiBbXG4gICAgIHtcbiAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTUxMi5wbmdcIixcbiAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgIH0sXG4gICAgIHtcbiAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTE5Mi5wbmdcIixcbiAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgIH0sXG4gICAgIHtcbiAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS01MTIucG5nXCIsXG4gICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgIH0sXG4gICAgIHtcbiAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS0xOTIucG5nXCIsXG4gICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgIH0sXG4gICBdLFxuICAgc2hvcnRjdXRzOiBbXG4gICAgIHtcbiAgICAgICBuYW1lOiBcIkRlbW9cIixcbiAgICAgICBzaG9ydF9uYW1lOiBcIkRlbW9cIixcbiAgICAgICB1cmw6IFwiL2RlbW8vXCIsXG4gICAgICAgaWNvbnM6IFtcbiAgICAgICAgIHtcbiAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9ndWlkZS1tYXNrYWJsZS5wbmdcIixcbiAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICB9LFxuICAgICAgIF0sXG4gICAgIH0sXG4gICBdLFxuIH0sXG59LFxufSxcbmZ1bGxzY3JlZW46IHRydWUsXG59LFxueyBjdXN0b206IHRydWUgfSxcbik7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIlg6L25vZGVqc1x1OEJGRVx1N0EwQlx1NEUwOVx1NTk1N1x1NEVFM1x1NzgwMS9ub2RlanNcdTU0MEVcdTdBRUZcdThCRkVcdTdBMEJcdTRFRTNcdTc4MDEoXHU2NUM1XHU2RTM4XHU1QzBGXHU3QTBCXHU1RThGKS9ob3BlL2xpbmdnYW4vYmxvZy8udnVlcHJlc3MvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJYOlxcXFxub2RlanNcdThCRkVcdTdBMEJcdTRFMDlcdTU5NTdcdTRFRTNcdTc4MDFcXFxcbm9kZWpzXHU1NDBFXHU3QUVGXHU4QkZFXHU3QTBCXHU0RUUzXHU3ODAxKFx1NjVDNVx1NkUzOFx1NUMwRlx1N0EwQlx1NUU4RilcXFxcaG9wZVxcXFxsaW5nZ2FuXFxcXGJsb2dcXFxcLnZ1ZXByZXNzXFxcXG5hdmJhclxcXFxlbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vWDovbm9kZWpzJUU4JUFGJUJFJUU3JUE4JThCJUU0JUI4JTg5JUU1JUE1JTk3JUU0JUJCJUEzJUU3JUEwJTgxL25vZGVqcyVFNSU5MCU4RSVFNyVBQiVBRiVFOCVBRiVCRSVFNyVBOCU4QiVFNCVCQiVBMyVFNyVBMCU4MSglRTYlOTclODUlRTYlQjglQjglRTUlQjAlOEYlRTclQTglOEIlRTUlQkElOEYpL2hvcGUvbGluZ2dhbi9ibG9nLy52dWVwcmVzcy9uYXZiYXIvZW4udHNcIjtpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVuTmF2YmFyID0gbmF2YmFyKFtcclxuICBcIi9lbi9cIixcclxuICBcIi9lbi9kZW1vL1wiLFxyXG4gIHtcclxuICAgIHRleHQ6IFwiUG9zdHNcIixcclxuICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxyXG4gICAgcHJlZml4OiBcIi9lbi9wb3N0cy9cIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIkFwcGxlXCIsXHJcbiAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXHJcbiAgICAgICAgcHJlZml4OiBcImFwcGxlL1wiLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7IHRleHQ6IFwiQXBwbGUxXCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcIjFcIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIkFwcGxlMlwiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCIyXCIgfSxcclxuICAgICAgICAgIFwiM1wiLFxyXG4gICAgICAgICAgXCI0XCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiQmFuYW5hXCIsXHJcbiAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXHJcbiAgICAgICAgcHJlZml4OiBcImJhbmFuYS9cIixcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIkJhbmFuYSAxXCIsXHJcbiAgICAgICAgICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIjFcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiQmFuYW5hIDJcIixcclxuICAgICAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXHJcbiAgICAgICAgICAgIGxpbms6IFwiMlwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiM1wiLFxyXG4gICAgICAgICAgXCI0XCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgeyB0ZXh0OiBcIkNoZXJyeVwiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCJjaGVycnlcIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiRHJhZ29uIEZydWl0XCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcImRyYWdvbmZydWl0XCIgfSxcclxuICAgICAgXCJ0b21hdG9cIixcclxuICAgICAgXCJzdHJhd2JlcnJ5XCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogXCJWMiBEb2NzXCIsXHJcbiAgICBpY29uOiBcImJvb2tcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly90aGVtZS1ob3BlLnZ1ZWpzLnByZXNzL1wiLFxyXG4gIH0sXHJcbl0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIlg6L25vZGVqc1x1OEJGRVx1N0EwQlx1NEUwOVx1NTk1N1x1NEVFM1x1NzgwMS9ub2RlanNcdTU0MEVcdTdBRUZcdThCRkVcdTdBMEJcdTRFRTNcdTc4MDEoXHU2NUM1XHU2RTM4XHU1QzBGXHU3QTBCXHU1RThGKS9ob3BlL2xpbmdnYW4vYmxvZy8udnVlcHJlc3MvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJYOlxcXFxub2RlanNcdThCRkVcdTdBMEJcdTRFMDlcdTU5NTdcdTRFRTNcdTc4MDFcXFxcbm9kZWpzXHU1NDBFXHU3QUVGXHU4QkZFXHU3QTBCXHU0RUUzXHU3ODAxKFx1NjVDNVx1NkUzOFx1NUMwRlx1N0EwQlx1NUU4RilcXFxcaG9wZVxcXFxsaW5nZ2FuXFxcXGJsb2dcXFxcLnZ1ZXByZXNzXFxcXG5hdmJhclxcXFx6aC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vWDovbm9kZWpzJUU4JUFGJUJFJUU3JUE4JThCJUU0JUI4JTg5JUU1JUE1JTk3JUU0JUJCJUEzJUU3JUEwJTgxL25vZGVqcyVFNSU5MCU4RSVFNyVBQiVBRiVFOCVBRiVCRSVFNyVBOCU4QiVFNCVCQiVBMyVFNyVBMCU4MSglRTYlOTclODUlRTYlQjglQjglRTUlQjAlOEYlRTclQTglOEIlRTUlQkElOEYpL2hvcGUvbGluZ2dhbi9ibG9nLy52dWVwcmVzcy9uYXZiYXIvemgudHNcIjtpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHpoTmF2YmFyID0gbmF2YmFyKFtcclxuICBcIi9cIixcclxuICBcIi9kZW1vL1wiLFxyXG4gIHtcclxuICAgIHRleHQ6IFwiXHU1MzVBXHU2NTg3XCIsXHJcbiAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcclxuICAgIHByZWZpeDogXCIvcG9zdHMvXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTY3MkRcdThCQjA0XHU2NzA4XCIsXHJcbiAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXHJcbiAgICAgICAgcHJlZml4OiBcIlx1NjcyRFx1OEJCMC8yMDI0MDRcIixcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1OEZEOVx1NjYyRlx1N0IyQ1x1NEUwMFx1N0JDN1x1NjU4N1x1N0FFMC0wNDEyXCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcIjIwMjQwNDEyXCIgfSxcclxuICAgICAgICAgIHsgdGV4dDogXCJcdTRFQ0FcdTU5MjlcdTVCOENcdTYyMTBcdTc2ODRcdTRFRTNcdTc4MDEtMDQxM1wiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCIyMDI0MDQxM1wiIH0sXHJcbiAgICAgICAgICBcIjIwMjQwNDE0XCIsXHJcbiAgICAgICAgICBcIjIwMjQwNDE1XCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU3QjE0XHU4QkIwNVx1NjcwOFwiLFxyXG4gICAgICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxyXG4gICAgICAgIHByZWZpeDogXCJcdTY3MkRcdThCQjAvMjAyNDA1LzIwMjQwNTA2XCIsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogXCJcdTdCMTRcdThCQjBcdTRFMDBcIixcclxuICAgICAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXHJcbiAgICAgICAgICAgIGxpbms6IFwiXHU3QjE0XHU4QkIwXHU0RTAwXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlx1N0IxNFx1OEJCMFx1NEU4Q1wiLFxyXG4gICAgICAgICAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcclxuICAgICAgICAgICAgbGluazogXCJcdTdCMTRcdThCQjBcdTRFOENcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcIlx1N0IxNFx1OEJCMFx1NEUwOVwiLFxyXG4gICAgICAgICAgXCJcdTdCMTRcdThCQjBcdTU2REJcIixcclxuICAgICAgICAgIFwiXHU3QjE0XHU4QkIwXHU0RTk0XCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgLy8geyB0ZXh0OiBcIlx1NkEzMVx1Njg0M1wiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCJjaGVycnlcIiB9LFxyXG4gICAgICAvLyB7IHRleHQ6IFwiXHU3MDZCXHU5Rjk5XHU2NzlDXCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcImRyYWdvbmZydWl0XCIgfSxcclxuICAgICBcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlx1NEUwMFx1NjcyQ1x1NEU2NlwiLFxyXG4gICAgaWNvbjogXCJib29rXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3Lnp6eHhjY3Z2Lnh5ei9wb3N0cy8lRTQlQjglODAlRTYlOUMlQUMlRTQlQjklQTYvJUU3JTk0JUE4bGF0ZXglRTUlODYlOTklRTclOUElODQlRTQlQjglODAlRTYlOUMlQUMlRTQlQjklQTZcIixcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICB0ZXh0OiBcIlx1NzdFNVx1OEJDNlx1NjhDMFx1N0QyMlwiLFxyXG4gICAgaWNvbjogXCJib29rXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3Lnp6eHhjY3Z2Lnh5ei9sdnlvdS8jL1wiLFxyXG4gIH0sXHJcbl0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIlg6L25vZGVqc1x1OEJGRVx1N0EwQlx1NEUwOVx1NTk1N1x1NEVFM1x1NzgwMS9ub2RlanNcdTU0MEVcdTdBRUZcdThCRkVcdTdBMEJcdTRFRTNcdTc4MDEoXHU2NUM1XHU2RTM4XHU1QzBGXHU3QTBCXHU1RThGKS9ob3BlL2xpbmdnYW4vYmxvZy8udnVlcHJlc3Mvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiWDpcXFxcbm9kZWpzXHU4QkZFXHU3QTBCXHU0RTA5XHU1OTU3XHU0RUUzXHU3ODAxXFxcXG5vZGVqc1x1NTQwRVx1N0FFRlx1OEJGRVx1N0EwQlx1NEVFM1x1NzgwMShcdTY1QzVcdTZFMzhcdTVDMEZcdTdBMEJcdTVFOEYpXFxcXGhvcGVcXFxcbGluZ2dhblxcXFxibG9nXFxcXC52dWVwcmVzc1xcXFxzaWRlYmFyXFxcXGVuLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9YOi9ub2RlanMlRTglQUYlQkUlRTclQTglOEIlRTQlQjglODklRTUlQTUlOTclRTQlQkIlQTMlRTclQTAlODEvbm9kZWpzJUU1JTkwJThFJUU3JUFCJUFGJUU4JUFGJUJFJUU3JUE4JThCJUU0JUJCJUEzJUU3JUEwJTgxKCVFNiU5NyU4NSVFNiVCOCVCOCVFNSVCMCU4RiVFNyVBOCU4QiVFNSVCQSU4RikvaG9wZS9saW5nZ2FuL2Jsb2cvLnZ1ZXByZXNzL3NpZGViYXIvZW4udHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGNvbnN0IGVuU2lkZWJhciA9IHNpZGViYXIoe1xuICBcIi9lbi9cIjogW1xuICAgIFwiXCIsXG4gICAge1xuICAgICAgdGV4dDogXCJEZW1vXCIsXG4gICAgICBpY29uOiBcImxhcHRvcC1jb2RlXCIsXG4gICAgICBwcmVmaXg6IFwiZGVtby9cIixcbiAgICAgIGxpbms6IFwiZGVtby9cIixcbiAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJBcnRpY2xlc1wiLFxuICAgICAgaWNvbjogXCJib29rXCIsXG4gICAgICBwcmVmaXg6IFwicG9zdHMvXCIsXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcbiAgICB9LFxuICAgIFwiaW50cm9cIixcbiAgICB7XG4gICAgICB0ZXh0OiBcIlNsaWRlc1wiLFxuICAgICAgaWNvbjogXCJwZXJzb24tY2hhbGtib2FyZFwiLFxuICAgICAgbGluazogXCJodHRwczovL3BsdWdpbi1tZC1lbmhhbmNlLnZ1ZWpzLnByZXNzL2d1aWRlL2NvbnRlbnQvcmV2ZWFsanMvZGVtby5odG1sXCIsXG4gICAgfSxcbiAgXSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJYOi9ub2RlanNcdThCRkVcdTdBMEJcdTRFMDlcdTU5NTdcdTRFRTNcdTc4MDEvbm9kZWpzXHU1NDBFXHU3QUVGXHU4QkZFXHU3QTBCXHU0RUUzXHU3ODAxKFx1NjVDNVx1NkUzOFx1NUMwRlx1N0EwQlx1NUU4RikvaG9wZS9saW5nZ2FuL2Jsb2cvLnZ1ZXByZXNzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIlg6XFxcXG5vZGVqc1x1OEJGRVx1N0EwQlx1NEUwOVx1NTk1N1x1NEVFM1x1NzgwMVxcXFxub2RlanNcdTU0MEVcdTdBRUZcdThCRkVcdTdBMEJcdTRFRTNcdTc4MDEoXHU2NUM1XHU2RTM4XHU1QzBGXHU3QTBCXHU1RThGKVxcXFxob3BlXFxcXGxpbmdnYW5cXFxcYmxvZ1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhclxcXFx6aC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vWDovbm9kZWpzJUU4JUFGJUJFJUU3JUE4JThCJUU0JUI4JTg5JUU1JUE1JTk3JUU0JUJCJUEzJUU3JUEwJTgxL25vZGVqcyVFNSU5MCU4RSVFNyVBQiVBRiVFOCVBRiVCRSVFNyVBOCU4QiVFNCVCQiVBMyVFNyVBMCU4MSglRTYlOTclODUlRTYlQjglQjglRTUlQjAlOEYlRTclQTglOEIlRTUlQkElOEYpL2hvcGUvbGluZ2dhbi9ibG9nLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBjb25zdCB6aFNpZGViYXIgPSBzaWRlYmFyKHtcbiAgXCIvXCI6IFtcbiAgICBcIlwiLFxuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU1OTgyXHU0RjU1XHU0RjdGXHU3NTI4XCIsXG4gICAgICBpY29uOiBcImxhcHRvcC1jb2RlXCIsXG4gICAgICBwcmVmaXg6IFwiZGVtby9cIixcbiAgICAgIGxpbms6IFwiZGVtby9cIixcbiAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJcdTY1ODdcdTdBRTBcIixcbiAgICAgIGljb246IFwiYm9va1wiLFxuICAgICAgcHJlZml4OiBcInBvc3RzL1wiLFxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gICAgICBcbiAgICB9LFxuICAgIFxuICAgIC8vIHtcbiAgICAvLyAgIHRleHQ6IFwiXHU2NzJEXHU4QkIwXCIsXG4gICAgLy8gICBpY29uOiBcImJvb2tcIixcbiAgICAvLyAgIHByZWZpeDogXCJwb3N0cy9cdTY3MkRcdThCQjBcIixcbiAgICAvLyAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgdGV4dDogXCJcdTdGMTZcdTdBMEJcdTUyMDZcdTRFQUJcIixcbiAgICAvLyAgIGljb246IFwiYm9va1wiLFxuICAgIC8vICAgcHJlZml4OiBcInBvc3RzL1x1N0YxNlx1N0EwQlx1NTIwNlx1NEVBQlwiLFxuICAgIC8vICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICB0ZXh0OiBcIlx1NEVBN1x1NTRDMVx1NjcwRFx1NTJBMVwiLFxuICAgIC8vICAgaWNvbjogXCJib29rXCIsXG4gICAgLy8gICBwcmVmaXg6IFwicG9zdHMvXHU0RUE3XHU1NEMxXHU2NzBEXHU1MkExXCIsXG4gICAgLy8gICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcbiAgICAvLyB9LFxuICAgIFwiaW50cm9cIixcbiAgICB7XG4gICAgICB0ZXh0OiBcIlx1NUU3Qlx1NzA2Rlx1NzI0N1wiLFxuICAgICAgaWNvbjogXCJwZXJzb24tY2hhbGtib2FyZFwiLFxuICAgICAgbGluazogXCJodHRwczovL3BsdWdpbi1tZC1lbmhhbmNlLnZ1ZWpzLnByZXNzL3poL2d1aWRlL2NvbnRlbnQvcmV2ZWFsanMvZGVtby5odG1sXCIsXG4gICAgfSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxZixTQUFTLHdCQUF3Qjs7O0FDQW5DLFNBQVMsaUJBQWlCOzs7QUNBVixTQUFTLGNBQWM7QUFFbmhCLElBQU0sV0FBVyxPQUFPO0FBQUEsRUFDN0I7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLFVBQVU7QUFBQSxVQUNSLEVBQUUsTUFBTSxVQUFVLE1BQU0saUJBQWlCLE1BQU0sSUFBSTtBQUFBLFVBQ25ELEVBQUUsTUFBTSxVQUFVLE1BQU0saUJBQWlCLE1BQU0sSUFBSTtBQUFBLFVBQ25EO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FB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O0FBQUEsSUFFVixRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsSUFDUDtBQUFBLElBRUEsWUFBWTtBQUFBLElBRVosTUFBTTtBQUFBLElBRU4sTUFBTTtBQUFBLElBRU4sU0FBUztBQUFBLElBRVQsTUFBTTtBQUFBLE1BQ0osUUFBUTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsV0FBVztBQUFBLFFBQ1gsVUFBVTtBQUFBLFFBQ1YsU0FBUztBQUFBLFFBQ1QsVUFBVTtBQUFBLFFBQ1YsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsVUFBVTtBQUFBLFFBQ1YsV0FBVztBQUFBLFFBQ1gsT0FBTztBQUFBLFFBQ1AsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsV0FBVztBQUFBLFFBQ1gsUUFBUTtBQUFBLFFBQ1IsSUFBSTtBQUFBLFFBQ0osT0FBTztBQUFBLFFBQ1AsUUFBUTtBQUFBLFFBQ1IsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFFBQ1IsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsU0FBUztBQUFBLFFBQ1QsT0FBTztBQUFBLE1BRVQ7QUFBQSxJQUNGO0FBQUEsSUFFQSxTQUFTO0FBQUEsTUFDUCxLQUFLO0FBQUE7QUFBQSxRQUVILFFBQVE7QUFBQTtBQUFBLFFBR1IsU0FBUztBQUFBLFFBRVQsUUFBUTtBQUFBLFFBRVIsZUFBZTtBQUFBLFFBRWYsTUFBTTtBQUFBLFVBQ0osYUFBYTtBQUFBLFVBQ2IsT0FBTztBQUFBLFFBRVQ7QUFBQSxRQUVBLGFBQWE7QUFBQSxVQUNYLFVBQVU7QUFBQSxRQUNaO0FBQUEsTUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0EsUUFBUTtBQUFBO0FBQUEsUUFFTixRQUFRO0FBQUE7QUFBQSxRQUdSLFNBQVM7QUFBQSxRQUVULFFBQVE7QUFBQSxRQUVSLGVBQWU7QUFBQSxRQUVmLE1BQU07QUFBQSxVQUNKLGFBQWE7QUFBQSxVQUNiLE9BQU87QUFBQSxRQUNUO0FBQUE7QUFBQSxRQUdBLGFBQWE7QUFBQSxVQUNYLFVBQVU7QUFBQSxRQUNaO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUVBLFNBQVM7QUFBQSxNQUNQLFFBQVE7QUFBQSxRQUNOLHNCQUFzQixDQUFDLFFBQVE7QUFBQSxRQUMvQix5QkFBeUIsQ0FBQyxRQUFRO0FBQUEsUUFDbEMscURBQTJDLENBQUMsUUFBUTtBQUFBLFFBQ3BELHFEQUEyQyxDQUFDLFFBQVE7QUFBQSxRQUNwRCxxREFBMkMsQ0FBQyxRQUFRO0FBQUEsUUFDcEQscURBQTJDLENBQUMsUUFBUTtBQUFBLFFBQ3BELHFEQUEyQyxDQUFDLFFBQVE7QUFBQSxRQUNwRCx3Q0FBeUIsQ0FBQyxvQkFBVTtBQUFBLFFBQ3BDLHdDQUF5QixDQUFDLG9CQUFVO0FBQUEsUUFDcEMsd0NBQXlCLENBQUMsb0JBQVU7QUFBQSxNQUN0QztBQUFBLElBQ0Y7QUFBQTtBQUFBLElBR0EsV0FBVztBQUFBLElBRVgsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sS0FBSTtBQUFBO0FBQUEsUUFFRixhQUFZO0FBQUEsUUFDWixhQUFZO0FBQUEsUUFDWixjQUFhO0FBQUEsTUFDZjtBQUFBLE1BQ0EsV0FBVTtBQUFBLFFBQ1IsU0FBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBLFdBQVU7QUFBQSxRQUNSLFFBQU87QUFBQSxRQUNQLFdBQVU7QUFBQSxNQUdaO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJQSxTQUFTO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsV0FBVztBQUFBLFFBQ1QsT0FBTztBQUFBLFFBRVAsUUFBUTtBQUFBLFFBRVIsV0FBVztBQUFBLFFBRVgsU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFlBQ0gsYUFBYTtBQUFBLFlBQ2IsY0FBYztBQUFBLGNBQ1osUUFBUTtBQUFBLGdCQUNOLFlBQVk7QUFBQSxnQkFDWixpQkFBaUI7QUFBQSxjQUNuQjtBQUFBLGNBQ0EsT0FBTztBQUFBLGdCQUNMLFdBQVc7QUFBQSxrQkFDVCxrQkFBa0I7QUFBQSxrQkFDbEIsc0JBQXNCO0FBQUEsa0JBQ3RCLGtCQUFrQjtBQUFBLGtCQUNsQix1QkFBdUI7QUFBQSxnQkFDekI7QUFBQSxnQkFDQSxhQUFhO0FBQUEsa0JBQ1gscUJBQXFCO0FBQUEsa0JBQ3JCLHNCQUFzQjtBQUFBLGtCQUN0Qiw2QkFBNkI7QUFBQSxrQkFDN0IsK0JBQStCO0FBQUEsa0JBQy9CLHVCQUF1QjtBQUFBLGtCQUN2QixpQ0FBaUM7QUFBQSxnQkFDbkM7QUFBQSxnQkFDQSxhQUFhO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGtCQUNYLFVBQVU7QUFBQSxnQkFDWjtBQUFBLGdCQUNBLFFBQVE7QUFBQSxrQkFDTixZQUFZO0FBQUEsa0JBQ1osY0FBYztBQUFBLGtCQUNkLFdBQVc7QUFBQSxrQkFDWCxjQUFjO0FBQUEsZ0JBQ2hCO0FBQUEsZ0JBQ0EsaUJBQWlCO0FBQUEsa0JBQ2YsZUFBZTtBQUFBLGtCQUNmLG9CQUFvQjtBQUFBLGtCQUNwQiwwQkFBMEI7QUFBQSxrQkFDMUIsOEJBQThCO0FBQUEsZ0JBQ2hDO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxRQUFRO0FBQUEsWUFDTixhQUFhO0FBQUEsWUFDYixjQUFjO0FBQUEsY0FDWixRQUFRO0FBQUEsZ0JBQ04sWUFBWTtBQUFBLGNBQ2Q7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxZQUFZO0FBQUEsUUFDVixZQUFZO0FBQUEsVUFDWjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFFQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBRUE7QUFBQSxVQUNBO0FBQUEsUUFBUTtBQUFBLE1BQ1Y7QUFBQTtBQUFBLE1BR0EsV0FBVztBQUFBLFFBRVQsVUFBVTtBQUFBLFFBQ1YsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsV0FBVztBQUFBLFFBQ1gsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsYUFBYTtBQUFBLFFBQ2IsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLFFBQ1QsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLFNBQVM7QUFBQSxZQUNULFVBQVUsQ0FBQyxFQUFFLElBQUksTUFBTTtBQUNyQixrQkFBSSxRQUFRO0FBQ1YsdUJBQU87QUFBQSxrQkFDTCxLQUFLO0FBQUEsa0JBQ0wsT0FBTyxFQUFFLE1BQU0sTUFBTTtBQUFBLGtCQUNyQixTQUFTO0FBQUEsZ0JBQ1g7QUFBQSxZQUNKO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxRQUNWLE1BQU07QUFBQTtBQUFBLFFBR1gsT0FBTztBQUFBO0FBQUE7QUFBQSxRQUtQLFNBQVM7QUFBQTtBQUFBLFFBR1QsV0FBVztBQUFBO0FBQUEsUUFHWCxLQUFLO0FBQUE7QUFBQSxRQUdMLE9BQU87QUFBQTtBQUFBLFFBR1AsU0FBUztBQUFBO0FBQUEsUUFHUixTQUFTO0FBQUEsUUFFVixZQUFZO0FBQUEsVUFDVixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsUUFDdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFRQSxlQUFlO0FBQUE7QUFBQSxRQUdmLFVBQVU7QUFBQSxNQUNYO0FBQUE7QUFBQSxNQUdBLEtBQUs7QUFBQSxRQUNKLFNBQVM7QUFBQSxRQUNULFdBQVc7QUFBQSxRQUNYLFlBQVk7QUFBQSxRQUNaLFlBQVk7QUFBQSxRQUNaLE9BQU87QUFBQSxVQUNMLE1BQU07QUFBQSxVQUNOLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsUUFDQSxRQUFRO0FBQUEsVUFDTixPQUFPO0FBQUEsVUFDUCxPQUFPO0FBQUEsUUFDVDtBQUFBLFFBQ0EsVUFBVTtBQUFBLFVBQ1IsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFLEtBQUs7QUFBQSxjQUNMLE9BQU87QUFBQSxjQUNQLFNBQVM7QUFBQSxjQUNULE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsS0FBSztBQUFBLGNBQ0wsT0FBTztBQUFBLGNBQ1AsU0FBUztBQUFBLGNBQ1QsTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxLQUFLO0FBQUEsY0FDTCxPQUFPO0FBQUEsY0FDUCxNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLEtBQUs7QUFBQSxjQUNMLE9BQU87QUFBQSxjQUNQLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFVBQ0EsV0FBVztBQUFBLFlBQ1Q7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFlBQVk7QUFBQSxjQUNaLEtBQUs7QUFBQSxjQUNMLE9BQU87QUFBQSxnQkFDTDtBQUFBLGtCQUNFLEtBQUs7QUFBQSxrQkFDTCxPQUFPO0FBQUEsa0JBQ1AsU0FBUztBQUFBLGtCQUNULE1BQU07QUFBQSxnQkFDUjtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNEO0FBQUEsSUFDQTtBQUFBLElBQ0EsWUFBWTtBQUFBLEVBQ1o7QUFBQSxFQUNBLEVBQUUsUUFBUSxLQUFLO0FBQ2Y7OztBRHJXQSxTQUFTLG1CQUFtQjtBQVU1QixJQUFPLGlCQUFRLGlCQUFpQjtBQUFBLEVBRTlCLE1BQU07QUFBQSxFQUVOLFNBQVM7QUFBQSxJQUNQLEtBQUs7QUFBQSxNQUNGLE1BQU07QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNSLGFBQWE7QUFBQSxJQUVoQjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQUEsRUFFQTtBQUFBO0FBQUEsRUFHQyxnQkFBZ0I7QUFBQSxFQUVoQixTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLUixZQUFZO0FBQUE7QUFBQSxNQUVWLGdCQUFlO0FBQUEsTUFDZixRQUFRO0FBQUEsUUFDTjtBQUFBLFVBQ0UsUUFBUTtBQUFBLFVBQ2hCLFNBQVM7QUFBQSxVQUNULFlBQVksQ0FBQyxHQUFHLEVBQUU7QUFBQSxVQUNsQixjQUFjO0FBQUEsWUFDWixVQUFVO0FBQUEsVUFDWjtBQUFBLFFBQ007QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFHRjtBQUNILENBQUM7IiwKICAibmFtZXMiOiBbIm5hdmJhciIsICJuYXZiYXIiLCAic2lkZWJhciIsICJzaWRlYmFyIl0KfQo=
