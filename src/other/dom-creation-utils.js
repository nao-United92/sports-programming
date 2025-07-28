/**
 * Creates a new HTML element with optional attributes and children.
 * @param {string} tagName The tag name of the element to create (e.g., 'div', 'span').
 * @param {object} [attributes={}] An object of attribute key-value pairs.
 * @param {Array<HTMLElement|Node|string>} [children=[]] An array of child Node or string.
 * @returns {HTMLElement} The newly created HTMLElement.
 */
export function createElement(tagName, attributes = {}, children = []) {
  const element = document.createElement(tagName);
  for (const key in attributes) {
    if (Object.prototype.hasOwnProperty.call(attributes, key)) {
      element.setAttribute(key, attributes[key]);
    }
  }
  children.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      element.appendChild(child);
    }
  });
  return element;
}

/**
 * Appends a child element to a parent element.
 * @param {HTMLElement} parent The parent HTMLElement.
 * @param {HTMLElement|Node} child The child HTMLElement or Node to append.
 * @returns {HTMLElement|Node} The appended child element.
 */
export function appendChild(parent, child) {
  if (parent && child) {
    parent.appendChild(child);
  }
  return child;
}

/**
 * Appends multiple child elements to a parent element.
 * @param {HTMLElement} parent The parent HTMLElement.
 * @param {Array<HTMLElement|Node|string>} children An array of child elements or strings to append.
 */
export function appendChildren(parent, children) {
  if (parent && Array.isArray(children)) {
    children.forEach(child => {
      if (typeof child === 'string') {
        parent.appendChild(document.createTextNode(child));
      } else if (child instanceof Node) {
        parent.appendChild(child);
      }
    });
  }
}

/**
 * Removes an element from the DOM.
 * @param {HTMLElement} element The HTMLElement to remove.
 */
export function removeElement(element) {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

/**
 * Replaces an existing element with a new element.
 * @param {HTMLElement} oldElement The element to be replaced.
 * @param {HTMLElement} newElement The element to replace with.
 * @returns {HTMLElement|null} The new element if successful, null otherwise.
 */
export function replaceElement(oldElement, newElement) {
  if (!oldElement || !newElement || !oldElement.parentNode) {
    return null;
  }
  oldElement.parentNode.replaceChild(newElement, oldElement);
  return newElement;
}

/**
 * Wraps an element with another element.
 * @param {HTMLElement} elementToWrap The element to be wrapped.
 * @param {HTMLElement} wrapperElement The element to wrap with.
 * @returns {HTMLElement|null} The wrapper element if successful, null otherwise.
 */
export function wrapElement(elementToWrap, wrapperElement) {
  if (!elementToWrap || !wrapperElement || !elementToWrap.parentNode) {
    return null;
  }
  elementToWrap.parentNode.insertBefore(wrapperElement, elementToWrap);
  wrapperElement.appendChild(elementToWrap);
  return wrapperElement;
}

/**
 * Inserts a new element after a reference element.
 * @param {HTMLElement} newElement The element to insert.
 * @param {HTMLElement} referenceElement The element after which to insert.
 * @returns {HTMLElement|null} The new element if successful, null otherwise.
 */
export function insertAfter(newElement, referenceElement) {
  if (!newElement || !referenceElement || !referenceElement.parentNode) {
    return null;
  }
  referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
  return newElement;
}

/**
 * Inserts a new element before a reference element.
 * @param {HTMLElement} newElement The element to insert.
 * @param {HTMLElement} referenceElement The element before which to insert.
 * @returns {HTMLElement|null} The new element if successful, null otherwise.
 */
export function insertBefore(newElement, referenceElement) {
  if (!newElement || !referenceElement || !referenceElement.parentNode) {
    return null;
  }
  referenceElement.parentNode.insertBefore(newElement, referenceElement);
  return newElement;
}

/**
 * Creates a new HTML element with optional attributes and inner HTML content.
 * @param {string} tagName The tag name of the element to create (e.g., 'div', 'span').
 * @param {object} [attributes={}] An object of attribute key-value pairs.
 * @param {string} [innerHTML=''] The inner HTML content for the element.
 * @returns {HTMLElement} The newly created HTMLElement.
 */
export function createElementWithHTML(tagName, attributes = {}, innerHTML = '') {
  const element = document.createElement(tagName);
  for (const key in attributes) {
    if (Object.prototype.hasOwnProperty.call(attributes, key)) {
      element.setAttribute(key, attributes[key]);
    }
  }
  element.innerHTML = innerHTML;
  return element;
}
