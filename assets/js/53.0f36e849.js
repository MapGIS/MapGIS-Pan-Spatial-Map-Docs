(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{419:function(a,t,s){"use strict";s.r(t);var e=s(11),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"后台管理平台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后台管理平台"}},[a._v("#")]),a._v(" 后台管理平台")]),a._v(" "),s("h2",{attrs:{id:"包结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包结构"}},[a._v("#")]),a._v(" 包结构")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("|── apps                           # 应用\n    |── apps                       # 应用\n        |── xxx                    # 角色id（目录内为当前应用完整目录，符合WAF规范）\n            |── configs            # 配置\n            |── images             # 图像\n            |── themes             # 主题\n            |── widgets            # 微件\n            |── app.json           # 应用全局配置\n    |── bin                        # 系统运行脚本\n    |── config                     # 系统配置\n    |── lib                        # 系统库（内置tomcat）\n    |── prefab                     # 系统预设\n    |── sql                        # 系统sql（MySQL）\n    |── upload                     # 上传文件本地存储\n        |── file                   # 文件目录\n        |── avator                 # 头像目录\n|── support                        # 应用管理\n    |── jre                        # jre\n|── startup.bat                    # 系统启动脚本\n")])])]),s("h2",{attrs:{id:"本地安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地安装"}},[a._v("#")]),a._v(" 本地安装")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("配置好数据库 MySQL5.7，创建数据库，默认数据库名为 mapgis_pan_spatial_map")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[a._v("注意数据库编码为 utf8mb4,排序规则为 utf8mb4_general_ci")])])]),a._v(" "),s("li",[s("p",[a._v("在数据库上运行 apps/sql/mapgis_pan_spatial_map.sql")])]),a._v(" "),s("li",[s("p",[a._v("修改配置文件")]),a._v(" "),s("blockquote",[s("p",[a._v("复制 apps/config/application.example.properties 文件并命名为 application.properties，修改里面的服务端口和数据源信息")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 服务端口\nmapgis-pan-spatial-map.server.port=8015\n\n# 数据源\nmapgis-pan-spatial-map.datasource.db-host=localhost\nmapgis-pan-spatial-map.datasource.db-port=3306\nmapgis-pan-spatial-map.datasource.db-name=mapgis_pan_spatial_map\nmapgis-pan-spatial-map.datasource.db-user=root\nmapgis-pan-spatial-map.datasource.db-pwd=123456\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[a._v("默认服务端口是 "),s("code",[a._v("8015")]),a._v(" "),s("br"),a._v("\n默认数据源端口是 "),s("code",[a._v("3306")]),a._v("，默认数据源 "),s("code",[a._v("root")]),a._v(" 密码是 "),s("code",[a._v("123456")]),a._v("，请一定确保数据源信息与你配置的 MySQL 信息一致！！！")])])]),a._v(" "),s("li",[s("p",[a._v("双击执行"),s("code",[a._v("startup.bat")]),a._v("，浏览器访问"),s("a",{attrs:{href:"http://localhost:8015/manager",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:8015/manager"),s("OutboundLink")],1)])])]),a._v(" "),s("h2",{attrs:{id:"账号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#账号"}},[a._v("#")]),a._v(" 账号")]),a._v(" "),s("p",[a._v("超级管理员账号："),s("code",[a._v("admin/sa.mapgis")]),a._v("，新建账号默认密码为"),s("code",[a._v("sa.mapgis")])]),a._v(" "),s("h2",{attrs:{id:"功能结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能结构"}},[a._v("#")]),a._v(" 功能结构")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("|── 系统配置                   # 系统配置\n    |── 管理站点配置           # 管理站点标题、副标题、logo和版权配置\n    |── 应用基本配置           # 服务器、分辨率、空间参考等基本配置\n    |── 行政区划配置           # 行政区划配置\n|── 应用管理                   # 应用管理\n    |── 应用搭建               # 可视化配置应用\n    |── 权限管理               # 应用功能权限和数据权限配置\n|── 系统管理                   # 系统管理\n|── 系统监控                   # 系统监控\n|── 系统工具                   # 系统工具\n    |── 接口文档               # 接口文档\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);