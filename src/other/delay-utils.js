/**
 * Delays the execution of `func` after `wait` milliseconds.
 *
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay execution.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 */
export const delay = (func, wait, ...args) => {
  return setTimeout(() => func.apply(null, args), wait);
};
