/**
 * Selects a single HTML element by a CSS selector.
 *
 * @param selector The CSS selector string.
 * @param parent Optional. The parent element to search within. Defaults to document.
 * @returns The first matching HTMLElement, or null if not found.
 */
export function selectElement(selector, parent = document) {
    return parent.querySelector(selector);
}

/**
 * Selects all HTML elements matching a CSS selector.
 *
 * @param selector The CSS selector string.
 * @param parent Optional. The parent element to search within. Defaults to document.
 * @returns A NodeListOf<HTMLElement> containing all matching elements.
 */
export function selectAllElements(selector, parent = document) {
    return parent.querySelectorAll(selector);
}

/**
 * Creates a new HTML element with optional attributes and children.
 *
 * @param tagName The tag name of the element to create (e.g., 'div', 'span').
 * @param attributes Optional. An object of attribute key-value pairs.
 * @param children Optional. An array of child Node or string.
 * @returns The newly created HTMLElement.
 */
export function createElement(tagName, attributes = {}, children = []) {
    const element = document.createElement(tagName);
    for (const key in attributes) {
        if (attributes.hasOwnProperty(key)) {
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
 *
 * @param parent The parent HTMLElement.
 * @param child The child HTMLElement or Node to append.
 * @returns The appended child element.
 */
export function appendChild(parent, child) {
    if (parent && child) {
        parent.appendChild(child);
    }
    return child;
}

/**
 * Removes an element from the DOM.
 *
 * @param element The HTMLElement to remove.
 */
export function removeElement(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}

/**
 * Shows an element by setting its display style to 'block'.
 * @param {HTMLElement} element The element to show.
 */
export function show(element) {
  if (element) {
    element.style.display = 'block';
  }
}

/**
 * Hides an element by setting its display style to 'none'.
 * @param {HTMLElement} element The element to hide.
 */
export function hide(element) {
  if (element) {
    element.style.display = 'none';
  }
}

/**
 * Toggles the display of an element.
 * @param {HTMLElement} element The element to toggle.
 */
export function toggle(element) {
  if (element) {
    if (element.style.display === 'none') {
      show(element);
    } else {
      hide(element);
    }
  }
}

/**
 * Adds a class to an HTML element.
 * @param {HTMLElement} element The element to add the class to.
 * @param {string} className The class name to add.
 */
export function addClass(element, className) {
  if (element && className) {
    element.classList.add(className);
  }
}

/**
 * Removes a class from an HTML element.
 * @param {HTMLElement} element The element to remove the class from.
 * @param {string} className The class name to remove.
 */
export function removeClass(element, className) {
  if (element && className) {
    element.classList.remove(className);
  }
}

/**
 * Checks if an HTML element has a specific class.
 * @param {HTMLElement} element The element to check.
 * @param {string} className The class name to check for.
 * @returns {boolean} True if the element has the class, false otherwise.
 */
export function hasClass(element, className) {
  if (element && className) {
    return element.classList.contains(className);
  }
  return false;
}