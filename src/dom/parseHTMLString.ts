export function parseHTMLString(str: string): HTMLElement | HTMLElement[] {
  let parser: DOMParser = new DOMParser();
  let parsedDocuments = parser.parseFromString(str, "text/html");
  let nodes: NodeList = parsedDocuments.body.childNodes;

  if(nodes.length == 0) {
    return null;
  } else if(nodes.length == 1) {
    return <HTMLElement>nodes[0];
  } else {
    let arr: HTMLElement[] = [];
    for(let i = 0; i < nodes.length; i++) {
      arr.push(<HTMLElement>nodes[i]);
    }
    return arr;
  }
}
