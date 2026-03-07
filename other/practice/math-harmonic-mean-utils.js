/**
 * Calculates the harmonic mean of an array of numbers.
 * 
 * @param {Array<number>} numbers - The array of numbers to process.
 * @returns {number} The harmonic mean. Returns 0 if array contains zero.
 */
function harmonicMean(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }
  
  if (numbers.some(n => n === 0)) return 0;

  const sumOfReciprocals = numbers.reduce((acc, n) => acc + (1 / n), 0);
  return numbers.length / sumOfReciprocals;
}

module.exports = harmonicMean;
