
/**
 * Generates all combinations of a set of size k.
 * @param {Array} array
 * @param {number} k
 * @returns {Array[]}
 */
function combinations(array, k) {
  if (k === 0) return [[]];
  if (array.length < k) return [];

  const first = array[0];
  const rest = array.slice(1);

  const combsWithFirst = combinations(rest, k - 1).map((c) => [first, ...c]);
  const combsWithoutFirst = combinations(rest, k);

  return [...combsWithFirst, ...combsWithoutFirst];
}

module.exports = combinations;
