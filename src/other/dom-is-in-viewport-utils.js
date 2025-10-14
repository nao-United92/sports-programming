/**
 * Checks if an element is currently in the viewport.
 *
 * @param {Element} el The element to check.
 * @param {boolean} [partiallyVisible=false] If true, the function will return true if any part of the element is visible.
 * @returns {boolean} True if the element is in the viewport, false otherwise.
 */
const isInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;

  if (partiallyVisible) {
    return bottom > 0 && right > 0 && left < innerWidth && top < innerHeight;
  }

  return top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

module.exports = {
  isInViewport,
};
