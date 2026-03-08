/**
 * Calculates the Median Absolute Deviation (MAD) of an array of numbers.
 * @param {number[]} arr - The input array.
 * @returns {number} The MAD value.
 */
export const medianAbsoluteDeviation = (arr) => {
  if (arr.length === 0) return 0;
  
  const sortedArr = [...arr].sort((a, b) => a - b);
  const getMedian = (sorted) => {
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 
      ? sorted[mid] 
      : (sorted[mid - 1] + sorted[mid]) / 2;
  };

  const median = getMedian(sortedArr);
  const absoluteDeviations = arr.map(x => Math.abs(x - median));
  const sortedDeviations = absoluteDeviations.sort((a, b) => a - b);
  
  return getMedian(sortedDeviations);
};
