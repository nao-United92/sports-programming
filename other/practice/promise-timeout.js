/**
 * Rejects with a timeout error if the promise does not resolve within the given time.
 *
 * @param {Promise} promise - The promise to wrap.
 * @param {number} ms - The timeout in milliseconds.
 * @returns {Promise} The wrapped promise.
 */
export const withTimeout = (promise, ms) => {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Timeout')), ms);
  });
  return Promise.race([promise, timeout]);
};
