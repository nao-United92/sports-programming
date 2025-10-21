/**
 * Triggers a custom event on a specified DOM element.
 *
 * @param {HTMLElement} element The DOM element to trigger the event on.
 * @param {string} eventName The name of the custom event.
 * @param {object} [detail={}] An object to pass as custom data to the event.
 * @param {boolean} [bubbles=true] Whether the event should bubble up through the DOM tree.
 * @param {boolean} [cancelable=true] Whether the event can be cancelled.
 * @returns {boolean} Returns `false` if `event.preventDefault()` was called, otherwise `true`.
 */
function triggerEvent(element, eventName, detail = {}, bubbles = true, cancelable = true) {
  if (!element || typeof element.dispatchEvent !== 'function') {
    console.warn('Invalid element provided for triggerEvent.', element);
    return false;
  }

  const event = new CustomEvent(eventName, {
    detail,
    bubbles,
    cancelable,
  });

  return element.dispatchEvent(event);
}

module.exports = { triggerEvent };
