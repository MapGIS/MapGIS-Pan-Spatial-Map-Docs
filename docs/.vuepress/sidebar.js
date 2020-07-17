const sidebar = {
  essentials: ['/guide/'],
  advanced: [],
  other: []
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
