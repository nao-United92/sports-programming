/**
 * Generates a UUID (Universally Unique Identifier) v4.
 * @returns {string} A UUID string.
 */
export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * Delays the execution of a function for a specified amount of time.
 * @param {number} ms The number of milliseconds to delay.
 * @returns {Promise<void>} A Promise that resolves after the delay.
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}