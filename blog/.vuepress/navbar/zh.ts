import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "札记4月",
        icon: "pen-to-square",
        prefix: "札记/202404",
        children: [
          { text: "这是第一篇文章-0412", icon: "pen-to-square", link: "20240412" },
          { text: "今天完成的代码-0413", icon: "pen-to-square", link: "20240413" },
          "20240414",
          "20240415",
        ],
      },
      {
        text: "笔记5月",
        icon: "pen-to-square",
        prefix: "札记/202405/20240506",
        children: [
          {
            text: "笔记一",
            icon: "pen-to-square",
            link: "笔记一",
          },
          {
            text: "笔记二",
            icon: "pen-to-square",
            link: "笔记二",
          },
          "笔记三",
          "笔记四",
          "笔记五",
        ],
      },
      // { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      // { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
     
    ],
  },
  {
    text: "一本书",
    icon: "book",
    link: "https://www.zzxxccvv.xyz/posts/%E4%B8%80%E6%9C%AC%E4%B9%A6/%E7%94%A8latex%E5%86%99%E7%9A%84%E4%B8%80%E6%9C%AC%E4%B9%A6",
  },

  {
    text: "知识检索",
    icon: "book",
    link: "https://www.zzxxccvv.xyz/lvyou/#/",
  },
]);
