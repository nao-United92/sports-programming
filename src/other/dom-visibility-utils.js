// src/other/dom-visibility-utils.js

/**
 * Hides a DOM element by setting its display style to 'none'.
 *
 * @param {HTMLElement} element The DOM element to hide.
 */
const hideElement = (element) => {
  if (!element || !element.style) {
    console.warn('Invalid element or element has no style property:', element);
    return;
  }
  element.style.display = 'none';
};

module.exports = {
  hideElement,
};