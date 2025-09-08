/**
 * Gets the computed style value of a CSS property for the specified element.
 * @param {Element} element The DOM element.
 * @param {string} property The CSS property name (e.g., 'width', 'backgroundColor').
 * @returns {string} The computed style value.
 */
const getStyle = (element, property) => {
  if (!element || !window.getComputedStyle) {
    return '';
  }
  return window.getComputedStyle(element)[property];
};

/**
 * Sets one or more CSS properties for the specified element.
 * @param {Element} element The DOM element.
 * @param {string|Object} property The CSS property name (e.g., 'width'), or an object of property-value pairs.
 * @param {string} [value] The value to set for the property (if property is a string).
 */
const setStyle = (element, property, value) => {
  if (!element || !element.style) {
    return;
  }
  if (typeof property === 'object') {
    for (const key in property) {
      if (Object.prototype.hasOwnProperty.call(property, key)) {
        element.style[key] = property[key];
      }
    }
  } else {
    element.style[property] = value;
  }
};

/**
 * Hides the specified element by setting its display style to 'none'.
 * @param {Element} element The DOM element to hide.
 */
const hide = (element) => {
  if (element) {
    element.style.display = 'none';
  }
};

/**
 * Shows the specified element by setting its display style to its original value or 'block'.
 * @param {Element} element The DOM element to show.
 * @param {string} [display='block'] The display value to set if the original is not known.
 */
const show = (element, display = 'block') => {
  if (element) {
    element.style.display = display;
  }
};

module.exports = { getStyle, setStyle, hide, show };