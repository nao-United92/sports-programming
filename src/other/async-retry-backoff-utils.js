/**
 * Retries an asynchronous function with exponential backoff.
 *
 * @param {Function} fn The asynchronous function to retry.
 * @param {object} [options={}] Options for the retry mechanism.
 * @param {number} [options.retries=3] The maximum number of retries.
 * @param {number} [options.delay=100] The initial delay in milliseconds before the first retry.
 * @param {number} [options.factor=2] The exponential backoff factor.
 * @param {number} [options.maxDelay=Infinity] The maximum delay in milliseconds between retries.
 * @param {Function} [options.shouldRetry=(error) => true] A function that determines if a given error should trigger a retry.
 * @returns {Promise<*>} A promise that resolves with the result of the function, or rejects if all retries fail.
 */
export async function retryWithBackoff(
  fn,
  { retries = 3, delay = 100, factor = 2, maxDelay = Infinity, shouldRetry = () => true } = {}
) {
  let currentDelay = delay;
  let lastError;

  for (let i = 0; i <= retries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (i < retries && shouldRetry(error)) {
        await new Promise((resolve) => setTimeout(resolve, currentDelay));
        currentDelay = Math.min(currentDelay * factor, maxDelay);
      } else {
        throw lastError;
      }
    }
  }
}
