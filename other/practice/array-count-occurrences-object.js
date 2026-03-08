/**
 * Counts the occurrences of each element in an array and returns an object.
 * @param {any[]} arr - The input array.
 * @returns {Object} An object with counts.
 */
export const countOccurrencesObject = (arr) => {
  return arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
};
