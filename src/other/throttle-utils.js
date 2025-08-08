export const throttle = (func, limit) => {
  let inThrottle;
  let lastResult;
  let lastRan;

  return function(...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      lastRan = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(inThrottle);
      inThrottle = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          lastResult = func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
    return lastResult;
  };
};
