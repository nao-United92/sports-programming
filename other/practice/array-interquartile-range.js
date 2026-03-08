/**
 * Calculates the Interquartile Range (IQR) of an array of numbers.
 * @param {number[]} arr - The input numbers.
 * @returns {number} The IQR.
 */
export const interquartileRange = (arr) => {
  if (arr.length < 4) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  
  const getMedian = (data) => {
    const mid = Math.floor(data.length / 2);
    return data.length % 2 !== 0 ? data[mid] : (data[mid - 1] + data[mid]) / 2;
  };

  const mid = Math.floor(sorted.length / 2);
  const q1 = getMedian(sorted.slice(0, mid));
  const q3 = getMedian(sorted.slice(sorted.length % 2 === 0 ? mid : mid + 1));
  
  return q3 - q1;
};
