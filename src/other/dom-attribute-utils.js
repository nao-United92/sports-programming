/**
 * Gets the value of a specified attribute from an HTML element.
 * @param {HTMLElement} element The HTML element.
 * @param {string} attributeName The name of the attribute.
 * @returns {string|null} The attribute value, or null if not found.
 */
function getAttribute(element, attributeName) {
  if (!element || typeof element.getAttribute !== 'function') {
    return null;
  }
  return element.getAttribute(attributeName);
}

/**
 * Checks if an HTML element has a specified attribute.
 * @param {HTMLElement} element The HTML element.
 * @param {string} attributeName The name of the attribute.
 * @returns {boolean} True if the element has the attribute, false otherwise.
 */
function hasAttribute(element, attributeName) {
  if (!element || typeof element.hasAttribute !== 'function') {
    return false;
  }
  return element.hasAttribute(attributeName);
}

/**
 * Sets the value of a specified attribute for an HTML element.
 * @param {HTMLElement} element The HTML element.
 * @param {string} attributeName The name of the attribute.
 * @param {string} value The value to set.
 */
function setAttribute(element, attributeName, value) {
  if (!element || typeof element.setAttribute !== 'function') {
    return;
  }
  element.setAttribute(attributeName, value);
}

/**
 * Removes a specified attribute from an HTML element.
 * @param {HTMLElement} element The HTML element.
 * @param {string} attributeName The name of the attribute.
 */
function removeAttribute(element, attributeName) {
  if (!element || typeof element.removeAttribute !== 'function') {
    return;
  }
  element.removeAttribute(attributeName);
}

/**
 * Sets multiple attributes for an HTML element from an object.
 * @param {HTMLElement} element The HTML element.
 * @param {Object<string, string>} attributes An object where keys are attribute names and values are attribute values.
 */
function setAttributes(element, attributes) {
  if (!element || typeof element.setAttribute !== 'function' || typeof attributes !== 'object' || attributes === null) {
    return;
  }
  for (const key in attributes) {
    if (Object.prototype.hasOwnProperty.call(attributes, key)) {
      element.setAttribute(key, attributes[key]);
    }
  }
}

module.exports = {
  getAttribute,
  hasAttribute,
  setAttribute,
  removeAttribute,
  setAttributes
};