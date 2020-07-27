# 可用的脚本

在项目中，你可以运行这些命令：

### `npm run dev`

运行这个脚本会启动服务，自动打开默认浏览器展示你的页面。当你重新编辑代码后，页面还会自动刷新。
::: tip 提示
MapGIS Pan-Spatial-Map 默认提供了 mock 数据，你可以通过`npm run mock`来单独启动一个服务或者通过`npm run dev:mock`在启动本项目的同时自动启动一个本地 Mock 数据服务。
:::

### `npm run build`

运行这个脚本将会编译你的项目，你可以在项目中的 `dist/spa` 目录中找到编译后的文件用于部署。

编译之后的文件经过压缩。如果你想知道更详细的信息可以查阅 [编译](/zh/guide/build-deployment/build.html)。

如果你需要部署，可以查阅 [部署](/zh/guide/build-deployment/deploy.html)。

<img :src="$withBase('/images/build-success.png')" alt="构建">
