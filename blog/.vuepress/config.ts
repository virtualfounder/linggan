import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
const author = "灵感虚拟发现现实";
const domain = "https://www.zzxxccvv.xyz";
const tags = ["程序员", "编程", "计算机"];
export default defineUserConfig({
  base: "/",

  locales: {
    "/": { 
       lang: "zh-CN",
        title: "灵感虚拟发现现实的编程宝典",
       description: "贴心的编程学习路线，全面的编程知识百科",
     
    },
    "/en/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
  },

  theme,

  // Enable it with pwa
   shouldPrefetch: false,
});
