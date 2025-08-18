/**
 * Attaches an event listener that is automatically removed after it has been executed once.
 *
 * @param {EventTarget} target The event target.
 * @param {string} type The event type.
 * @param {Function} listener The event listener.
 * @param {boolean|Object} [options] Same as the options for addEventListener.
 */
export const once = (target, type, listener, options) => {
  const onceListener = (event) => {
    listener(event);
    target.removeEventListener(type, onceListener, options);
  };
  target.addEventListener(type, onceListener, options);
};

/**
 * Prevents the default action and stops event propagation.
 *
 * @param {Event} event The event object.
 */
export const stop = (event) => {
  event.preventDefault();
  event.stopPropagation();
};
