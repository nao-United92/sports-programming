/**
 * Gets the parent element of a given element.
 *
 * @param {Element} element The child element.
 * @returns {Element|null} The parent element or null if it doesn't exist.
 */
export const getParent = (element) => {
  return element ? element.parentElement : null;
};

/**
 * Gets the children of a given element.
 *
 * @param {Element} element The parent element.
 * @returns {Element[]} An array of child elements.
 */
export const getChildren = (element) => {
  return element ? Array.from(element.children) : [];
};

/**
 * Gets the siblings of a given element.
 *
 * @param {Element} element The element to find siblings for.
 * @returns {Element[]} An array of sibling elements.
 */
export const getSiblings = (element) => {
  if (!element || !element.parentElement) {
    return [];
  }
  return Array.from(element.parentElement.children).filter(child => child !== element);
};