# Mock Data

Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发更加独立自主，不会被服务端的开发所阻塞。

## Swagger

在公司的项目中通常使用 [swagger](https://swagger.io/)， 由后端来模拟业务数据。
**swagger** 是一个 REST APIs 文档生成工具，它从代码注释中自动生成文档，可以跨平台，开源，支持大部分语言，社区好，总之非常不错，强烈推荐。
[线上 demo](http://petstore.swagger.io/?_ga=2.222649619.983598878.1509960455-2044209180.1509960455#/pet/addPet)

## Mockjs

[mockjs](https://github.com/nuysoft/Mock) 的原理是: 拦截了所有的请求并代理到本地，然后进行数据模拟，所以你会发现 `network` 中没有发出任何的请求。

但它的最大的问题是就是它的实现机制。它会重写浏览器的`XMLHttpRequest`对象，从而才能拦截所有请求，代理到本地。大部分情况下用起来还是蛮方便的，但就因为它重写了`XMLHttpRequest`对象，所以比如`progress`方法，或者一些底层依赖`XMLHttpRequest`的库都会和它发生不兼容。

它还有一个问题是，因为是它本地模拟的数据，实际上不会走任何网络请求。所以本地调试起来很蛋疼，只能通过`console.log`来调试。

## 目前方案

在本地会启动一个`mock-server`来模拟数据，该方案的好处是，在保留 `mockjs`的优势的同时，解决之前的痛点。由于我们的 mock 是完全基于`webpack-dev-serve`来实现的，所以在你启动前端服务的同时，`mock-server`就会自动启动，而且这里还通过 [chokidar](https://github.com/paulmillr/chokidar) 来观察 `mock` 文件夹内容的变化。在发生变化时会清除之前注册的`mock-api`接口，重新动态挂载新的接口，从而支持热更新。有兴趣的可以自己看一下代码[mock-server.ts](https://github.com/MapGIS/MapGIS-Pan-Spatial-Map/blob/master/packages/pan-spatial-map-mock-server/mock/mock-server.ts)。由于是一个真正的`server`，所以你可以通过控制台中的`network`，清楚的知道接口返回的数据结构。并且同时解决了之前`mockjs`会重写 `XMLHttpRequest`对象，导致很多第三方库失效的问题。

## 移除

如果你不想使用`mock-server`的话只要在[config.json](https://github.com/MapGIS/MapGIS-Pan-Spatial-Map/blob/master/packages/pan-spatial-map-plugin-auth/src/templates/src/statics/plugins/auth/config.json)中修改`"^/onemap"`指向实际的全空间一张图服务器地址就可以了。

## 新增

如果你想添加 mock 数据，只要在`packages/pan-spatial-map-mock-server`根目录下找到`mock`文件，添加对应的路由，对其进行拦截和模拟数据即可。
