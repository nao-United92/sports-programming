
/**
 * This method is like `uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed.
 *
 * @param {Array} array The array to inspect.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
export const uniqBy = (array, iteratee) => {
  if (!Array.isArray(array)) {
    return [];
  }
  const seen = new Set();
  return array.filter(item => {
    const computed = iteratee(item);
    if (seen.has(computed)) {
      return false;
    } else {
      seen.add(computed);
      return true;
    }
  });
};
