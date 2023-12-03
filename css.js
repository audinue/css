{
  let store = {};
  let id = 0;
  let sheet = document.head.appendChild(document.createElement("style")).sheet;
  let traverse = (
    element,
    css = element.getAttribute("css"),
    cache = css !== null &&
      (store[css] =
        store[css] || sheet.insertRule(`.css-${++id}{${css}}`) || `css-${id}`)
  ) =>
    (cache && element.classList.add(cache)) ||
    [...element.children].forEach((child) => traverse(child));
  new MutationObserver((mutations) =>
    mutations.forEach((mutation) =>
      mutation.addedNodes.forEach(
        (addedNode) => addedNode.nodeType === 1 && traverse(addedNode)
      )
    )
  ).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
}
