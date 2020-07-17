const { getNavbarByCategory } = require('./navbar')
const { getSidebarByCategory } = require('./sidebar')

module.exports = {
  title: 'MapGIS-Pan-Spatial-Map',
  base: '/mapgis-pan-spatial-map-docs/',
  head: [
    ['meta', { name: 'keywords', content: 'mapgis,开源,免费,全空间,一张图' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    repo: 'mapgis/mapgis-pan-spatial-map',
    docsRepo: 'mapgis/mapgis-pan-spatial-map-docs',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 3,
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: true
    },
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [],
        sidebar: {}
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新'
          }
        },
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              title: '基础',
              children: getSidebarByCategory('essentials', 'zh')
            },
            {
              title: '进阶',
              children: getSidebarByCategory('advanced', 'zh')
            },
            {
              title: '其它',
              children: getSidebarByCategory('other', 'zh')
            }
          ]
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'en-US',
      description: 'Pan-Spatial Map Application Framwwork'
    },
    '/zh/': {
      lang: 'zh-CN',
      description: '全空间一张图应用框架'
    }
  }
}
