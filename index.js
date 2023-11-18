(function () {
  var style = document.createElement('style')
  var cache = Object.create(null)
  var count = 0

  function classify (node) {
    if (node.attributes) {
      var css = node.getAttribute('css')
      if (css) {
        var className = cache[css]
        if (!className) {
          className = 'css-' + ++count
          style.sheet.insertRule('.' + className + '{' + css + '}')
          cache[css] = className
        }
        node.classList.add(className)
      }
      node.childNodes.forEach(classify)
    }
  }

  document.head.append(style)

  new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(classify)
    })
  }).observe(document.documentElement, {
    childList: true,
    subtree: true
  })
})()
