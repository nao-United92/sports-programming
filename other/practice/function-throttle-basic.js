export const functionThrottleBasic = (fn, wait) => {
  let isThrottled = false;
  return function(...args) {
    if (!isThrottled) {
      fn.apply(this, args);
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, wait);
    }
  };
};
