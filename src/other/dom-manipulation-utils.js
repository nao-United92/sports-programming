// src/other/dom-manipulation-utils.js

/**
 * Adds a CSS class to a given DOM element.
 *
 * @param {HTMLElement} element The DOM element to add the class to.
 * @param {string} className The CSS class name to add.
 */
const addClass = (element, className) => {
  if (!element || typeof element.classList === 'undefined' || typeof className !== 'string' || className === '') {
    return;
  }
  element.classList.add(className);
};

module.exports = {
  addClass,
};
