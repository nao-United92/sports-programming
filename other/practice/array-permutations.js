
/**
 * Generates all permutations of an array.
 * @param {Array} array
 * @returns {Array[]}
 */
function permutations(array) {
  if (array.length === 0) return [[]];
  const first = array[0];
  const rest = array.slice(1);
  const permsWithoutFirst = permutations(rest);
  const allPermutations = [];

  permsWithoutFirst.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      const start = perm.slice(0, i);
      const end = perm.slice(i);
      allPermutations.push([...start, first, ...end]);
    }
  });

  return allPermutations;
}

module.exports = permutations;
