/**
 * Sets a data attribute on an element.
 *
 * @param {HTMLElement} element The element.
 * @param {string} key The data key (will be converted to kebab-case).
 * @param {string} value The data value.
 */
export const setData = (element, key, value) => {
  if (element && element.dataset) {
    element.dataset[key] = value;
  }
};

/**
 * Gets a data attribute from an element.
 *
 * @param {HTMLElement} element The element.
 * @param {string} key The data key (will be converted to kebab-case).
 * @returns {string | undefined} The data value.
 */
export const getData = (element, key) => {
  return element && element.dataset ? element.dataset[key] : undefined;
};

/**
 * Removes a data attribute from an element.
 *
 * @param {HTMLElement} element The element.
 * @param {string} key The data key (will be converted to kebab-case).
 */
export const removeData = (element, key) => {
  if (element && element.dataset && key in element.dataset) {
    delete element.dataset[key];
  }
};
