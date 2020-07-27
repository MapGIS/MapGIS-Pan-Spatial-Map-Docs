# 介绍

[![Vue](https://img.shields.io/badge/vue-2.6.10-brightgreen.svg)](https://github.com/vuejs/vue)
[![Element-ui](https://img.shields.io/badge/quasar-1.9.5-brightgreen.svg)](https://github.com/quasarframework/quasar)
[![License: MIT](https://img.shields.io/badge/License-Apache2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![GitHub stars](https://img.shields.io/github/stars/mapgis/mapgis-pan-spatial-map.svg?style=social&label=Stars)](https://github.com/mapgis/mapgis-pan-spatil-map)

[MapGIS-Pan-Spatial-Map](http://mapgis.github.io/mapgis-pan-spatial-map-docs) 是一个面向全空间一张图 GIS 应用方向的解决方案，它基于 [vue](https://github.com/vuejs/vue), [typescript](https://www.typescriptlang.org/), [quasar](https://github.com/quasarframework/quasar)和[MapGIS Client for JavasCript](https://github.com/MapGIS/WebClient-JavaScript)实现。

本项目使用了最新的前端技术栈，提供了丰富的功能组件，它可以帮助你快速搭建全空间一张图原型。相信不管你的需求是什么，本项目都能帮助到你。

## 功能

```txt
- 登录 / 注销

- 多环境发布
  - Dev / Prod

- 全局功能
  - 动态主题
  - 动态布局
  - Mock 数据 / Mock 服务器

- 微件
  - 二维地图
  - 三维场景
  - 放大
  - 缩小
  - 全屏
  - 二三维地图切换
  - 目录树
  - 图层树
    - 查看属性
  - 结果集
    - 按范围过滤
    - 清除所有
  - 清除
  - 底图切换
  - 测量
    - 长度测量
    - 面积测量
  - 标注
    - 添加
    - 导出
    - 保持
    - 删除
```

## 前序准备

你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。本项目技术栈基于 [typescript](https://www.typescriptlang.org/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [quasar](hhttps://github.com/quasarframework/quasar)，所有的请求数据都使用[faker.js](https://github.com/Marak/Faker.js)进行模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。

## 目录结构

```text
|── packages
   |── pan-spatial-map-framework              # 框架应用
   |── pan-spatial-map-mock-server            # mock
   |── pan-spatial-map-plugin-auth            # 授权插件
   |── pan-spatial-map-plugin-layout          # 布局插件
   |── pan-spatial-map-plugin-layout-ui       # 布局插件UI
   |── pan-spatial-map-plugin-theme           # 主题插件
   |── pan-spatial-map-plugin-workspace       # 工作空间插件
   |── pan-spatial-map-plugin-workspace-ui    # 工作空间插件UI
   |── pan-spatial-map-plugin-mapeditor       # 地图编辑插件
   |── pan-spatial-map-plugin-mapeditor-ui    # 地图编辑插件UI
   |── pan-spatial-map-store                  # 全局上下文环境&存储结构
|── .editorconfig                             # editor配置
|── .eslintignore                             # ESlint忽略路径
|── .eslintrc.js                              # ESlint配置
|── .gitignore                                # GIT忽略路径
|── .prettierrc                               # 代码格式化配置
|── package.json                              # npm脚本和依赖项
|── README.md                                 # 您的网站/应用程序的自述文件
|── tsconfig.json                             # ts配置
```

## 着手使用

```bash
# 克隆项目
git clone https://github.com/MapGIS/MapGIS-Pan-Spatial-Map.git

# 进入项目目录
cd MapGIS-Pan-Spatial-Map

# 安装依赖
npm install # Or yarn

# 本地开发 启动项目
npm run dev # OR yarn dev
npm run dev:mock # OR yarn dev:mock
```

启动完成后会自动打开浏览器访问 [http://localhost:8080](http://localhost:8080)，如果你看到下面的页面就代表操作成功了。

<img :src="$withBase('/images/login.png')" alt="主界面">

接下来你可以修改代码进行业务开发了，本项目内建了典型业务模板、常用业务组件、模拟数据等各种实用的功能来辅助开发，你可以继续阅读和探索左侧的其它文档。

## 参与开发

本文档项目地址 [MapGIS-Pan-Spatial-Map-Docs](https://github.com/MapGIS/MapGIS-Pan-Spatial-Map-Docs) 基于 [vuepress](https://github.com/vuejs/vuepress) 开发。有任何修改和建议都欢迎通过该项目 issue 或者 pull request 支持。

## Vue 生态圈

**首先了解这些 vue 生态圈的东西，会对你上手本项目有很大的帮助。**

1. [Vue Router](https://router.vuejs.org/) 是 vue 官方的路由。它能快速的帮助你构建一个单页面或者多页面的项目。

2. [Vuex](https://vuex.vuejs.org/) 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。它能解决你很多全局状态或者组件之间通信的问题。

3. [Vue Loader](https://vue-loader.vuejs.org) 是为 vue 文件定制的一个 webpack 的 loader，它允许你以一种名为单文件组件 (SFCs)的格式撰写 Vue 组件。它能在开发过程中使用热重载来保持状态，为每个组件模拟出 scoped CSS 等等功能。不过大部分情况下你不需要对它直接进行配置，脚手架都帮你封装好了。

4. [Vue Test Utils](https://vue-test-utils.vuejs.org/) 是官方提供的一个单元测试工具。它能让你更方便的写单元测试。

5. [Vue Dev-Tools](https://github.com/vuejs/vue-devtools) Vue 在浏览器下的调试工具。写 vue 必备的一个浏览器插件，能大大的提高你调试的效率。

6. [Vue CLI](https://cli.vuejs.org/) 是官方提供的一个 vue 项目脚手架，本项目也是基于它进行构建的。它帮你分装了大量的 webpack、babel 等其它配置，让你能花更少的精力在搭建环境上，从而能更专注于页面代码的编写。不过所有的脚手架都是针对大部分情况的，所以一些特殊的需求还是需要自己进行配置。建议先阅读一遍它的文档，对一些配置有一些基本的了解。

7. [Vetur](https://github.com/vuejs/vetur) 是 VS Code 的插件. 如果你使用 VS Code 来写 vue 的话，这个插件是必不可少的。
