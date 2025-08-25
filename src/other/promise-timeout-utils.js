/**
 * Races a promise against a timeout. If the promise does not resolve or reject
 * within the given time, the returned promise will reject with a timeout error.
 *
 * @param {Promise<T>} promise The promise to race against the timeout.
 * @param {number} ms The timeout in milliseconds.
 * @param {string} [errorMessage='Promise timed out'] The error message for the timeout.
 * @returns {Promise<T>} A new promise that resolves/rejects with the input promise, or rejects on timeout.
 * @template T
 */
export const promiseWithTimeout = (promise, ms, errorMessage = 'Promise timed out') => {
  // Create a promise that rejects in `ms` milliseconds
  const timeout = new Promise((_, reject) => {
    const id = setTimeout(() => {
      clearTimeout(id);
      reject(new Error(errorMessage));
    }, ms);
  });

  // Race the input promise against the timeout
  return Promise.race([
    promise,
    timeout
  ]);
};