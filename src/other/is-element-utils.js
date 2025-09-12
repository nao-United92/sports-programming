/**
 * Checks if `value` is likely a DOM element.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 */
export const isElement = (value) => {
  if (value === null || typeof value !== 'object') {
    return false;
  }

  // Modern browsers and JSDOM
  if (typeof HTMLElement === 'function') {
    return value instanceof HTMLElement;
  }

  // Fallback for environments where HTMLElement is not a function (e.g., older browsers)
  return (
    value.nodeType === 1 &&
    typeof value.nodeName === 'string'
  );
};