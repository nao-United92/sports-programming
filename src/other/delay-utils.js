/**
 * Delays the execution of a function by the specified duration.
 *
 * @param {number} ms The number of milliseconds to delay execution.
 * @returns {Promise<void>} A promise that resolves after the specified duration.
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}