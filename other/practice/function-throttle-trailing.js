/**
 * Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds.
 * The throttled function is guaranteed to be executed once at the end of the `wait` interval.
 * Subsequent calls within the `wait` interval will update the arguments for the trailing call.
 *
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @returns {Function} Returns the new throttled function.
 */
const throttleTrailing = (func, wait) => {
  let timeoutId = null;
  let lastArgs = null;
  let lastThis = null;

  return function(...args) {
    lastArgs = args;
    lastThis = this;

    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func.apply(lastThis, lastArgs);
        timeoutId = null;
        lastArgs = null;
        lastThis = null;
      }, wait);
    }
  };
};

export default throttleTrailing;