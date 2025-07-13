
/**
 * Checks if an element has a specific CSS class.
 * @param {HTMLElement} element The HTML element to check.
 * @param {string} className The CSS class name to check for.
 * @returns {boolean} True if the element has the class, false otherwise.
 */
export function hasClass(element, className) {
  if (!element || !className) {
    console.warn('hasClass: Invalid element or className provided.');
    return false;
  }
  return element.classList.contains(className);
}

/**
 * Adds a CSS class to an element.
 * @param {HTMLElement} element The HTML element to add the class to.
 * @param {string} className The CSS class name to add.
 */
export function addClass(element, className) {
  if (!element || !className) {
    console.warn('addClass: Invalid element or className provided.');
    return;
  }
  element.classList.add(className);
}

/**
 * Removes a CSS class from an element.
 * @param {HTMLElement} element The HTML element to remove the class from.
 * @param {string} className The CSS class name to remove.
 */
export function removeClass(element, className) {
  if (!element || !className) {
    console.warn('removeClass: Invalid element or className provided.');
    return;
  }
  element.classList.remove(className);
}

/**
 * Toggles a CSS class on an element.
 * @param {HTMLElement} element The HTML element to toggle the class on.
 * @param {string} className The CSS class name to toggle.
 * @returns {boolean} True if the class is now present, false otherwise.
 */
export function toggleClass(element, className) {
  if (!element || !className) {
    console.warn('toggleClass: Invalid element or className provided.');
    return false;
  }
  return element.classList.toggle(className);
}

/**
 * Gets the computed style value of a specific CSS property for an element.
 * @param {HTMLElement} element The HTML element to get the style from.
 * @param {string} property The CSS property name (e.g., 'color', 'font-size').
 * @returns {string} The computed style value.
 */
export function getStyle(element, property) {
  if (!element || !property) {
    console.warn('getStyle: Invalid element or property provided.');
    return '';
  }
  return window.getComputedStyle(element).getPropertyValue(property);
}

/**
 * Sets a CSS style property for an element.
 * @param {HTMLElement} element The HTML element to set the style on.
 * @param {string} property The CSS property name (e.g., 'color', 'font-size').
 * @param {string} value The value to set the CSS property to.
 */
export function setStyle(element, property, value) {
  if (!element || !property || value === undefined) {
    console.warn('setStyle: Invalid element, property, or value provided.');
    return;
  }
  element.style[property] = value;
}
