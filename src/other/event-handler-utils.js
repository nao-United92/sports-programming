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
