/**
 * Gets the value of an attribute for the first element in the set of matched elements.
 * @param {Element} element The DOM element.
 * @param {string} attrName The name of the attribute to get.
 * @returns {string|null} The attribute value, or null if the attribute is not set.
 */
const getAttr = (element, attrName) => {
  if (!element || !element.getAttribute) {
    return null;
  }
  return element.getAttribute(attrName);
};

/**
 * Sets one or more attributes for the set of matched elements.
 * @param {Element} element The DOM element.
 * @param {string|Object} attrName The name of the attribute to set, or an object of attribute-value pairs.
 * @param {string} [value] The value to set for the attribute (if attrName is a string).
 */
const setAttr = (element, attrName, value) => {
  if (!element || !element.setAttribute) {
    return;
  }
  if (typeof attrName === 'object') {
    for (const key in attrName) {
      if (Object.prototype.hasOwnProperty.call(attrName, key)) {
        element.setAttribute(key, attrName[key]);
      }
    }
  } else {
    element.setAttribute(attrName, value);
  }
};

/**
 * Removes an attribute from each element in the set of matched elements.
 * @param {Element} element The DOM element.
 * @param {string} attrName The name of the attribute to remove.
 */
const removeAttr = (element, attrName) => {
  if (!element || !element.removeAttribute) {
    return;
  }
  element.removeAttribute(attrName);
};

/**
 * Checks if an element has the specified attribute.
 * @param {Element} element The DOM element.
 * @param {string} attrName The name of the attribute to check.
 * @returns {boolean} True if the element has the attribute, false otherwise.
 */
const hasAttr = (element, attrName) => {
  if (!element || !element.hasAttribute) {
    return false;
  }
  return element.hasAttribute(attrName);
};

module.exports = { getAttr, setAttr, removeAttr, hasAttr };
