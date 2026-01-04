export const throttle = (func, wait) => {
  let timeoutId = null;
  let lastArgs = null;
  let lastThis = null;
  let lastResult = null;
  let lastExecTime = 0;

  const throttled = function(...args) {
    const now = Date.now();
    lastArgs = args;
    lastThis = this;

    if (!lastExecTime) {
      lastExecTime = now; // Initialize lastExecTime on first call
    }

    // Calculate time remaining until next allowed execution
    const remaining = wait - (now - lastExecTime);

    // If remaining time is <= 0 or remaining is greater than wait
    // (meaning system clock changed or wait is very small)
    if (remaining <= 0 || remaining > wait) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      lastExecTime = now;
      lastResult = func.apply(lastThis, lastArgs);
    } else if (!timeoutId) {
      // If there's a delay, schedule a trailing call
      timeoutId = setTimeout(() => {
        lastExecTime = Date.now();
        timeoutId = null;
        lastResult = func.apply(lastThis, lastArgs);
      }, remaining);
    }
    return lastResult;
  };

  throttled.cancel = () => {
    clearTimeout(timeoutId);
    timeoutId = null;
    lastExecTime = 0;
    lastArgs = null;
    lastThis = null;
  };

  return throttled;
};
