export function qs(query: string, queryRoot: NodeSelector = document): HTMLElement {
  let item = queryRoot.querySelector(query);
  return <HTMLElement>item;
}
