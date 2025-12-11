const throttle = (func, wait) => {
  let timeoutId = null;
  let lastArgs;
  let lastThis;
  let lastResult;
  let lastExecTime = 0;

  const throttled = function(...args) {
    const context = this;
    const now = Date.now();
    lastArgs = args;
    lastThis = context;

    if (now - lastExecTime > wait) {
      // If enough time has passed, execute immediately
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      lastExecTime = now;
      lastResult = func.apply(context, args);
    } else if (!timeoutId) {
      // Schedule a trailing call if not already scheduled and still within wait
      timeoutId = setTimeout(() => {
        lastExecTime = Date.now(); // Update last execution time to now
        timeoutId = null;
        lastResult = func.apply(lastThis, lastArgs); // Execute with last args/this
        lastArgs = lastThis = null; // Clear arguments
      }, wait - (now - lastExecTime));
    }
    return lastResult; // Return last result (either immediate or from a previous trailing call)
  };

  throttled.cancel = () => {
    clearTimeout(timeoutId);
    timeoutId = null;
    lastArgs = lastThis = null;
    lastExecTime = 0;
  };

  return throttled;
};

module.exports = throttle;
