
/**
 * Attaches an event listener to an element.
 *
 * @param {EventTarget} element The DOM element to attach the event to.
 * @param {string} eventName The name of the event.
 * @param {Function} handler The event handler function.
 * @param {object} [options] An options object that specifies characteristics about the event listener.
 */
export const on = (element, eventName, handler, options) => {
  element.addEventListener(eventName, handler, options);
};

/**
 * Removes an event listener from an element.
 *
 * @param {EventTarget} element The DOM element to remove the event from.
 * @param {string} eventName The name of the event.
 * @param {Function} handler The event handler function.
 * @param {object} [options] An options object that specifies characteristics about the event listener.
 */
export const off = (element, eventName, handler, options) => {
  element.removeEventListener(eventName, handler, options);
};

/**
 * Triggers a custom event on an element.
 *
 * @param {EventTarget} element The DOM element to trigger the event on.
 * @param {string} eventName The name of the custom event.
 * @param {object} [detail] The data to pass in the event.
 */
export const trigger = (element, eventName, detail) => {
  const event = new CustomEvent(eventName, { detail });
  element.dispatchEvent(event);
};
