/**
 * Creates a throttled function that only invokes func at most once per every wait milliseconds.
 * The throttled function comes with a `cancel` method to cancel delayed func invocations and a `flush` method to immediately invoke them.
 * Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout.
 * The func is invoked with the last arguments provided to the throttled function.
 *
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @param {object} [options={}] The options object.
 * @param {boolean} [options.leading=true] Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 */
const throttle = (func, wait, options = {}) => {
  let timeoutId = null;
  let lastArgs = null;
  let lastThis = null;
  let result;
  let previous = 0;
  const { leading = true, trailing = true } = options;

  const later = function() {
    previous = leading === false ? 0 : Date.now();
    timeoutId = null;
    result = func.apply(lastThis, lastArgs);
    if (!timeoutId) {
      lastThis = lastArgs = null;
    }
  };

  const throttled = function(...args) {
    const now = Date.now();
    if (!previous && leading === false) {
      previous = now;
    }
    const remaining = wait - (now - previous);
    lastArgs = args;
    lastThis = this;

    if (remaining <= 0 || remaining > wait) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      previous = now;
      result = func.apply(lastThis, lastArgs);
      if (!timeoutId) {
        lastThis = lastArgs = null;
      }
    } else if (!timeoutId && trailing !== false) {
      timeoutId = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = () => {
    clearTimeout(timeoutId);
    previous = 0;
    timeoutId = lastThis = lastArgs = null;
  };

  throttled.flush = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      later();
    }
    return result;
  };

  return throttled;
};

export { throttle };
