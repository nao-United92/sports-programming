/**
 * Sorts an array based on the frequency of elements (descending).
 * @param {any[]} arr - The input array.
 * @returns {any[]} The sorted array.
 */
export const frequencySort = (arr) => {
  const frequencies = arr.reduce((acc, val) => {
    acc.set(val, (acc.get(val) || 0) + 1);
    return acc;
  }, new Map());

  return [...arr].sort((a, b) => {
    const freqA = frequencies.get(a);
    const freqB = frequencies.get(b);
    return freqB - freqA || (a < b ? -1 : 1);
  });
};
