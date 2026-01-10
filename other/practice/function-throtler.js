const throttle = (func, wait) => {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function for the first argument.');
  }
  if (typeof wait !== 'number' || wait < 0) {
    throw new TypeError('Expected a non-negative number for the second argument (wait).');
  }

  let timeout = null;
  let lastArgs = null;
  let lastThis = null;
  let lastResult = null;

  const throttled = function(...args) {
    const context = this;
    lastArgs = args;
    lastThis = context;

    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        lastArgs = null;
        lastThis = null;
        // lastResult = null; // Optionally clear lastResult here if you want it to be undefined after throttle period
      }, wait);
      lastResult = func.apply(context, args);
    }
    return lastResult;
  };

  throttled.cancel = () => {
    clearTimeout(timeout);
    timeout = null;
    lastArgs = null;
    lastThis = null;
    lastResult = null;
  };

  return throttled;
};

module.exports = { throttle };
