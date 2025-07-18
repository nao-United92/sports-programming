/**
 * Selects a single HTML element by a CSS selector.
 * @param {string} selector The CSS selector string.
 * @param {ParentNode} [parent=document] The parent element to search within. Defaults to document.
 * @returns {HTMLElement|null} The first matching HTMLElement, or null if not found.
 */
export function selectElement(selector, parent = document) {
  if (typeof selector !== 'string' || !parent || typeof parent.querySelector !== 'function') {
    return null;
  }
  return parent.querySelector(selector);
}

/**
 * Selects all HTML elements matching a CSS selector.
 * @param {string} selector The CSS selector string.
 * @param {ParentNode} [parent=document] The parent element to search within. Defaults to document.
 * @returns {NodeListOf<HTMLElement>} A NodeListOf<HTMLElement> containing all matching elements.
 */
export function selectAllElements(selector, parent = document) {
  if (typeof selector !== 'string' || !parent || typeof parent.querySelectorAll !== 'function') {
    return [];
  }
  return parent.querySelectorAll(selector);
}
