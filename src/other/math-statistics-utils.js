/**
 * Calculates the sum of an array of numbers.
 *
 * @param {number[]} numbers The array of numbers.
 * @returns {number} The sum of the numbers.
 */
export const sum = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }
  return numbers.reduce((acc, val) => acc + val, 0);
};

/**
 * Calculates the median of an array of numbers.
 *
 * @param {number[]} numbers The array of numbers.
 * @returns {number|null} The median of the numbers, or null if the array is empty.
 */
export const median = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }

  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sortedNumbers.length / 2);

  if (sortedNumbers.length % 2 === 0) {
    // Even number of elements
    return (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2;
  } else {
    // Odd number of elements
    return sortedNumbers[mid];
  }
};

/**
 * Calculates the mode(s) of an array of numbers.
 *
 * @param {number[]} numbers The array of numbers.
 * @returns {number[]} An array of mode(s).
 */
export const mode = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return [];
  }

  const counts = {};
  let maxCount = 0;
  for (const num of numbers) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] > maxCount) {
      maxCount = counts[num];
    }
  }

  const modes = [];
  for (const num in counts) {
    if (counts[num] === maxCount) {
      modes.push(Number(num));
    }
  }
  return modes;
};
