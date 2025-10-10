/**
 * Delegates an event listener to a parent element.
 *
 * @param {HTMLElement} parentElement The parent element to attach the listener to.
 * @param {string} eventType The type of event to listen for (e.g., 'click', 'mouseover').
 * @param {string} selector The CSS selector for the child elements to delegate to.
 * @param {Function} handler The event handler function.
 * @param {boolean} [useCapture=false] Whether to use capture phase.
 * @returns {Function} A function to remove the event listener.
 */
function delegate(parentElement, eventType, selector, handler, useCapture = false) {
  const listener = function(event) {
    const target = event.target;
    const closestMatch = target.closest(selector);

    if (closestMatch && parentElement.contains(closestMatch)) {
      handler.call(closestMatch, event);
    }
  };

  parentElement.addEventListener(eventType, listener, useCapture);

  return () => {
    parentElement.removeEventListener(eventType, listener, useCapture);
  };
}

module.exports = { delegate };
