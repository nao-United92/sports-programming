/**
 * Creates a new HTML element with optional attributes and children.
 * @param {string} tagName The tag name of the element to create (e.g., 'div', 'p').
 * @param {object} [attributes] An object of attribute key-value pairs (e.g., { id: 'myId', class: 'my-class' }).
 * @param {(HTMLElement|string)[]} [children] An array of child elements or strings.
 * @returns {HTMLElement} The newly created HTML element.
 */
export function createElement(tagName, attributes = {}, children = []) {
  const element = document.createElement(tagName);
  for (const key in attributes) {
    if (Object.prototype.hasOwnProperty.call(attributes, key)) {
      element.setAttribute(key, attributes[key]);
    }
  }
  appendChildren(element, children);
  return element;
}

/**
 * Appends one or more children to a parent element.
 * @param {HTMLElement} parent The parent element.
 * @param {(HTMLElement|string)[]} children An array of child elements or strings to append.
 */
export function appendChildren(parent, children) {
  if (!parent) return;
  children.forEach(child => {
    if (typeof child === 'string') {
      parent.appendChild(document.createTextNode(child));
    } else if (child instanceof HTMLElement) {
      parent.appendChild(child);
    }
  });
}

/**
 * Prepends one or more children to a parent element.
 * @param {HTMLElement} parent The parent element.
 * @param {(HTMLElement|string)[]} children An array of child elements or strings to prepend.
 */
export function prependChildren(parent, children) {
  if (!parent) return;
  // Reverse children array to prepend in correct order
  [...children].reverse().forEach(child => {
    if (typeof child === 'string') {
      parent.prepend(document.createTextNode(child));
    } else if (child instanceof HTMLElement) {
      parent.prepend(child);
    }
  });
}

/**
 * Removes an element from the DOM.
 * @param {HTMLElement} element The element to remove.
 */
export function removeElement(element) {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

/**
 * Removes all children from an element.
 * @param {HTMLElement} element The element to empty.
 */
export function emptyElement(element) {
  if (!element) return;
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/**
 * Sets multiple attributes on an HTML element.
 * @param {HTMLElement} element The element to set attributes on.
 * @param {object} attributes An object of attribute key-value pairs.
 */
export function setAttributes(element, attributes) {
  if (!element) return;
  for (const key in attributes) {
    if (Object.prototype.hasOwnProperty.call(attributes, key)) {
      element.setAttribute(key, attributes[key]);
    }
  }
}

/**
 * Gets the values of multiple attributes from an HTML element.
 * @param {HTMLElement} element The element to get attributes from.
 * @param {string[]} attributeNames An array of attribute names to retrieve.
 * @returns {object} An object with attribute names as keys and their values.
 */
export function getAttributes(element, attributeNames) {
  const result = {};
  if (!element) return result;
  attributeNames.forEach(attrName => {
    result[attrName] = element.getAttribute(attrName);
  });
  return result;
}

/**
 * Checks if an element is visible (not display: none or visibility: hidden).
 * Does not check if it's off-screen or covered by other elements.
 * @param {HTMLElement} element The element to check.
 * @returns {boolean} True if the element is visible, false otherwise.
 */
export function isVisible(element) {
  if (!element) return false;
  const style = window.getComputedStyle(element);
  return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
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
 * @param {HTMLElement} referenceElement The element after which to insert the new element.
 * @returns {HTMLElement|null} The new element if successful, null otherwise.
 */
export function insertAfter(newElement, referenceElement) {
  if (!newElement || !referenceElement || !referenceElement.parentNode) {
    return null;
  }
  referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
  return newElement;
}
