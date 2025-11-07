
/**
 * Calculates the average of an array of numbers.
 *
 * @param {number[]} arr The array of numbers.
 * @returns {number} The average of the numbers.
 */
export const average = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
};

/**
 * Calculates the median of an array of numbers.
 *
 * @param {number[]} arr The array of numbers.
 * @returns {number} The median of the numbers.
 */
export const median = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }

  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }

  return sorted[mid];
};

/**
 * Calculates the mode(s) of an array of numbers.
 *
 * @param {number[]} arr The array of numbers.
 * @returns {number[]} An array of the most frequent numbers.
 */
export const mode = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }

  const counts = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  let maxFreq = 0;
  for (const key in counts) {
    if (counts[key] > maxFreq) {
      maxFreq = counts[key];
    }
  }

  if (maxFreq <= 1) {
    return [];
  }

  const modes = [];
  for (const key in counts) {
    if (counts[key] === maxFreq) {
      modes.push(Number(key));
    }
  }

  return modes.sort((a, b) => a - b);
};

/**
 * Calculates the sum of an array of numbers.
 *
 * @param {number[]} arr The array of numbers.
 * @returns {number} The sum of the numbers.
 */
export const sum = (arr) => {
  if (!Array.isArray(arr)) {
    return 0;
  }
  return arr.reduce((acc, val) => acc + val, 0);
};
