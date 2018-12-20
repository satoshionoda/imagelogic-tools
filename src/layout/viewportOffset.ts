// https://stackoverflow.com/questions/211703/is-it-possible-to-get-the-position-of-div-within-the-browser-viewport-not-withi
import {getDocumentScroll} from "./getDocumentScroll";

export function viewportOffset(target:HTMLElement):{x:number, y:number}{
  let offset = {x: 0, y: 0};
  while (target) {
    offset.x += target.offsetLeft;
    offset.y += target.offsetTop;
    target = <HTMLElement>target.offsetParent;
  }

  const documentScroll = getDocumentScroll();
  offset.x -= documentScroll.x;
  offset.y -= documentScroll.y;

  return offset;
}

