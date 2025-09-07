/**
 * Returns the first element that is a descendant of node that matches selectors.
 * @param {string} selector The CSS selector string.
 * @param {HTMLElement|Document} [parent=document] The element or document to search within.
 * @returns {HTMLElement|null} The first matching element, or null if not found.
 */
export const querySelector = (selector, parent = document) => {
  return parent.querySelector(selector);
};

/**
 * Returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
 * @param {string} selector The CSS selector string.
 * @param {HTMLElement|Document} [parent=document] The element or document to search within.
 * @returns {NodeList} A NodeList containing all matching elements.
 */
export const querySelectorAll = (selector, parent = document) => {
  return parent.querySelectorAll(selector);
};
