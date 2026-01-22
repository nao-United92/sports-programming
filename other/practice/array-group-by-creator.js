/**
 * Creates an object with groups of elements from an array.
 * @param {Array} array The array to process.
 * @param {Function|string} iteratee The iteratee to retrieve the key for each element.
 * @returns {Object} Returns the composed aggregate object.
 */
const groupBy = (array, iteratee) => {
  if (!Array.isArray(array)) {
    return {};
  }

  const getKey = typeof iteratee === 'function' ? iteratee : (item) => item[iteratee];

  return array.reduce((acc, item) => {
    const key = getKey(item);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
};

module.exports = { groupBy };
