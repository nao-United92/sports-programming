// src/other/dom-event-utils.js

/**
 * Safely attaches an event listener to a DOM element.
 *
 * @param {EventTarget} element The DOM element to attach the listener to.
 * @param {string} eventType The type of event to listen for (e.g., 'click', 'mouseover').
 * @param {Function} listener The function to call when the event occurs.
 * @param {boolean | Object} [options] An options object that specifies characteristics about the event listener.
 */
const addEventListener = (element, eventType, listener, options) => {
  if (!element || typeof element.addEventListener !== 'function') {
    console.warn('Invalid element or element does not support addEventListener:', element);
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

  element.addEventListener(eventType, listener, options);
};

module.exports = {
  addEventListener,
};
