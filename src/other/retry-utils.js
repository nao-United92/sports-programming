const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Creates a new function that will attempt to run an async function multiple times.
 *
 * @param {Function} asyncFn The async function to run.
 * @param {Object} [options] Options for the retry logic.
 * @param {number} [options.retries=3] The number of times to retry.
 * @param {number} [options.delay=100] The delay between retries in milliseconds.
 * @returns {Function} A new function that will retry on failure.
 */
export const retry = (asyncFn, { retries = 3, delay: retryDelay = 100 } = {}) => {
  return async function(...args) {
    let lastError;
    for (let i = 0; i < retries; i++) {
      try {
        return await asyncFn.apply(this, args);
      } catch (error) {
        lastError = error;
        if (i < retries - 1) {
          await delay(retryDelay);
        }
      }
    }
    throw lastError;
  };
};
