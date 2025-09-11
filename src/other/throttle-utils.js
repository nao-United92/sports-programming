/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds.
 *
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true] Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 */
export const throttle = (func, wait, options) => {
  let timeout, context, args, result;
  let previous = 0;
  if (!options) options = {};

  const later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  const throttled = function(...originalArgs) {
    const now = Date.now();
    if (!previous && options.leading === false) {
      previous = now;
    }
    const remaining = wait - (now - previous);
    context = this;
    args = originalArgs;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
};