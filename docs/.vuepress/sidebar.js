const sidebar = {
  introduction: ['/guide/', '/guide/introduction/available-script'],
  development: ['/guide/development/mock-api'],
  'build-deployment': [
    '/guide/build-deployment/build',
    '/guide/build-deployment/deploy'
  ],
  advanced: ['/guide/advanced/style-guide', '/guide/advanced/uset-typescript'],
  other: ['/guide/other/faq', '/guide/other/from-community']
}

function getSidebarByCategory(category, lang = 'en') {
  const links = JSON.parse(JSON.stringify(sidebar[category])) // Deep clone
  return links.map(link => {
    if (lang != 'en' && link.startsWith('/')) {
      return `/${lang}${link}`
    }
    return link
  })
}

module.exports = {
  getSidebarByCategory
}
