
/**
 * Creates an array of unique values that are included in all given arrays.
 * The order and references of result values are determined by the first array.
 *
 * @param {...Array} arrays The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 */
export function intersection(...arrays) {
  if (arrays.length === 0) {
    return [];
  }

  const [firstArray, ...restArrays] = arrays;

  if (!Array.isArray(firstArray)) {
      return [];
  }

  const restSets = restArrays.map(arr => Array.isArray(arr) ? new Set(arr) : new Set());

  return firstArray.filter(value => {
    return restSets.every(set => set.has(value));
  });
}
