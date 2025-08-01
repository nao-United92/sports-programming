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

/**
 * Sets multiple attributes on an HTML element.
 * @param {HTMLElement} element The element to set attributes on.
 * @param {object} attributes An object of attribute key-value pairs.
 */
export function setAttributes(element, attributes) {
  if (element && attributes) {
    for (const key in attributes) {
      if (Object.prototype.hasOwnProperty.call(attributes, key)) {
        element.setAttribute(key, attributes[key]);
      }
    }
  }
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
 * Gets the computed style of an element.
 * @param {HTMLElement} element The element to get the style from.
 * @param {string} property The CSS property to get.
 * @returns {string} The computed style value.
 */
export function getStyle(element, property) {
  if (!element || typeof property !== 'string') {
    return '';
  }
  return window.getComputedStyle(element).getPropertyValue(property);
}

/**
 * Sets the style of an element.
 * @param {HTMLElement} element The element to set the style on.
 * @param {string} property The CSS property to set.
 * @param {string} value The value to set the property to.
 */
export function setStyle(element, property, value) {
  if (element && typeof property === 'string' && typeof value === 'string') {
    element.style[property] = value;
  }
}

/**
 * Gets the text content of an element.
 * @param {HTMLElement} element The element to get the text content from.
 * @returns {string} The text content of the element.
 */
export function getText(element) {
  if (!element) {
    return '';
  }
  return element.textContent || '';
}

/**
 * Sets the text content of an element.
 * @param {HTMLElement} element The element to set the text content on.
 * @param {string} text The text content to set.
 */
export function setText(element, text) {
  if (element) {
    element.textContent = text;
  }
}

/**
 * Gets the HTML content of an element.
 * @param {HTMLElement} element The element to get the HTML content from.
 * @returns {string} The HTML content of the element.
 */
export function getHtml(element) {
  if (!element) {
    return '';
  }
  return element.innerHTML || '';
}

/**
 * Sets the HTML content of an element.
 * @param {HTMLElement} element The element to set the HTML content on.
 * @param {string} html The HTML content to set.
 */
export function setHtml(element, html) {
  if (element) {
    element.innerHTML = html;
  }
}

/**
 * Checks if an element is visible to the user.
 * @param {HTMLElement} element The element to check.
 * @returns {boolean} True if the element is visible, false otherwise.
 */
export function isElementVisible(element) {
  if (!element) {
    return false;
  }
  const style = window.getComputedStyle(element);
  return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
}

/**
 * Checks if an HTML element has a specific attribute.
 * @param {HTMLElement} element The element to check.
 * @param {string} attributeName The name of the attribute to check for.
 * @returns {boolean} True if the element has the attribute, false otherwise.
 */
export function hasAttribute(element, attributeName) {
  if (!element || typeof attributeName !== 'string') {
    return false;
  }
  return element.hasAttribute(attributeName);
}

/**
 * Creates a new HTML element with the specified tag name and attributes.
 * @param {string} tagName The tag name of the element to create (e.g., 'div', 'span').
 * @param {object} attributes An object of attribute key-value pairs.
 * @returns {HTMLElement} The newly created HTMLElement.
 */
export function createElementWithAttributes(tagName, attributes = {}) {
  const element = document.createElement(tagName);
  for (const key in attributes) {
    if (Object.prototype.hasOwnProperty.call(attributes, key)) {
      element.setAttribute(key, attributes[key]);
    }
  }
  return element;
}

/**
 * Checks if an element is fully within the viewport.
 * @param {HTMLElement} element The element to check.
 * @returns {boolean} True if the element is fully in viewport, false otherwise.
 */
export function isElementFullyInViewport(element) {
  if (!element) {
    return false;
  }
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Checks if a given element is a child of another element.
 * @param {HTMLElement} child The potential child element.
 * @param {HTMLElement} parent The potential parent element.
 * @returns {boolean} True if the child is a descendant of the parent, false otherwise.
 */
export function isChildOf(child, parent) {
  if (!child || !parent) {
    return false;
  }
  let node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

/**
 * Checks if an HTML element has a specific attribute with a specific value.
 * @param {HTMLElement} element The element to check.
 * @param {string} attributeName The name of the attribute to check for.
 * @param {string} attributeValue The value of the attribute to check for.
 * @returns {boolean} True if the element has the attribute with the specified value, false otherwise.
 */
export function hasAttributeValue(element, attributeName, attributeValue) {
  if (!element || typeof attributeName !== 'string') {
    return false;
  }
  return element.getAttribute(attributeName) === attributeValue;
}

/**
 * Gets the current scroll position of the document or a specific element.
 * @param {HTMLElement} [element=document.documentElement] The element to get the scroll position from. Defaults to document.documentElement.
 * @returns {{x: number, y: number}} An object with x (horizontal) and y (vertical) scroll positions.
 */
export function getScrollPosition(element = document.documentElement) {
  if (element === document.documentElement) {
    return {
      x: window.scrollX || window.pageXOffset || document.documentElement.scrollLeft,
      y: window.scrollY || window.pageYOffset || document.documentElement.scrollTop,
    };
  } else if (element) {
    return {
      x: element.scrollLeft,
      y: element.scrollTop,
    };
  }
  return { x: 0, y: 0 };
}

/**
 * Checks if a given element is a descendant of another element.
 * @param {HTMLElement} descendant The potential descendant element.
 * @param {HTMLElement} ancestor The potential ancestor element.
 * @returns {boolean} True if the descendant is a descendant of the ancestor, false otherwise.
 */
export function isDescendant(descendant, ancestor) {
  if (!descendant || !ancestor) {
    return false;
  }
  let node = descendant.parentNode;
  while (node !== null) {
    if (node === ancestor) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

/**
 * Checks if an element is currently focused.
 * @param {HTMLElement} element The element to check.
 * @returns {boolean} True if the element is focused, false otherwise.
 */
export function isElementFocused(element) {
  return element === document.activeElement;
}

/**
 * Checks if an element is scrollable.
 * @param {HTMLElement} element The element to check.
 * @returns {boolean} True if the element is scrollable, false otherwise.
 */
export function isScrollable(element) {
  if (!element || element.nodeType !== 1) {
    return false;
  }
  const style = window.getComputedStyle(element);
  return (
    (style.overflowY !== 'visible' && style.overflowY !== 'hidden' && element.scrollHeight > element.clientHeight) ||
    (style.overflowX !== 'visible' && style.overflowX !== 'hidden' && element.scrollWidth > element.clientWidth)
  );
}

/**
 * Wraps an HTML element with another HTML element.
 * @param {HTMLElement} target The element to be wrapped.
 * @param {HTMLElement} wrapper The wrapping element.
 * @returns {HTMLElement} The wrapper element.
 */
export function wrapElement(target, wrapper) {
  if (target && wrapper && target.parentNode) {
    target.parentNode.insertBefore(wrapper, target);
    wrapper.appendChild(target);
  }
  return wrapper;
}

