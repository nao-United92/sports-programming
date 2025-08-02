/**
 * Creates an array of unique values that are included in all given arrays.
 * The order of result values is determined by the first array.
 *
 * @param {Array} array The first array to inspect.
 * @param {...Array} [others] The other arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 */
export function intersection(array, ...others) {
  if (!Array.isArray(array)) {
    return [];
  }
  const otherSets = others.map(arr => new Set(arr));
  return array.filter(item => otherSets.every(set => set.has(item)));
}

/**
 * This function is like `intersection` except that it accepts `iteratee` which
 * is invoked for each element of `array` and `others` to generate the criterion
 * by which they're compared.
 *
 * @param {Array} array The first array to inspect.
 * @param {Array[]} others The other arrays to inspect.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new array of intersecting values.
 */
export function intersectionBy(array, others, iteratee) {
  if (!Array.isArray(array)) {
    return [];
  }
  const otherSets = others.map(arr => new Set(arr.map(iteratee)));
  return array.filter(item => otherSets.every(set => set.has(iteratee(item))));
}
