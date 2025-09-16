function throttle(func, delay, options = {}) { // Add options parameter
  let timeoutId = null;
  let lastArgs = null;
  let lastThis = null;
  let lastResult = null;
  let lastCallTime = 0; // This is the time of the last successful invocation

  const leading = options.leading === undefined ? true : !!options.leading;
  const trailing = options.trailing === undefined ? true : !!options.trailing;

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  function invokeFunc(time) {
    lastResult = func.apply(lastThis, lastArgs);
    lastCallTime = time; // Update lastCallTime to the time of invocation
  }

  function timerExpired() {
    const now = Date.now();
    if (trailing && lastArgs) { // If trailing is enabled and there are pending arguments
      invokeFunc(now);
      lastArgs = lastThis = undefined; // Clear args after trailing invocation
    }
    timeoutId = undefined; // Clear the timeout ID
  }

  function throttled(...args) {
    const now = Date.now();
    lastArgs = args;
    lastThis = this;

    // If it's the very first call and leading is true
    if (!lastCallTime && leading) {
      invokeFunc(now);
    }

    const timeSinceLastExecution = now - lastCallTime;
    const shouldExecute = timeSinceLastExecution >= delay;

    if (shouldExecute) { // This handles subsequent executions after delay
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      invokeFunc(now);
    } else if (!timeoutId && trailing) { // If within the delay period and no trailing call is scheduled
      timeoutId = setTimeout(timerExpired, delay - timeSinceLastExecution);
    }

    return lastResult;
  }

  throttled.cancel = () => {
    clearTimeout(timeoutId);
    timeoutId = null;
    lastCallTime = 0;
    lastArgs = null;
    lastThis = null;
  };

  throttled.flush = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timerExpired(); // Execute the pending trailing call immediately
    }
    return lastResult;
  };

  return throttled;
}

export { throttle };