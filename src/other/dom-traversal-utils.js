/**
 * Get all sibling elements of an element.
 *
 * @param {Element} element The element to get the siblings of.
 * @returns {Array<Element>} An array of sibling elements.
 */
export function siblings(element) {
  if (!element || !element.parentNode) {
    return [];
  }
  return Array.from(element.parentNode.children).filter(child => child !== element);
}

/**
 * Get all parent elements of an element that match a selector.
 *
 * @param {Element} element The element to get the parents of.
 * @param {string} selector The selector to match the parents against.
 * @returns {Array<Element>} An array of parent elements that match the selector.
 */
export function parents(element, selector) {
  const parents = [];
  let parent = element.parentElement;
  while (parent) {
    if (parent.matches(selector)) {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
