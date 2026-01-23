import { SidebarConfig4Multiple } from "vuepress/config";
import AI from "./sidebars/ai";
// @ts-ignore
export default {
  "/AI/": AI,
  "/AI项目教程/": AI,
  // 폴백, 기본적으로 기사 제목을 기반으로 사이드바 렌더링
  "/": "auto",
} as SidebarConfig4Multiple;
