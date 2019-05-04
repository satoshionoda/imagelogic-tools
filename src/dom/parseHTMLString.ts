export function parseHTMLString<T extends HTMLElement>(str: string): T | T[] {
  let parser: DOMParser = new DOMParser();
  let parsedDocuments = parser.parseFromString(str, "text/html");
  let nodes: NodeList = parsedDocuments.body.childNodes;

  if(nodes.length === 0) {
    return null;
  } else if(nodes.length === 1) {
    return <T>nodes[0];
  } else {
    let arr: T[] = [];
    for(let i = 0; i < nodes.length; i++) {
      arr.push(<T>nodes[i]);
    }
    return arr;
  }
}
