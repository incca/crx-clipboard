declare module "js-beautify";
declare module "classnames";

declare interface SidebarItem {
  name: string,
  key: string,
  icon: string,
}

// 应用全局设置
declare interface AppSetting {
  // 侧边栏是否展开
  isExpanded: boolean,
}
