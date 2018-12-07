// https://stackoverflow.com/questions/211703/is-it-possible-to-get-the-position-of-div-within-the-browser-viewport-not-withi
export function viewportOffset(target:HTMLElement):{x:number, y:number}{
  let offset = {x: 0, y: 0};
  while (target) {
    offset.x += target.offsetLeft;
    offset.y += target.offsetTop;
    target = <HTMLElement>target.offsetParent;
  }

  if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    offset.x -= document.documentElement.scrollLeft;
    offset.y -= document.documentElement.scrollTop;
  } else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
    offset.x -= document.body.scrollLeft;
    offset.y -= document.body.scrollTop;
  } else if (window.pageXOffset || window.pageYOffset) {
    offset.x -= window.pageXOffset;
    offset.y -= window.pageYOffset;
  }
  return offset;
}

