export const throttle = (func, limit) => {
  let inThrottle;
  let lastResult;
  let lastArgs;
  let lastThis;

  return function(...args) {
    const context = this;
    lastArgs = args;
    lastThis = context;

    if (!inThrottle) {
      inThrottle = true;
      lastResult = func.apply(context, args);
      setTimeout(() => {
        inThrottle = false;
        if (lastArgs !== args || lastThis !== context) {
          lastResult = func.apply(lastThis, lastArgs);
        }
      }, limit);
    }
    return lastResult;
  };
};
