import { defineClientConfig } from "vuepress/client";


import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, Timeline, setupBlog } from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";
import { GlobalEncrypt, LocalEncrypt } from "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "X:/nodejs课程三套代码/nodejs后端课程代码(旅游小程序)/hope/linggan/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);

    app.component("BloggerInfo", BloggerInfo);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
});