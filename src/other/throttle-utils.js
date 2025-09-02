/**
 * Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds.
 *
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @returns {Function} Returns the new throttled function.
 */
export const throttle = (func, limit) => {
  let inThrottle = false;
  let trailingCall = false;
  let lastArgs = null;

  return function() {
    lastArgs = arguments;
    if (!inThrottle) {
      func.apply(this, lastArgs);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
        if (trailingCall) {
          func.apply(this, lastArgs);
          trailingCall = false;
        }
      }, limit);
    } else {
      trailingCall = true;
    }
  };
};
