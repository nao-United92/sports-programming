/**
 * Delays the execution for a given number of milliseconds.
 *
 * @param {number} ms - The number of milliseconds to sleep.
 * @returns {Promise<void>} A promise that resolves after the sleep.
 */
export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
