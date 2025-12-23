/**
 * Creates an array of unique values, in order, from all given arrays using a predicate function to determine uniqueness.
 * The predicate is applied to each value.
 *
 * @param {Array<any>} arr1 The first array.
 * @param {Array<any>} arr2 The second array.
 * @param {Function} predicate The function invoked per iteration to determine uniqueness.
 * @returns {Array<any>} Returns the new array of unique values.
 */
function unionByPredicate(arr1, arr2, predicate) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || typeof predicate !== 'function') {
    return [];
  }

  const seen = new Set();
  const result = [];

  const processArray = (arr) => {
    for (const item of arr) {
      const uniqueKey = predicate(item);
      if (!seen.has(uniqueKey)) {
        seen.add(uniqueKey);
        result.push(item);
      }
    }
  };

  processArray(arr1);
  processArray(arr2);

  return result;
}

module.exports = unionByPredicate;
