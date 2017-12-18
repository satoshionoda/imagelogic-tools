import {remapQueriedItems} from "./remapQueriedItems";

export function qsa<T extends HTMLElement>(query: string, queryRoot: NodeSelector = document): Array<T> {
  let items = queryRoot.querySelectorAll(query);
  return remapQueriedItems<T>(items);
}
