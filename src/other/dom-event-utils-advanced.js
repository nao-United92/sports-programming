// src/other/dom-event-utils-advanced.js

/**
 * Safely removes an event listener from a DOM element.
 *
 * @param {EventTarget} element The DOM element to remove the listener from.
 * @param {string} eventType The type of event that was listened for.
 * @param {Function} listener The function that was registered as the listener.
 * @param {boolean | Object} [options] An options object that specifies characteristics about the event listener.
 */
const removeEventListener = (element, eventType, listener, options) => {
  if (!element || typeof element.removeEventListener !== 'function') {
    console.warn('Invalid element or element does not support removeEventListener:', element);
    return;
  }
  if (typeof eventType !== 'string' || eventType === '') {
    console.warn('Invalid eventType:', eventType);
    return;
  }
  if (typeof listener !== 'function') {
    console.warn('Invalid listener:', listener);
    return;
  }

  element.removeEventListener(eventType, listener, options);
};

module.exports = {
  removeEventListener,
};
