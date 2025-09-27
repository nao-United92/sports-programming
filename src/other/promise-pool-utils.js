/**
 * Runs a pool of promises with a specific concurrency.
 *
 * @param {Array<() => Promise<any>>} promiseFns An array of functions that return a promise.
 * @param {number} concurrency The number of promises to run in parallel.
 * @returns {Promise<any[]>} A promise that resolves with an array of all promise results.
 */
export const promisePool = async (promiseFns, concurrency) => {
  const results = [];
  let currentIndex = 0;

  const runNext = async () => {
    if (currentIndex >= promiseFns.length) {
      return;
    }

    const promiseIndex = currentIndex++;
    const promiseFn = promiseFns[promiseIndex];
    const result = await promiseFn();
    results[promiseIndex] = result;

    await runNext();
  };

  const workers = Array(concurrency).fill(null).map(runNext);
  await Promise.all(workers);

  return results;
};
