
/**
 * Inserts a new node after a reference node.
 * @param {Node} newNode The node to insert.
 * @param {Node} referenceNode The node after which to insert the new node.
 */
export function insertAfter(newNode, referenceNode) {
  if (!newNode || !referenceNode || !referenceNode.parentNode) {
    console.warn('insertAfter: Invalid newNode or referenceNode provided.');
    return;
  }
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

/**
 * Prepends a child node to a parent node.
 * @param {Node} parent The parent node.
 * @param {Node} child The child node to prepend.
 */
export function prependChild(parent, child) {
  if (!parent || !child) {
    console.warn('prependChild: Invalid parent or child node provided.');
    return;
  }
  parent.insertBefore(child, parent.firstChild);
}

/**
 * Wraps an element with a wrapper element.
 * @param {Element} element The element to wrap.
 * @param {Element} wrapper The wrapper element.
 */
export function wrapElement(element, wrapper) {
  if (!element || !wrapper || !element.parentNode) {
    console.warn('wrapElement: Invalid element or wrapper provided.');
    return;
  }
  element.parentNode.insertBefore(wrapper, element);
  wrapper.appendChild(element);
}

/**
 * Unwraps an element, moving its children to its parent and removing the element itself.
 * @param {Element} element The element to unwrap.
 */
export function unwrapElement(element) {
  if (!element || !element.parentNode) {
    console.warn('unwrapElement: Invalid element provided.');
    return;
  }
  const parent = element.parentNode;
  while (element.firstChild) {
    parent.insertBefore(element.firstChild, element);
  }
  parent.removeChild(element);
}
