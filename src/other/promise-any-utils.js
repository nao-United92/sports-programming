/**
 * Behaves like Promise.any(), returning a promise that fulfills as soon as one of the promises in the iterable fulfills.
 * If all promises reject, it rejects with an AggregateError.
 *
 * @param {Iterable<Promise>} promises An iterable of Promises.
 * @returns {Promise<any>} A new Promise.
 */
export const promiseAny = (promises) => {
  return new Promise((resolve, reject) => {
    const promisesArray = Array.from(promises);
    if (promisesArray.length === 0) {
      // According to MDN, Promise.any with an empty iterable should reject with an AggregateError.
      reject(new AggregateError([], 'All promises were rejected'));
      return;
    }

    const errors = [];
    let rejectedCount = 0;

    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve) // Fulfills as soon as one promise fulfills.
        .catch((error) => {
          errors[index] = error;
          rejectedCount++;
          if (rejectedCount === promisesArray.length) {
            // All promises have rejected.
            reject(new AggregateError(errors, 'All promises were rejected'));
          }
        });
    });
  });
};
