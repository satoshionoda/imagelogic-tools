export function remapQueriedItems<T extends HTMLElement>(items: NodeList): Array<T> {
  let elms: Array<T> = [],
    i = 0, l = items.length,
    item;
  for(; i < l; i++) {
    item = items[i];
    elms.push(<T>items[i]);
  }
  return elms;
}
