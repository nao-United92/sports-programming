/**
 * Calculates the geometric mean of an array of numbers.
 * 
 * @param {Array<number>} numbers - The array of numbers to process.
 * @returns {number} The geometric mean. Returns 0 if array is empty or contains zero.
 */
function geometricMean(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }
  
  if (numbers.some(n => n <= 0)) return 0;

  const product = numbers.reduce((acc, n) => acc * n, 1);
  return Math.pow(product, 1 / numbers.length);
}

module.exports = geometricMean;
