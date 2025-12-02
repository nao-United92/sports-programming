/**
 * Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds.
 * Any calls made during the cooldown period are ignored.
 *
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @returns {Function} Returns the new throttled function.
 */
export const throttle = (func, wait) => {
  let inCooldown = false;
  let lastThis;
  let lastArgs;

  const run = () => {
    if (lastArgs) {
      func.apply(lastThis, lastArgs);
      lastArgs = null;
      lastThis = null;
      setTimeout(run, wait);
    } else {
      inCooldown = false;
    }
  };

  return function(...args) {
    lastArgs = args;
    lastThis = this;
    if (!inCooldown) {
      inCooldown = true;
      run();
    }
  };
};