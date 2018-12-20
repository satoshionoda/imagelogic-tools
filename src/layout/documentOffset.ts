import {getDocumentScroll} from "./getDocumentScroll";

export function documentOffset(target:HTMLElement):{x:number, y:number} {
  let offset = {x:0, y:0};
  let rect = target.getBoundingClientRect();
  let bodyScroll = getDocumentScroll();
  offset.y = rect.top + bodyScroll.y;
  offset.x = rect.left + bodyScroll.x;
  return offset;
}
