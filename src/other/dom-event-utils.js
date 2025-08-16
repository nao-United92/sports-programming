
/**
 * Adds an event listener to an element.
 * @param {EventTarget} element The element to attach the event listener to.
 * @param {string} eventType The type of event to listen for (e.g., 'click', 'mouseover').
 * @param {Function} listener The function to call when the event occurs.
 * @param {boolean|AddEventListenerOptions} [options] An options object that specifies characteristics about the event listener.
 */
export function on(element, eventType, listener, options) {
  if (element && eventType && listener) {
    element.addEventListener(eventType, listener, options);
  }
}

/**
 * Removes an event listener from an element.
 * @param {EventTarget} element The element to remove the event listener from.
 * @param {string} eventType The type of event to remove.
 * @param {Function} listener The listener function to remove.
 * @param {boolean|EventListenerOptions} [options] An options object that specifies characteristics about the event listener.
 */
export function off(element, eventType, listener, options) {
  if (element && eventType && listener) {
    element.removeEventListener(eventType, listener, options);
  }
}

/**
 * Adds an event listener to an element that will only be triggered once.
 * @param {EventTarget} element The element to attach the event listener to.
 * @param {string} eventType The type of event to listen for.
 * @param {Function} listener The function to call when the event occurs.
 * @param {boolean|AddEventListenerOptions} [options] An options object that specifies characteristics about the event listener.
 */
export function once(element, eventType, listener, options) {
  if (element && eventType && listener) {
    const onceOptions = { ...options, once: true };
    element.addEventListener(eventType, listener, onceOptions);
  }
}

/**
 * Dispatches a custom event on a given HTML element.
 * @param {EventTarget} element The HTML element or EventTarget to dispatch the event on..
 * @param {string} eventName The name of the custom event.
 * @param {object} [detail={}] An object containing custom data to pass with the event.
 */
export function dispatchCustomEvent(element, eventName, detail = {}) {
  if (!element || typeof element.dispatchEvent !== 'function') {
    console.warn('dispatchCustomEvent: Invalid element or element does not support dispatchEvent.');
    return;
  }
  const event = new CustomEvent(eventName, {
    detail,
    bubbles: true, // Allow the event to bubble up the DOM tree
    cancelable: true, // Allow the event to be cancelled
  });
  element.dispatchEvent(event);
}

/**
 * Prevents the default action of an event.
 * @param {Event} event The event object.
 */
export function preventDefault(event) {
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault();
  }
}
