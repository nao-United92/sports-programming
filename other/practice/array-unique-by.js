/**
 * Creates a duplicate-free version of an array, in which only the first occurrence
 * of each element is kept, based on the result of `iteratee` function.
 * The `iteratee` is invoked for each element in the array to generate the criterion
 * by which uniqueness is computed.
 *
 * @param {Array<any>} array The array to inspect.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array<any>} Returns the new duplicate free array.
 */
const arrayUniqueBy = (array, iteratee) => {
  const seen = new Set();
  return array.filter(item => {
    const key = iteratee(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
};

export default arrayUniqueBy;
