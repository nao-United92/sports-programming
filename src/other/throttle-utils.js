export function throttle(func, wait) {
  let timeoutId = null;
  let lastArgs = null;
  let lastThis = null;
  let lastResult;
  let lastCallTime = 0;

  const throttled = function(...args) {
    const now = Date.now();
    lastArgs = args;
    lastThis = this;

    if (!lastCallTime || now - lastCallTime > wait) {
      // First call or enough time has passed since the last actual execution
      lastCallTime = now;
      lastResult = func.apply(lastThis, lastArgs);
    } else {
      // Schedule a trailing call
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastCallTime = Date.now(); // Update lastCallTime for the trailing call
        lastResult = func.apply(lastThis, lastArgs);
        timeoutId = null;
      }, wait - (now - lastCallTime));
    }
    return lastResult;
  };

  // Optional: Add a cancel method if needed
  throttled.cancel = () => {
    clearTimeout(timeoutId);
    timeoutId = null;
    lastCallTime = 0; // Reset to allow immediate call next time
  };

  return throttled;
}