/**
 * Adds a timeout to a promise.
 *
 * @param {Promise} promise The promise to add a timeout to.
 * @param {number} ms The timeout in milliseconds.
 * @param {string} [errorMessage='Promise timed out'] The error message to use on timeout.
 * @returns {Promise} A new promise that will resolve/reject with the original promise,
 * or reject with a timeout error.
 */
const withTimeout = (promise, ms, errorMessage = 'Promise timed out') => {
  const timeout = new Promise((_, reject) => {
    const id = setTimeout(() => {
      clearTimeout(id);
      reject(new Error(errorMessage));
    }, ms);
  });

  return Promise.race([
    promise,
    timeout
  ]);
};

module.exports = {
  withTimeout,
};
