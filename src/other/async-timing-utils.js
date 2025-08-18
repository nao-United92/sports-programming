/**
 * Waits for a specified amount of time before resolving.
 *
 * @param {number} ms The number of milliseconds to wait.
 * @returns {Promise<void>} A promise that resolves after the specified time.
 */
export const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Attaches a timeout to a promise. If the promise does not resolve or reject
 * within the specified time, it will be rejected with a timeout error.
 *
 * @param {Promise<any>} promise The promise to attach the timeout to.
 * @param {number} ms The timeout in milliseconds.
 * @param {string} [message='Promise timed out'] The error message for the timeout.
 * @returns {Promise<any>} A new promise that will time out.
 */
export const withTimeout = (promise, ms, message = 'Promise timed out') => {
  const timeout = new Promise((_, reject) => {
    const id = setTimeout(() => {
      clearTimeout(id);
      reject(new Error(message));
    }, ms);
  });

  return Promise.race([
    promise,
    timeout
  ]);
};
