export const throttle = (fn, delay) => {
  let throttled = false;
  let lastArgs = null;
  let timeoutId = null;

  const throttledFn = (...args) => {
    if (throttled) {
      lastArgs = args;
      return;
    }

    throttled = true;
    fn(...args);

    timeoutId = setTimeout(() => {
      throttled = false;
      if (lastArgs) {
        throttledFn(...lastArgs);
        lastArgs = null;
      }
    }, delay);
  };

  return throttledFn;
};