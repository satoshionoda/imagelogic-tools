import {remapQueriedItems} from "./remapQueriedItems";

export function removeClass(target: Element | Element[] | NodeList, ...token: string[]) {
  if(target instanceof NodeList) {
    target = remapQueriedItems(target);
  }
  if(target instanceof Array) {
    target.forEach((elm) => {
      elm.classList.remove(...token);
    });
  } else {
    target.classList.remove(...token);
  }
}
