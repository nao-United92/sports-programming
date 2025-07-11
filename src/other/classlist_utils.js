/**
 * Adds multiple classes to a DOM element.
 * @param {Element} element The DOM element.
 * @param {...string} classNames The class names to add.
 */
export function addClasses(element, ...classNames) {
  element.classList.add(...classNames);
}

/**
 * Removes multiple classes from a DOM element.
 * @param {Element} element The DOM element.
 * @param {...string} classNames The class names to remove.
 */
export function removeClasses(element, ...classNames) {
  element.classList.remove(...classNames);
}

/**
 * Toggles a class on a DOM element.
 * An optional force parameter can be used to force add or remove.
 * @param {Element} element The DOM element.
 * @param {string} className The class name to toggle.
 * @param {boolean} [force] - If true, adds the class. If false, removes it.
 */
export function toggleClass(element, className, force) {
  element.classList.toggle(className, force);
}

/**
 * Replaces a class with another on a DOM element.
 * @param {Element} element The DOM element.
 * @param {string} oldClassName The class to replace.
 * @param {string} newClassName The new class.
 */
export function replaceClass(element, oldClassName, newClassName) {
  element.classList.replace(oldClassName, newClassName);
}

/**
 * Checks if a DOM element has a specific class.
 * @param {Element} element The DOM element.
 * @param {string} className The class name to check for.
 * @returns {boolean} True if the class exists, false otherwise.
 */
export function hasClass(element, className) {
  return element.classList.contains(className);
}

/**
 * Adds a class to an element and removes it after a specified duration.
 * @param {Element} element The DOM element.
 * @param {string} className The class to add temporarily.
 * @param {number} duration The duration in milliseconds before removing the class.
 */
export function addTemporaryClass(element, className, duration) {
  element.classList.add(className);
  setTimeout(() => {
    element.classList.remove(className);
  }, duration);
}
