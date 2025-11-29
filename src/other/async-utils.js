// src/other/async-utils.js

/**
 * Retries an asynchronous function a specified number of times with an optional delay between retries.
 *
 * @param {Function} asyncFunction The asynchronous function to retry.
 * @param {Object} options The retry options.
 * @param {number} [options.retries=3] The maximum number of retries.
 * @param {number} [options.delay=1000] The delay in milliseconds between retries.
 * @returns {Promise<any>} A promise that resolves with the result of the async function or rejects if all retries fail.
 */
const retry = async (asyncFunction, { retries = 3, delay = 1000 } = {}) => {
  let lastError;

  for (let i = 0; i <= retries; i++) {
    try {
      return await asyncFunction();
    } catch (error) {
      lastError = error;
      if (i < retries) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  throw lastError;
};

module.exports = {
  retry,
};