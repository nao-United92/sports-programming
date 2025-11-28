/**
 * Adds a timeout to a promise.
 * @param {Promise} promise The promise to add a timeout to.
 * @param {number} ms The timeout in milliseconds.
 * @param {Error} [timeoutError=new Error('Promise timed out')] The error to throw on timeout.
 * @returns {Promise} A new promise that will reject with a timeout error if the original promise doesn't resolve or reject in time.
 */
const promiseWithTimeout = (promise, ms, timeoutError = new Error('Promise timed out')) => {
  let timeoutId;
  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(timeoutError);
    }, ms);
  });

  return Promise.race([
    promise.finally(() => clearTimeout(timeoutId)),
    timeoutPromise
  ]);
};

module.exports = { promiseWithTimeout };