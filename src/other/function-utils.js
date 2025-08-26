export const throttle = (func, wait) => {
  let inThrottle, lastFn, lastTime;
  return function() {
    const context = this, args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function() {
        if (Date.now() - lastTime >= wait) {
          func.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

export const once = (fn) => {
  let hasBeenCalled = false;
  let result;

  return function(...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn.apply(this, args);
      return result;
    }
    return result;
  };
};