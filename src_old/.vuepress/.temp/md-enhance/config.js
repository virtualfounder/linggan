import { defineClientConfig } from "vuepress/client";
import ChartJS from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import ECharts from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import { injectEchartsConfig } from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHint } from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/katex/dist/katex.min.css";
import "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import Mermaid from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import Playground from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import { defineAsyncComponent } from "vue";
import { LoadingIcon } from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-shared/lib/client/index.js";
import { injectSandpackConfig } from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import VuePlayground from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js";
import { injectVuePlaygroundConfig } from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("ECharts", ECharts);
    injectEchartsConfig(app);
    app.component("FlowChart", FlowChart);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    injectSandpackConfig(app);
    app.component(
  "SandPack",
  defineAsyncComponent({
    loader: () => import("X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-plugin-md-enhance/lib/client/components/SandPack.js"),
    loadingComponent: LoadingIcon,
  })
);
    injectVuePlaygroundConfig(app);
    app.component("VuePlayground", VuePlayground);
  },
  setup: () => {
useHint();
  }
});
