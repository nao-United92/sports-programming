/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 *
 * @param {Function} func The function to debounce.
 * @param {number} wait The number of milliseconds to delay.
 * @param {object} [options={}] The options object.
 * @param {boolean} [options.leading=false] Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 */
export const debounce = (func, wait, options = {}) => {
  let timeout;
  let result;
  let lastArgs;
  let lastThis;
  let lastCallTime;

  const { leading = false, trailing = true } = options;

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  wait = +wait || 0;

  function debounced(...args) {
    lastArgs = args;
    lastThis = this;
    lastCallTime = Date.now();

    const callNow = leading && !timeout;
    clearTimeout(timeout);

    if (callNow) {
      result = func.apply(lastThis, lastArgs);
    } else if (trailing) {
      timeout = setTimeout(() => {
        const timeSinceLastCall = Date.now() - lastCallTime;
        if (timeSinceLastCall >= wait) {
          result = func.apply(lastThis, lastArgs);
          lastArgs = lastThis = null;
        }
      }, wait);
    }
    return result;
  }

  debounced.cancel = () => {
    clearTimeout(timeout);
    timeout = null;
  };

  debounced.flush = () => {
    if (timeout) {
      result = func.apply(lastThis, lastArgs);
      debounced.cancel();
    }
    return result;
  };

  return debounced;
};