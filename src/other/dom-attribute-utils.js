/**
 * Gets the value of an attribute for the first element in the set of matched elements.
 * @param {HTMLElement} element The element to get the attribute from.
 * @param {string} attribute The name of the attribute to get.
 * @returns {string | null} The attribute value, or null if the attribute is not set.
 */
export function getAttribute(element, attribute) {
  if (!element || !attribute) {
    return null;
  }
  return element.getAttribute(attribute);
}

/**
 * Sets one or more attributes for the set of matched elements.
 * @param {HTMLElement} element The element to set the attribute on.
 * @param {string} attribute The name of the attribute to set.
 * @param {string} value The value to set the attribute to.
 */
export function setAttribute(element, attribute, value) {
  if (!element || !attribute) {
    return;
  }
  element.setAttribute(attribute, value);
}

/**
 * Checks if an element has a specific attribute.
 * @param {HTMLElement} element The element to check.
 * @param {string} attribute The name of the attribute to check for.
 * @returns {boolean} True if the element has the attribute, false otherwise.
 */
export function hasAttribute(element, attribute) {
  if (!element || !attribute) {
    return false;
  }
  return element.hasAttribute(attribute);
}

/**
 * Removes an attribute from each element in the set of matched elements.
 * @param {HTMLElement} element The element to remove the attribute from.
 * @param {string} attribute The name of the attribute to remove.
 */
export function removeAttribute(element, attribute) {
  if (!element || !attribute) {
    return;
  }
  element.removeAttribute(attribute);
}
