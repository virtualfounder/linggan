import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
 
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "知识检索",
    icon: "book",
    link: "https://www.zzxxccvv.xyz/lvyou/#/",
  },
]);