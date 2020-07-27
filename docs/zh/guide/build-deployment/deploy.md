## 部署

如果你只是简单的部署，你只需要将整个 dist 文件夹复制到你的 CDN 或静态服务器。index.html 应该是你的服务器入口。

## 前端路由与服务端的结合

> 如果你遇到 `https://cdn.com/users/123` 刷新后 404 的问题，你需要按照这个章节进行处理。

MapGIS Pan-Spatial Map 使用的 quasar 支持两种路由方式：`history` 和 `hash`。

可以在 `packages/pan-spatial-map-framework/quasar.conf.js` 中进行配置选择用哪个方式：

```javascript
module.exports = configure(ctx => ({
  build: {
    vueRouterMode: 'history', // available values: 'hash', 'history', default is history
  }
}
```

`hash` 使用如 `https://cdn.com/#/users/123` 这样的 URL，取井号后面的字符作为路径。`history` 则直接使用 `https://cdn.com/users/123` 这样的 URL。使用 `hash` 时浏览器访问到的始终都是根目录下 `index.html`。使用 `history` 则需要服务器做好处理 URL 的准备，处理应用启动最初的 `/` 这样的请求应该没问题，但当用户来回跳转并在 `/users/123` 刷新时，服务器就会收到来自 `/users/123` 的请求，这时你需要配置服务器能处理这个 URL 返回正确的 `index.html`。强烈推荐使用默认的 `history`。

## 部署到不同的平台

### 使用 spring boot

Spring Boot 是使用最多的 java 框架，只需要简单的几步就可以与 MapGIS Pan-Spatial Map 进行整合。

首先运行 build

```
$ npm run build
```

然后将编译之后的文件复制到 spring boot 项目的 `/src/main/resources/static` 目录下。

重新启动项目，访问 `http://localhost:8080/` 就可以看到效果。

为了方便做整合，最好使用 hash 路由。如果你想使用 history ，可以创建一个 controller ，并添加如下代码：

```java
@RequestMapping("/api/**")
public ApiResult api(HttpServletRequest request, HttpServletResponse response){
    return apiProxy.proxy(request, response);
}

@RequestMapping(value="/**", method=HTTPMethod.GET)
public String index(){
    return "index"
}
```

### 使用 express

[express](http://expressjs.com/) 的例子

```
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
```

### 使用 egg

[egg](https://eggjs.org/) 的例子

```
// controller
exports.index = function* () {
  yield this.render('App.jsx', {
    context: {
      user: this.session.user,
    },
  });
};

// router
app.get('home', '/*', 'home.index');
```
