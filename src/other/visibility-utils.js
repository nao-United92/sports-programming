/**
 * Checks if an element is visible in the viewport.
 * @param {Element} el The element to check.
 * @param {boolean} partiallyVisible If true, the function will return true if any part of the element is visible.
 * @returns {boolean} True if the element is visible, false otherwise.
 */
export function isElementVisible(el, partiallyVisible = false) {
  if (!el || el.nodeType !== 1) {
    return false;
  }
  const rect = el.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  const viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);

  if (partiallyVisible) {
    return (
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left < viewWidth &&
      rect.top < viewHeight
    );
  }

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= viewHeight &&
    rect.right <= viewWidth
  );
}
