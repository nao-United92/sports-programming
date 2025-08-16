/**
 * 指定されたDOM要素の属性の値を安全に取得します。
 * @param {HTMLElement} element - 属性を取得するDOM要素。
 * @param {string} attributeName - 取得する属性の名前。
 * @returns {string | null} 属性の値。要素が存在しない、または属性が存在しない場合はnull。
 */
export function getAttribute(element, attributeName) {
  if (!(element instanceof HTMLElement)) {
    console.warn('Invalid element provided to getAttribute.', element);
    return null;
  }
  return element.getAttribute(attributeName);
}

/**
 * Retrieves a data attribute value from an element.
 * @param {HTMLElement} element The element to retrieve the data attribute from.
 * @param {string} key The key of the data attribute (e.g., 'id' for data-id).
 * @returns {string | null} The value of the data attribute, or null if not found.
 */
export function getData(element, key) {
  if (!(element instanceof HTMLElement)) {
    console.warn('Invalid element provided to getData.', element);
    return null;
  }
  return element.dataset[key];
}

/**
 * Sets a data attribute value on an element.
 * @param {HTMLElement} element The element to set the data attribute on.
 * @param {string} key The key of the data attribute.
 * @param {string} value The value to set.
 */
export function setData(element, key, value) {
  if (!(element instanceof HTMLElement)) {
    console.warn('Invalid element provided to setData.', element);
    return;
  }
  element.dataset[key] = value;
}

/**
 * Checks if an element has a data attribute.
 * @param {HTMLElement} element The element to check.
 * @param {string} key The key of the data attribute.
 * @returns {boolean} True if the element has the data attribute, false otherwise.
 */
export function hasData(element, key) {
  if (!(element instanceof HTMLElement)) {
    console.warn('Invalid element provided to hasData.', element);
    return false;
  }
  return Object.prototype.hasOwnProperty.call(element.dataset, key);
}
