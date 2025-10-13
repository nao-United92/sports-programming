/**
 * Returns a new promise that fulfills or rejects as soon as one of the promises
 * in the iterable fulfills or rejects, with the value or reason from that promise.
 * This implementation specifically waits for the first promise to fulfill.
 * If all promises reject, then the returned promise will reject with an AggregateError.
 *
 * @param {Array<Promise>} promises An array of promises.
 * @returns {Promise} A new promise.
 */
function race(promises) {
  return new Promise((resolve, reject) => {
    const errors = [];
    let rejectedCount = 0;

    if (!promises || promises.length === 0) {
      resolve(undefined);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve) // Resolves as soon as any promise fulfills
        .catch(error => {
          errors[index] = error;
          rejectedCount++;
          if (rejectedCount === promises.length) {
            // All promises were rejected
            const aggregateError = new Error('All promises were rejected');
            aggregateError.errors = errors;
            reject(aggregateError);
          }
        });
    });
  });
}

module.exports = { race };
