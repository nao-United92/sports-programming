/**
 * Throttles a function, ensuring it's called at most once within a specified time period.
 * Useful for limiting the rate of events like scroll, resize, or mousemove.
 *
 * @param {Function} func The function to throttle.
 * @param {number} limit The time in milliseconds to throttle invocations to.
 * @returns {Function} The throttled function.
 */
export function throttle(func, limit) {
  let inThrottle;
  let lastResult;

  return function(...args) {
    const context = this;
    if (!inThrottle) {
      lastResult = func.apply(context, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
    return lastResult;
  };
}
