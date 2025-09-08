const { performance } = (typeof window === 'undefined') ? require('perf_hooks') : window;

/**
 * Measures the execution time of a function.
 * Works for both synchronous and asynchronous functions.
 * @param {Function} fn The function to measure.
 * @param {...*} args The arguments to pass to the function.
 * @returns {Promise<{result: *, time: number}>} An object containing the function's result and the execution time in milliseconds.
 */
const measureExecutionTime = async (fn, ...args) => {
  const startTime = performance.now();
  const result = await fn(...args);
  const endTime = performance.now();
  return {
    result,
    time: endTime - startTime,
  };
};

module.exports = { measureExecutionTime };