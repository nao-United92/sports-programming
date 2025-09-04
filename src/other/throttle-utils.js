/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations.
 *
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @returns {Function} Returns the new throttled function.
 */
function throttle(func, wait) {
  let timeout = null;
  let lastArgs = null;
  let lastThis = null;
  let result;

  function later() {
    timeout = null;
    result = func.apply(lastThis, lastArgs);
    lastArgs = lastThis = null;
  }

  const throttled = function(...args) {
    lastArgs = args;
    lastThis = this;
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    return result;
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
    lastArgs = lastThis = null;
  };

  return throttled;
}

export default throttle;
