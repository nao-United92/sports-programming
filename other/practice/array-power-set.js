
/**
 * Generates the power set of an array.
 * @param {Array} array
 * @returns {Array[]}
 */
function powerSet(array) {
  return array.reduce(
    (subsets, value) => subsets.concat(subsets.map((set) => [...set, value])),
    [[]]
  );
}

module.exports = powerSet;
