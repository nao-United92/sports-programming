/**
 * Gets the scroll top position of the viewport.
 * @returns {number} Returns the scroll top position.
 */
const getScrollTop = () => {
  return window.pageYOffset || document.documentElement.scrollTop;
};

/**
 * Gets the scroll left position of the viewport.
 * @returns {number} Returns the scroll left position.
 */
const getScrollLeft = () => {
  return window.pageXOffset || document.documentElement.scrollLeft;
};

/**
 * Gets the height of the viewport.
 * @returns {number} Returns the height of the viewport.
 */
const getViewportHeight = () => {
  return window.innerHeight || document.documentElement.clientHeight;
};

/**
 * Gets the width of the viewport.
 * @returns {number} Returns the width of the viewport.
 */
const getViewportWidth = () => {
  return window.innerWidth || document.documentElement.clientWidth;
};

module.exports = { getScrollTop, getScrollLeft, getViewportHeight, getViewportWidth };