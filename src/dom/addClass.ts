import {remapQueriedItems} from "./remapQueriedItems";

export function addClass(target: Element | Element[] | NodeList, ...token: string[]) {
  if(target instanceof NodeList) {
    target = remapQueriedItems(target);
  }
  if(target instanceof Array) {
    target.forEach((elm) => {
      elm.classList.add(...token);
    });
  } else {
    target.classList.add(...token);
  }
}
