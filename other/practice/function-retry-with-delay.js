/**
 * Retries an asynchronous function multiple times with a specific delay between attempts.
 * 
 * @param {Function} fn Function returning a promise
 * @param {number} maxAttempts 
 * @param {number} delay (ms)
 * @returns {Promise}
 */
const retryWithDelay = async (fn, maxAttempts, delay) => {
  let lastError;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (attempt < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  throw lastError;
};

module.exports = retryWithDelay;
