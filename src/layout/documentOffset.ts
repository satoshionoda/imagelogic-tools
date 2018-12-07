export function documentOffset(target:HTMLElement):{x:number, y:number} {
  let offset = {x:0, y:0};
  let rect = target.getBoundingClientRect();
  let body = document.documentElement;
  offset.y = rect.top + body.scrollTop;
  offset.x = rect.left + body.scrollLeft;

  return offset;
}
