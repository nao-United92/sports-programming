/**
 * Gets the computed style of an element.
 * @param {HTMLElement} element The element to get the style from.
 * @param {string} property The CSS property to get.
 * @returns {string} The computed style value.
 */
export function getStyle(element, property) {
  if (!element || !property) {
    return '';
  }
  return window.getComputedStyle(element).getPropertyValue(property);
}

/**
 * Sets a CSS property of an element.
 * @param {HTMLElement} element The element to set the style on.
 * @param {string} property The CSS property to set.
 * @param {string} value The value to set the property to.
 */
export function setStyle(element, property, value) {
  if (!element || !property) {
    return;
  }
  element.style[property] = value;
}

/**
 * Hides an element by setting its display to 'none'.
 * @param {HTMLElement} element The element to hide.
 */
export function hideElement(element) {
  if (!element) {
    return;
  }
  element.style.display = 'none';
}

/**
 * Shows an element by setting its display to its default value (or a specified value).
 * @param {HTMLElement} element The element to show.
 * @param {string} [display='block'] The display value to set (e.g., 'block', 'flex', 'grid').
 */
export function showElement(element, display = 'block') {
  if (!element) {
    return;
  }
  element.style.display = display;
}