/**
 * Checks if an element is currently fully visible in the viewport.
 *
 * @param {Element} el The DOM element to check.
 * @returns {boolean} True if the element is fully in the viewport.
 */
export const isElementInViewport = (el) => {
  if (!el || typeof el.getBoundingClientRect !== 'function') {
    return false;
  }
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};