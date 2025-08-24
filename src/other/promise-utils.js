/**
 * Returns a promise that resolves after a given number of milliseconds.
 * @param {number} ms The number of milliseconds to wait.
 * @returns {Promise<void>} A promise that resolves after the specified time.
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Rejects a promise if it doesn't resolve within a given time.
 * @param {Promise<any>} promise The promise to race against a timeout.
 * @param {number} ms The timeout in milliseconds.
 * @returns {Promise<any>} A new promise that resolves or rejects based on the race.
 */
export function timeout(promise, ms) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Promise timed out after ${ms} ms`));
    }, ms);
  });
  return Promise.race([promise, timeoutPromise]);
}
