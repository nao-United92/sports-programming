/**
 * Creates an array of sliding window chunks from an array.
 * @param {Array} arr - The source array.
 * @param {number} size - The window size.
 * @param {number} [step=1] - The distance to move the window.
 * @returns {Array<Array>} An array of chunks.
 */
function slidingWindow(arr, size, step = 1) {
  const result = [];
  if (size <= 0 || size > arr.length) return result;
  
  for (let i = 0; i <= arr.length - size; i += step) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

module.exports = slidingWindow;
