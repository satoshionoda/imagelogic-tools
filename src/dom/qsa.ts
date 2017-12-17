import {remapQueriedItems} from "./remapQueriedItems";

export function qsa(query: string, queryRoot: NodeSelector = document): HTMLElement[] {
  let items = queryRoot.querySelectorAll(query);
  return remapQueriedItems(items);
}
