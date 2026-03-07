/**
 * Calculates the median of an array of numbers.
 * 
 * @param {Array<number>} numbers - The array of numbers to process.
 * @returns {number} The median. Returns 0 if array is empty.
 */
function median(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }

  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }

  return sorted[mid];
}

module.exports = median;
