/**
 * Attempts to execute an async function, retrying a specified number of times on failure.
 * @param {Function} asyncFn The async function to execute.
 * @param {object} [options={}] Options for the retry mechanism.
 * @param {number} [options.retries=3] The maximum number of retries.
 * @param {number} [options.delay=0] The delay in milliseconds between retries.
 * @returns {Promise<*>} A promise that resolves with the result of the async function, or rejects if all retries fail.
 */
export async function asyncRetry(asyncFn, { retries = 3, delay = 0 } = {}) {
  let lastError;
  for (let i = 0; i <= retries; i++) {
    try {
      return await asyncFn();
    } catch (error) {
      lastError = error;
      if (i < retries) {
        if (delay > 0) {
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      } else {
        throw lastError;
      }
    }
  }
}