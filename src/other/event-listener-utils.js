/**
 * Adds an event listener to an element.
 * @param {EventTarget} element The element to attach the event listener to.
 * @param {string} eventType The type of event to listen for (e.g., 'click', 'mouseover').
 * @param {Function} listener The function to call when the event occurs.
 * @param {boolean|AddEventListenerOptions} [options] An options object that specifies characteristics about the event listener.
 */
export function addEventListener(element, eventType, listener, options) {
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
export function removeEventListener(element, eventType, listener, options) {
  if (element && eventType && listener) {
    element.removeEventListener(eventType, listener, options);
  }
}

/**
 * Dispatches a custom event from an element.
 * @param {EventTarget} element The element to dispatch the event from.
 * @param {string} eventName The name of the custom event.
 * @param {object} [detail] Custom data to pass with the event.
 * @param {boolean} [bubbles=true] Whether the event should bubble up through the DOM.
 * @param {boolean} [cancelable=true] Whether the event can be cancelled.
 */
export function dispatchCustomEvent(element, eventName, detail, bubbles = true, cancelable = true) {
  if (element && eventName) {
    const event = new CustomEvent(eventName, {
      detail,
      bubbles,
      cancelable,
    });
    element.dispatchEvent(event);
  }
}