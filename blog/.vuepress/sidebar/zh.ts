import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
      
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
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
});
