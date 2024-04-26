import { defineClientConfig } from "vuepress/client";
import FlipClock from "./components/FlipClock.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("FlipClock", FlipClock);
  },
});
