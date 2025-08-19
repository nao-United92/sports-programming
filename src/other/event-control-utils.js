/**
 * Prevents the default action of an event.
 * @param {Event} event The event object.
 */
function preventEventDefault(event) {
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault();
  }
}

/**
 * Stops the propagation of an event.
 * @param {Event} event The event object.
 */
function stopEventPropagation(event) {
  if (event && typeof event.stopPropagation === 'function') {
    event.stopPropagation();
  }
}

/**
 * Prevents the default action and stops the propagation of an event.
 * @param {Event} event The event object.
 */
function stopEvent(event) {
  preventEventDefault(event);
  stopEventPropagation(event);
}

module.exports = {
  preventEventDefault,
  stopEventPropagation,
  stopEvent
};