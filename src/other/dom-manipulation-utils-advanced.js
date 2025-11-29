// src/other/dom-manipulation-utils-advanced.js

/**
 * Removes a CSS class from a given DOM element.
 *
 * @param {HTMLElement} element The DOM element to remove the class from.
 * @param {string} className The CSS class name to remove.
 */
const removeClass = (element, className) => {
  if (!element || typeof element.classList === 'undefined' || typeof className !== 'string' || className === '') {
    return;
  }
  element.classList.remove(className);
};

module.exports = {
  removeClass,
};
