/**
 * Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds.
 * The throttled function comes with a `cancel` method to cancel delayed `func` invocations and a `flush` method to immediately invoke them.
 *
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true] Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 */
function throttle(func, wait = 0, options = {}) {
  let context, args, result;
  let timeout = null;
  let lastArgs = null;
  let lastThis = null;
  let previous = 0;
  const { leading = true, trailing = true } = options;

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  wait = +wait || 0;

  function later() {
    previous = leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(lastThis, lastArgs);
    if (!timeout) {
      lastArgs = lastThis = null;
    }
  }

  function throttled(...args) {
    const now = Date.now();
    if (!previous && leading === false) {
      previous = now;
    }

    const remaining = wait - (now - previous);
    lastArgs = args;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    lastThis = this;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(this, args);
      if (!timeout) {
        lastArgs = lastThis = null;
      }
    } else if (!timeout && trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  }

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = lastArgs = lastThis = null;
  };

  throttled.flush = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
      later();
    }
    return result;
  };

  return throttled;
}

module.exports = { throttle };