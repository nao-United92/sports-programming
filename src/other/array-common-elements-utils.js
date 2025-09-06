/**
 * Creates an array of unique values that are present in all given arrays.
 * The order of result values is determined by the first array.
 *
 * @param {...Array} arrays The arrays to inspect.
 * @returns {Array} Returns the new array of common values.
 */
export function commonElements(...arrays) {
  if (arrays.length === 0) {
    return [];
  }
  if (arrays.length === 1) {
    return [...new Set(arrays[0])];
  }

  const firstArray = arrays[0];
  const otherArrays = arrays.slice(1);

  const common = new Set(firstArray);

  for (const arr of otherArrays) {
    const currentSet = new Set(arr);
    for (const item of common) {
      if (!currentSet.has(item)) {
        common.delete(item);
      }
    }
  }

  // Maintain order based on the first array
  return firstArray.filter(item => common.has(item));
}
