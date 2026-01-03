const throttle = (func, limit) => {
  let lastArgs;
  let lastThis;
  let lastExecTime = 0;
  let timerId;

  const invokeFunc = (time) => {
    lastExecTime = time;
    func.apply(lastThis, lastArgs);
  };

  const throttled = function(...args) {
    lastArgs = args;
    lastThis = this;

    const now = Date.now();
    const remaining = limit - (now - lastExecTime);

    // Clear any existing timer if this is a new immediate call
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }

    if (remaining <= 0) { // Time has passed or first call
      invokeFunc(now);
    } else { // Still within the limit, schedule a future call
      timerId = setTimeout(() => {
        invokeFunc(Date.now());
        timerId = null; // Clear timer ID after execution
      }, remaining);
    }
  };

  // Add a cancel function to clear any pending throttled calls
  throttled.cancel = () => {
    clearTimeout(timerId);
    timerId = null;
    lastExecTime = 0;
  };

  return throttled;
};

module.exports = throttle;
