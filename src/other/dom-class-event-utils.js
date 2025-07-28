/**
 * Attaches an event listener to an element, supporting event delegation.
 * @param {HTMLElement} element The element to attach the listener to.
 * @param {string} eventName The name of the event (e.g., 'click', 'mouseover').
 * @param {string|Function} selectorOrHandler If a string, it's a CSS selector for delegation. If a function, it's the event handler.
 * @param {Function} [handler] The event handler function, required if selectorOrHandler is a string.
 */
export function on(element, eventName, selectorOrHandler, handler) {
  if (!element) return;

  if (typeof selectorOrHandler === 'function') {
    element.addEventListener(eventName, selectorOrHandler);
  } else if (typeof selectorOrHandler === 'string' && typeof handler === 'function') {
    const delegateHandler = function(event) {
      const target = event.target.closest(selectorOrHandler);
      if (target && element.contains(target)) {
        handler.call(target, event);
      }
    };
    // Store the delegated handler to be able to remove it later
    if (!element._delegatedHandlers) {
      element._delegatedHandlers = new Map();
    }
    if (!element._delegatedHandlers.has(eventName)) {
      element._delegatedHandlers.set(eventName, new Map());
    }
    element._delegatedHandlers.get(eventName).set(handler, delegateHandler);
    element.addEventListener(eventName, delegateHandler);
  }
}

/**
 * Removes an event listener from an element.
 * @param {HTMLElement} element The element to remove the listener from.
 * @param {string} eventName The name of the event.
 * @param {Function} handler The event handler function to remove.
 */
export function off(element, eventName, handler) {
  if (!element) return;

  if (element._delegatedHandlers && element._delegatedHandlers.has(eventName)) {
    const delegatedMap = element._delegatedHandlers.get(eventName);
    if (delegatedMap.has(handler)) {
      const delegateHandler = delegatedMap.get(handler);
      element.removeEventListener(eventName, delegateHandler);
      delegatedMap.delete(handler);
      if (delegatedMap.size === 0) {
        element._delegatedHandlers.delete(eventName);
      }
    } else {
      element.removeEventListener(eventName, handler);
    }
  }
  else {
    element.removeEventListener(eventName, handler);
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
 * Toggles a class on an HTML element.
 * @param {HTMLElement} element The element to toggle the class on.
 * @param {string} className The class name to toggle.
 * @returns {boolean} True if the class is now present, false otherwise.
 */
export function toggleClass(element, className) {
  if (element && className) {
    return element.classList.toggle(className);
  }
  return false;
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
 * Attaches an event listener to an element that will only fire once.
 * @param {HTMLElement} element The element to attach the listener to.
 * @param {string} eventName The name of the event (e.g., 'click').
 * @param {Function} handler The event handler function.
 */
export function once(element, eventName, handler) {
  if (!element) return;
  element.addEventListener(eventName, handler, { once: true });
}

/**
 * Sets an attribute on an HTML element.
 * @param {HTMLElement} element The element to set the attribute on.
 * @param {string} attributeName The name of the attribute.
 * @param {string} value The value of the attribute.
 */
export function setAttribute(element, attributeName, value) {
  if (element && attributeName) {
    element.setAttribute(attributeName, value);
  }
}