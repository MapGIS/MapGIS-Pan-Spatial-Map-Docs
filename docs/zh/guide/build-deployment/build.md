## 构建

当项目开发完毕，只需要运行一行命令就可以打包你的应用：

```bash
$ npm run build
```

<img :src="$withBase('/images/build-start.png')" alt="构建">

由于 MapGIS Pan-Spatial-Map 使用的工具 [quasar](http://www.quasarchs.com/) 已经将复杂的流程封装完毕，构建打包文件只需要一个命令 `npm run build`，构建打包成功之后，会在框架应用`packages/pan-spatial-map-framework`根目录生成 `dist/spa` 文件夹，里面就是构建打包好的文件，通常是 `*.js`、`*.css`、`index.html` 等静态文件。
