(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{357:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),a("p",[t._v("如果你只是简单的部署，你只需要将整个 dist 文件夹复制到你的 CDN 或静态服务器。index.html 应该是你的服务器入口。")]),t._v(" "),a("h2",{attrs:{id:"前端路由与服务端的结合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端路由与服务端的结合"}},[t._v("#")]),t._v(" 前端路由与服务端的结合")]),t._v(" "),a("blockquote",[a("p",[t._v("如果你遇到 "),a("code",[t._v("https://cdn.com/users/123")]),t._v(" 刷新后 404 的问题，你需要按照这个章节进行处理。")])]),t._v(" "),a("p",[t._v("MapGIS Pan-Spatial Map 使用的 quasar 支持两种路由方式："),a("code",[t._v("history")]),t._v(" 和 "),a("code",[t._v("hash")]),t._v("。")]),t._v(" "),a("p",[t._v("可以在 "),a("code",[t._v("packages/pan-spatial-map-framework/quasar.conf.js")]),t._v(" 中进行配置选择用哪个方式：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  build"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vueRouterMode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'history'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// available values: 'hash', 'history', default is history")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("hash")]),t._v(" 使用如 "),a("code",[t._v("https://cdn.com/#/users/123")]),t._v(" 这样的 URL，取井号后面的字符作为路径。"),a("code",[t._v("history")]),t._v(" 则直接使用 "),a("code",[t._v("https://cdn.com/users/123")]),t._v(" 这样的 URL。使用 "),a("code",[t._v("hash")]),t._v(" 时浏览器访问到的始终都是根目录下 "),a("code",[t._v("index.html")]),t._v("。使用 "),a("code",[t._v("history")]),t._v(" 则需要服务器做好处理 URL 的准备，处理应用启动最初的 "),a("code",[t._v("/")]),t._v(" 这样的请求应该没问题，但当用户来回跳转并在 "),a("code",[t._v("/users/123")]),t._v(" 刷新时，服务器就会收到来自 "),a("code",[t._v("/users/123")]),t._v(" 的请求，这时你需要配置服务器能处理这个 URL 返回正确的 "),a("code",[t._v("index.html")]),t._v("。强烈推荐使用默认的 "),a("code",[t._v("history")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"部署到不同的平台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署到不同的平台"}},[t._v("#")]),t._v(" 部署到不同的平台")]),t._v(" "),a("h3",{attrs:{id:"使用-spring-boot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-spring-boot"}},[t._v("#")]),t._v(" 使用 spring boot")]),t._v(" "),a("p",[t._v("Spring Boot 是使用最多的 java 框架，只需要简单的几步就可以与 MapGIS Pan-Spatial Map 进行整合。")]),t._v(" "),a("p",[t._v("首先运行 build")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ npm run build\n")])])]),a("p",[t._v("然后将编译之后的文件复制到 spring boot 项目的 "),a("code",[t._v("/src/main/resources/static")]),t._v(" 目录下。")]),t._v(" "),a("p",[t._v("重新启动项目，访问 "),a("code",[t._v("http://localhost:8080/")]),t._v(" 就可以看到效果。")]),t._v(" "),a("p",[t._v("为了方便做整合，最好使用 hash 路由。如果你想使用 history ，可以创建一个 controller ，并添加如下代码：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/**"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApiResult")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" apiProxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/**"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HTTPMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"使用-express"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-express"}},[t._v("#")]),t._v(" 使用 express")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://expressjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("express"),a("OutboundLink")],1),t._v(" 的例子")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("app.use(express.static(path.join(__dirname, 'build')));\n\napp.get('/*', function (req, res) {\n  res.sendFile(path.join(__dirname, 'build', 'index.html'));\n});\n")])])]),a("h3",{attrs:{id:"使用-egg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-egg"}},[t._v("#")]),t._v(" 使用 egg")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://eggjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("egg"),a("OutboundLink")],1),t._v(" 的例子")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// controller\nexports.index = function* () {\n  yield this.render('App.jsx', {\n    context: {\n      user: this.session.user,\n    },\n  });\n};\n\n// router\napp.get('home', '/*', 'home.index');\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);