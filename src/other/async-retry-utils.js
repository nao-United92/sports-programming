/**
 * Retries an asynchronous function a specified number of times with a delay between retries.
 * @param {Function} asyncFn The asynchronous function to retry. It should return a Promise.
 * @param {Object} options Options for retrying.
 * @param {number} [options.retries=3] The maximum number of retries.
 * @param {number} [options.delay=1000] The delay in milliseconds between retries.
 * @returns {Promise<any>} A Promise that resolves with the result of asyncFn or rejects if all retries fail.
 */
export async function retry(asyncFn, { retries = 3, delay = 1000 } = {}) {
  let lastError;
  for (let i = 0; i <= retries; i++) {
    try {
      return await asyncFn();
    } catch (error) {
      lastError = error;
      if (i < retries) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  throw lastError; // Re-throw the last error if all retries fail
}
