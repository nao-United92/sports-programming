/**
 * Attaches an event listener to an element.
 * @param {EventTarget} element The element to attach the listener to.
 * @param {string} eventName The name of the event to listen for.
 * @param {Function} handler The event handler function.
 * @param {object} [options] An options object that specifies characteristics about the event listener.
 */
export const on = (element, eventName, handler, options) => {
  element.addEventListener(eventName, handler, options);
};

/**
 * Removes an event listener from an element.
 * @param {EventTarget} element The element to remove the listener from.
 * @param {string} eventName The name of the event.
 * @param {Function} handler The event handler function to remove.
 * @param {object} [options] An options object that specifies characteristics about the event listener.
 */
export const off = (element, eventName, handler, options) => {
  element.removeEventListener(eventName, handler, options);
};

/**
 * Attaches an event listener to an element that will be invoked at most once.
 * @param {EventTarget} element The element to attach the listener to.
 * @param {string} eventName The name of the event to listen for.
 * @param {Function} handler The event handler function.
 * @param {object} [options] An options object that specifies characteristics about the event listener.
 */
export const once = (element, eventName, handler, options) => {
  const onceHandler = (event) => {
    handler(event);
    off(element, eventName, onceHandler, options);
  };
  on(element, eventName, onceHandler, options);
};