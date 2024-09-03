import { defineClientConfig } from "vuepress/client";
import FlipClock from "./components/FlipClock.vue";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";


export default defineClientConfig({

  setup() {
    setupRunningTimeFooter(
      new Date("2024-01-01"),
      { 
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
        "/en/": "Running time: :day days :hour hours :minute minutes :second seconds",
       
      },
      true,
      
    );
    setupTransparentNavbar();
  },
  enhance: ({ app, router, siteData }) => {
    app.component("FlipClock", FlipClock);
  },
 
});
