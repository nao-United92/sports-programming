/**
 * Checks if an element is visible.
 * @param {HTMLElement} el The element to check.
 * @returns {boolean} Returns `true` if the element is visible, else `false`.
 */
const isVisible = (el) => {
  if (!el) return false;
  const style = window.getComputedStyle(el);
  return (style.width !== '0' &&
    style.height !== '0' &&
    style.opacity !== '0' &&
    style.display !== 'none' &&
    style.visibility !== 'hidden');
};

/**
 * Gets the scroll position of an element.
 * @param {HTMLElement} el The element to check.
 * @returns {{x: number, y: number}} Returns an object with the scroll position.
 */
const getScrollPosition = (el = window) => ({
  x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
  y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop,
});

/**
 * Scrolls to a specific position.
 * @param {HTMLElement} el The element to scroll.
 * @param {number} x The x position to scroll to.
 * @param {number} y The y position to scroll to.
 */
const scrollTo = (el, x, y) => {
  if (el === window) {
    window.scrollTo(x, y);
  } else {
    el.scrollLeft = x;
    el.scrollTop = y;
  }
};

module.exports = { isVisible, getScrollPosition, scrollTo };