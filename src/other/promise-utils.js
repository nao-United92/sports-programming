/**
 * Checks if a value is a Promise.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a Promise, false otherwise.
 */
export const isPromise = (value) => {
  return value != null && typeof value.then === 'function';
};

/**
 * A polyfill for Promise.allSettled.
 * @param {Array<Promise>} promises An array of promises.
 * @returns {Promise<Array<{status: string, value?: any, reason?: any}>>} A promise that resolves with an array of objects that each describes the outcome of each promise.
 */
export const allSettled = (promises) => {
  const wrappedPromises = promises.map(p =>
    Promise.resolve(p).then(
      val => ({ status: 'fulfilled', value: val }),
      err => ({ status: 'rejected', reason: err })
    )
  );
  return Promise.all(wrappedPromises);
};