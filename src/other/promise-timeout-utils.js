/**
 * Adds a timeout to a promise.
 * @param {Promise} promise The promise to add a timeout to.
 * @param {number} ms The timeout in milliseconds.
 * @returns {Promise} A new promise that will reject with a timeout error if the original promise does not resolve or reject within the given time.
 */
const promiseWithTimeout = (promise, ms) => {
  let timeoutId = null;
  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error(`Promise timed out after ${ms} ms`));
    }, ms);
  });

  return Promise.race([promise, timeoutPromise]).finally(() => {
    clearTimeout(timeoutId);
  });
};

module.exports = { promiseWithTimeout };
