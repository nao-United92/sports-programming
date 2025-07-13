
/**
 * Dispatches a custom event on a given HTML element.
 * @param {EventTarget} element The HTML element or EventTarget to dispatch the event on.
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
