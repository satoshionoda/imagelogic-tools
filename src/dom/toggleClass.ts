import {remapQueriedItems} from "./remapQueriedItems";

export function toggleClass(target: Element | Element[] | NodeList, token: string, alt?: string) {
  if(target instanceof NodeList) {
    target = remapQueriedItems(target);
  }
  if(target instanceof Array) {
    target.forEach((elm) => {
      _toggleClass(elm, token, alt);
    });
  } else {
    _toggleClass(target, token, alt);
  }
}

function _toggleClass(target: Element, token: string, alt?: string) {
  let r = target.classList.toggle(token);
  if(alt !== undefined) {
    if(r) {
      target.classList.remove(alt);
    } else {
      target.classList.add(alt);
    }
  }
}
