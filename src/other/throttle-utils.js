/**
 * Throttles a function, ensuring it's called at most once in a specified time period.
 * Useful for rate-limiting events that fire frequently, such as scroll or resize events.
 *
 * @param {Function} func The function to throttle.
 * @param {number} limit The minimum time interval between calls.
 * @returns {Function} The throttled function.
 */
export function throttle(func, limit) {
  let inThrottle;
  let lastResult;

  return function(...args) {
    const context = this;
    if (!inThrottle) {
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
      lastResult = func.apply(context, args);
    }
    return lastResult;
  };
}