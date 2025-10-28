/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func` should
 * be invoked on the leading and/or trailing edge of the `wait` timeout.
 * The `func` is invoked with the last arguments provided to the throttled
 * function. Subsequent calls to the throttled function return the result of
 * the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
 * on the trailing edge of the timeout only if the throttled function is
 * invoked more than once during the `wait` timeout.
 *
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true] Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 */
function throttle(func, wait = 0, options = {}) {
  let leading = true,
    trailing = true;

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  if (typeof options === 'object') {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  let timerId;
  let lastArgs;
  let lastThis;
  let lastResult;
  let lastCallTime = 0;

  const invokeFunc = (time) => {
    lastResult = func.apply(lastThis, lastArgs);
    lastCallTime = time;
  };

  const trailingEdge = (time) => {
    timerId = undefined;
    // Only invoke if we have `lastArgs` (i.e. throttle has been called)
    // and `trailing` is set.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return lastResult;
  };

  const throttled = function(...args) {
    const now = Date.now();
    lastArgs = args;
    lastThis = this;

    if (!lastCallTime && !leading) {
      lastCallTime = now;
    }

    const remaining = wait - (now - lastCallTime);

    if (remaining <= 0 || remaining > wait) {
      if (timerId) {
        clearTimeout(timerId);
        timerId = undefined;
      }
      lastCallTime = now;
      invokeFunc(now);
    } else if (!timerId && trailing) {
      timerId = setTimeout(() => trailingEdge(Date.now()), remaining);
    }
    return lastResult;
  };

  throttled.cancel = () => {
    clearTimeout(timerId);
    timerId = undefined;
    lastCallTime = 0;
    lastArgs = lastThis = undefined;
  };

  throttled.flush = () => {
    if (timerId) {
      return trailingEdge(Date.now());
    }
    return lastResult;
  };

  return throttled;
}

export { throttle };