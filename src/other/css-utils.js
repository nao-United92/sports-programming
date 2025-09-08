const hasClass = (el, className) => el.classList.contains(className);
const addClass = (el, className) => el.classList.add(className);
const removeClass = (el, className) => el.classList.remove(className);

const toggleClass = (el, className) => el.classList.toggle(className);

/**
 * Checks if an element is in the viewport.
 * @param {Element} el The element to check.
 * @param {boolean} [partiallyVisible=false] If true, the function will return true if any part of the element is visible.
 * @returns {boolean} True if the element is in the viewport, false otherwise.
 */
const isElementInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

module.exports = { hasClass, addClass, removeClass, toggleClass, isElementInViewport };
