/**
 * Creates a throttled function that only invokes `fn` at most once per every `wait` milliseconds.
 * @param {Function} fn The function to throttle.
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @returns {Function} Returns the new throttled function.
 */
const throttle = (fn, wait) => {
  let inThrottle, lastFn, lastTime;
  return function(...args) {
    const context = this;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

module.exports = { throttle };