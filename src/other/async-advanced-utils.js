
/**
 * Returns a Promise that resolves after a specified number of milliseconds.
 * Useful for introducing delays in async functions.
 * @param {number} ms The number of milliseconds to wait.
 * @returns {Promise<void>} A Promise that resolves after the delay.
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Retries a given asynchronous function a specified number of times if it fails.
 * @param {Function} fn The asynchronous function to retry. It should return a Promise.
 * @param {number} [retries=3] The maximum number of retries.
 * @param {number} [delayMs=1000] The delay in milliseconds between retries.
 * @returns {Promise<*>} A Promise that resolves with the result of the function, or rejects if all retries fail.
 */
export async function retry(fn, retries = 3, delayMs = 1000) {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) {
      throw error;
    }
    console.warn(`Retrying after error: ${error.message}. Retries left: ${retries}`);
    await delay(delayMs);
    return retry(fn, retries - 1, delayMs);
  }
}

/**
 * Wraps a Promise with a timeout. If the original Promise does not resolve or reject
 * within the specified time, the returned Promise will reject with a timeout error.
 * @param {Promise<*>} promise The Promise to wrap.
 * @param {number} ms The timeout duration in milliseconds.
 * @param {string} [errorMessage='Operation timed out'] The error message for the timeout.
 * @returns {Promise<*>} A Promise that resolves or rejects with the original Promise's result,
 *   or rejects with a timeout error.
 */
export function withTimeout(promise, ms, errorMessage = 'Operation timed out') {
  // Create a promise that rejects in <ms> milliseconds
  const timeout = new Promise((resolve, reject) => {
    const id = setTimeout(() => {
      clearTimeout(id);
      reject(new Error(errorMessage));
    }, ms);
  });

  // Returns a race between our timeout and the passed in promise
  return Promise.race([promise, timeout]);
}
