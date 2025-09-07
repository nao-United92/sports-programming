/**
 * Attaches an event listener to an element.
 * @param {Element} el The element.
 * @param {string} evt The event name.
 * @param {Function} fn The callback function.
 * @param {object} [opts={}] The options for the event listener.
 */
export const on = (el, evt, fn, opts = {}) => {
  el.addEventListener(evt, fn, opts);
};

/**
 * Removes an event listener from an element.
 * @param {Element} el The element.
 * @param {string} evt The event name.
 * @param {Function} fn The callback function.
 * @param {object} [opts={}] The options for the event listener.
 */
export const off = (el, evt, fn, opts = {}) => {
  el.removeEventListener(evt, fn, opts);
};

/**
 * Delegates an event to a specific child element.
 * @param {Element} el The parent element.
 * @param {string} selector The selector for the child element.
 * @param {string} evt The event name.
 * @param {Function} fn The callback function.
 */
export const delegate = (el, selector, evt, fn) => {
  el.addEventListener(evt, (e) => {
    if (e.target && e.target.matches(selector)) {
      fn(e);
    }
  });
};