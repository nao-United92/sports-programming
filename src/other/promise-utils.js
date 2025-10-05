/**
 * Rejects a promise if it doesn't resolve within a given time.
 * @param {Promise} promise The promise to race against a timeout.
 * @param {number} ms The number of milliseconds to wait before timing out.
 * @returns {Promise} Returns a new promise that rejects on timeout.
 */
export const timeout = (promise, ms) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Promise timed out'));
    }, ms);

    promise
      .then(value => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch(reason => {
        clearTimeout(timer);
        reject(reason);
      });
  });
};

/**
 * A polyfill for Promise.allSettled.
 * @param {Array<Promise>} promises An array of promises.
 * @returns {Promise<Array<{status: string, value: any, reason: any}>>} Returns a promise that resolves with an array of objects that each describe the outcome of each promise.
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
