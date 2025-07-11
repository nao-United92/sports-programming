/**
 * Attaches an event listener to an element.
 * @param {EventTarget} element The DOM element or other event target.
 * @param {string} event The event type to listen for.
 * @param {Function} handler The function to execute when the event is triggered.
 * @param {object} [options] An options object that specifies characteristics about the event listener.
 */
export function on(element, event, handler, options) {
  element.addEventListener(event, handler, options);
}

/**
 * Removes an event listener from an element.
 * @param {EventTarget} element The DOM element or other event target.
 * @param {string} event The event type.
 * @param {Function} handler The event handler function to remove.
 * @param {object} [options] An options object.
 */
export function off(element, event, handler, options) {
  element.removeEventListener(event, handler, options);
}

/**
 * Attaches an event listener that is automatically removed after it has been executed once.
 * @param {EventTarget} element The DOM element or other event target.
 * @param {string} event The event type to listen for.
 * @param {Function} handler The function to execute when the event is triggered.
 * @param {object} [options] An options object that specifies characteristics about the event listener.
 */
export function once(element, event, handler, options) {
  const onceHandler = (e) => {
    handler(e);
    off(element, event, onceHandler, options);
  };
  on(element, event, onceHandler, options);
}
