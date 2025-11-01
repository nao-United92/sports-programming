/**
 * Delays the execution for a specified number of milliseconds.
 *
 * @param ms The number of milliseconds to wait.
 * @returns A Promise that resolves after the delay.
 */
export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Retries a promise-returning function a specified number of times with a delay between retries.
 *
 * @param fn The function to retry. It must return a Promise.
 * @param retries The maximum number of retries.
 * @param delayMs The delay in milliseconds between retries.
 * @returns A Promise that resolves with the result of `fn` or rejects if all retries fail.
 */
export async function retry(fn, retries = 3, delayMs = 1000) {
    try {
        return await fn();
    } catch (error) {
        if (retries > 0) {
            console.warn(`Retrying after error: ${error.message}. Retries left: ${retries}`);
            await delay(delayMs);
            return retry(fn, retries - 1, delayMs);
        } else {
            throw error; // No more retries, re-throw the last error
        }
    }
}

/**
 * Creates a Promise that rejects with a timeout error if the given promise does not resolve within the specified time.
 *
 * @param promise The promise to race against the timeout.
 * @param ms The timeout in milliseconds.
 * @returns A new Promise that resolves with the value of the input promise or rejects with a timeout error.
 */
export function timeout(promise, ms) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error('Operation timed out'));
        }, ms);

        promise.then(
            value => {
                clearTimeout(timer);
                resolve(value);
            },
            error => {
                clearTimeout(timer);
                reject(error);
            }
        );
    });
}

/**
 * Pauses execution for a specified number of milliseconds.
 * @param {number} ms The number of milliseconds to sleep.
 * @returns {Promise<void>} A promise that resolves after the specified duration.
 */
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Runs an array of async functions in parallel.
 * @param {Array<Function>} tasks An array of async functions to run.
 * @returns {Promise<Array>} A promise that resolves with an array of results from the async functions.
 */
export function parallel(tasks) {
  return Promise.all(tasks.map(task => task()));
}

/**
 * Runs an array of async functions in series, each passing its result to the next.
 * @param {Array<Function>} tasks An array of async functions to run.
 * @returns {Promise<any>} A promise that resolves with the result of the final async function.
 */
export function waterfall(tasks) {
  return tasks.reduce((promise, task) => {
    return promise.then(result => task(result));
  }, Promise.resolve());
}

/**
 * Converts a callback-style function to a function that returns a promise.
 *
 * @param {Function} fn The callback-style function to convert.
 * @returns {Function} A function that returns a promise.
 */
export function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  };
}

/**
 * A polyfill for Promise.allSettled.
 *
 * @param {Array<Promise>} promises An array of promises.
 * @returns {Promise<Array<{status: string, value?: any, reason?: any}>>} A promise that resolves with an array of objects that each describes the outcome of each promise.
 */
export function allSettled(promises) {
  const wrappedPromises = promises.map(p =>
    Promise.resolve(p).then(
      val => ({ status: 'fulfilled', value: val }),
      err => ({ status: 'rejected', reason: err })
    )
  );
  return Promise.all(wrappedPromises);
}

/**
 * Runs async functions in a pool of a specified concurrency.
 * @param {number} poolLimit The concurrency limit.
 * @param {Array<Function>} tasks An array of async functions to run.
 * @returns {Promise<Array>} A promise that resolves with an array of results from the async functions.
 */
export async function asyncPool(poolLimit, tasks) {
  const results = [];
  const executing = [];
  for (const task of tasks) {
    const p = Promise.resolve().then(() => task());
    results.push(p);
    const e = p.then(() => executing.splice(executing.indexOf(e), 1));
    executing.push(e);
    if (executing.length >= poolLimit) {
      await Promise.race(executing);
    }
  }
  return Promise.all(results);
}

/**
 * Memoizes an async function.
 *
 * @param {Function} fn The async function to memoize.
 * @param {Function} [resolver] A function to generate the cache key.
 * @returns {Function} Returns the new memoized function.
 */
export const memoizeAsync = (fn, resolver) => {
  const cache = new Map();

  return async function(...args) {
    const key = resolver ? resolver(...args) : JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const promise = fn(...args);
    cache.set(key, promise);

    promise.catch(() => {
      if (cache.get(key) === promise) {
        cache.delete(key);
      }
    });

    return promise;
  };
};
