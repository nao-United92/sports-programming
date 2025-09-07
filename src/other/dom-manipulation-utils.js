/**
 * Creates a new DOM element with optional attributes and children.
 * @param {string} tagName The tag name of the element to create (e.g., 'div', 'span').
 * @param {object} [attributes={}] An object containing attributes to set on the element.
 * @param {(HTMLElement|string)[]} [children=[]] An array of child elements or strings to append.
 * @returns {HTMLElement} The newly created DOM element.
 */
export const createElement = (tagName, attributes = {}, children = []) => {
  const element = document.createElement(tagName);

  for (const key in attributes) {
    if (Object.prototype.hasOwnProperty.call(attributes, key)) {
      element.setAttribute(key, attributes[key]);
    }
  }

  children.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof HTMLElement) {
      element.appendChild(child);
    }
  });

  return element;
};

/**
 * Appends multiple child elements to a parent element.
 * @param {HTMLElement} parent The parent element to which children will be appended.
 * @param {(HTMLElement|string)[]} children An array of child elements or strings to append.
 */
export const appendChildren = (parent, children) => {
  children.forEach(child => {
    if (typeof child === 'string') {
      parent.appendChild(document.createTextNode(child));
    } else if (child instanceof HTMLElement) {
      parent.appendChild(child);
    }
  });
};