/**
 * Generates all permutations of an array.
 * @param {Array} arr The array to generate permutations from.
 * @returns {Array<Array>} An array of all permutations.
 */
export const permutations = (arr) => {
  if (arr.length === 0) return [[]];
  const firstEl = arr[0];
  const rest = arr.slice(1);

  const permsWithoutFirst = permutations(rest);
  const allPermutations = [];

  permsWithoutFirst.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      const permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)];
      allPermutations.push(permWithFirst);
    }
  });

  return allPermutations;
};

/**
 * Generates all combinations of a specific size from an array.
 * @param {Array} arr The array to generate combinations from.
 * @param {number} size The size of each combination.
 * @returns {Array<Array>} An array of all combinations.
 */
export const combinations = (arr, size) => {
  if (size > arr.length || size < 0) {
    return [];
  }
  if (size === 0) {
    return [[]];
  }
  if (arr.length === 0) {
    return [];
  }

  const [head, ...tail] = arr;

  const combsWithHead = combinations(tail, size - 1).map(comb => [head, ...comb]);
  const combsWithoutHead = combinations(tail, size);

  return [...combsWithHead, ...combsWithoutHead];
};
