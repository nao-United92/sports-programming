
/**
 * Creates a function that is restricted to invoking fn once. Repeat calls
 * to the function return the value of the first invocation. The fn is invoked
 * with the this binding and arguments of the created function.
 *
 * @param {Function} fn The function to restrict.
 * @returns {Function} Returns the new restricted function.
 */
const once = (fn) => {
  let hasBeenCalled = false;
  let result;

  return function(...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn.apply(this, args);
    }
    return result;
  };
};

/**
 * Pauses the execution for a specified amount of time.
 * @param {number} ms - The number of milliseconds to sleep.
 * @returns {Promise<void>} A promise that resolves after the specified time.
 */
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

module.exports = {
  once,
  sleep,
};
