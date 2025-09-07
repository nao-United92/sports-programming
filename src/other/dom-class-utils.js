/**
 * Adds a class to the specified element.
 * @param {HTMLElement} element The HTML element.
 * @param {string} className The class name to add.
 */
export const addClass = (element, className) => {
  if (element && className) {
    element.classList.add(className);
  }
};

/**
 * Removes a class from the specified element.
 * @param {HTMLElement} element The HTML element.
 * @param {string} className The class name to remove.
 */
export const removeClass = (element, className) => {
  if (element && className) {
    element.classList.remove(className);
  }
};

/**
 * Checks if the specified element has a class.
 * @param {HTMLElement} element The HTML element.
 * @param {string} className The class name to check.
 * @returns {boolean} True if the element has the class, false otherwise.
 */
export const hasClass = (element, className) => {
  if (element && className) {
    return element.classList.contains(className);
  }
  return false;
};

/**
 * Toggles a class on the specified element.
 * @param {HTMLElement} element The HTML element.
 * @param {string} className The class name to toggle.
 * @param {boolean} [force] If true, adds the class; if false, removes it.
 */
export const toggleClass = (element, className, force) => {
  if (element && className) {
    element.classList.toggle(className, force);
  }
};