/**
 * Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds.
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @returns {Function} Returns the new throttled function.
 */
export const throttle = (func, wait) => {
  let inThrottle;
  let lastResult;
  let lastArgs;
  let timeoutId;

  return function(...args) {
    if (inThrottle) {
      lastArgs = args;
      return;
    }

    inThrottle = true;
    lastResult = func.apply(this, args);

    timeoutId = setTimeout(() => {
      inThrottle = false;
      if (lastArgs) {
        lastResult = func.apply(this, lastArgs);
        lastArgs = null;
      }
    }, wait);

    return lastResult;
  };
};
