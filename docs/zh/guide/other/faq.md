# 常见问题

::: tip
提问之前，请先查阅下面的常见问题。
:::

<br/>

## 首先有任何报错，最简单的方法是把报错信息复制到浏览器里面搜索一下！！！

<br/>

## 代码下载慢？

npm 或者 github 有时候因为中国墙的原因，网速会不稳定。有如下三种解决方案：

- 使用淘宝源

  npm install --registry=https://registry.npm.taobao.org

- Yarn

  - [yarn 介绍](https://github.com/yarnpkg/yarn)
  - [安装](https://yarn.bootcss.com/docs/install/#mac-stable)

  `yarn install`

- 自己科学上网

## vendor 过大问题?

建议使用 gzip，使用之后体积会只有原先 1/3 左右。还可以使用懒加载或者 Code Splitting 建议参考[这篇文章](https://zhuanlan.zhihu.com/p/26710831)。打出来的 app.js 过大，查看一下是不是 Uglify 配置不正确或者 sourceMap 没弄对。
优化相关请看该[文章](https://zhuanlan.zhihu.com/p/27710902)。

<br/>

## 我的 url 里怎么有 # 号？要如何去掉？

请参考文档 [前端路由与服务端的结合](../build-deployment/deploy.md#前端路由与服务端的结合) 主要由于 `history` 和 `hash` 两种不同模式导致的。

<br/>

## npm install 总是失败？

由于中国墙的的原因，安装一些依赖时很容易出现超时问题，国内用户推荐使用淘宝源的安装方式

```bash
npm install --registry=https://registry.npm.taobao.org
```

<br/>

## node-sass 安装失败？

建议参考[这里](https://github.com/PanJiaChen/vue-element-admin/issues/25)或者[这里](https://github.com/PanJiaChen/vue-element-admin/issues/24)
<br/>

## mock 问题

请参考文档 [Mock Data](../development/mock-api.md)

<br/>

## 图片 background url() 引用问题？

[https://github.com/vuejs/vue-loader/issues/481](https://github.com/vuejs/vue-loader/issues/481)

[https://github.com/vuejs/vue-cli/issues/112](https://github.com/vuejs/vue-cli/issues/112)

<br/>

## can't not find 'xxModule' - 找不到某些依赖或者模块

这种情况一般报错信息可以看到是哪个包抛出的信息.
一般卸载这个模块,安装重新安装下即可.

<br/>

## 其它任何关于 vue 的问题 ？

请你首先仔细阅读 vue [官方文档](https://cn.vuejs.org/index.html),但部分问题其实看报错就能知道原因了！

<br/>
