(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{436:function(a,t,e){"use strict";e.r(t);var n=e(11),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"快速上手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[a._v("#")]),a._v(" 快速上手")]),a._v(" "),e("h2",{attrs:{id:"技术准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技术准备"}},[a._v("#")]),a._v(" 技术准备")]),a._v(" "),e("p",[a._v("由于本项目技术栈基于 "),e("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("typescript"),e("OutboundLink")],1),a._v("、"),e("a",{attrs:{href:"https://cn.vuejs.org/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("vue"),e("OutboundLink")],1),a._v("、"),e("a",{attrs:{href:"https://github.com/vuejs/vue-cli",target:"_blank",rel:"noopener noreferrer"}},[a._v("vue-cli"),e("OutboundLink")],1),a._v(" 、"),e("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[a._v("axios"),e("OutboundLink")],1),a._v(" 和 "),e("a",{attrs:{href:"https://github.com/vueComponent/ant-design-vue",target:"_blank",rel:"noopener noreferrer"}},[a._v("ant-design-vue"),e("OutboundLink")],1),a._v("，因此需提前了解和学习这些相关知识。")]),a._v(" "),e("h2",{attrs:{id:"开发环境准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发环境准备"}},[a._v("#")]),a._v(" 开发环境准备")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("安装 vsCode")])]),a._v(" "),e("li",[e("p",[a._v("安装"),e("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("nvm"),e("OutboundLink")],1),a._v("(推荐)")])]),a._v(" "),e("li",[e("p",[a._v("安装"),e("a",{attrs:{href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("node.js"),e("OutboundLink")],1),a._v("，并且 node 版本为 14.x.x")])]),a._v(" "),e("li",[e("p",[a._v("安装 yarn:npm install -g yarn")])])]),a._v(" "),e("h2",{attrs:{id:"目录结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[a._v("#")]),a._v(" 目录结构")]),a._v(" "),e("p",[a._v("下面是整个项目的目录结构。")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("|── public\n|── src\n   |── api                 # api\n   |── assets              # 资源文件\n   |── components          # 框架应用相关组件\n   |── config              # 框架应用配置\n   |── core                # 框架应用内核\n   |── layouts             # 布局\n   |── locales             # 语言\n   |── qiankun             # qiankun\n   |── router              # 路由\n   |── shared              # qiankun镜像\n   |── store               # store\n   |── theme               # 样式文件\n   |── utils               # 工具类\n   |── views               # 视图组件\n   |── App.vue             # vue页面入口文件\n   |── global.less         # 全局样式文件\n   |── main.js             # vue应用入口文件\n   |── permission.js       # 引用许可文件\n|── .browserslistrc        # 浏览器兼容性配置文件\n|── .editorconfig          # editor配置\n|── .env                   # 全局默认配置文件\n|── .env.backend           # 生产环境的配置文件\n|── .env.development       # 开发环境的配置文件\n|── .env.preview           # 预览环境的配置文件\n|── .eslintignore          # ESlint忽略路径\n|── .eslintrc.js           # ESlint配置\n|── .eslintrc.json         # ESlint配置\n|── .gitattributes         # GIT属性配置\n|── .gitignore             # GIT忽略路径\n|── .prettierrc            # 代码格式化配置\n|── .travis.yml            # YAML格式的配置文件\n|── babel.config.js        # Babel的配置文件\n|── jest.config.js         # Jest的配置文件\n|── jsconfig.json          # js配置\n|── package.json           # npm脚本和依赖项\n|── tsconfig.json          # ts配置\n|── vue.config.js          # vue打包管理的配置文件\n|── yarn.lock\n")])])]),e("h2",{attrs:{id:"npm-引入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-引入"}},[a._v("#")]),a._v(" npm 引入")]),a._v(" "),e("h3",{attrs:{id:"环境要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境要求"}},[a._v("#")]),a._v(" 环境要求")]),a._v(" "),e("p",[a._v("设置 npm 仓库为公网 npm。")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" config "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" registry http://registry.npmmirror.com\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" config "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" registry http://registry.npmmirror.com\n")])])]),e("h3",{attrs:{id:"环境准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[a._v("#")]),a._v(" 环境准备")]),a._v(" "),e("p",[a._v("您可以在司马云站点下载全空间一张图安装包"),e("a",{attrs:{href:"http://www.smaryun.com/dev/service-space/resource#/node_id237",target:"_blank",rel:"noopener noreferrer"}},[a._v("MapGIS-Pan-Spatial-Map"),e("OutboundLink")],1),a._v("。进入安装包 bin 目录下，右键 startup.bat，以管理员身份运行，启动 MapGIS-Pan-Spatial-Map 应用。应用程序启动后，在浏览器里输入"),e("a",{attrs:{href:"http://localhost:8015",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:8015"),e("OutboundLink")],1),a._v("，您会看到一个应用程序的登录页面。默认用户名为 "),e("code",[a._v("admin")]),a._v("，密码为 "),e("code",[a._v("sa.mapgis")]),a._v("。")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),e("p",[a._v("linux-x86_64 和 linux-arm64 的安装包，请运行 startup.sh 来启动应用程序。")]),a._v(" "),e("p",[a._v("另外如需包含高级微件功能的安装包，以及高级微件包和源码，请通过商务途径获取。")])]),a._v(" "),e("h3",{attrs:{id:"代码准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码准备"}},[a._v("#")]),a._v(" 代码准备")]),a._v(" "),e("p",[a._v("你可以在 Gitee 上下拉"),e("a",{attrs:{href:"https://gitee.com/osmapgis/MapGIS-Pan-Spatial-Map",target:"_blank",rel:"noopener noreferrer"}},[a._v("MapGIS-Pan-Spatial-Map"),e("OutboundLink")],1),a._v("代码。\n或者在 Github 上下拉"),e("a",{attrs:{href:"https://github.com/mapgis/mapgis-pan-spatial-map",target:"_blank",rel:"noopener noreferrer"}},[a._v("MapGIS-Pan-Spatial-Map"),e("OutboundLink")],1),a._v("代码。")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),e("p",[a._v("请拉取当前最新发布版本对应的分支，比如当前最新发布版本为 10.6.8.10，那么对应代码分支为 10.6.8.10。")])]),a._v(" "),e("h3",{attrs:{id:"安装依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[a._v("#")]),a._v(" 安装依赖")]),a._v(" "),e("p",[a._v("进入 MapGIS-Pan-Spatial-Map 目录")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v("\n")])])]),e("blockquote",[e("p",[a._v("如果网络状况不佳，可以使用 "),e("a",{attrs:{href:"https://cnpmjs.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("cnpm"),e("OutboundLink")],1),a._v(" 进行加速，并使用 "),e("code",[a._v("cnpm")]),a._v(" 代替 "),e("code",[a._v("yarn")]),a._v("。\n或者设置 yarn 的 npm 加载源，如 "),e("code",[a._v("yarn config set registry https://registry.npm.taobao.org")])])]),a._v(" "),e("h3",{attrs:{id:"编译工程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译工程"}},[a._v("#")]),a._v(" 编译工程")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" serve\n")])])]),e("p",[a._v("启动完成后会自动打开浏览器访问 "),e("a",{attrs:{href:"http://localhost:8000",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:8000"),e("OutboundLink")],1),a._v("，你看到下面的页面就代表成功了。")]),a._v(" "),e("img",{attrs:{src:a.$withBase("/images/login.png"),alt:"主界面"}}),a._v(" "),e("p",[a._v("接下来你可以修改代码进行业务开发了，本项目内建了典型业务模板、常用业务组件、模拟数据等各种实用的功能来辅助开发，你可以继续阅读和探索左侧的其它文档。")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),e("p",[a._v("在全空间一张图中如何使用 WebClient JS 相关包？比如@mapgis/webclient-cesium-plugin、@mapgis/webclient-common 等")]),a._v(" "),e("p",[a._v("可以。")]),a._v(" "),e("p",[a._v("一般 node_modules 目录下已有的包，都可以直接使用。但需要注意的是，全空间一张图中是"),e("strong",[a._v("以 es6 的方式调用 WebClient JS 相关包里的方法")]),a._v("，具体如何使用请参考"),e("a",{attrs:{href:"http://webclient.smaryun.com/#/index",target:"_blank",rel:"noopener noreferrer"}},[a._v("WebClient JS 相关包 API"),e("OutboundLink")],1),a._v("。")]),a._v(" "),e("p",[a._v("MapGIS-Pan-Spatial-Map 项目中的 package.json 中已引入了@mapgis/web-app-framework，而@mapgis/web-app-framework 的 package.json 中已引入了 Webclient Vue 组件包，比如@mapgis/webclient-vue-cesium、@mapgis/webclient-vue-mapboxgl、@mapgis/webclient-vue-ui 等，而 Webclient Vue 组件包的 package.json 中会引入 Webclient JS 相关包，因此，在 MapGIS-Pan-Spatial-Map 安装依赖时，会下载 Webclient JS 相关包。")]),a._v(" "),e("p",[a._v("全空间一张图相关包，比如@mapgis/mapgis-pan-spatial-map-theme、@mapgis/mapgis-pan-spatial-map-widgets、@mapgis/mapgis-pan-spatial-map-widgets-pro 以及相关脚手架，比如@mapgis/mapgis-pan-spatial-map-theme-frame、@mapgis/mapgis-pan-spatial-map-widgets-frame 中都会引用@mapgis/web-app-framework，因此在这些包中，也都可以直接使用 Webclient JS 相关包。")])])])}),[],!1,null,null,null);t.default=s.exports}}]);