/**
 * Adds a class to an element.
 * @param {Element} el The element.
 * @param {string} className The class name to add.
 */
export function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    if (!el.className.split(' ').includes(className)) {
      el.className += ` ${className}`;
    }
  }
}

/**
 * Removes a class from an element.
 * @param {Element} el The element.
 * @param {string} className The class name to remove.
 */
export function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp(`(^|\\b)${className.split(' ').join('|')}(\\b|$)`, 'gi'), ' ');
  }
}

/**
 * Toggles a class on an element.
 * @param {Element} el The element.
 * @param {string} className The class name to toggle.
 */
export function toggleClass(el, className) {
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

/**
 * Checks if an element has a specific class.
 * @param {Element} el The element.
 * @param {string} className The class name to check for.
 * @returns {boolean} True if the element has the class, false otherwise.
 */
export function hasClass(el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  } else {
    return new RegExp(`(^| )${className}( |$)`, 'gi').test(el.className);
  }
}

/**
 * Sets a style property on an element.
 * @param {Element} el The element.
 * @param {string} property The CSS property name.
 * @param {string} value The value for the CSS property.
 */
export function setStyle(el, property, value) {
  el.style[property] = value;
}