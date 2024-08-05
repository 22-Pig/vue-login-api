/**
 * @description 📚 路由参数配置简介
 * @param path ==> 路由菜单访问路径( 可用作 KeepAlive 缓存标识)
 * @param name ==> 路由 name (对应页面组件 name, 按钮权限筛选)
 * @param redirect ==> 路由重定向地址
 * @param component ==> 视图文件路径
 * @param meta ==> 路由菜单元信息
 * @param meta.title ==> 路由标题 (用作 document.title || 菜单的名称)
 *
 */

export const allRouter = [
  {
    path: "/homepage",
    name: "Homepage",
    component: "/homepage/index",
    meta: {
      title: "主页"
    }
  }
];
