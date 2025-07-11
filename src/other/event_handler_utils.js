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

/**
 * Attaches an event listener to a parent element that will only trigger when the event originates from a child matching the selector.
 * @param {EventTarget} element The parent DOM element or other event target.
 * @param {string} selector The CSS selector for the child elements.
 * @param {string} event The event type to listen for.
 * @param {Function} handler The function to execute when the event is triggered on a matching child.
 * @param {object} [options] An options object that specifies characteristics about the event listener.
 */
export function delegate(element, selector, event, handler, options) {
  const delegateHandler = (e) => {
    const target = e.target.closest(selector);
    if (target && element.contains(target)) {
      handler.call(target, e);
    }
  };
  on(element, event, delegateHandler, options);
}

/**
 * Triggers a custom event on an element.
 * @param {EventTarget} element The DOM element or other event target.
 * @param {string} eventName The name of the custom event.
 * @param {any} [detail] Custom data to pass with the event.
 * @param {boolean} [bubbles=true] Whether the event bubbles up through the DOM or not.
 * @param {boolean} [cancelable=true] Whether the event can be cancelled.
 */
export function trigger(element, eventName, detail = null, bubbles = true, cancelable = true) {
  const event = new CustomEvent(eventName, {
    detail,
    bubbles,
    cancelable,
  });
  element.dispatchEvent(event);
}
