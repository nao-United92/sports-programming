/**
 * Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds.
 * The throttled function comes with a `cancel` method to cancel delayed `func` invocations and a `flush` method to immediately invoke them.
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @param {object} [options] The options object.
 * @param {boolean} [options.leading=true] Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 */
export function throttle(func, wait, options = {}) {
  let context, args, result;
  let timeout = null;
  let previous = 0;
  const { leading = true, trailing = true } = options;

  const later = function() {
    previous = leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  const throttled = function() {
    const now = Date.now();
    if (!previous && leading === false) previous = now;
    const remaining = wait - (now - previous);
    context = this;
    args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (trailing && !timeout) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  throttled.flush = function() {
    if (timeout) {
      clearTimeout(timeout);
      later();
    }
    return result;
  };

  return throttled;
}