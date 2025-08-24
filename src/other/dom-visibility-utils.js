/**
 * Checks if an element is visible (not display: none or visibility: hidden).
 * @param {HTMLElement} element The element to check.
 * @returns {boolean} True if the element is visible, false otherwise.
 */
export function isVisible(element) {
  if (!element) {
    return false;
  }
  const style = window.getComputedStyle(element);
  return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
}

/**
 * Toggles the visibility of an element.
 * @param {HTMLElement} element The element to toggle visibility for.
 * @param {string} [display='block'] The display value to set when showing the element.
 */
export function toggleVisibility(element, display = 'block') {
  if (!element) {
    return;
  }
  if (isVisible(element)) {
    element.style.display = 'none';
  } else {
    element.style.display = display;
  }
}