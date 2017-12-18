/**
 * shorthand for (document.)querySelector
 *
 * @param {string} query
 * @param {NodeSelector = document} queryRoot
 * @returns {T}
 */
export function qs<T extends HTMLElement>(query: string, queryRoot: NodeSelector = document):T {
  let item = queryRoot.querySelector(query);
  return <T>item;
}
