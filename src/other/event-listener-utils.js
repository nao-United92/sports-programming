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

/**
 * Adds an event listener to an element that will be executed only once.
 * @param {EventTarget} element The element to attach the event listener to.
 * @param {string} eventType The type of event to listen for.
 * @param {Function} listener The function to call when the event occurs.
 * @param {boolean|AddEventListenerOptions} [options] An options object that specifies characteristics about the event listener.
 */
export function once(element, eventType, listener, options) {
  if (element && eventType && listener) {
    const opts = { ...options, once: true };
    element.addEventListener(eventType, listener, opts);
  }
}

/**
 * Adds an event listener to an element.
 * @param {EventTarget} element The element to attach the event listener to.
 * @param {string} eventType The type of event to listen for.
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
 * Attaches an event listener that fires when a click occurs outside the specified element.
 * @param {HTMLElement} element The element to monitor for outside clicks.
 * @param {Function} callback The function to call when an outside click occurs.
 * @param {EventTarget} [triggerElement=document] The element that triggers the event listener (e.g., document or a specific parent).
 */
export function onClickOutside(element, callback, triggerElement = document) {
  if (!element || !callback) {
    return;
  }

  const handleClick = (event) => {
    if (!element.contains(event.target) && event.target !== element) {
      callback(event);
    }
  };

  triggerElement.addEventListener('click', handleClick);

  // Return a function to remove the event listener
  return () => {
    triggerElement.removeEventListener('click', handleClick);
  };
}
