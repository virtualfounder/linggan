import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/@vueuse/core/index.mjs";
import FontIcon from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";
import ArtPlayer from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-components/lib/client/components/ArtPlayer.js";
import BiliBili from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import CodePen from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-components/lib/client/components/CodePen.js";
import PDF from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import Replit from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-components/lib/client/components/Replit.js";
import Share from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-components/lib/client/components/Share.js";
import SiteInfo from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";
import StackBlitz from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-components/lib/client/components/StackBlitz.js";
import VPBanner from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-components/lib/client/components/VPBanner.js";
import VidStack from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-components/lib/client/components/VidStack.js";
import XiGua from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-components/lib/client/components/XiGua.js";

import "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    if(!hasGlobalComponent("ArtPlayer")) app.component("ArtPlayer", ArtPlayer);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("CodePen")) app.component("CodePen", CodePen);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("Replit")) app.component("Replit", Replit);
    if(!hasGlobalComponent("Share")) app.component("Share", Share);
    if(!hasGlobalComponent("SiteInfo")) app.component("SiteInfo", SiteInfo);
    if(!hasGlobalComponent("StackBlitz")) app.component("StackBlitz", StackBlitz);
    if(!hasGlobalComponent("VPBanner")) app.component("VPBanner", VPBanner);
    if(!hasGlobalComponent("VidStack")) app.component("VidStack", VidStack);
    if(!hasGlobalComponent("XiGua")) app.component("XiGua", XiGua);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
});
