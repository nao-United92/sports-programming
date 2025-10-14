/**
 * Creates an object with the count of each element in an array.
 *
 * @param {Array} arr The array to process.
 * @returns {object} An object where keys are the elements and values are their frequencies.
 */
const tally = (arr) => {
  return arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
};

module.exports = {
  tally,
};
