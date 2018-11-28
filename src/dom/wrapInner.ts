export function wrapInner(parent: HTMLElement, wrapper: HTMLElement) {
  parent.appendChild(wrapper);
  while (parent.firstChild !== wrapper) {
    wrapper.appendChild(parent.firstChild);
  }
}
