//document.body.scrollTop always returns 0 in Safari
//https://github.com/nuxt/nuxt.js/issues/2512#issuecomment-358215583

export function getDocumentScroll():{x:number, y:number} {
  const x:number = Math.max(window.pageXOffset, document.documentElement.scrollLeft, document.body.scrollLeft);
  const y:number = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  return {x:x, y:y};
}
