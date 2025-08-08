/**
 * Creates a debounced function that delays invoking `func` until after `wait` milliseconds have elapsed since the last time the debounced function was invoked.
 * The debounced function comes with a `cancel` method to cancel delayed `func` invocations and a `flush` method to immediately invoke them.
 *
 * @param {Function} func The function to debounce.
 * @param {number} wait The number of milliseconds to delay.
 * @returns {Function} Returns the new debounced function.
 */
export function debounce(func, wait) {
  let timeoutId;
  let lastArgs;
  let lastThis;
  let result;

  function invokeFunc() {
    const currentResult = func.apply(lastThis, lastArgs);
    result = currentResult; // Update the result here
    timeoutId = null;
    lastArgs = lastThis = null;
  }

  const debounced = function(...args) {
    lastArgs = args;
    lastThis = this;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(invokeFunc, wait);

    // If the function is called again before the timeout, the previous timeout is cleared
    // and a new one is set. This ensures that the function is only executed after
    // the specified `wait` time has passed without any further invocations.
    return result;
  };

  debounced.cancel = () => {
    clearTimeout(timeoutId);
    timeoutId = lastArgs = lastThis = null;
  };

  debounced.flush = () => {
    const currentTimeoutId = timeoutId;
    if (currentTimeoutId) {
      invokeFunc();
      clearTimeout(currentTimeoutId);
      timeoutId = null;
    }
  };

  return debounced;
}
