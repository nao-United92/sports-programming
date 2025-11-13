/**
 * Creates a debounced function that delays invoking func until after wait milliseconds
 * have elapsed since the last time the debounced function was invoked.
 * @param {Function} func The function to debounce.
 * @param {number} wait The number of milliseconds to delay.
 * @returns {Function} Returns the new debounced function.
 */
const debounce = (func, wait) => {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
};

/**
 * Creates a throttled function that only invokes func at most once per every wait milliseconds.
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @returns {Function} Returns the new throttled function.
 */
const throttle = (func, wait) => {
  let inThrottle = false;
  return function(...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), wait);
    }
  };
};

/**
 * Retries an async function a specified number of times before rejecting.
 * @param {Function} asyncFn The async function to retry.
 * @param {number} retries The number of times to retry.
 * @param {number} delay The delay between retries in ms.
 * @returns {Promise<any>} A promise that resolves with the result of the async function.
 */
const retry = (asyncFn, retries = 3, delay = 100) => {
  return new Promise((resolve, reject) => {
    const attempt = (retryCount) => {
      asyncFn()
        .then(resolve)
        .catch((err) => {
          if (retryCount <= 0) {
            return reject(err);
          }
          setTimeout(() => attempt(retryCount - 1), delay);
        });
    };
    attempt(retries);
  });
};


module.exports = { debounce, throttle, retry };
