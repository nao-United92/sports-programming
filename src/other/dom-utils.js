/**
 * Creates a DOM element with given attributes and children.
 * @param {string} tag The HTML tag for the element.
 * @param {object} [attributes] An object of attributes to set on the element.
 * @param {...(string|Node)} children Child nodes or strings to append.
 * @returns {HTMLElement} The created element.
 */
export const createElement = (tag, attributes = {}, ...children) => {
  const element = document.createElement(tag);
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  for (const child of children) {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  }
  return element;
};
