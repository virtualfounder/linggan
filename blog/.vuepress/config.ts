import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { appendDatePlugin } from "@vuepress/plugin-append-date";
import { oml2dPlugin } from "vuepress-plugin-oh-my-live2d";
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension';
// import { netabareSwitchPlugin } from 'vuepress-plugin-netabare-switch';

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
   
   plugins: [
  //  netabareSwitchPlugin(),
    // removeHtmlExtensionPlugin(),
     appendDatePlugin(),
    oml2dPlugin({
      // 在这里配置选项
      dockedPosition:"right",
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
    }),

 
   ],
});
