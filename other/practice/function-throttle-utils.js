const throttle = (func, wait) => {
  let timeout = null;
  let result;
  let previous = 0;
  let lastArgs = null;
  let lastContext = null;

  const later = function() {
    previous = Date.now();
    timeout = null;
    result = func.apply(lastContext, lastArgs);
  };

  return function(...args) {
    const now = Date.now();
    if (!previous) previous = now; // First invocation
    
    const remaining = wait - (now - previous);
    lastContext = this;
    lastArgs = args;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(lastContext, lastArgs);
    } else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

module.exports = { throttle };