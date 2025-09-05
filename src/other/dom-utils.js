/**
 * Checks if an element has a specific CSS class.
 * @param {Element} el The DOM element.
 * @param {string} className The CSS class name to check for.
 * @returns {boolean} True if the element has the class, false otherwise.
 */
export function hasClass(el, className) {
  if (!el || !className) return false;
  if (el.classList) {
    return el.classList.contains(className);
  } else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
}

/**
 * Toggles a CSS class on a DOM element.
 * @param {Element} el The DOM element.
 * @param {string} className The CSS class name to toggle.
 */
export function toggleClass(el, className) {
  if (!el || !className) return;
  if (el.classList) {
    el.classList.toggle(className);
  } else {
    const classes = el.className.split(' ');
    const existingIndex = classes.indexOf(className);

    if (existingIndex >= 0) {
      classes.splice(existingIndex, 1);
    } else {
      classes.push(className);
    }
    el.className = classes.join(' ');
  }
}
