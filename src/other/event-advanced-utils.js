
/**
 * Attaches an event listener to an element, optionally using event delegation.
 * @param {EventTarget} element The element to attach the listener to.
 * @param {string} eventType The type of event (e.g., 'click', 'mouseover').
 * @param {string|Function} selectorOrHandler If a string, it's a CSS selector for delegation. If a function, it's the event handler.
 * @param {Function} [handler] The event handler function (required if selectorOrHandler is a string).
 */
export function on(element, eventType, selectorOrHandler, handler) {
  if (!element || typeof element.addEventListener !== 'function') {
    console.warn('on: Invalid element provided.');
    return;
  }

  if (typeof selectorOrHandler === 'function') {
    element.addEventListener(eventType, selectorOrHandler);
  } else if (typeof selectorOrHandler === 'string' && typeof handler === 'function') {
    const delegateHandler = function(event) {
      const target = event.target;
      if (target.matches(selectorOrHandler)) {
        handler.call(this, event);
      }
    };
    // Store the delegated handler to be able to remove it later
    // This is a simplified approach; for robust removal, a WeakMap might be better.
    if (!element._delegatedHandlers) {
      element._delegatedHandlers = {};
    }
    if (!element._delegatedHandlers[eventType]) {
      element._delegatedHandlers[eventType] = new Map();
    }
    element._delegatedHandlers[eventType].set(handler, delegateHandler);
    element.addEventListener(eventType, delegateHandler);
  } else {
    console.warn('on: Invalid arguments provided.');
  }
}

/**
 * Removes an event listener from an element.
 * @param {EventTarget} element The element to remove the listener from.
 * @param {string} eventType The type of event.
 * @param {Function} handler The event handler function to remove.
 */
export function off(element, eventType, handler) {
  if (!element || typeof element.removeEventListener !== 'function') {
    console.warn('off: Invalid element provided.');
    return;
  }

  let handlerToRemove = handler;
  if (element._delegatedHandlers && element._delegatedHandlers[eventType]) {
    handlerToRemove = element._delegatedHandlers[eventType].get(handler) || handler;
    element._delegatedHandlers[eventType].delete(handler);
  }
  element.removeEventListener(eventType, handlerToRemove);
}

/**
 * Attaches an event listener that will only be triggered once.
 * @param {EventTarget} element The element to attach the listener to.
 * @param {string} eventType The type of event.
 * @param {Function} handler The event handler function.
 */
export function once(element, eventType, handler) {
  if (!element || typeof element.addEventListener !== 'function') {
    console.warn('once: Invalid element provided.');
    return;
  }
  element.addEventListener(eventType, handler, { once: true });
}

/**
 * Checks if a specific key was pressed in a keyboard event.
 * @param {KeyboardEvent} event The keyboard event object.
 * @param {string} key The key to check against (e.g., 'Enter', 'Escape', 'ArrowUp'). Case-insensitive.
 * @returns {boolean} True if the specified key was pressed, false otherwise.
 */
export function isKeyPressed(event, key) {
  if (!(event instanceof KeyboardEvent)) {
    return false;
  }
  return event.key.toLowerCase() === key.toLowerCase();
}

/**
 * Dispatches a custom event on the specified element.
 * @param {EventTarget} element The element to dispatch the event on.
 * @param {string} eventName The name of the custom event.
 * @param {object} [detail={}] Optional detail object to pass with the event.
 * @param {boolean} [bubbles=true] Whether the event bubbles up through the DOM tree.
 * @param {boolean} [cancelable=true] Whether the event can be cancelled.
 * @returns {boolean} True if the event was not canceled, false otherwise.
 */
export function triggerEvent(element, eventName, detail = {}, bubbles = true, cancelable = true) {
  if (!element || typeof element.dispatchEvent !== 'function') {
    console.warn('triggerEvent: Invalid element provided.');
    return false;
  }
  const event = new CustomEvent(eventName, {
    detail: detail,
    bubbles: bubbles,
    cancelable: cancelable,
  });
  return element.dispatchEvent(event);
}

/**
 * Pauses an event listener by temporarily removing it.
 * @param {EventTarget} element The element whose listener is to be paused.
 * @param {string} eventType The type of event.
 * @param {Function} handler The event handler function to pause.
 */
export function pauseEvent(element, eventType, handler) {
  off(element, eventType, handler);
}

/**
 * Resumes a paused event listener by re-attaching it.
 * @param {EventTarget} element The element whose listener is to be resumed.
 * @param {string} eventType The type of event.
 * @param {Function} handler The event handler function to resume.
 */
export function resumeEvent(element, eventType, handler) {
  on(element, eventType, handler);
}
