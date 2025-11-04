/**
 * Gets the value of a data attribute from a DOM element.
 * @param {HTMLElement} element The DOM element.
 * @param {string} key The data attribute key (e.g., 'id' for data-id).
 * @returns {string|null} The value of the data attribute, or null if not found.
 */
export const getDataAttribute = (element, key) => {
  if (!element || typeof element.dataset === 'undefined') {
    return null;
  }
  return element.dataset[key] || null;
};

/**
 * Sets the value of a data attribute on a DOM element.
 * @param {HTMLElement} element The DOM element.
 * @param {string} key The data attribute key (e.g., 'id' for data-id).
 * @param {string} value The value to set.
 */
export const setDataAttribute = (element, key, value) => {
  if (element && typeof element.dataset !== 'undefined') {
    element.dataset[key] = value;
  }
};
