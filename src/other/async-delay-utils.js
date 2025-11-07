/**
 * Delays the execution for a specified number of milliseconds.
 *
 * @param {number} ms The number of milliseconds to delay.
 * @returns {Promise<void>} A Promise that resolves after the specified delay.
 */
export const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
