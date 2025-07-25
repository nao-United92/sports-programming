/**
 * Prevents the default action of an event.
 *
 * @param event The event object.
 */
export function preventDefault(event) {
    event.preventDefault();
}

/**
 * Stops the propagation of an event to parent elements.
 *
 * @param event The event object.
 */
export function stopPropagation(event) {
    event.stopPropagation();
}

/**
 * Prevents default and stops propagation of an event.
 *
 * @param event The event object.
 */
export function stopEvent(event) {
    preventDefault(event);
    stopPropagation(event);
}

/**
 * Creates a debounced version of a function.
 * The debounced function will only be executed after not being called for the specified delay time.
 *
 * @param func The function to debounce.
 * @param delay The delay in milliseconds.
 * @returns A debounced version of the function.
 */
export function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Creates a throttled version of a function.
 * The throttled function will only be executed at most once within the specified interval time.
 *
 * @param func The function to throttle.
 * @param interval The interval in milliseconds.
 * @returns A throttled version of the function.
 */
export function throttle(func, interval) {
    let inThrottle;
    let lastResult;
    return function(...args) {
        if (!inThrottle) {
            inThrottle = true;
            setTimeout(() => (inThrottle = false), interval);
            lastResult = func.apply(this, args);
        }
        return lastResult;
    };
}

/**
 * Adds an event listener to an element.
 * @param {EventTarget} element The element to attach the event listener to.
 * @param {string} eventType The type of event to listen for (e.g., 'click', 'mouseover').
 * @param {Function} handler The event handler function.
 * @param {boolean} [useCapture=false] Whether to use capture phase.
 */
export function addEvent(element, eventType, handler, useCapture = false) {
  if (element && eventType && handler) {
    element.addEventListener(eventType, handler, useCapture);
  }
}

/**
 * Removes an event listener from an element.
 * @param {EventTarget} element The element to remove the event listener from.
 * @param {string} eventType The type of event to remove.
 * @param {Function} handler The event handler function to remove.
 * @param {boolean} [useCapture=false] Whether to use capture phase.
 */
export function removeEvent(element, eventType, handler, useCapture = false) {
  if (element && eventType && handler) {
    element.removeEventListener(eventType, handler, useCapture);
  }
}

/**
 * Creates a function that is restricted to invoking func once. Repeat calls to the function return the value of the first invocation.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 */
export function once(func) {
  let hasBeenCalled = false;
  let result;
  return function(...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = func.apply(this, args);
    }
    return result;
  };
}

/**
 * Delegates an event listener to a parent element.
 * @param {EventTarget} parent The parent element to attach the event listener to.
 * @param {string} eventType The type of event to listen for (e.g., 'click').
 * @param {string} selector The CSS selector for the child elements to delegate to.
 * @param {Function} handler The event handler function.
 * @param {boolean} [useCapture=false] Whether to use capture phase.
 */
export function delegate(parent, eventType, selector, handler, useCapture = false) {
  if (parent && eventType && selector && handler) {
    parent.addEventListener(eventType, function(event) {
      const target = event.target.closest(selector);
      if (target && parent.contains(target)) {
        handler.call(target, event);
      }
    }, useCapture);
  }
}

/**
 * Executes a function when the DOM is fully loaded.
 * @param {Function} callback The function to execute.
 */
export function onReady(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
}

/**
 * Attaches an event listener to an element.
 * This is an alias for addEvent.
 * @param {EventTarget} element The element to attach the event listener to.
 * @param {string} eventType The type of event to listen for (e.g., 'click', 'mouseover').
 * @param {Function} handler The event handler function.
 * @param {boolean} [useCapture=false] Whether to use capture phase.
 */
export const on = addEvent;


