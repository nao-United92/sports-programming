
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

/**
 * Attaches an event listener to an element that will only be triggered once.
 *
 * @param {EventTarget} element The DOM element to attach the event to.
 * @param {string} eventName The name of the event.
 * @param {Function} handler The event handler function.
 */
export function once(element, eventName, handler) {
  const onceHandler = (event) => {
    handler(event);
    element.removeEventListener(eventName, onceHandler);
  };
  element.addEventListener(eventName, onceHandler);
}

/**
 * Delegates an event listener to a parent element, so it only fires when the event originates from a matching child element.
 *
 * @param {EventTarget} element The parent DOM element to attach the event to.
 * @param {string} selector The CSS selector for the child elements.
 * @param {string} eventName The name of the event.
 * @param {Function} handler The event handler function.
 */
export function delegate(element, selector, eventName, handler) {
  element.addEventListener(eventName, (event) => {
    const target = event.target.closest(selector);
    if (target && element.contains(target)) {
      handler.call(target, event);
    }
  });
}
